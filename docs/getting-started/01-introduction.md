---
slug: introduction
title: Introduction
description: What is PDX?
sidebar_position: 1
---

# What is PDX?

PDX is a Prompt Engineering and Dev-Ops toolkit for developing applications that are powered by Language Models.

## Why use PDX?

PDX provides a framework to implement software development best practices for prompt engineering. Which allows the software developers to focus on the application development and the prompt engineers to focus on writing and testing prompts.

In short:

-   🗃️ Low dependency footprint -> ease of production deployment and maintainance.
-   📂 Mental model to separate prompt templates from the application code. (Similar to Flask blueprint or FastAPI router).
-   📌 Version control the prompts along with their evaluation metrics.
-   📸 Logging and tracing of inputs, prompt render, and model response.
-   📩 Log feedback of the user.
-   📊 Observability out-of-the-box.
-   💾 Caching for lowering latency.
-   🛎️ A/B testing the prompts.

In detail:

-   In production deployment. We are determined to keep it's dependencies to a minimum, and to make it easy to deploy and maintain along with your project dependencies.
-   Separating prompt templates from the application code, and saving them as text (hich is what they essentially are) by providing a folder structure. This mental model is akin to what FastAPI or Flask does for creating backend applications.
-   Version controlling the prompts along with their evaluation metrics, by tracking and recording the template rendering of the prompts with the respective field values, and the response from the Language Model.
-   (Coming soon) Observability out-of-the-box. By tightly interating the lifecycle of prompt rendering with the input values and the response from the Language Model, PDX has the ability to record this process to help prompt engineers and developers debug.
-   (Coming soon) Caching for lowering latency, by storing the versioned prompts, the template field values that were used and the response from the Language Model, we can effectively cache and reproduce the responses for the same input values. This method lowers the footprint for caching as only the input values need to be checked, as opposed to finding similarities to the entire prompt.
-   (Coming soon) A/B testing the prompts. PDX also provides a method to capture feedback from the users. This along with the out-of-the-box observability provides the ability to A/B test the prompts, by comparing the response from the Language Model for the assortment of input values, prompt templates and user feedback.

## Getting started

-   [Installing](./installation) PDX in your local environment.
-   [Creating](./create-an-agent) your first LLM agent.
-   [Main concepts](./main-concepts) of PDX to understand how to use it to the fullest.
-   [Example agents](https://github.com/pdx-labs/demos) of how to use PDX to build your own LLM agent.
