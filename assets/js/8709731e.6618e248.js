"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[4339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),f=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=f(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=f(r),w=n,m=u["".concat(p,".").concat(w)]||u[w]||s[w]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=w;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var f=2;f<i;f++)a[f]=r[f];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}w.displayName="MDXCreateElement"},6920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var o=r(7462),n=(r(7294),r(3905));const i={title:"gw.import_workflow"},a=void 0,l={unversionedId:"api-ref/import-workflow",id:"api-ref/import-workflow",title:"gw.import_workflow",description:"importworkflow(workflowzipfilepath)",source:"@site/docs/api-ref/import-workflow.md",sourceDirName:"api-ref",slug:"/api-ref/import-workflow",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/import-workflow",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-ref/import-workflow.md",tags:[],version:"current",frontMatter:{title:"gw.import_workflow"},sidebar:"documentationSidebar",previous:{title:"gw.helpwith",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/help-with"},next:{title:"gw.list_hosts",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/list-hosts"}},p={},f=[{value:"<code>import_workflow(workflow_zip_file_path)</code>",id:"import_workflowworkflow_zip_file_path",level:4}],c={toc:f},u="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"import_workflowworkflow_zip_file_path"},(0,n.kt)("inlineCode",{parentName:"h4"},"import_workflow(workflow_zip_file_path)")),(0,n.kt)("p",null,"Function to import a workflow from a zip file."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"workflow_zip_file_path")," (str): The file path to the Geoweaver workflow zip file.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This function downloads the GeoWeaver JAR file using the ",(0,n.kt)("inlineCode",{parentName:"li"},"download_geoweaver_jar")," function."),(0,n.kt)("li",{parentName:"ul"},"It executes the GeoWeaver JAR file with the ",(0,n.kt)("inlineCode",{parentName:"li"},"import")," argument, ",(0,n.kt)("inlineCode",{parentName:"li"},"workflow")," sub-command, and the specified ",(0,n.kt)("inlineCode",{parentName:"li"},"workflow_zip_file_path"),"."),(0,n.kt)("li",{parentName:"ul"},"The function runs the command in the directory specified by the ",(0,n.kt)("inlineCode",{parentName:"li"},"get_root_dir")," function.")))}s.isMDXComponent=!0}}]);