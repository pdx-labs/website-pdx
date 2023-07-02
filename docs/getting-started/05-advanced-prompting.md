---
slug: advanced-prompting
title: Advanced prompting
description: Advanced prompting and usage with PDX
sidebar_position: 5
---

import ChatPromptSvg from "./assets/chat_prompt.svg";
import PromptTreeWhenSvg from "./assets/prompt_tree_when.svg";
import PromptTreeLoopSvg from "./assets/prompt_tree_loop.svg";
import PromptTreeSwitchSvg from "./assets/prompt_tree_switch.svg";

# Advanced concepts

So far, we've delt with simple text completion prompts. But, to maximise the power of the complexity of language models is to build complex prompts. PDX is designed to be flexible and allow you to build complex prompts.

In this section, we'll cover some of the advanced concepts that you can use to build complex prompts.

## Chat Prompt

Chat style prompts are a special type of prompts that are design to mimic a conversation with the model.

> On a side note, some models are trained and tuned on chat style prompts, so it's a good idea to use chat style prompts when you're using those models.

To implement a chat style prompt for your agent, you'd have to design your `config.yaml` in the following way. Let's consider the following example chat prompt:

<ChatPromptSvg style={{ height: '250px' }} />

Let's create an example agent folder with a few temapltes, a config file and a test file.

```yaml
.
└── chat_agent
    ├── __init__.py
    ├── config.yaml
    ├── templates
    │   ├── 0_system.jinja
    │   ├── 1_assistant.jinja
    │   ├── 1_user.jinja
    │   └── 2_user.jinja
    └── tests
    └── test_1.yaml
```

The `config.yaml` file would look like this:

```yaml title="chat_agent/config.yaml"
# PDX AGENT CONFIG
---
name: chat_agent_demo
comment: An agent to test chat completions
model:
    id: gpt-3.5-turbo
prompt:
    - system: 0_system.jinja
    - user: 1_user.jinja
    - assistant: 1_assistant.jinja
    - user: 2_user.jinja
```

Now, let's deconstruct what is written under `prompt` in the `config.yaml` file. The `prompt` key takes in a list of values (in YAML this is indicated by using `-`). This list contains the `role` and the corresponding template file name. The role also corresponds to the role in the chat style prompt. `user` corresponds to the `human`, and the `assistant` corresponds to the `model`. The `system` prompt is for those chat styles prompts (especially OpenAI gpt-3.5 and above models) that use a `system` prompt as a preset for providing information to the model. This `system` prompt when not used by the model will be converted to the `equivalent` of `user` prompt for the model (for example, Anthropic doesn't use a `system` prompt as of this writing, and will be converted to `Human` prompt).

Input to these agents would also have to correspond to referencing the template name for rendering variables value to the template. For example, if you'd like to provide a value to the template `1_user` you'd have to provide the input as `1_user: <value>`.

Let's write a test case for this agent:

```yaml title="chat_agent/tests/test_1.yaml"
0_system:
    some_variable_here: "This is the value for variable 1"
2_user:
    another_variable_here: "This is the value for variable 2"
```

And similarly when executing this agent within your application code using the `Agent` class, you'd have to provide the input as:

```python
chat_agent_demo.execute(
    {
        "0_system": {
            "some_variable_here": "This is the value for variable 1"
            },
        "2_user": {
            "another_variable_here": "This is the value for variable 2"
            },
    }
)
```

## Prompt Trees

If you've followed along with the earlier bit, now it's time to up the complexity!

Prompt trees are a way to build complex prompts that are dependent on the inputs.

> For example, you could implement a conditional where a certain set of prompts is used when the condition is met. This is particularly usefull when you'd like to provide information/examples to the model to help it generate better results.

### `when` conditional

A `when` conditional is similar to an `if` statement, where then the conditional has some data, it will execute the prompts under the conditional. Let's consider the following example:

<PromptTreeWhenSvg style={{ maxHeight: '330px', width: '100%' }}/>

The config file for this agent would look like this:

```yaml title="prompt_tree_when_agent/config.yaml"
..
..
prompt:
    - user: prompt_1.jinja
    - when: condition_1
      prompt:
          - assistant: prompt_2.jinja
          - user: prompt_3.jinja
    - assistant: prompt_4.jinja
    - user: prompt_5.jinja
```

When executing this agent using the `Agent` class, you'd have to provide the input as:

```python
prompt_tree_when_agent.execute(
    {
        "prompt_1": {
            "variable_1": "This is the value for variable 1"
        },
        "condition_1": {
            "prompt_2": {
                "variable_2": "This is the value for variable 2"
            },
            "prompt_3": {
                "variable_3": "This is the value for variable 3"
            }
        }
        "prompt_4": {
            "variable_4": "This is the value for variable 4"
        },
        "prompt_5": {
            "variable_5": "This is the value for variable 5"
        }
    }
)
```

This will execute the prompts with the `when` conditional when the `condition_1` is present and has data in the input. However, when the `condition_1` is not present in the input, the prompts within the `when` conditional will not be executed.

The test cases to write within the `tests` folder will similarly have a similar structure to the input as above, but in yaml format.

### `loop` operation

A loop operation is when you want to loop and execute a set of prompt statements with an array/list of data. Let's consider the following example:

<PromptTreeLoopSvg style={{ maxHeight: '450px', width: '100%' }}/>

Where prompt_2 and promt_3 are executed in a loop and added to the final prompt. Each set of prompt tempaltes are rendered against a set of inputs. The config file for this agent would look like this:

```yaml title="prompt_tree_loop_agent/config.yaml"
..
..
prompt:
    - user: prompt_1.jinja
    - loop: loop_1
      prompt:
          - assistant: prompt_2.jinja
          - user: prompt_3.jinja
```

When executing this agent using the Agent class, you'd have to provide the input as:

```python
prompt_tree_loop_agent.execute(
    {
        "prompt_1": {
            "variable_1": "This is the value for variable 1"
        },
        "loop_1": [{
            "prompt_2": {
                "variable_2": "This is the value for variable 2, set 1"
            },
            "prompt_3": {
                "variable_3": "This is the value for variable 3, set 1"
            }
        },
        {
            "prompt_2": {
                "variable_2": "This is the value for variable 2, set 2"
            },
            "prompt_3": {
                "variable_3": "This is the value for variable 3, set 2"
            }
        },
        {
            "prompt_2": {
                "variable_2": "This is the value for variable 2, set 3"
            },
            "prompt_3": {
                "variable_3": "This is the value for variable 3, set 3"
            }
        },
        ]
    }
)
```

This will execute the prompt tempaltes within the `loop_1` key against the set of template values provided as a list of dictionaries. However, when `loop_1` is not present in the input or no data is provided for the `loop_1` key, the prompts within the `loop_1` loop operation will not be executed.

The test cases to write within the `tests` folder will similarly have a similar structure to the input as above, but in yaml format.

### `switch` conditional operation

The `switch` conditional operation is similar to the `when` conditional operation, but instead of a single condition, you can provide multiple cases of the condition and the prompts within the `cases` of the `switch` operation will be executed when that case is present. Let's consider the following example:

<PromptTreeSwitchSvg style={{ maxWidth: '550px' , width: '100%' }} />

The config file for this agent would look like this:

```yaml title="prompt_tree_switch_agent/config.yaml"
..
..
prompt:
    - user: prompt_1.jinja
    - switch: switch_1
      prompt:
          case_value_1:
              - assistant: prompt_2.jinja
              - user: prompt_3.jinja
          case_value_2:
              - assistant: prompt_4.jinja
              - user: prompt_5.jinja
          default:
              - assistant: prompt_6.jinja
              - user: prompt_7.jinja
```

Where the `switch_1` operation has three cases, and each case has different prompts and sequence in them. When then `switch_1` key has the value of one of the cases, the prompt tempaltes under that are executed with the values provided. The `default` (optional case to have) case is executed when none of the cases are present in the input. When executing this agent using the Agent class, you'd have to provide the input as:

```python
prompt_tree_switch_agent.execute(
    {
        "prompt_1": {
            "variable_1": "This is the value for variable 1"
        },
        "switch_1": {
            "case_value_2": {
                "prompt_4": {
                    "variable_2": "This is the value for variable 2, set 1"
                },
                "prompt_5": {
                    "variable_3": "This is the value for variable 3, set 1"
                }}
        }
    }
)
```

Which will execute the prompt templates within the case `case_value_2`. However, when `switch_1` is not present in the input or no data is provided for the `switch_1` key, the prompts within the `switch_1` switch operation will not be executed.

The test cases to write within the tests folder will similarly have a similar structure to the input as above, but in yaml format.

Example implementations of the above agents can be found in the PDX repository [here](https://github.com/pdx-labs/pdx/tree/main/demos).
