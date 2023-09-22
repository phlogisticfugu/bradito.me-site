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

This uses the LLM to turn a generic technical document into a list of question and answer pairs.  This in turn could make the content in the original document easier to search for (match searches to the questions) and easier to digest (just show the answers in bullet form).

This could turn a [wikipedia page about George Washington](https://en.wikipedia.org/wiki/George_Washington) into a list of question/answer pairs:

```json
[
  {
    "question": "Who was the first president of the United States?",
    "answer": "George Washington"
  },
  {
    "question": "What position did George Washington hold during the American Revolutionary War?",
    "answer": "Commander of the Continental Army"
  },
  {
    "question": "What document did George Washington help draft and ratify?",
    "answer": "The Constitution of the United States"
  },
]
```

## Scale

All of the above is great and useful, however things can get tricky when you try to scale.  A single response to a decently complicated prompt could take up to 30 seconds.  That means processing a thousand documents one after the other (in series) could take over 8 hours.

To help with this, we created a python package: [parallel-parrot](https://pypi.org/project/parallel-parrot/) that makes LLM calls in parallel, without having to worry about concurrency, retries, API throttling, and other related issues.  Parallelization can accomplish the same 8+ hour task in minutes.

Series vs Parallel:
![LLM Map](./0002-parallel-parrot-3.drawio.png)

parallel-parrot automatically:
- takes in a pandas dataframe or native Python list of dictionaries
- applies a prompt template to create a prompt per row
- queries an API-based LLM in parallel, handling automatic retries and rate limiting
- parses and dedupes the outputs from multiple choices, and from JSON outputs
- outputs clean ([exploded](https://towardsdatascience.com/why-and-how-to-explode-a-list-like-column-to-rows-in-pandas-b69c3391c01c/) / [tidy](https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html) ) data in the original format

Under the hood, the package uses the high-performance [aiohttp](https://docs.aiohttp.org/en/stable/) package.  And uses the efficient I/O library [libuv](https://libuv.org/) via [uvloop](https://github.com/MagicStack/uvloop).  It also adapts to different connection timeouts and retries using best-practices such as exponential backoff with jitter.

Depending on the API-based LLM you are using, some require time to "warm up" machines in the cloud, and others like OpenAI have [rate limits](https://platform.openai.com/docs/guides/rate-limits/rate-limits-in-headers) which can vary depending on account tier.  The package handles this by first making a "setup" request, which is then used to configure and optimize the following bulk parallel requests.  That initial request also makes it easier to debug show-stopper issues like invalid credentials or API downtime.

![LLM Map](./0002-parallel-parrot-4.drawio.png)

## Next Steps

We're open sourcing this in the true spirit of open source: in the hopes that others find it useful as well.  Contributions and feedback are welcome, in the hopes that we can help each other unlock more of the value from this exciting new technology.

Also, to meet the needs of clients who have come to us interested in effectively leveraging Generative AI for themselves, we just formalized a new company [Novex AI](https://novex.ai/) to help with that.
