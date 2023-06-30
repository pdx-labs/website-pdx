---
slug: create
title: create
sidebar_position: 1
---

# Create an Agent

## Using PDX CLI

PDX provides a CLI command for creating an agent easily. Use the follwing command:

```bash
pdx create <agent_name>
```

Replace the `<agent_name>` with the name of your agent.

This command sets up the required files and folders for your agent. It then creates the agent in the directory you are currently in and executed this command.

### Agent Templates

PDX provides a few templates for creating an agent. You can use the `--template` option to specify a template.

```bash
pdx create <agent_name> --template <template_name>
```

The following templates are available:

-   `simple` (default) - The simple text completion agent.
-   `chat` - A chat conversation completion agent.
-   `tree` - An advanced prompt tree based agent template. More about this in the [advanced prompting section](./advanced-prompting).
