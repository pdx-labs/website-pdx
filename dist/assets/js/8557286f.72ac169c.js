"use strict";(self.webpackChunkwebsite_pdx=self.webpackChunkwebsite_pdx||[]).push([[225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"test",title:"test",description:"PDX CLI command - test",sidebar_position:2},i="Testing an Agent",s={unversionedId:"pdx-cli/test",id:"pdx-cli/test",title:"test",description:"PDX CLI command - test",source:"@site/docs/pdx-cli/02-test.md",sourceDirName:"pdx-cli",slug:"/pdx-cli/test",permalink:"/docs/pdx-cli/test",draft:!1,editUrl:"https://github.com/pdx-labs/website-pdx/docs/pdx-cli/02-test.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"test",title:"test",description:"PDX CLI command - test",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"create",permalink:"/docs/pdx-cli/create"}},l={},p=[{value:"<code>--debug</code> flag",id:"--debug-flag",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-an-agent"},"Testing an Agent"),(0,a.kt)("p",null,"To write test cases for your agent refer to the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/main-concepts#test-cases"},"main concepts: tests")," section."),(0,a.kt)("p",null,"After writing the test cases with the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tests")," folder, you can run them using the following PDX CLI command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pdx test <agent_path>\n")),(0,a.kt)("p",null,"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"<agent_path>")," with the path of your agent."),(0,a.kt)("p",null,"This command runs all the tests in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tests")," folder of the agent and prints the results."),(0,a.kt)("h2",{id:"--debug-flag"},(0,a.kt)("inlineCode",{parentName:"h2"},"--debug")," flag"),(0,a.kt)("p",null,"To view a more verbose output in the console (visualizing all the prompts in full), run the tests in debug mode, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pdx test <agent_path> --debug\n")))}d.isMDXComponent=!0}}]);