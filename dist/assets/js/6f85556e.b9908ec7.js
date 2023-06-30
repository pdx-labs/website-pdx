"use strict";(self.webpackChunkwebsite_pdx=self.webpackChunkwebsite_pdx||[]).push([[723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"create",title:"create",sidebar_position:1},l="Create an Agent",o={unversionedId:"pdx-cli/create",id:"pdx-cli/create",title:"create",description:"Using PDX CLI",source:"@site/docs/pdx-cli/01-create.md",sourceDirName:"pdx-cli",slug:"/pdx-cli/create",permalink:"/docs/pdx-cli/create",draft:!1,editUrl:"https://github.com/pdx-labs/website-pdx/docs/pdx-cli/01-create.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"create",title:"create",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced prompting",permalink:"/docs/getting-started/advanced-prompting"},next:{title:"test",permalink:"/docs/pdx-cli/test"}},p={},c=[{value:"Using PDX CLI",id:"using-pdx-cli",level:2},{value:"Agent Templates",id:"agent-templates",level:3}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-agent"},"Create an Agent"),(0,a.kt)("h2",{id:"using-pdx-cli"},"Using PDX CLI"),(0,a.kt)("p",null,"PDX provides a CLI command for creating an agent easily. Use the follwing command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pdx create <agent_name>\n")),(0,a.kt)("p",null,"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<agent_name>")," with the name of your agent."),(0,a.kt)("p",null,"This command sets up the required files and folders for your agent. It then creates the agent in the directory you are currently in and executed this command."),(0,a.kt)("h3",{id:"agent-templates"},"Agent Templates"),(0,a.kt)("p",null,"PDX provides a few templates for creating an agent. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--template")," option to specify a template."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pdx create <agent_name> --template <template_name>\n")),(0,a.kt)("p",null,"The following templates are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"simple")," (default) - The simple text completion agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"chat")," - A chat conversation completion agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tree")," - An advanced prompt tree based agent template. More about this in the ",(0,a.kt)("a",{parentName:"li",href:"../getting-started/advanced-prompting"},"advanced prompting section"),".")))}u.isMDXComponent=!0}}]);