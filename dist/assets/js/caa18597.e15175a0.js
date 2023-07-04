"use strict";(self.webpackChunkwebsite_pdx=self.webpackChunkwebsite_pdx||[]).push([[738],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=l,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1201:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>m,metadata:()=>s,toc:()=>k});var n=a(7462),l=a(7294),r=a(3905);var i=a(6010);const o={fileWindow:"fileWindow_lof2",fileWindowHeader:"fileWindowHeader_I_rQ",row:"row_PgyZ",buttons:"buttons_hi4s",right:"right_QgHT",fileWindowAddressBar:"fileWindowAddressBar_m7BF",dot:"dot_hknH",fileWindowMenuIcon:"fileWindowMenuIcon_K84T",bar:"bar_TLl9",fileWindowBody:"fileWindowBody_GIo9"};function p(t){let{children:e,minHeight:a,url:n="/file.txt",style:r,bodyStyle:p}=t;return l.createElement("div",{className:o.fileWindow,style:{...r,minHeight:a}},l.createElement("div",{className:o.fileWindowHeader},l.createElement("div",{className:o.buttons},l.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),l.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),l.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,i.Z)(o.fileWindowAddressBar,"text--truncate")},n)),l.createElement("div",{className:o.fileWindowBody,style:p},e))}const m={slug:"main-concepts",title:"Main concepts",description:"Understanding PDX",sidebar_position:3},d="Main concepts",s={unversionedId:"getting-started/main-concepts",id:"getting-started/main-concepts",title:"Main concepts",description:"Understanding PDX",source:"@site/docs/getting-started/03-main-concepts.md",sourceDirName:"getting-started",slug:"/getting-started/main-concepts",permalink:"/docs/getting-started/main-concepts",draft:!1,editUrl:"https://github.com/pdx-labs/website-pdx/docs/getting-started/03-main-concepts.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"main-concepts",title:"Main concepts",description:"Understanding PDX",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Create an Agent",permalink:"/docs/getting-started/create-an-agent"}},u={},k=[{value:"Prompt",id:"prompt",level:3},{value:"Agent",id:"agent",level:3},{value:"Agent Folder Structure",id:"agent-folder-structure",level:2},{value:"Agent Configuration",id:"agent-configuration",level:3},{value:"Prompt Templates",id:"prompt-templates",level:3},{value:"Default Values for Template Variables",id:"default-values-for-template-variables",level:4},{value:"Tests",id:"tests",level:3},{value:"Supported Language Models",id:"supported-language-models",level:2}],c={toc:k},g="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(g,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"main-concepts"},"Main concepts"),(0,r.kt)("h3",{id:"prompt"},"Prompt"),(0,r.kt)("p",null,"What is a ",(0,r.kt)("strong",{parentName:"p"},"prompt"),"? A ",(0,r.kt)("strong",{parentName:"p"},"prompt")," is a piece of text that is used as input to a Language Model. A prompt can be a simple sentence or a paragraph of text. A prompt can also be a template that is used to generate a prompt. A prompt template is a piece of text that contains placeholders that are replaced with values from an input."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, a prompt template can be ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello {name}")," and the input can be ",(0,r.kt)("inlineCode",{parentName:"p"},'{name: "John"}'),". The prompt generated from this template and input will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello John"),".")),(0,r.kt)("h3",{id:"agent"},"Agent"),(0,r.kt)("p",null,"What is an ",(0,r.kt)("strong",{parentName:"p"},"agent"),"? An ",(0,r.kt)("strong",{parentName:"p"},"agent")," is a collection of prompts and/or prompt templates with information that is used as input to the Language Models. A typical function of an agent is to take in some input from context, build a prompt using the tempaltes and input, execute the prompt with a Language Model and return the response."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, an agent can be a chatbot that takes in a user's message, builds a prompt from the message, executes the prompt with a Language Model and returns the response.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you'd like to follow along with the sample agent files in your local, then run the following command in your terminal:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pdx create demo_agent\n"))),(0,r.kt)("h2",{id:"agent-folder-structure"},"Agent Folder Structure"),(0,r.kt)("p",null,"PDX helps you to organise and manage prompt templates by providing a clear folder structure."),(0,r.kt)("p",null,"The agents are organized as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"demo_agent\n    \u251c\u2500\u2500 __init__.py\n    \u251c\u2500\u2500 config.yaml\n    \u251c\u2500\u2500 templates\n    \u2502\xa0\xa0 \u251c\u2500\u2500 1_prompt.defaults.yaml\n    \u2502\xa0\xa0 \u2514\u2500\u2500 1_prompt.jinja\n    \u2514\u2500\u2500 tests\n        \u2514\u2500\u2500 test_1.yaml\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The agent is configured in the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.yaml")," file."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"templates")," folder contains the prompt templates."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"tests")," folder contains the tests for the agent.")),(0,r.kt)("h3",{id:"agent-configuration"},"Agent Configuration"),(0,r.kt)("p",null,"The agent is configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file. The configuration file contains the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/demo_agent/config.yaml"',title:'"/demo_agent/config.yaml"'},"%YAML 1.2\n---\nname: demo_agent\ncomment: A demo agent to show the usage of PDX.\nmodel:\n    id: text-davinci-003\nprompt:\n    - template: 1_prompt.jinja\n")),(0,r.kt)("p",null,"What needs to be specified is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": which is the name of the agent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"comment")," (optional): A description of the agent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model"),": The information of the language model to use for the agent.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": The name of the model. Find a list of the supported Language Models ",(0,r.kt)("a",{parentName:"li",href:"#supported-language-models"},"here"),". The API key for the model is take from the environment variables. The name of the environement variable to be used for each of provider is also mentioned in the ",(0,r.kt)("a",{parentName:"li",href:"#supported-language-models"},"table"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt"),": The templates of the prompts to be used for the agent that are present in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/templates")," folder. The ",(0,r.kt)("inlineCode",{parentName:"li"},"prompt")," variable could contain a list of prompt templates.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"template"),": The path to the prompt template file. This is the simplest use of prompt template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"system"),": This is a template with a ",(0,r.kt)("inlineCode",{parentName:"li"},"system")," role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the system prompt, when using other models it will assume a ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Human")," role. Only one system prompt is allowed per agent. When using a text model, this will be converted to a regular prompt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user"),": This is a template with a ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Human")," role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," prompt and for other models it will assume the similar equivalent (",(0,r.kt)("inlineCode",{parentName:"li"},"Human")," in ANthropic models). When using a text model, this will be converted to a regular prompt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"assistant"),": This is a template with an ",(0,r.kt)("inlineCode",{parentName:"li"},"assistant")," role attached to it. When using an OpenAI chat model (for example: gpt-3.5), this will be the user prompt and for other models it will assume the similar equivalent (",(0,r.kt)("inlineCode",{parentName:"li"},"Assistant")," in Anthropic models). When using a text model, this will be converted to a regular prompt.")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt")," config only ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," or a combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"system"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assistant")," can be used. Not both in the same configuration.")),(0,r.kt)("h3",{id:"prompt-templates"},"Prompt Templates"),(0,r.kt)("p",null,"Prompt templates are create using ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#synopsis"},(0,r.kt)("strong",{parentName:"a"},"jinja"))," templating system, and are stored as ",(0,r.kt)("inlineCode",{parentName:"p"},".jinja")," files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/templates")," folder. The prompt templates are simple text files that contain variables, which get replaced with values when a template is rendered. The variables in the template are indicated by the double curly braces ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ a_variable }}"),". The following is an example of a template:"),(0,r.kt)(p,{url:"/demo_agent/templates/1_prompt.jinja",mdxType:"FileWindow"},"Here is the summary of an article about: ",(0,r.kt)("mark",null,"{{ topic }}"),(0,r.kt)("p",null,"Summary: ",(0,r.kt)("mark",null,"{","{"," summary ","}","}")),(0,r.kt)("p",null,"Answer the following question based on the summary of the article:"),(0,r.kt)("mark",null,"{{ question }}")),(0,r.kt)("p",null,"In the above prompt the variables are: ",(0,r.kt)("inlineCode",{parentName:"p"},"topic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"question"),". When the values to the variables are provided, the template is rendered to generate the prompt."),(0,r.kt)("p",null,"For example when the values of the template variables are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="1_prompt.jinja variables value"',title:'"1_prompt.jinja',variables:!0,'value"':!0},'topic: "The benefits of reading"\nsummary: "Reading is good for your brain. It helps you to think better."\nquestion: "What are the benefits of reading?"\n')),(0,r.kt)("p",null,"The following is an example of a rendered prompt:"),(0,r.kt)(p,{url:"/demo_agent/templates/1_prompt.jinja",mdxType:"FileWindow"},(0,r.kt)("p",null,"Here is the summary of an article about: ",(0,r.kt)("mark",null,"The benefits of reading")),(0,r.kt)("p",null,"Summary: ",(0,r.kt)("mark",null,"Reading is good for your brain. It helps you to think better.")),(0,r.kt)("p",null,"Answer the following question based on the summary of the article:"),(0,r.kt)("mark",null,"What are the benefits of reading?")),(0,r.kt)("h4",{id:"default-values-for-template-variables"},"Default Values for Template Variables"),(0,r.kt)("p",null,"Just as how it is desired to the default values for arguments to a function in lets say Python, it is also possible to provide default values for the variables in the prompt templates. The default values are provided in a separate file with the same name as the template file, but with the extension ",(0,r.kt)("inlineCode",{parentName:"p"},".defaults.yaml"),". The default values are provided in YAML format. The following is an example of a default values file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/demo_agent/templates/1_prompt.defaults.yaml"',title:'"/demo_agent/templates/1_prompt.defaults.yaml"'},'topic: "The benefits of execising"\nsummary: "Exercising is good for your health. It helps you to stay fit."\nquestion: "What are the benefits of exercising?"\n')),(0,r.kt)("h3",{id:"tests"},"Tests"),(0,r.kt)("p",null,"The tests for the agent are stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tests")," folder. The tests are written in YAML format, and contain the template file name and the test values of the variables for the template."),(0,r.kt)("p",null,"The following is an example of a test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="/demo_agent/tests/test_1.yaml"',title:'"/demo_agent/tests/test_1.yaml"'},'%YAML 1.2\n---\n1_prompt:\n    topic: "The benefits of walking"\n    summary: "Walking is good for your health. It helps you to stay fit."\n    question: "What are the benefits of walking?"\n')),(0,r.kt)("p",null,"To run the test (in debug mode, more info ",(0,r.kt)("a",{parentName:"p",href:"/docs/pdx-cli/test"},"here"),"), use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pdx test /path/demo_agent --debug\n")),(0,r.kt)("h2",{id:"supported-language-models"},"Supported Language Models"),(0,r.kt)("p",null,"The following is a list of the currently supported language models with their providers. The table also contains the name of the environment variable that is used to store the API key for the model which is used to authenticate the request to the respective provider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model ",(0,r.kt)("inlineCode",{parentName:"th"},"id")),(0,r.kt)("th",{parentName:"tr",align:null},"Provider"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("th",{parentName:"tr",align:null},"Recommended",(0,r.kt)("sup",{parentName:"th",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"8,192"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-32k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"3,2768"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-16k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"16,384"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-0613"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"8,192"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-32k-0613"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"32,768"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-4-0314"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"8,192"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-16k-0613"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"16,384"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-0613"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo-0301"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4,096"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-davinci-003"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4,097"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-davinci-002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"4,097"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code-davinci-002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"8,001"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-curie-001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-babbage-001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text-ada-001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"davinci"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"curie"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"babbage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ada"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://platform.openai.com/docs/models"},"OpenAI")),(0,r.kt)("td",{parentName:"tr",align:null},"OPENAI_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"2,049"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1-100k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-instant-v1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-instant-v1-100k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1.3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1.3-100k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1.2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-v1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-instant-v1.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-instant-v1.1-100k"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"claude-instant-v1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.anthropic.com/claude/reference/complete_post"},"Anthropic")),(0,r.kt)("td",{parentName:"tr",align:null},"ANTHROPIC_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"9,000"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Recommended: Here it refers to the models that are recommended to use. This is due to factors such as them being the latest, updated or stable versions of the models. The support for other models is for ensuring backward compatibility of the responses of the models.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}N.isMDXComponent=!0}}]);