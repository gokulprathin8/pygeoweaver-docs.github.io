"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[9721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Creating Processes and Workflows"},i=void 0,l={unversionedId:"user-guide/process-workflow",id:"user-guide/process-workflow",title:"Creating Processes and Workflows",description:"The Pygeoweaver library provides functionalities to create processes and workflows for geospatial data processing and analysis. This section explains how to use the createprocess, createprocessfromfile, and create_workflow functions to create processes and workflows in Pygeoweaver.",source:"@site/docs/user-guide/process-workflow.md",sourceDirName:"user-guide",slug:"/user-guide/process-workflow",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/process-workflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/process-workflow.md",tags:[],version:"current",frontMatter:{title:"Creating Processes and Workflows"},sidebar:"documentationSidebar",previous:{title:"Password Reset",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/password-reset"},next:{title:"Retrieving Detailed Information",permalink:"/pygeoweaver-docs.github.io/docs/user-guide/detailed-info"}},s={},c=[{value:"Creating a Process",id:"creating-a-process",level:3},{value:"Function Signature",id:"function-signature",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Description",id:"description",level:4},{value:"Creating a Process from a File",id:"creating-a-process-from-a-file",level:3},{value:"Function Signature",id:"function-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Creating a Workflow",id:"creating-a-workflow",level:3},{value:"Function Signature",id:"function-signature-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Value",id:"return-value-2",level:4},{value:"Description",id:"description-2",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Pygeoweaver library provides functionalities to create processes and workflows for geospatial data processing and analysis. This section explains how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"create_process"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"create_process_from_file"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"create_workflow")," functions to create processes and workflows in Pygeoweaver."),(0,a.kt)("h3",{id:"creating-a-process"},"Creating a Process"),(0,a.kt)("h4",{id:"function-signature"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def create_process(lang, description, name, code, owner="111111", confidential=False):\n    ...\n')),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lang")," (str): The programming language of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," (str): The description of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (str): The name of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code")," (str): The code of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner"),' (str, optional): The owner of the process. Defaults to "111111".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"confidential")," (bool, optional): The confidentiality status of the process. Defaults to False.")),(0,a.kt)("h4",{id:"return-value"},"Return Value"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the ID of the created process as a dictionary.")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_process")," function creates a process in Pygeoweaver with the provided data. It takes the programming language, description, name, code, owner, and confidentiality status as input. The function sends a POST request to the GeoWeaver API to create the process."),(0,a.kt)("h3",{id:"creating-a-process-from-a-file"},"Creating a Process from a File"),(0,a.kt)("h4",{id:"function-signature-1"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def create_process_from_file(lang, description, name, file_path, owner="111111", confidential=False):\n    ...\n')),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lang")," (str): The programming language of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," (str): The description of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (str): The name of the process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file_path")," (str): The path to the file containing the code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner"),' (str, optional): The owner of the process. Defaults to "111111".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"confidential")," (bool, optional): The confidentiality status of the process. Defaults to False.")),(0,a.kt)("h4",{id:"return-value-1"},"Return Value"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the ID of the created process as a dictionary.")),(0,a.kt)("h4",{id:"description-1"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_process_from_file")," function creates a process in Pygeoweaver using the code from a file. It takes the programming language, description, name, file path, owner, and confidentiality status as input. The function reads the code from the specified file and calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"create_process")," function with the obtained code."),(0,a.kt)("h3",{id:"creating-a-workflow"},"Creating a Workflow"),(0,a.kt)("h4",{id:"function-signature-2"},"Function Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def create_workflow(description, edges, name, nodes, owner="111111", confidential=False):\n    ...\n')),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," (str): The description of the workflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edges")," (str): The edges of the workflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," (str): The name of the workflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nodes")," (str): The nodes of the workflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"owner"),' (str, optional): The owner of the workflow. Defaults to "111111".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"confidential")," (bool, optional): The confidentiality status of the workflow. Defaults to False.")),(0,a.kt)("h4",{id:"return-value-2"},"Return Value"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Returns the ID of the created workflow as a dictionary.")),(0,a.kt)("h4",{id:"description-2"},"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_workflow")," function creates a workflow in Pygeoweaver with the provided data. It takes the description, edges, name, nodes, owner, and confidentiality status as input. The function sends a POST request to the GeoWeaver API to create the workflow."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"With these functions, you can easily create processes and workflows in Pygeoweaver for geospatial data processing. You can provide the necessary information, such as the programming language, description, code or file path, and structure of the workflow."))}d.isMDXComponent=!0}}]);