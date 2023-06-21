"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[6854],{3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>h});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),l=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=l(e.components);return t.createElement(c.Provider,{value:o},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},f=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return n?t.createElement(h,i(i({ref:o},d),{},{components:n})):t.createElement(h,i({ref:o},d))}));function h(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in o)hasOwnProperty.call(o,c)&&(a[c]=o[c]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3248:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const s={title:"Synchronizing Processes and Workflows"},i=void 0,a={unversionedId:"user-guide/sync-process-workflow",id:"version-0.6.19/user-guide/sync-process-workflow",title:"Synchronizing Processes and Workflows",description:"Pygeoweaver provides functions to synchronize processes and workflows in Geoweaver. These functions allow you to download process code, upload modified code, and sync entire workflows. Here are the details of the functions:",source:"@site/versioned_docs/version-0.6.19/user-guide/sync-process-workflow.md",sourceDirName:"user-guide",slug:"/user-guide/sync-process-workflow",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/sync-process-workflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6.19/user-guide/sync-process-workflow.md",tags:[],version:"0.6.19",frontMatter:{title:"Synchronizing Processes and Workflows"},sidebar:"documentationSidebar",previous:{title:"Running Processes and Workflows",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/run-process-workflows"},next:{title:"create_process_from_file",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/create-process-from-file"}},c={},l=[{value:"Synchronizing a Process",id:"synchronizing-a-process",level:3},{value:"<code>sync()</code>",id:"sync",level:4},{value:"Synchronizing a Workflow",id:"synchronizing-a-workflow",level:3},{value:"<code>sync_workflow()</code>",id:"sync_workflow",level:4}],d={toc:l},p="wrapper";function u(e){let{components:o,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pygeoweaver provides functions to synchronize processes and workflows in Geoweaver. These functions allow you to download process code, upload modified code, and sync entire workflows. Here are the details of the functions:"),(0,r.kt)("h3",{id:"synchronizing-a-process"},"Synchronizing a Process"),(0,r.kt)("h4",{id:"sync"},(0,r.kt)("inlineCode",{parentName:"h4"},"sync()")),(0,r.kt)("p",null,"This function syncs the code of a specific process."),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sync(process_id: str, local_path: str, direction: str)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"process_id"),": The ID of the process to sync."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"local_path"),": The local path where the code will be synced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"direction"),': The direction of the sync. Choices are "upload" or "download".')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sync()"),' function allows you to either download the code of a process to a local path or upload modified code to the process. If the direction is set to "download", the code of the process will be retrieved and saved to the specified local path. If the direction is set to "upload", the code from the specified local path will be uploaded to the process.'),(0,r.kt)("h3",{id:"synchronizing-a-workflow"},"Synchronizing a Workflow"),(0,r.kt)("h4",{id:"sync_workflow"},(0,r.kt)("inlineCode",{parentName:"h4"},"sync_workflow()")),(0,r.kt)("p",null,"This function syncs an entire workflow, including its code and history."),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sync_workflow(workflow_id: str, sync_to_path: str)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workflow_id"),": The ID of the workflow to sync."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sync_to_path"),": The path to the workflow where the code and history will be synced.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_workflow()")," function downloads the specified workflow, extracts it, and checks if the target workflow path matches the extracted workflow. If they match, the function replaces the files in the target workflow with the downloaded files, effectively syncing the code and history. Ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_to_path")," matches the workflow you want to sync."),(0,r.kt)("p",null,"Make sure you have the necessary dependencies set up, including the Geoweaver JAR file and Java, before using these functions."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sync_workflow()")," functions to synchronize processes and workflows in Geoweaver conveniently."))}u.isMDXComponent=!0}}]);