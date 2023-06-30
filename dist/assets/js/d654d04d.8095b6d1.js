"use strict";(self.webpackChunkwebsite_pdx=self.webpackChunkwebsite_pdx||[]).push([[247],{2715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>V,default:()=>Z,frontMatter:()=>E,metadata:()=>C,toc:()=>S});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2466),s=a(6550),u=a(1980),c=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:a,groupId:n}),[c,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??c;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,l]),tabValues:l}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const I={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(I.tabItem,n),hidden:a},t)}var N=a(614);const E={slug:"installation",title:"Installation",sidebar_position:2},V="Installation",C={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"To install the python package, it is recommended to use a virtual environment.",source:"@site/docs/getting-started/02-installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/pdx-labs/website-pdx/docs/getting-started/02-installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"installation",title:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started/introduction"},next:{title:"Main concepts",permalink:"/docs/getting-started/main-concepts"}},_={},S=[{value:"Create Agent from a Template",id:"create-agent-from-a-template",level:3},{value:"Notes",id:"notes",level:2}],q={toc:S},D="wrapper";function Z(e){let{components:t,...a}=e;return(0,l.kt)(D,(0,n.Z)({},q,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"To install the python package, it is recommended to use a virtual environment."),(0,l.kt)(T,{mdxType:"Tabs"},(0,l.kt)(x,{value:"pip",label:"pip",default:!0,mdxType:"TabItem"},(0,l.kt)(N.Z,{language:"shell",mdxType:"CodeBlock"},"pip install pdx")),(0,l.kt)(x,{value:"poetry",label:"poetry",mdxType:"TabItem"},(0,l.kt)(N.Z,{language:"shell",mdxType:"CodeBlock"},"poetry add pdx"))),(0,l.kt)("p",null,"This installs pdx along with the pdx-cli."),(0,l.kt)("h3",{id:"create-agent-from-a-template"},"Create Agent from a Template"),(0,l.kt)("p",null,"PDX provides a CLI command for creating an agent easily. Use the follwing command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pdx create <agent_name>\n")),(0,l.kt)("p",null,"View all the available options for this command at ",(0,l.kt)("a",{parentName:"p",href:"../pdx-cli/create"},"pdx-cli/create"),"."),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pdx")," is compatible with Python 3.7 and above."),(0,l.kt)("li",{parentName:"ul"},"We recommend using ",(0,l.kt)("inlineCode",{parentName:"li"},"poetry")," to manage your dependencies. To install poetry, follow the instructions ",(0,l.kt)("a",{parentName:"li",href:"https://python-poetry.org/docs/basic-usage/"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},"Dependencies of ",(0,l.kt)("inlineCode",{parentName:"li"},"pdx")," will always be kept to a minimum to ensure compatibility with a wide range of projects.")))}Z.isMDXComponent=!0}}]);