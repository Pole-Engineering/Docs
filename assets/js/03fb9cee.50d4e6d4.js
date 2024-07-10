"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(b,s(s({ref:t},c),{},{components:n})):o.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},s="Belts",i={unversionedId:"projects/Crossant 235/Build Guide/Belts",id:"projects/Crossant 235/Build Guide/Belts",title:"Belts",description:"The Crossant has a total of four belts to facilitate XY movement. Two of these belts control the X-axis, while the other two control the Y-axis.",source:"@site/docs/projects/Crossant 235/Build Guide/Belts.md",sourceDirName:"projects/Crossant 235/Build Guide",slug:"/projects/Crossant 235/Build Guide/Belts",permalink:"/docs/projects/Crossant 235/Build Guide/Belts",draft:!1,editUrl:"https://github.com/pole-engineering/Docs/tree/gh-pages/docs/projects/Crossant 235/Build Guide/Belts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Assembly Guide",permalink:"/docs/projects/Crossant 235/Build Guide/Assembly Guide"},next:{title:"FAQ",permalink:"/docs/FAQ"}},l={},u=[{value:"Belt Tensioning",id:"belt-tensioning",level:2},{value:"How Much Tension to Apply",id:"how-much-tension-to-apply",level:3},{value:"How to Measure?",id:"how-to-measure",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"belts"},"Belts"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Crossant has a total of four belts to facilitate XY movement. Two of these belts control the X-axis, while the other two control the Y-axis."),(0,r.kt)("p",{parentName:"blockquote"},"In the image below, the belts shown in blue are the Y belts, while those shown in red are the X belts. It is crucial for the print quality that all four of these belts have the same tension. Now, let's talk a bit about belt tensioning.\n",(0,r.kt)("img",{alt:"Guide",src:n(6684).Z,width:"3000",height:"2000"}))),(0,r.kt)("h2",{id:"belt-tensioning"},"Belt Tensioning"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Regardless of the type of printer you use, belt tension plays a significant role in your printer's performance. On this page, we will explain how tight the belt should be, how to measure the tension, and what can happen if the belt tension is too low or too high.")),(0,r.kt)("h3",{id:"how-much-tension-to-apply"},"How Much Tension to Apply"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are several different ways to measure belt tension: applied force (lbs) and the belt's physical tension (Hz). The lbs value can vary depending on the type of belt you use (GT2, GT3, HTD3M) and may yield different lbs values at different Hertz. However, since we use a GT2 10mm belt on our Crosant, we will proceed based on that."),(0,r.kt)("p",{parentName:"blockquote"},"For a GT2 10mm belt, the value recommended by Gates in lbs is XX. However, we tension the belts at a value 1.5-2 times higher than these recommended values. The gantry belts on the Crosant are 762mm long, and the length of the belt between the pulley and the idler is approximately 270mm, which we refer to as the full span. The recommended belt tension for the Crosant is in the range of 100-110 Hz at full span.")),(0,r.kt)("h3",{id:"how-to-measure"},"How to Measure?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since we measure in Hz, we won't go into lbs measurements. There are two options for measuring in Hz. The first is to use a tuning app that you can download to your phone, and the second is to use a physical tuning device. Both work in the same way. The measurement process is as follows: after ensuring a quiet environment, pluck the middle point of the belt at full span as if you were playing a guitar string, and then hold the phone close to the belt to measure the sound frequency emitted by the belt. That's all there is to it.")))}h.isMDXComponent=!0},6684:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/belts-e7a18c83aeeccc10a091bc6ad3be9fea.png"}}]);