"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:6},i="Software",l={unversionedId:"projects/Crossant 235/Build Guide/Software",id:"projects/Crossant 235/Build Guide/Software",title:"Software",description:"The Crossant, like many other printers, uses Klipper firmware.",source:"@site/docs/projects/Crossant 235/Build Guide/Software.md",sourceDirName:"projects/Crossant 235/Build Guide",slug:"/projects/Crossant 235/Build Guide/Software",permalink:"/docs/projects/Crossant 235/Build Guide/Software",draft:!1,editUrl:"https://github.com/pole-engineering/Docs/tree/gh-pages/docs/projects/Crossant 235/Build Guide/Software.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Gantry",permalink:"/docs/projects/Crossant 235/Build Guide/Gantry"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"software"},"Software"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Crossant, like many other printers, uses Klipper firmware."),(0,n.kt)("h2",{parentName:"blockquote",id:"klipper"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/Klipper3d/klipper"},"Klipper")),(0,n.kt)("p",{parentName:"blockquote"},"Klipper is a firmware designed to improve the performance and capabilities of various 3D printers. Unlike traditional firmware that runs on a single microcontroller, Klipper leverages the computational power of a Raspberry Pi or similar single-board computer to handle complex calculations."),(0,n.kt)("h3",{parentName:"blockquote",id:"moonraker"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Arksine/moonraker"},"Moonraker")),(0,n.kt)("p",{parentName:"blockquote"},"Moonraker is a key component in the Klipper ecosystem, acting as a REST API server that facilitates communication between the Klipper firmware running on a microcontroller and the web-based user interfaces such as Mainsail and Fluidd."),(0,n.kt)("h3",{parentName:"blockquote",id:"mainsail-and-fluidd"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/mainsail-crew/mainsail"},"Mainsail")," and ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/fluidd-core/fluidd"},"Fluidd")),(0,n.kt)("p",{parentName:"blockquote"},"Mainsail and Fluidd are both web-based, lightweight interfaces. They both offer numerous customizations and features that make using your printer easier. Their installation methods are quite similar.")),(0,n.kt)("h1",{id:"installation-process"},"Installation Process"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We recommend ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dw-0/kiauh/tree/master"},"Kiauh")," for Klipper installation. Kiauh is a script that allows you to install everything necessary for Klipper firmware and its related components all at once."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:"),"\nTo download this script, ensure Git is installed on your system. If Git isn't installed or if you're uncertain, execute the following command:")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install git -y\n")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:"),"\nOnce Git is installed, you can download Kiauh into your home directory using the following command:")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~ && git clone https://github.com/dw-0/kiauh.git\n")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3:"),"\nInitiate Kiauh by executing the command:")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"./kiauh/kiauh.sh\n")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4:"),'\nOnce you are in the main menu of Kiauh, you will see various actions listed based on what you intend to do. To select an action, enter the corresponding number at the "Perform action" prompt and press ENTER to confirm.'))),(0,n.kt)("h1",{id:"building-and-flashing-the-mcu"},"Building and Flashing the MCU"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To use Klipper with your motherboard, you need to flash a firmware build that is tailored for the specific features of your motherboard. Here's how you can do it:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:"),"\nTo flash the MCU (Microcontroller Unit), run the following code:")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/klipper/\nmake menuconfig\n")),(0,n.kt)("p",{parentName:"blockquote"},"When the prompt appears, configure the settings appropriate for the MCU you are flashing, save the settings, and then quit the configuration tool."),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:"),"\nAfter configuring the settings for the MCU, proceed to build the firmware using the following command.")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make\n")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3:"),"\nOnce you have built the firmware, transfer it to your SD card and flash it onto your MCU."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4:"),"\nRun this command to retrieve the ID of your MCU:")),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"ls /dev/serial/by-id/\n")),(0,n.kt)("p",{parentName:"blockquote"},"Output should look like this:"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"/dev/serial/by-id/usb-1a86_USB2.0-Serial-if00-port0\n"))),(0,n.kt)("h1",{id:"printer-config-file"},"Printer Config File"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"printer.cfg")," file is a configuration file that allows you to make specific configuration changes on the printer, containing all the settings for the printer."),(0,n.kt)("p",{parentName:"blockquote"},"You can click ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Pole-Engineering/Crossant-235"},"here")," to access custom ",(0,n.kt)("inlineCode",{parentName:"p"},"cfg")," files created specifically for various motherboards compatible with Crossant.")))}m.isMDXComponent=!0}}]);