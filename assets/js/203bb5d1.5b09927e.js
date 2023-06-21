"use strict";(self.webpackChunkpygeoweaver=self.webpackChunkpygeoweaver||[]).push([[6459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:n,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"Contributing Guide"},i="PyGeoWeaver Contributing Guide",u={unversionedId:"developer-guide/contributing-guide",id:"developer-guide/contributing-guide",title:"Contributing Guide",description:"Thank you for your interest in contributing to PyGeoWeaver! By contributing, you can help improve the library, add new features, fix bugs, and make it even more powerful and user-friendly. This guide will provide you with the necessary information and guidelines to contribute effectively.",source:"@site/docs/developer-guide/contributing-guide.md",sourceDirName:"developer-guide",slug:"/developer-guide/contributing-guide",permalink:"/pygeoweaver-docs.github.io/docs/next/developer-guide/contributing-guide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developer-guide/contributing-guide.md",tags:[],version:"current",frontMatter:{title:"Contributing Guide"},sidebar:"documentationSidebar",previous:{title:"sync",permalink:"/pygeoweaver-docs.github.io/docs/next/api-ref/sync"},next:{title:"PyGeoWeaver Internals",permalink:"/pygeoweaver-docs.github.io/docs/next/developer-guide/pygeoweaver-internals"}},s={},p=[{value:"Code Repository",id:"code-repository",level:2},{value:"License",id:"license",level:2},{value:"Ways to Contribute",id:"ways-to-contribute",level:2},{value:"Contributing Process",id:"contributing-process",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Get Started",id:"get-started",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pygeoweaver-contributing-guide"},"PyGeoWeaver Contributing Guide"),(0,n.kt)("p",null,"Thank you for your interest in contributing to PyGeoWeaver! By contributing, you can help improve the library, add new features, fix bugs, and make it even more powerful and user-friendly. This guide will provide you with the necessary information and guidelines to contribute effectively."),(0,n.kt)("h2",{id:"code-repository"},"Code Repository"),(0,n.kt)("p",null,"The PyGeoWeaver code repository is hosted on GitHub at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ESIPFed/pygeoweaver"},"https://github.com/ESIPFed/pygeoweaver"),". This is where you will find the latest source code, project documentation, and issue tracker."),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"PyGeoWeaver is licensed under the MIT License. By contributing to PyGeoWeaver, you agree that your contributions will be licensed under the same license. Please read the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ESIPFed/pygeoweaver/blob/main/LICENSE"},"LICENSE")," file for more details."),(0,n.kt)("h2",{id:"ways-to-contribute"},"Ways to Contribute"),(0,n.kt)("p",null,"There are several ways you can contribute to PyGeoWeaver:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reporting Issues"),": If you encounter any bugs, errors, or have suggestions for improvements, please open an issue on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ESIPFed/pygeoweaver/issues"},"issue tracker"),". Provide a clear and detailed description of the problem or enhancement you're suggesting.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixing Issues"),": You can contribute by fixing existing issues listed on the issue tracker. Fork the repository, make the necessary changes in your forked repository, and submit a pull request with your changes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Adding Features"),": If you have an idea for a new feature or enhancement, please open an issue first to discuss it with the maintainers. Once the feature is approved, you can implement it and submit a pull request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Improving Documentation"),": Documentation is crucial for a successful open-source project. You can contribute by improving the existing documentation, adding examples, or writing tutorials."))),(0,n.kt)("h2",{id:"contributing-process"},"Contributing Process"),(0,n.kt)("p",null,"To contribute to PyGeoWeaver, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fork the Repository"),': Click on the "Fork" button on the PyGeoWeaver repository page to create a copy of the repository in your GitHub account.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Clone the Repository"),": Clone the forked repository to your local development environment using the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/your-username/pygeoweaver.git\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Create a Branch"),": Create a new branch for your contribution. Choose a descriptive branch name that reflects the nature of your changes."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"git checkout -b your-branch-name\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Make Changes"),": Make the necessary changes in your local repository. Follow the coding style and guidelines specified in the project to ensure consistency.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Test Your Changes"),": Run the tests and ensure that all existing tests pass. If applicable, add new tests to cover the changes you made.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Commit and Push"),": Commit your changes and push them to your forked repository."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'git commit -m "Your commit message"\ngit push origin your-branch-name\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Submit a Pull Request"),': Go to the PyGeoWeaver repository page on GitHub and click on the "New Pull Request" button. Provide a clear description of your changes and submit the pull request.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Review and Iterate"),": The maintainers will review your pull request and provide feedback. Iterate on the changes based on the feedback until your contribution is ready to be merged.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Congratulations!"),": Once your pull request is approved and merged, your contribution becomes part of PyGeoWeaver. Thank you for your valuable contribution!"))),(0,n.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,n.kt)("p",null,"We expect all contributors to adhere to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.esipfed.org/"},"ESIP Code of Conduct")),(0,n.kt)("p",null,"fed.org/careers-volunteers/code-of-conduct). Please ensure that you follow the code of conduct in all interactions and discussions related to the project."),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("p",null,"If you're ready to contribute, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ESIPFed/pygeoweaver"},"PyGeoWeaver repository")," and start exploring the issues, documentation, and codebase. Your contributions will be greatly appreciated and will help make PyGeoWeaver even better!"),(0,n.kt)("p",null,"Thank you for your interest and support in making PyGeoWeaver a powerful and collaborative geospatial workflow library. Happy contributing!"))}d.isMDXComponent=!0}}]);