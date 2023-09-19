---
slug: "parallel-parrot"
date: "2023-09-18"
title: "Generating data from LLMs at scale: parallel-parrot"
og_description: "Generating data from LLMs at scale: parallel-parrot"
og_image: ""
status: "draft"
---

One of the surprising and exciting use-cases for Large Language Models (LLMs) is that they can be used to automate
many tasks that can be described in words.  However, using LLMs to then scale that work hundreds or thousands of times
can quickly become tedious and slow.  We've created a new Python package that makes this process easy and robust.

## The Task

The most common way that people are now using LLM's to generate outputs is to use a prompt template, and adding appropriate context in what is called [prompt engineering](https://www.promptingguide.ai/):

![LLM Map](./0002-parallel-parrot-1.drawio.png)

The idea is that a prompt template is designed that will take in an `input` and 
`context`, and use that to generate a text `prompt`.  This then gives the LLM the instructions it needs to generate the type of output desired.

For example, if I wanted to shorten long documents while keeping their meaning, I might design a prompt template like:

```
Generate a concise summary of the following document, using the context provided:
context: ${context}
document: ${document}
```

Then one would fill in the inputs to the prompt template:

```
Generate a concise summary of the following document, using the context provided:
context: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together.
document: PEP 492 – Coroutines with async and await syntax ...
```

This could be used to make a summary of [Python PEP-492](https://peps.python.org/pep-0492/) - while providing extra "business context" that this article is about the Python programming language.

The same prompt template could be used to summarize a company blog, while adding some context about the company itself.  Those summaries could then be used on social media when promoting the blog.

## Generating Data

We've found that as one gets to more advanced use-cases, that the outputs that you want from the LLM inevitably become more complicated.  For example:

- Using a long document to generate several "Frequently Asked Questions", in question/answer pairs
- Parsing a document for topics, and the sentiment (POSITIVE, NEUTRAL, or NEGATIVE) of the topic in the document
- Identifying corporate entities in a document, and the role for each of them in the document (vendor, client, etc)

For this one can leverage two features provided by modern LLM APIs:
- `n`: the number of "choices" to create in an output.  This can be useful for leveraging the "creativity" of an LLM efficiently.  Process the same inputs, but ask the LLM to generate multiple outputs with random variations
- structured output prompting: For OpenAI, this is the ("function calling")[https://platform.openai.com/docs/guides/gpt/chat-completions-api] feature, but really it is about modifying the prompt to request multiple outputs, formatted in a manner that is machine-readable (JSON)

![LLM Map](./0002-parallel-parrot-2.drawio.png)

For example, say I use the prompt template:
```
Generate question and answer pairs from the following document.
Output a list of JSON objects with keys "question" and "answer".
Only output questions and answers clearly described in the document.
document: ${text}
```

This could turn a generic technical document into a list of question and answer pairs.  This in turn could make the content in the original document easier to search for (match searches to the questions) and easier to digest (just show the answers in bullet form).

## Scale

All of the above is great and useful, however things can get tricky when you try to scale.  A single response to a decently complicated prompt could take 30 seconds.  That means processing a thousand documents one after the other could take over 8 hours.  Things quickly get out of hand from there.

To help with this, we created a python package: [parallel-parrot](https://pypi.org/project/parallel-parrot/) that operates on structured pandas dataframes to leverage the power of LLMs, without having to mess with the HTTP API's and concurrency.

If you squint at the above diagram you can see that it easily maps to dataframes.  The input and context can map to input columns, and the output keys can map to output columns.  The one-to-many relationship with one input generating multiple outputs can be expressed as an "exploded" dataframe, which repeats some of the inputs, for re-grouping or filtering.

For the parallelization side, the package uses the high-performance [aiohttp](https://docs.aiohttp.org/en/stable/) with the same speedy I/O [libuv](https://libuv.org/) used in node.js (via [uvloop](https://github.com/MagicStack/uvloop)).  We also provide a utility function via our [asyncio-anywhere](https://pypi.org/project/asyncio-anywhere/) to make it easy to run this code in both scripts and notebooks.

This package automatically:
- takes in a pandas dataframe
- applies a prompt template to create a prompt per row
- queries an API-based LLM in parallel, with automatic retries and rate limiting
- parses and dedupes the outputs from multiple choices, and JSON outputs
- outputs a clean structured dataframe

