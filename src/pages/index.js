import React from 'react';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <Header />
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>Brad Ito</h1>
          <h2>
            <ul className="icons">
              <li>
                <a href="https://twitter.com/phlogisticfugu" className="fa-twitter">
                  <span className="label">Twitter</span>
                  </a>
              </li>
              <li>
                <a href="https://github.com/phlogisticfugu/" className="fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/brad-ito/" className="fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </h2>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <h2>Retina AI - CTO and Co-Founder</h2>
              <p>
                Lead engineering team for this venture-backed data science and machine learning <a href="https://retina.ai">company</a>.
                Mutiple production web, dataops, big data, and data science products with a focus
                on predicting customer behavior.
              </p>
              <p>
                Tech: Javascript (Express.js, Vue.js, DevExtreme, Highcharts, Plotly), Python (Flask, FastAPI), R, Spark (Databricks), Serverless, Docker, Snowflake, Firebolt, AWS
              </p>
              <h4>Technical Blog Posts</h4>
              <ul>
                <li><a href="https://retina.ai/blog/marketing-data-checklist/">Marketing Data Checklist</a></li>
                <li><a href="https://retina.ai/blog/7-ways-machine-learning-projects-fail/">7 Ways Machine Learning Projects Fail</a></li>
                <li><a href="https://retina.ai/blog/dataops-principles/">DataOps Principles</a></li>
                <li><a href="https://retina.ai/blog/serverless-principles/">Serverless Principles</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <h2>Topaz Labs - Dir of Engineering</h2>
              <p>
                <a href="https://www.topazlabs.com/">Topaz Labs</a> uses AI to enhance images and video.  Led engineering team for this profitable, bootstrapped company.
              </p>
              <p>
                As featured by industry partners (Intel, AMD, NVIDIA, Microsoft, Apple), Topaz Labs is the leader in deep learning-based image and video enhancement for photographers.
                Topaz Labs products are used by tens of thousands of photographers and videographers around the world.
              </p>
              <p>
                Tech: C++ (Qt Framework), Python (Tensorflow, PyTorch, FastAPI), Javascript (React, Express), AWS
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <h2>ScaleFunder - Dir of Engineering</h2>
              <p>
                Led software engineering team for this crowdfunding platform for universities
                and non-profits.  PCI Compliant platform.  Hybrid onshore/offshore team.
              </p>
              <p>
                Tech: Python (Pyramid, SQLAlchemy), Javascript (AngularJS), AWS
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <h2>Walla Media - VP of Technology</h2>
              <p>
                Architected innovative technology solutions and built/led combined
                onshore and offshore development team for this fast- moving online
                marketing company with nearly $1M in monthly revenue and over 1M page
                visits a day. Enabled multiple business pivots with modular, reliable
                systems and platforms.
              </p>
              <p>
                Personally created domain-specific language / web framework to enable
                web designers to build hundreds of complex lead- generation websites
                using extensions of HTML 5. Included plug-in modules for external APIs,
                dynamic tracking of inbound calls, and implicit input validation and tracking.
              </p>
              <p>
                Tech: PHP (Symfony framework), JavaScript (Angular, React, Express)
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="inner">
              <h2>Griffith Park Media - CTO</h2>
              <p>
                Built technology and team for this email marketing SaaS company.
                Platform managed and delivered email marketing campaigns, with
                detailed tracking that fed into a geo-demographic targeting and
                segmentation using statistical techniques. Technology competitive
                with or ahead of competition at the time (e.g. MailChimp)
              </p>
              <p>
                Tech: Java (J2EE), PHP, Javascript, MySQL
              </p>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>Developer Community Contributions</h2>
          <div className="features">
            <section>
              <span className="icon major fa-microphone" />
              <h3>Public Speaking</h3>
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=gdZH7Anh_6w">Intro to Vue.js - Javascript LA</a>
                </li>
                <li>
                  DataOps for AI - <a href="https://www.meetup.com/dal-ai/events/262535888/">Dallas AI</a>
                </li>
              </ul>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3><a href="https://suf-stack.org/">SUF Stack</a></h3>
              <p>
                Creator of the <a href="https://suf-stack.org/">SUF Stack</a> - Serverless, Universal, Full-stack web apps.  For improved
                developer and user performance and usability.
              </p>
            </section>
            <section>
              <span className="icon major fa-certificate" />
              <h3>MIT Club of Dallas-Fort Worth</h3>
              <p>
                VP of Programs
              </p>
              <p>
                Prior board member of the MIT Club of Southern California
              </p>
            </section>
            <section>
              <span className="icon major fa-github" />
              <h3>Creator of open source packages:</h3>
              <ul>
                <li>
                  <a href="https://www.npmjs.com/package/generator-suf-stack-aws-koa-nuxt">suf-stack-aws-koa-nuxt</a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/gulp-indexify">gulp-indexify</a>
                </li>
                <li>
                  <a href="https://github.com/phlogisticfugu/squirt">squirt</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
