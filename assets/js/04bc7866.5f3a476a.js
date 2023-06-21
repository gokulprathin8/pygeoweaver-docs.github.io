"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[4665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),w=n,d=f["".concat(s,".").concat(w)]||f[w]||u[w]||i;return r?o.createElement(d,a(a({ref:t},c),{},{components:r})):o.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}w.displayName="MDXCreateElement"},5799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={title:"get_workflow_history"},a=void 0,l={unversionedId:"api-ref/get-workflow-history",id:"version-0.6.19/api-ref/get-workflow-history",title:"get_workflow_history",description:"getworkflowhistory(workflow_id)",source:"@site/versioned_docs/version-0.6.19/api-ref/get-workflow-history.md",sourceDirName:"api-ref",slug:"/api-ref/get-workflow-history",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/get-workflow-history",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6.19/api-ref/get-workflow-history.md",tags:[],version:"0.6.19",frontMatter:{title:"get_workflow_history"},sidebar:"documentationSidebar",previous:{title:"get_process_history",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/get-process-history"},next:{title:"helpwith",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/help-with"}},s={},p=[{value:"<code>get_workflow_history(workflow_id)</code>",id:"get_workflow_historyworkflow_id",level:4}],c={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"get_workflow_historyworkflow_id"},(0,n.kt)("inlineCode",{parentName:"h4"},"get_workflow_history(workflow_id)")),(0,n.kt)("p",null,"Function to retrieve the list of history entries for a workflow using the workflow ID."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"workflow_id")," (str): The ID of the workflow to retrieve the history for.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DataFrame"),": A pandas DataFrame containing the workflow history information.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This function sends a POST request to the GeoWeaver API endpoint to retrieve the workflow history."),(0,n.kt)("li",{parentName:"ul"},"The response is converted to a pandas DataFrame for easier data manipulation and analysis."),(0,n.kt)("li",{parentName:"ul"},"The DataFrame includes columns for the history begin time and end time, converted to datetime format.")))}u.isMDXComponent=!0}}]);