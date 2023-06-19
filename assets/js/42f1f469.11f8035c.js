"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[6842],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>d});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var o=r.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=s(e.components);return r.createElement(p.Provider,{value:o},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},w=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),w=n,d=c["".concat(p,".").concat(w)]||c[w]||f[w]||a;return t?r.createElement(d,i(i({ref:o},u),{},{components:t})):r.createElement(d,i({ref:o},u))}));function d(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=w;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},1104:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),n=(t(7294),t(3905));const a={title:"Exporting Workflows"},i=void 0,l={unversionedId:"user-guide/export-workflow",id:"user-guide/export-workflow",title:"Exporting Workflows",description:"Pygeoweaver offers a convenient function, export_workflow, to export workflows in various modes. This allows you to save workflows and their associated components for sharing or archiving purposes. Let's explore how to use this function effectively:",source:"@site/docs/user-guide/export-workflow.md",sourceDirName:"user-guide",slug:"/user-guide/export-workflow",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/export-workflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/export-workflow.md",tags:[],version:"current",frontMatter:{title:"Exporting Workflows"},sidebar:"documentationSidebar",previous:{title:"Retrieving Detailed Information",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/detailed-info"},next:{title:"Retrieving Process Information",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/process-info"}},p={},s=[{value:"Export Workflow",id:"export-workflow",level:3},{value:"Unzip Exported Workflow",id:"unzip-exported-workflow",level:3}],u={toc:s},c="wrapper";function f(e){let{components:o,...t}=e;return(0,n.kt)(c,(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pygeoweaver offers a convenient function, ",(0,n.kt)("inlineCode",{parentName:"p"},"export_workflow"),", to export workflows in various modes. This allows you to save workflows and their associated components for sharing or archiving purposes. Let's explore how to use this function effectively:"),(0,n.kt)("h3",{id:"export-workflow"},"Export Workflow"),(0,n.kt)("p",null,"To export a workflow, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"export_workflow")," function. Specify the workflow ID and provide a target file path where the exported workflow will be saved. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'export_workflow("workflow123", target_file_path="path/to/exported/workflow.zip")\n')),(0,n.kt)("p",null,"By default, the function exports the workflow with all its history and process code. However, you can customize the export mode using the ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," parameter. The available options are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mode 1: Export workflow only"),(0,n.kt)("li",{parentName:"ul"},"Mode 2: Export workflow with process code"),(0,n.kt)("li",{parentName:"ul"},"Mode 3: Export workflow with process code and only good history"),(0,n.kt)("li",{parentName:"ul"},"Mode 4 (default): Export workflow with process code and all history")),(0,n.kt)("p",null,"For example, to export only the workflow without process code or history, you can use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'export_workflow("workflow123", mode=1, target_file_path="path/to/exported/workflow.zip")\n')),(0,n.kt)("h3",{id:"unzip-exported-workflow"},"Unzip Exported Workflow"),(0,n.kt)("p",null,"If you want to unzip the exported workflow, you can set the ",(0,n.kt)("inlineCode",{parentName:"p"},"unzip")," parameter to ",(0,n.kt)("inlineCode",{parentName:"p"},"True"),". Additionally, provide a unique name for the directory where the contents will be extracted using the ",(0,n.kt)("inlineCode",{parentName:"p"},"unzip_directory_name")," parameter. Here's an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'export_workflow(\n    "workflow123",\n    target_file_path="path/to/exported/workflow.zip",\n    unzip=True,\n    unzip_directory_name="unzipped_workflow"\n)\n')),(0,n.kt)("p",null,"This will extract the exported workflow into the specified directory, allowing you to access its contents."),(0,n.kt)("p",null,"Note: Please ensure you have the necessary permissions and appropriate directory paths before executing the export and unzip operations."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"export_workflow")," function in Pygeoweaver simplifies the process of exporting workflows, enabling you to share, archive, or backup your geospatial processing workflows effortlessly."))}f.isMDXComponent=!0}}]);