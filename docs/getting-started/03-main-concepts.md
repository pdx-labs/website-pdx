---
slug: main-concepts
title: Main concepts
description: Understanding PDX
sidebar_position: 3
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import FileWindow from '@site/src/components/FileWindow';

# Main concepts

### Prompt

What is a **prompt**? A **prompt** is a piece of text that is used as input to a Language Model. A prompt can be a simple sentence or a paragraph of text. A prompt can also be a template that is used to generate a prompt. A prompt template is a piece of text that contains placeholders that are replaced with values from an input.

> For example, a prompt template can be `Hello {name}` and the input can be `{name: "John"}`. The prompt generated from this template and input will be `Hello John`.

### Agent

What is an **agent**? An **agent** is a collection of prompts and/or prompt templates with information that is used as input to the Language Models. A typical function of an agent is to take in some input from context, build a prompt using the tempaltes and input, execute the prompt with a Language Model and return the response.

> For example, an agent can be a chatbot that takes in a user's message, builds a prompt from the message, executes the prompt with a Language Model and returns the response.

:::tip

If you'd like to follow along with the sample agent files in your local, then run the following command in your terminal:

```bash
pdx create demo_agent
```

:::

## Agent Folder Structure

PDX helps you to organise and manage prompt templates by providing a clear folder structure.

The agents are organized as follows:

```
demo_agent
    ├── __init__.py
    ├── config.yaml
    ├── templates
    │   ├── 1_prompt.defaults.yaml
    │   └── 1_prompt.jinja
    └── tests
        └── test_1.yaml
```

-   The agent is configured in the `config.yaml` file.
-   The `templates` folder contains the prompt templates.
-   The `tests` folder contains the tests for the agent.

### Agent Configuration

The agent is configured in the `config.yaml` file. The configuration file contains the following information:

```yaml title="/demo_agent/config.yaml"
%YAML 1.2
---
name: demo_agent
comment: A demo agent to show the usage of PDX.
model:
    id: text-davinci-003
prompt:
    - template: 1_prompt.jinja
```

What needs to be specified is:

-   `name`: which is the name of the agent.
-   `comment` (optional): A description of the agent.
-   `model`: The information of the language model to use for the agent.
    -   `id`: The name of the model. Find a list of the supported Language Models [here](#supported-language-models). The API key for the model is take from the environment variables. The name of the environement variable to be used for each of provider is also mentioned in the [table](#supported-language-models).
-   `prompt`: The templates of the prompts to be used for the agent that are present in the `/templates` folder. The `prompt` variable could contain a list of prompt templates.
    -   `template`: The path to the prompt template file. This is the simplest use of prompt template.
    -   `system`: This is a template with a `system` role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the system prompt, when using other models it will assume a `user` or `Human` role. Only one system prompt is allwed per agent. When using a text model, this will be converted to a regular prompt.
    -   `user`: This is a template with a `user` or `Human` role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the `user` prompt and for other models it will assume the similar equivalent (`Human` in ANthropic models). Only one system prompt is allwed per agent. When using a text model, this will be converted to a regular prompt.
    -   `assistant`: This is a template with an `assistant` role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the user prompt and for other models it will assume the similar equivalent (`Assistant` in Anthropic models). Only one system prompt is allwed per agent. When using a text model, this will be converted to a regular prompt.

:::caution

In the `prompt` config only `template` or a combination of `system`, `user`, `assistant` can be used. Not both in the same configuration.

:::

### Prompt Templates

Prompt templates are create using [**jinja**](https://jinja.palletsprojects.com/en/3.1.x/templates/#synopsis) templating system, and are stored as `.jinja` files in the `/templates` folder. The prompt templates are simple text files that contain variables, which get replaced with values when a template is rendered. The variables in the template are indicated by the double curly braces `{{ a_variable }}`. The following is an example of a template:

<FileWindow url="/demo_agent/templates/1_prompt.jinja">
Here is the summary of an article about: <mark>&#123;&#123; topic &#125;&#125;</mark>

Summary: <mark>&#123;&#123; summary &#125;&#125;</mark>

Answer the following question based on the summary of the article:
<mark>&#123;&#123; question &#125;&#125;</mark>
</FileWindow>

In the above prompt the variables are: `topic`, `summary` and `question`. When the values to the variables are provided, the template is rendered to generate the prompt.

For example when the values of the template variables are:

```yaml title="1_prompt.jinja variables value"
topic: "The benefits of reading"
summary: "Reading is good for your brain. It helps you to think better."
question: "What are the benefits of reading?"
```

The following is an example of a rendered prompt:

<FileWindow url="/demo_agent/templates/1_prompt.jinja">

Here is the summary of an article about: <mark>The benefits of reading</mark>

Summary: <mark>Reading is good for your brain. It helps you to think better.</mark>

Answer the following question based on the summary of the article:
<mark>What are the benefits of reading?</mark>

</FileWindow>

#### Default Values for Template Variables

Just as how it is desired to the default values for arguments to a function in lets say Python, it is also possible to provide default values for the variables in the prompt templates. The default values are provided in a separate file with the same name as the template file, but with the extension `.defaults.yaml`. The default values are provided in YAML format. The following is an example of a default values file:

```yaml title="/demo_agent/templates/1_prompt.defaults.yaml"
topic: "The benefits of execising"
summary: "Exercising is good for your health. It helps you to stay fit."
question: "What are the benefits of exercising?"
```

### Tests

The tests for the agent are stored in the `/tests` folder. The tests are written in YAML format, and contain the template file name and the test values of the variables for the template.

The following is an example of a test:

```yaml title="/demo_agent/tests/test_1.yaml"
%YAML 1.2
---
1_prompt:
    topic: "The benefits of walking"
    summary: "Walking is good for your health. It helps you to stay fit."
    question: "What are the benefits of walking?"
```

To run the test, use the command:

```bash
pdx test /path/demo_agent
```

## Supported Language Models

The following is a list of the currently supported language models with their providers. The table also contains the name of the environment variable that is used to store the API key for the model which is used to authenticate the request to the respective provider.

| Model `id`               | Provider                                                               | Environment Variable | Max Tokens | Recommended[^1] |
| ------------------------ | ---------------------------------------------------------------------- | -------------------- | ---------- | --------------- |
| gpt-4                    | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 8,192      | Yes             |
| gpt-4-32k                | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 3,2768     | Tes             |
| gpt-3.5-turbo-16k        | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 16,384     | Yes             |
| gpt-3.5-turbo            | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 4,096      | Yes             |
| gpt-4-0613               | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 8,192      |
| gpt-4-32k-0613           | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 32,768     |
| gpt-4-0314               | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 8,192      |
| gpt-3.5-turbo-16k-0613   | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 16,384     |
| gpt-3.5-turbo-0613       | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 4,096      |
| gpt-3.5-turbo-0301       | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 4,096      |
| text-davinci-003         | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 4,097      | Yes             |
| text-davinci-002         | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 4,097      |
| code-davinci-002         | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 8,001      |
| text-curie-001           | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| text-babbage-001         | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| text-ada-001             | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| davinci                  | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| curie                    | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| babbage                  | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| ada                      | [OpenAI](https://platform.openai.com/docs/models)                      | OPENAI_KEY           | 2,049      |
| claude-v1                | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      | Yes             |
| claude-v1-100k           | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 100,000    | Yes             |
| claude-instant-v1        | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      | Yes             |
| claude-instant-v1-100k   | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 100,000    | Yes             |
| claude-v1.3              | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      |
| claude-v1.3-100k         | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 100,000    |
| claude-v1.2              | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      |
| claude-v1.0              | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      |
| claude-instant-v1.1      | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      |
| claude-instant-v1.1-100k | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 100,000    |
| claude-instant-v1.0      | [Anthropic](https://docs.anthropic.com/claude/reference/complete_post) | ANTHROPIC_KEY        | 9,000      |

[^1]: Recommended: Here it refers to the models that are recommended to use. This is due to factors such as them being the latest, updated or stable versions of the models. The support for other models is for ensuring backward compatibility of the responses of the models.
