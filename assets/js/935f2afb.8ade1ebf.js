"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Getting Started","href":"/getting_started","docId":"getting_started"},{"type":"category","label":"Projects","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Crossant 235","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Material Guide","href":"/projects/Crossant 235/Material Guide","docId":"projects/Crossant 235/Material Guide"},{"type":"category","label":"Build Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Assembly Guide","href":"/projects/Crossant 235/Build Guide/Assembly Guide","docId":"projects/Crossant 235/Build Guide/Assembly Guide"},{"type":"link","label":"Bearings and Linear Rails","href":"/projects/Crossant 235/Build Guide/Bearings and Linear Rails","docId":"projects/Crossant 235/Build Guide/Bearings and Linear Rails"},{"type":"link","label":"Belts","href":"/projects/Crossant 235/Build Guide/Belts","docId":"projects/Crossant 235/Build Guide/Belts"},{"type":"link","label":"Cooling","href":"/projects/Crossant 235/Build Guide/Cooling","docId":"projects/Crossant 235/Build Guide/Cooling"},{"type":"link","label":"Electronics","href":"/projects/Crossant 235/Build Guide/Electronics","docId":"projects/Crossant 235/Build Guide/Electronics"},{"type":"link","label":"Frame","href":"/projects/Crossant 235/Build Guide/Frame","docId":"projects/Crossant 235/Build Guide/Frame"},{"type":"link","label":"Gantry","href":"/projects/Crossant 235/Build Guide/Gantry","docId":"projects/Crossant 235/Build Guide/Gantry"},{"type":"link","label":"Software","href":"/projects/Crossant 235/Build Guide/Software","docId":"projects/Crossant 235/Build Guide/Software"}]},{"type":"category","label":"Initial Checks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Heating Elements","href":"/projects/Crossant 235/Initial Checks/Heating Elements","docId":"projects/Crossant 235/Initial Checks/Heating Elements"},{"type":"link","label":"Steppers & Homing","href":"/projects/Crossant 235/Initial Checks/Steppers & Homing","docId":"projects/Crossant 235/Initial Checks/Steppers & Homing"}]},{"type":"link","label":"Print Files","href":"/projects/Crossant 235/Print Files","docId":"projects/Crossant 235/Print Files"},{"type":"link","label":"Sheets","href":"/projects/Crossant 235/Sheets","docId":"projects/Crossant 235/Sheets"}],"href":"/category/crossant-235"}],"href":"/category/projects"},{"type":"category","label":"Printer Tuning Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Extruder Calibration","href":"/Printing Guide/Extruder Calibration","docId":"Printing Guide/Extruder Calibration"},{"type":"link","label":"Extrusion Multiplier","href":"/Printing Guide/Extrusion Multiplier","docId":"Printing Guide/Extrusion Multiplier"},{"type":"link","label":"Input Shaper","href":"/Printing Guide/Input Shaping","docId":"Printing Guide/Input Shaping"},{"type":"link","label":"Printing Temperatures","href":"/Printing Guide/Printing Temperatures","docId":"Printing Guide/Printing Temperatures"},{"type":"link","label":"Frame Assembly","href":"/Printing Guide/Blind Joint","docId":"Printing Guide/Blind Joint"},{"type":"link","label":"Pressure Advance","href":"/Printing Guide/Pressure Advance","docId":"Printing Guide/Pressure Advance"},{"type":"link","label":"TMC Tuning","href":"/Printing Guide/TMC Tuning","docId":"Printing Guide/TMC Tuning"},{"type":"link","label":"Temperature Controls","href":"/Printing Guide/Temperature Controls","docId":"Printing Guide/Temperature Controls"},{"type":"link","label":"Useful Add-ons","href":"/Printing Guide/Useful Add-ons","docId":"Printing Guide/Useful Add-ons"}],"href":"/category/printer-tuning-guide"},{"type":"link","label":"Acknowledgements","href":"/Acknowledgements","docId":"Acknowledgements"}]},"docs":{"Acknowledgements":{"id":"Acknowledgements","title":"Acknowledgements","description":"This document draws extensively from the Danger Klipper - Klipper documentation and its GitHub pages. Many sections have been carefully referenced, and in certain instances, content was directly adapted and modified to suit the needs of this document. The insights and information provided in those resources have been invaluable in shaping the material presented here.","sidebar":"tutorialSidebar"},"getting_started":{"id":"getting_started","title":"Getting Started","description":"Welcome to the Pole Engineering\'s documentation site.","sidebar":"tutorialSidebar"},"Printing Guide/Blind Joint":{"id":"Printing Guide/Blind Joint","title":"Frame Assembly","description":"Proper execution of blind joints and correct installation of extrusions are crucial for the stability and performance of your 3D printer. A solid, accurately measured, and well-assembled platform on which the printer is mounted will directly impact the quality of prints and overall performance. In this guide, we will outline the steps you need to follow to ensure that the printer\'s platform is parallel and properly assembled, maximizing the stability and accuracy of your printer setup.","sidebar":"tutorialSidebar"},"Printing Guide/Extruder Calibration":{"id":"Printing Guide/Extruder Calibration","title":"Extruder Calibration","description":"Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don\u2019t confuse this with the extrusion multiplier; one is a printer setting, while the other is a filament-specific adjustment.","sidebar":"tutorialSidebar"},"Printing Guide/Extrusion Multiplier":{"id":"Printing Guide/Extrusion Multiplier","title":"Extrusion Multiplier","description":"The extrusion multiplier (also called flow rate) is a setting to adjust the amount of filament extruded by the printer. It acts as a scaling factor applied to the extruder\'s flow rate and helps fine-tune the filament output to match the actual filament flow with what the printer thinks it is extruding.","sidebar":"tutorialSidebar"},"Printing Guide/Input Shaping":{"id":"Printing Guide/Input Shaping","title":"Input Shaper","description":"Input shaping is a technique to reduce or eliminate vibrations (also known as resonance) that occur when the printer moves at high accels. These vibrations can cause visible print defects such as ringing or ghosting, where the surface of the print shows repeating patterns or distortions, especially around corners or sharp changes in direction.","sidebar":"tutorialSidebar"},"Printing Guide/Pressure Advance":{"id":"Printing Guide/Pressure Advance","title":"Pressure Advance","description":"","sidebar":"tutorialSidebar"},"Printing Guide/Printing Temperatures":{"id":"Printing Guide/Printing Temperatures","title":"Printing Temperatures","description":"Nozzle Temperature","sidebar":"tutorialSidebar"},"Printing Guide/Temperature Controls":{"id":"Printing Guide/Temperature Controls","title":"Temperature Controls","description":"Here, we will explain how you can tune two different temperature control methods. One is the PID (Proportional-Integral-Derivative) method, which is natively supported by Klipper, and the other is the MPC (Model Predictive Control) method found in DangerKlipper (DK), a modified version of Klipper.","sidebar":"tutorialSidebar"},"Printing Guide/TMC Tuning":{"id":"Printing Guide/TMC Tuning","title":"TMC Tuning","description":"For TMC tuning, you\'ll need the TMC Autotune add-on. This extension generates optimal values for most registers of TMC stepper motor drivers by using the motor\u2019s datasheet specifications and the user\u2019s selected tuning goal. By leveraging this data, the extension ensures that the motor operates efficiently and meets the user\'s specific requirements, whether the focus is on performance, noise reduction, or precision. Click here to see the installation guide.","sidebar":"tutorialSidebar"},"Printing Guide/Useful Add-ons":{"id":"Printing Guide/Useful Add-ons","title":"Useful Add-ons","description":"What is Add-ons?","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Assembly Guide":{"id":"projects/Crossant 235/Build Guide/Assembly Guide","title":"Assembly Guide","description":"We are currently working intensively on the assembly guide for the Crossant235. Once completed, you will have access to separate guides for each different section of the printer (gantry, Z-axis, frame, etc.). The reason we are not consolidating everything into a single document is that the printer potentially has more than 10 different configurations.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Bearings and Linear Rails":{"id":"projects/Crossant 235/Build Guide/Bearings and Linear Rails","title":"Bearings and Linear Rails","description":"Linear rails are a type of bearing. The Crossant uses linear rails for movement on each axis. Due to their working principles, linear rails and bearings require lubrication, and without it, they wear out over time and lose performance. On this page, we will discuss the terminology related to linear rails and bearings, as well as how to perform their maintenance.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Belts":{"id":"projects/Crossant 235/Build Guide/Belts","title":"Belts","description":"The Crossant has a total of four belts to facilitate XY movement. Two of these belts control the X-axis, while the other two control the Y-axis.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Cooling":{"id":"projects/Crossant 235/Build Guide/Cooling","title":"Cooling","description":"Fan Selection","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Electronics":{"id":"projects/Crossant 235/Build Guide/Electronics","title":"Electronics","description":"When building a 3D printer, the electronics stage is where you are most likely to make mistakes. On this page, we will provide you with the necessary information to avoid harming yourself and your electronics.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Frame":{"id":"projects/Crossant 235/Build Guide/Frame","title":"Frame","description":"The frames must be assembled perfectly parallel to each other, as this plays a crucial role in the performance of the printer. On this page, we will discuss the two different frame options supported by the Crossant, the assembly methods (blind joint, corner bracket), and the tools you will need.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Gantry":{"id":"projects/Crossant 235/Build Guide/Gantry","title":"Gantry","description":"Here, you can find general information about the pulleys, idlers, shims, and tolerances for the Crossant.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Build Guide/Software":{"id":"projects/Crossant 235/Build Guide/Software","title":"Software","description":"The Crossant, like many other printers, uses Klipper firmware.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Initial Checks/Heating Elements":{"id":"projects/Crossant 235/Initial Checks/Heating Elements","title":"Heating Elements","description":"Ensuring the proper functioning of the heating elements in the Crossant is crucial for print quality. More importantly, following these steps helps prevent any risky situations from arising.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Initial Checks/Steppers & Homing":{"id":"projects/Crossant 235/Initial Checks/Steppers & Homing","title":"Steppers & Homing","description":"Endstops","sidebar":"tutorialSidebar"},"projects/Crossant 235/Material Guide":{"id":"projects/Crossant 235/Material Guide","title":"Material Guide","description":"During the design process of the Crossant 3D printer, we took care to select materials that are readily available in the market and of sufficient quality to easily meet our needs. This is a major reason why the printer is budget-friendly.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Print Files":{"id":"projects/Crossant 235/Print Files","title":"Print Files","description":"On this page, we\'ve covered the details about the 3D parts you need to print for the Crossant. This includes information on file naming conventions, print settings, material consumption, and more.","sidebar":"tutorialSidebar"},"projects/Crossant 235/Sheets":{"id":"projects/Crossant 235/Sheets","title":"Sheets","description":"We have prepared several different sheets for Crossant. You can see them below.","sidebar":"tutorialSidebar"}}}')}}]);