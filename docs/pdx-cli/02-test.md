---
slug: test
title: test
description: PDX CLI command - test
sidebar_position: 2
---

# Testing an Agent

To write test cases for your agent refer to the [main concepts: tests](../getting-started/main-concepts#test-cases) section.

After writing the test cases with the `/tests` folder, you can run them using the following PDX CLI command:

```bash
pdx test <agent_path>
```

Replace the `<agent_path>` with the path of your agent.

This command runs all the tests in the `/tests` folder of the agent and prints the results.

## `--debug` flag

To view a more verbose output in the console (visualizing all the prompts in full), run the tests in debug mode, use the `--debug` flag.

```bash
pdx test <agent_path> --debug
```