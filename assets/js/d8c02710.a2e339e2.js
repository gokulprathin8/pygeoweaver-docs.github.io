"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[5324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),u=o,w=f["".concat(c,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(w,i(i({ref:t},p),{},{components:r})):n.createElement(w,i({ref:t},p))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"create_workflow"},i=void 0,l={unversionedId:"api-ref/create-workflow",id:"api-ref/create-workflow",title:"create_workflow",description:'create_workflow(description, edges, name, nodes, owner="111111", confidential=False)',source:"@site/docs/api-ref/create-workflow.md",sourceDirName:"api-ref",slug:"/api-ref/create-workflow",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/create-workflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-ref/create-workflow.md",tags:[],version:"current",frontMatter:{title:"create_workflow"},sidebar:"documentationSidebar",previous:{title:"create_process",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/create-process"},next:{title:"detail_host",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/detail-host"}},c={},s=[{value:"<code>create_workflow(description, edges, name, nodes, owner=&quot;111111&quot;, confidential=False)</code>",id:"create_workflowdescription-edges-name-nodes-owner111111-confidentialfalse",level:4}],p={toc:s},f="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"create_workflowdescription-edges-name-nodes-owner111111-confidentialfalse"},(0,o.kt)("inlineCode",{parentName:"h4"},'create_workflow(description, edges, name, nodes, owner="111111", confidential=False)')),(0,o.kt)("p",null,"Function to create a workflow with the given data if valid."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (str): The description of the workflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"edges")," (str): The edges of the workflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (str): The name of the workflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nodes")," (str): The nodes of the workflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"owner"),' (str, optional): The owner of the workflow. Defaults to "111111".'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"confidential")," (bool, optional): The confidentiality status of the workflow. Defaults to False.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dict"),": Returns the ID of the created workflow.")),(0,o.kt)("p",null,"Note: All the functions mentioned above internally call the ",(0,o.kt)("inlineCode",{parentName:"p"},"download_geoweaver_jar()")," function and make API requests to the GeoWeaver application for creating processes and workflows. They return the ID of the created process or workflow if successful. If the code is executed in an IPython environment, the functions also return a pandas DataFrame containing the key-value pairs of the data sent to the API."))}d.isMDXComponent=!0}}]);