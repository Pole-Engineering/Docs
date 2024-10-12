"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3919],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>d});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var i=n.createContext({}),l=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},o=function(a){var e=l(a.components);return n.createElement(i.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,r=a.originalType,i=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=l(t),k=m,d=N["".concat(i,".").concat(k)]||N[k]||c[k]||r;return t?n.createElement(d,s(s({ref:e},o),{},{components:t})):n.createElement(d,s({ref:e},o))}));function d(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var r=t.length,s=new Array(r);s[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=a,p[N]="string"==typeof a?a:m,s[1]=p;for(var l=2;l<r;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3741:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>N});var n=t(7462),m=(t(7294),t(3905));t(1801);const r=t.p+"assets/images/extruder_cal_1-4af449650ed9a4cf8e96ff4a65cc6c8a.jpg",s=t.p+"assets/images/extruder_cal_2-0a65fb1d5885ca78c3dba56961bc2c8d.jpg",p={sidebar_position:1},i="Extruder Calibration",l={unversionedId:"Printing Guide/Extruder Calibration",id:"Printing Guide/Extruder Calibration",title:"Extruder Calibration",description:"Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don\u2019t confuse this with the extrusion multiplier; one is a printer setting, while the other is a filament-specific adjustment.",source:"@site/docs/Printing Guide/Extruder Calibration.md",sourceDirName:"Printing Guide",slug:"/Printing Guide/Extruder Calibration",permalink:"/Printing Guide/Extruder Calibration",draft:!1,editUrl:"https://github.com/pole-engineering/Docs/tree/gh-pages/docs/Printing Guide/Extruder Calibration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Printer Tuning Guide",permalink:"/category/printer-tuning-guide"},next:{title:"Extrusion Multiplier",permalink:"/Printing Guide/Extrusion Multiplier"}},o={},N=[{value:"Why is it Important?",id:"why-is-it-important-1",level:2},{value:"How to Calibrate?",id:"how-to-calibrate-1",level:2},{value:"Manual Calibration",id:"manual-calibration",level:3},{value:"How to Calculate?",id:"how-to-calculate-1",level:2},{value:"Manual Calculation",id:"manual-calculation",level:3},{value:"Automated Calculation",id:"automated-calculation",level:3}],c={toc:N},k="wrapper";function d(a){let{components:e,...t}=a;return(0,m.kt)(k,(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"extruder-calibration"},"Extruder Calibration"),(0,m.kt)("p",null,"Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don\u2019t confuse this with the ",(0,m.kt)("a",{parentName:"p",href:"/Printing%20Guide/Extrusion%20Multiplier"},"extrusion multiplier"),"; one is a printer setting, while the other is a filament-specific adjustment."),(0,m.kt)("admonition",{title:"skip to;",type:"tip"},(0,m.kt)("ul",{parentName:"admonition"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"why-is-it-important"},(0,m.kt)("a",{parentName:"h4",href:"/Printing%20Guide/Extruder%20Calibration#why-is-it-important-1"},"Why is it Important?"))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"how-to-calibrate"},(0,m.kt)("a",{parentName:"h4",href:"/Printing%20Guide/Extruder%20Calibration#how-to-calibrate-1"},"How to Calibrate?"))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"how-to-calculate"},(0,m.kt)("a",{parentName:"h4",href:"/Printing%20Guide/Extruder%20Calibration#how-to-calculate-1"},"How to Calculate?")),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"calculation"},(0,m.kt)("a",{parentName:"h4",href:"/Printing%20Guide/Extruder%20Calibration#manual-method"},"Calculation"))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"automated-method"},(0,m.kt)("a",{parentName:"h4",href:"/Printing%20Guide/Extruder%20Calibration#automated-method-1"},"Automated Method"))))))),(0,m.kt)("h2",{id:"why-is-it-important-1"},"Why is it Important?"),(0,m.kt)("p",null,"Extrusion calibration is crucial because it ensures that the printer extrudes and retracts the correct amount of filament during the printing process. Proper extrusion calibration leads to better print quality and improved mechanical properties of the printed object."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Prevents Over Extrusion")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Prevents Under Extrusion")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Enhances Print Quality")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Affects Retraction"))),(0,m.kt)("h2",{id:"how-to-calibrate-1"},"How to Calibrate?"),(0,m.kt)("p",null,"Here you can find the detailed intructions to calibrate your rotation distance below:"),(0,m.kt)("admonition",{type:"caution"},(0,m.kt)("p",{parentName:"admonition"},"Make sure your hotend is not fully or partially clogged before the calibration. Clogs can cause wrong calibration.")),(0,m.kt)("h3",{id:"manual-calibration"},"Manual Calibration"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"a-let-the-printer-to-extrude-101mm-or-higher"},"a) Let the printer to extrude 101mm or higher."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="printer.cfg"',showLineNumbers:!0,title:'"printer.cfg"'},'##########################################################################################\n## Define "max_extrude_only_distance" to extruder section and set it to "101" or more\n##########################################################################################\n\n[extruder]\n#step_pin: PG12\n#dir_pin: PG11\n#enable_pin: !PG13\n#microsteps: 16\n#rotation_distance: 33.500\n#nozzle_diameter: 0.400\nmax_extrude_only_distance:101\n#filament_diameter: 1.750\n#heater_pin: PB1 # Heat0\n#sensor_pin:  PC1 # T0 Header\n#sensor_type: EPCOS 100K B57560G104F\n'))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"b-heat-up-your-hotend"},"b) Heat up your hotend."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="Console"',showLineNumbers:!0,title:'"Console"'},"###############################################################\n##  Change the [XXX] to the temperature you want to heat up  ##\n###############################################################\n\nM104 S[XXX]             ; Heat up the hotend to [XXX]c\xb0 \n")),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("admonition",{parentName:"li",title:"Cold Tuning",type:"info"},(0,m.kt)("p",{parentName:"admonition"},"You can calibrate your extruder while the nozzle is cold but that requires to ",(0,m.kt)("em",{parentName:"p"},"removing the nozzle")," for the direct drive and ",(0,m.kt)("em",{parentName:"p"},"removing ptfe tube")," for the bowden setup.\nYou need to define ",(0,m.kt)("inlineCode",{parentName:"p"},"min_extrude_temp:0"),"under ",(0,m.kt)("inlineCode",{parentName:"p"},"[extruder]")," section in the ",(0,m.kt)("inlineCode",{parentName:"p"},"printer.cfg")))))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"c-extrude-a-bit-to-enable-the-stepper"},"c) Extrude a bit to enable the stepper."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="Console"',showLineNumbers:!0,title:'"Console"'},"M83             ; Set extruder to relative mode\nG1 E5 F50       ; Extrude 5mm\n"))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"d-use-your-caliper-to-place-a-piece-of-tape-to-desired-lenght-for-example-110mm"},"d) Use your caliper to place a piece of tape to desired lenght, for example 110mm."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("div",{style:{textAlign:"center"}},(0,m.kt)("img",{src:r,alt:"extruder_cal_1",style:{width:1e3,opacity:1}})),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("admonition",{parentName:"li",type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"For example, if you're going to do calibration over 100mm, place the tape to 110mm. This way, while extruding filament, you'll prevent the tape from getting inside the extruder."))))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"e-extrude-100mms-of-filament"},"e) Extrude 100mms of filament."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="Console"',title:'"Console"'},"G1 E100 F60       ; Extrude 100mm\n"))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"f-measure-the-distance-between-the-tape-and-extruder"},"f) Measure the distance between the tape and extruder."),(0,m.kt)("p",{parentName:"li"},"Measure the distance between the filament entry point of the extruder and the tape using calipers. In our example, we marked it at 110 mm and extruded 100 mm of filament. The measured distance came out to be 97.6 mm."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("div",{style:{textAlign:"center"}},(0,m.kt)("img",{src:s,alt:"extruder_cal_2",style:{width:1e3,opacity:1}})))))),(0,m.kt)("h2",{id:"how-to-calculate-1"},"How to Calculate?"),(0,m.kt)("p",null,"We offer you two different options to calculate your new rotation distance. The first option allows you to calculate it by plugging your measured values into the formula, while the second option provides a Klipper macro."),(0,m.kt)("p",null,"Rotation distance is calculated by this simple formula below:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"D"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"C"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"D"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"q"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"L"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"M"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"l"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"L"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"g"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"10"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"New Rotation Distance = {(Current Rotation Distance \xd7 Requested Length) \\over (Measured Filament Length - 10)}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"wR"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"am"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"10"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"rre"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"tR"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"es"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"L"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))))),(0,m.kt)("admonition",{type:"caution"},(0,m.kt)("p",{parentName:"admonition"},"Don't forget that you placed the tape 10 mm higher than where it should be, so you need to subtract 10 mm from the measured filament length.")),(0,m.kt)("h3",{id:"manual-calculation"},"Manual Calculation"),(0,m.kt)("p",null,"You can calculate your new rotation distance value by yourself using calculator."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"when-we-plug-the-actual-values-into-the-formula"},"When we plug the actual values into the formula:"),(0,m.kt)("div",{parentName:"li",className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"N"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"w"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"D"),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"23.35"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mn",{parentName:"mrow"},"100"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("mrow",{parentName:"mfrac"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"105.98"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"10"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"))),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mfrac",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"mfrac"},"2335"),(0,m.kt)("mn",{parentName:"mfrac"},"97")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"23.35")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"New Rotation Distance = {(23.35 \xd7 100) \\over (105.98 - 10) } = {2335 \\over 97 } = 23.35")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"wR"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"105.98"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"10"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"23.35"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"100"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0074em",verticalAlign:"-0.686em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,m.kt)("span",{parentName:"span",className:"mfrac"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3214em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"97"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,m.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2335")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"23.35")))))),(0,m.kt)("p",{parentName:"li"},"According to our calculations, our new rotation distance value is ",(0,m.kt)("inlineCode",{parentName:"p"},"23.35"))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"replace-the-rotation-distance-with-the-new-value-that-you-have-calculated"},"Replace the rotation distance with the new value that you have calculated."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="printer.cfg"',showLineNumbers:!0,title:'"printer.cfg"'},'###############################################################\n##  Replace current "rotation distance" with the new value   ##\n###############################################################\n[extruder]\n#step_pin: PG12\n#dir_pin: PG11\n#enable_pin: !PG13\n#microsteps: 16\nrotation_distance: 23.35         ; Replace the rotation distance value\n#nozzle_diameter: 0.400\n#max_extrude_only_distance:101\n#filament_diameter: 1.750\n#heater_pin: PB1 # Heat0\n#sensor_pin:  PC1 # T0 Header\n#sensor_type: EPCOS 100K B57560G104F\n')))))),(0,m.kt)("h3",{id:"automated-calculation"},"Automated Calculation"),(0,m.kt)("p",null,"With the following macro, you can automatically calculate your new rotation distance in Klipper. All you need to do is click the small arrow next to the macro shortcut, enter how many millimeters you want to extrude and the measurement you took after extruding. The macro will automatically pull the current rotation distance from your Klipper config, process it with the values you provided, and display the new rotation distance in the console. You just need to update the rotation distance in your ",(0,m.kt)("inlineCode",{parentName:"p"},"printer.cfg")," with the value shown in the console."),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"add-the-macro-below-to-your-printercfg"},"Add the macro below to your printer.cfg"),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="printer.cfg"',showLineNumbers:!0,title:'"printer.cfg"'},'##############################################################\n##  Replace current "rotation distance" with the new value  ##\n##############################################################\n[gcode_macro _load_unload]\ngcode:\n  {% set saved_extruder = printer.toolhead.extruder %}\n  {% set EXTRUDER = params.EXTRUDER|default(saved_extruder)|lower %}\n  {% set km = printer["gcode_macro _km_globals"] %}\n  # Use the global min as default if provided, else use per extruder min + 5.\n  {% set default_minimum = km.load_min_temp if km.load_min_temp else\n        (printer.configfile.settings[EXTRUDER].min_extrude_temp + 5) %}\n  {% if \'MINIMUM\' in params %}\n    {% set MINIMUM = params.MINIMUM|int %}\n  # This is the special case for a filament change after an idle timeout.\n  {% elif printer.pause_resume.is_paused and printer[EXTRUDER].target == 0 and\n          printer["gcode_macro resume"].saved_extruder_temp %}\n    {% set MINIMUM = printer["gcode_macro resume"].saved_extruder_temp %}\n  # Use the target temp if higher than the default.\n  {% elif printer[EXTRUDER].target > default_minimum %}\n    {% set MINIMUM = printer[EXTRUDER].target %}\n  {% else %}\n    {% set MINIMUM = default_minimum %}\n  {% endif %}\n  {% if MINIMUM < printer.configfile.settings[EXTRUDER].min_extrude_temp %}\n    { action_raise_error("Extrude below minimum temp.") }\n  {% elif printer.pause_resume.is_paused %}\n    # Clear the saved E if we\'re (un-)loading while paused.\n    SET_GCODE_VARIABLE MACRO=resume VARIABLE=saved_e VALUE="{0.0}"\n'))))),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("h4",{parentName:"li",id:"b-run-the-macro"},"b) Run the macro."),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-properties",metastring:'showLineNumbers title="Console"',showLineNumbers:!0,title:'"Console"'},"ROTATION_DISTANCE_CALCULATOR\n")))))))}d.isMDXComponent=!0},1801:(a,e,t)=>{t.p}}]);