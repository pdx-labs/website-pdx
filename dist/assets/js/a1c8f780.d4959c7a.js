"use strict";(self.webpackChunkwebsite_pdx=self.webpackChunkwebsite_pdx||[]).push([[57],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"create-an-agent",title:"Create an Agent",description:"Create an agent with PDX",sidebar_position:4},o="Create an Agent",l={unversionedId:"getting-started/create-an-agent",id:"getting-started/create-an-agent",title:"Create an Agent",description:"Create an agent with PDX",source:"@site/docs/getting-started/04-create-an-agent.md",sourceDirName:"getting-started",slug:"/getting-started/create-an-agent",permalink:"/docs/getting-started/create-an-agent",draft:!1,editUrl:"https://github.com/pdx-labs/website-pdx/docs/getting-started/04-create-an-agent.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"create-an-agent",title:"Create an Agent",description:"Create an agent with PDX",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Main concepts",permalink:"/docs/getting-started/main-concepts"},next:{title:"Advanced prompting",permalink:"/docs/getting-started/advanced-prompting"}},s={},p=[{value:"Step 0: Create a Folder",id:"step-0-create-a-folder",level:2},{value:"Step 1: Agent Configuration",id:"step-1-agent-configuration",level:2},{value:"Step 2: Prompt Template",id:"step-2-prompt-template",level:2},{value:"Step 3: Tests",id:"step-3-tests",level:2},{value:"Step 4: Create Agent Object (Class)",id:"step-4-create-agent-object-class",level:2},{value:"And, that&#39;s it! \ud83c\udf89",id:"and-thats-it-",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-an-agent"},"Create an Agent"),(0,i.kt)("p",null,"\ud83e\udd73 Now to the exciting part! Let's create an agent."),(0,i.kt)("p",null,"Before you continue, make sure you have installed ",(0,i.kt)("strong",{parentName:"p"},"pdx"),". If you haven't, follow the ",(0,i.kt)("a",{parentName:"p",href:"./installation"},"installation guide"),"."),(0,i.kt)("p",null,"The best way to learn to use PDX is to build an agent. In this guide, you'll learn how to create a simple sentiment classification agent. In doing so, you'll learn how to use PDX to build an agent, maintaining the prompt templates and writing tests."),(0,i.kt)("p",null,"Let's get started..."),(0,i.kt)("h2",{id:"step-0-create-a-folder"},"Step 0: Create a Folder"),(0,i.kt)("p",null,"Create a folder for where the files for your agent will live. For this guide, we'll call it ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment_classification_agent"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"PDX provides a CLI command to create a agent with an agent template. Run the following:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pdx create sentiment_classification_agent\n")),(0,i.kt)("p",{parentName:"admonition"},"You can then edit the files inside the folder with the info from this tutorial. For more information on this, check ",(0,i.kt)("a",{parentName:"p",href:"../pdx-cli/create"},"PDX CLI: create"))),(0,i.kt)("h2",{id:"step-1-agent-configuration"},"Step 1: Agent Configuration"),(0,i.kt)("p",null,"The first thing we'll need is to configure our agent. We'll do this by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file in the root of the agent folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="project/sentiment_classification_agent/config.yml"',title:'"project/sentiment_classification_agent/config.yml"'},"name: sentiment_classification_agent\ncomment: An agent that classifies the sentiment of a sentence as\n    positive or negative.\nmodel:\n    id: text-davinci-003\nprompt:\n    - template: 1_prompt.jinja\n")),(0,i.kt)("p",null,"Here we've named our agent, added some comments on the agent, specified the model we want to use and the prompt template we want to use. For information on each of this, refer to the ",(0,i.kt)("a",{parentName:"p",href:"./main-concepts/#agent-configuration"},"main concepts: agent configuration")," guide."),(0,i.kt)("h2",{id:"step-2-prompt-template"},"Step 2: Prompt Template"),(0,i.kt)("p",null,"Next, we'll create the prompt template. This is the template that will be used to generate the prompt for the agent. We'll create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"1_prompt.jinja")," inside a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," from the root of the agent folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jinja",metastring:'title="project/sentiment_classification_agent/templates/1_prompt.jinja"',title:'"project/sentiment_classification_agent/templates/1_prompt.jinja"'},"{{ sentence }} is a sentence. Is it positive or negative?\n")),(0,i.kt)("p",null,"We see that in the current prompt, we want to classify the sentiment of a sentence. We'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sentence")," variable to represent the sentence we want to classify."),(0,i.kt)("h2",{id:"step-3-tests"},"Step 3: Tests"),(0,i.kt)("p",null,"Next, we'll create a test for our agent. We'll create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"test_1.yaml")," inside a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," from the root of the agent folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="project/sentiment_classification_agent/tests/test_1.yaml"',title:'"project/sentiment_classification_agent/tests/test_1.yaml"'},'1_prompt:\n    sentence: "This is a great restaurant!"\n')),(0,i.kt)("p",null,"This describes the input to the agent. It is written with respect to the prompt template you want to address, and the values of the variables in that template. For more information on this follow the ",(0,i.kt)("a",{parentName:"p",href:"./main-concepts#prompt-templates"},"main concepts: prompt templates")," and ",(0,i.kt)("a",{parentName:"p",href:"./main-concepts#tests"},"main concepts: tests")," guide."),(0,i.kt)("p",null,"In this step, let's test out our agent, with the test case ",(0,i.kt)("inlineCode",{parentName:"p"},"test_1.yaml"),". From the CLI run (assuming that you are one folder up to the agent folder):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pdx test ./sentiment_classification_agent --debug\n")),(0,i.kt)("p",null,"You should see the following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI Output"',title:'"CLI','Output"':!0},"PDX::TEST:   Running: test_1\nPDX::INFO:   This is a great restaurant! is a sentence. Is it positive or negative?\nPDX::INFO:   Test result: test_1\n\nPositive.\n")),(0,i.kt)("h2",{id:"step-4-create-agent-object-class"},"Step 4: Create Agent Object (Class)"),(0,i.kt)("p",null,"In real-life usecase you'd want to use this agent in your application, and get your codebase to interact with it. To do this, we'll create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__.py")," in the root of the agent folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="project/sentiment_classification_agent/__init__.py"',title:'"project/sentiment_classification_agent/__init__.py"'},"import os\nfrom pdx import Agent\n\nagent_path = os.path.dirname(__file__)\nsentiment_classification_agent = Agent(agent_path)\n")),(0,i.kt)("p",null,"Here we've created an agent object called ",(0,i.kt)("inlineCode",{parentName:"p"},"sentiment_classification_agent")," that we can use in our application."),(0,i.kt)("p",null,"To use the agent, you can import the agent from the agent folder, and use it as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="project/main.py"',title:'"project/main.py"'},'from sentiment_classification_agent import sentiment_classification_agent\n\nsentence = "This is a great restaurant!"\nresponse = sentiment_classification_agent.execute({\n    "1_prompt": {\n        "sentence": sentence\n    }\n})\n\n')),(0,i.kt)("p",null,"The input to the execute method is written with respect to the prompt template you want to address, and the values of the variables in that template. For more information on this follow the ",(0,i.kt)("a",{parentName:"p",href:"./main-concepts#prompt-templates"},"main concepts: prompt templates"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To run the agent in async mode, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"aexecute")," method instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"response = await sentiment_classification_agent.aexecute({ ... })"))),(0,i.kt)("h2",{id:"and-thats-it-"},"And, that's it! \ud83c\udf89"),(0,i.kt)("p",null,"You've successfully created your first agent."),(0,i.kt)("p",null,"Let's do a quick recap of what we've done:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created a folder for where all the files and folders for your agent will live."),(0,i.kt)("li",{parentName:"ul"},"Created a ",(0,i.kt)("inlineCode",{parentName:"li"},"config.yaml")," file in the root of the agent folder to configure the agent."),(0,i.kt)("li",{parentName:"ul"},"Created a ",(0,i.kt)("inlineCode",{parentName:"li"},"templates")," folder in the root of the agent folder to store the prompt templates. And, created a prompt template (",(0,i.kt)("inlineCode",{parentName:"li"},"1_prompt.jinja"),") inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"templates")," folder."),(0,i.kt)("li",{parentName:"ul"},"Created a ",(0,i.kt)("inlineCode",{parentName:"li"},"tests")," folder in the root of the agent folder to store the tests. And, created a test (",(0,i.kt)("inlineCode",{parentName:"li"},"test_1.yaml"),") inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tests")," folder."),(0,i.kt)("li",{parentName:"ul"},"Created an ",(0,i.kt)("inlineCode",{parentName:"li"},"__init__.py")," file in the root of the agent folder to create an agent object that can be used in your application.")))}d.isMDXComponent=!0}}]);