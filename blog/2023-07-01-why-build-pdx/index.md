---
slug: why-build-pdx
title: Why build PDX?
authors: krishadi
tags: [llm, apps]
---

# So, why build PDX?

In the last 6 months, I've been building a lot of applications that are being powered by LLMs. And, in this time, none of the available frameworks helped me satisfy the requirements I had. Eventually, I had to write a lot of scaffold code that I reused across all these applications. PDX is a consolidation of all that scaffold code, which I find very useful. And, hopefully to you too...

<!--truncate-->

Before I start preaching about PDX, let me start with what the initial requirements were:

1. Low on dependencies. You're just making an call to an API with some text.
2. Managing prompt templates with Jinja. Jinja is a great templating engine, which is well architected for the use-cases one might encounter.
3. Separating prompt templates with the application code. Prompt templates are plaint text, and it has no business being written into the application code.
4. Chaining of prompts. Both text and chat completions need a well thought of way of sequencing the prompts.
5. Observability. Logging which prompts with which inputs gave which response from which model. Along with how long did it take and how many tokens were used.
6. A/B testing. Attributing the the above with the user feedback.
7. Caching responses. Separating the prompts as templates and inputs for those templates makes it easier for caching. Instead of looking up the entire prompt, only the inputs need to be looked up for a response.

## What is PDX?

PDX is a prompt engineering and a dev-ops toolkit. At the core, it provides a framework on how to build and manage agents. An agent is an interface to the lanugage models, which is a collection of prompts and/or prompt templates with information that is used as input to the Language Models.

> Disambiguation: Some frameworks use the word Agent to describe an autonomous agent that perform a set of actions by interacting with the LLMs.

### Folder structure + config

PDX borrows from [Flask-blueprints](https://flask.palletsprojects.com/en/2.3.x/blueprints/#) the concept of modularising applications. Applications built to use LLMs, employ multiple different agents. And, PDX helps in modularising applications with folder-structures to build and manage agents.

> For example, an application that creates an itinerary would perhaps have one agent to create a draft itinerary with the inputs from the user. Which would pass the response to another agent that checks the itinerary for factual errors, another one that checks for correct formatting of timing and so on. With PDX, each of these agents would have a folder for each of them with just a configuration file and their respective templates.

A typical agent folder would look like:

```bash
demo_agent
    ├── __init__.py
    ├── config.yaml
    ├── templates
    │   ├── 1_prompt.defaults.yaml
    │   └── 1_prompt.jinja
    └── tests
        └── test_1.yaml
```

With a folder for the prompt templates along with the default values of the template fields. A [configuration file](../../docs/getting-started/main-concepts#agent-configuration) for info on the prompt template, the model to use and so on. More info on this can be found [here](../../docs/getting-started/main-concepts#agent-configuration)

Along with this a folder (`/tests`) contains tests for the agent, that can be used to keep track of the agent's performance.

### Prompt templates

Prompts to Language Models are text. A great way to reuse parts of this text prompt is to use templates, and [Jinja](https://jinja.palletsprojects.com/en/3.1.x/) happens to be a great templating engine. Templates in PDX are written as Jinja tempaltes.

More often than not, the responses from the agents are non-deterministic. Thus when making changes to the prompts in the hope that they would perform better with their response, the changes need to be tested and evaluated. Maintaining the prompts for the agents separated from the application code has the advantage that you can version the prompts and some evaluation metrics for those prompts. This particularly helps when making changes to prompts, you could compare the performance to other versions of the prompts of the agent.

Another important aspect to this structure is caching. Instead of caching the entire prompt to the model and its response, we could optimize this by storing only the input to the prompt templates and its response. This eliminates the redundant template text for being stored and processed for each call.

### Observability

For each agent execution, PDX provides a method to extract the meta information of the execution. This meta information includes prompt version, prompt template information, the input values to the agent, the model and the parameters used, the response, time taken to recieve the response and information on token usage.

This provides the ease of logging into any of the analytics tools.

## Concluding thoughts

This is mental model I've used for the projects I've worked on. One might say this a highly opinionated way of building interfaces to language models. Yes, it is and I hope it works for your use-case as well.
