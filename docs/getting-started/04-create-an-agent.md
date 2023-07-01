---
slug: create-an-agent
title: Create an Agent
sidebar_position: 4
---

# Create an Agent

🥳 Now to the exciting part! Let's create an agent.

Before you continue, make sure you have installed **pdx**. If you haven't, follow the [installation guide](./installation).

The best way to learn to use PDX is to build an agent. In this guide, you'll learn how to create a simple sentiment classification agent. In doing so, you'll learn how to use PDX to build an agent, maintaining the prompt templates and writing tests.

Let's get started...

## Step 0: Create a Folder

Create a folder for where the files for your agent will live. For this guide, we'll call it `sentiment_classification_agent`.

:::tip

PDX provides a CLI command to create a agent with an agent template. Run the following:

```bash
pdx create sentiment_classification_agent
```

You can then edit the files inside the folder with the info from this tutorial. For more information on this, check [PDX CLI: create](../pdx-cli/create)
:::

## Step 1: Agent Configuration

The first thing we'll need is to configure our agent. We'll do this by creating a `config.yml` file in the root of the agent folder.

```yaml title="project/sentiment_classification_agent/config.yml"
name: sentiment_classification_agent
comment: An agent that classifies the sentiment of a sentence as
    positive or negative.
model:
    id: text-davinci-003
prompt:
    - template: 1_prompt.jinja
```

Here we've named our agent, added some comments on the agent, specified the model we want to use and the prompt template we want to use. For information on each of this, refer to the [main concepts: agent configuration](./main-concepts/#agent-configuration) guide.

## Step 2: Prompt Template

Next, we'll create the prompt template. This is the template that will be used to generate the prompt for the agent. We'll create a file called `1_prompt.jinja` inside a folder called `templates` from the root of the agent folder.

```jinja title="project/sentiment_classification_agent/templates/1_prompt.jinja"
{{ sentence }} is a sentence. Is it positive or negative?
```

We see that in the current prompt, we want to classify the sentiment of a sentence. We'll use the `sentence` variable to represent the sentence we want to classify.

## Step 3: Tests

Next, we'll create a test for our agent. We'll create a file called `test_1.yaml` inside a folder called `tests` from the root of the agent folder.

```yaml title="project/sentiment_classification_agent/tests/test_1.yaml"
1_prompt:
    sentence: "This is a great restaurant!"
```

This describes the input to the agent. It is written with respect to the prompt template you want to address, and the values of the variables in that template. For more information on this follow the [main concepts: prompt templates](./main-concepts#prompt-templates) and [main concepts: tests](./main-concepts#tests) guide.

In this step, let's test out our agent, with the test case `test_1.yaml`. From the CLI run (assuming that you are one folder up to the agent folder):

```bash
pdx test ./sentiment_classification_agent --debug
```

You should see the following output:

```bash title="CLI Output"
PDX::TEST:   Running: test_1
PDX::INFO:   This is a great restaurant! is a sentence. Is it positive or negative?
PDX::INFO:   Test result: test_1

Positive.
```

## Step 4: Create Agent Object (Class)

In real-life usecase you'd want to use this agent in your application, and get your codebase to interact with it. To do this, we'll create a file called `__init__.py` in the root of the agent folder.

```python title="project/sentiment_classification_agent/__init__.py"
import os
from pdx import Agent

agent_path = os.path.dirname(__file__)
sentiment_classification_agent = Agent(agent_path)
```

Here we've created an agent object called `sentiment_classification_agent` that we can use in our application.

To use the agent, you can import the agent from the agent folder, and use it as follows:

```python title="project/main.py"
from sentiment_classification_agent import sentiment_classification_agent

sentence = "This is a great restaurant!"
response = sentiment_classification_agent.execute({
    "1_prompt": {
        "sentence": sentence
    }
})

```

The input to the execute method is written with respect to the prompt template you want to address, and the values of the variables in that template. For more information on this follow the [main concepts: prompt templates](./main-concepts#prompt-templates).

:::tip
To run the agent in async mode, you can use the `aexecute` method instead of the `execute` method.

`response = await sentiment_classification_agent.aexecute({ ... })`
:::

## And, that's it! 🎉

You've successfully created your first agent.

Let's do a quick recap of what we've done:

-   Created a folder for where all the files and folders for your agent will live.
-   Created a `config.yaml` file in the root of the agent folder to configure the agent.
-   Created a `templates` folder in the root of the agent folder to store the prompt templates. And, created a prompt template (`1_prompt.jinja`) inside the `templates` folder.
-   Created a `tests` folder in the root of the agent folder to store the tests. And, created a test (`test_1.yaml`) inside the `tests` folder.
-   Created an `__init__.py` file in the root of the agent folder to create an agent object that can be used in your application.
