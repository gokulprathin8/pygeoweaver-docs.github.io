"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[5729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return r?o.createElement(m,c(c({ref:t},l),{},{components:r})):o.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:n,c[1]=a;for(var p=2;p<s;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const s={title:"get_process_code"},c=void 0,a={unversionedId:"api-ref/process-code",id:"version-0.6.19/api-ref/process-code",title:"get_process_code",description:"getprocesscode(process_id)",source:"@site/versioned_docs/version-0.6.19/api-ref/process-code.md",sourceDirName:"api-ref",slug:"/api-ref/process-code",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/process-code",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.6.19/api-ref/process-code.md",tags:[],version:"0.6.19",frontMatter:{title:"get_process_code"},sidebar:"documentationSidebar",previous:{title:"list_workflows",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/list-workflows"},next:{title:"reset_password",permalink:"/pygeoweaver-docs.github.io/docs/api-ref/reset-password"}},i={},p=[{value:"<code>get_process_code(process_id)</code>",id:"get_process_codeprocess_id",level:4}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h4",{id:"get_process_codeprocess_id"},(0,n.kt)("inlineCode",{parentName:"h4"},"get_process_code(process_id)")),(0,n.kt)("p",null,"Function to retrieve the code of a process."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"process_id")," (str): The ID of the process.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"None"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This function makes an API request to the GeoWeaver application to retrieve the code of the specified process."),(0,n.kt)("li",{parentName:"ul"},"The code is printed to the console.")))}d.isMDXComponent=!0}}]);