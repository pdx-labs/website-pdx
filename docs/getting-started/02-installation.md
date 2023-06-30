---
slug: installation
title: Installation
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";

# Installation

To install the python package, it is recommended to use a virtual environment.

<Tabs>
  <TabItem value="pip" label="pip" default>
    <CodeBlock language="shell">pip install pdx</CodeBlock>    
  </TabItem>
  <TabItem value="poetry" label="poetry">
    <CodeBlock language="shell">poetry add pdx</CodeBlock>
  </TabItem>
</Tabs>

This installs pdx along with the pdx-cli.

### Create Agent from a Template

PDX provides a CLI command for creating an agent easily. Use the follwing command:

```bash
pdx create <agent_name>
```

View all the available options for this command at [pdx-cli/create](./pdx-cli/create).


## Notes

-   `pdx` is compatible with Python 3.7 and above.
-   We recommend using `poetry` to manage your dependencies. To install poetry, follow the instructions [here](https://python-poetry.org/docs/basic-usage/).
-   Dependencies of `pdx` will always be kept to a minimum to ensure compatibility with a wide range of projects.
