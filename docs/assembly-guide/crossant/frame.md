---
sidebar_position: 1
---

# 1. Frame Assembly

## Overview
After completing this guide, your printer's frame will be prepared for assembling the gantry and z-axis. Be patient and enjoy the assembly process!

:::tip 
Build the printer on flat surface and use locksmith angle to align the corners.
:::
![Frame](../../../static/img/frame-assembly/frame.PNG)

### Required Stuff

<table>
  <thead>
    <tr>
      <th>Material</th>
      <th>Quantity</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M6/M5x16mm Roundhead Bolts</td>
      <td>34x</td>
      <td>Depending on the profile type, you may need to use M5 or M6 bolt.</td>
    </tr>
    <tr>
      <td>M6/M5 Tap</td>
      <td>1x</td>
      <td>Depending on the profile type, you may need to use M5 or M6 tap.</td>
    </tr>
        <tr>
      <td>M4x10mm Sockethead Bolts</td>
      <td>8x</td>
      <td>For the corner joints.</td>
    </tr>
        <tr>
      <td>M4 T-Nut</td>
      <td>8x</td>
      <td>For the corner joints.</td>
    </tr>
    <tr>
      <td>3.5mm/4mm Hex Key</td>
      <td>1x</td>
      <td>Depending on the profile type, you may need to use 3.5mm or 4mm hex key.</td>
    </tr>
        <tr>
      <td>Corner Joint</td>
      <td>4x</td>
      <td>The corner joint to secure the extrusion that holding the middle Z-rail</td>
    </tr>
    <tr>
      <td>625ZZ</td>
      <td>3x</td>
      <td>The bearings to be used in the guide.</td>
    </tr>
    <tr>
      <td> <a href="https://github.com/Pole-Engineering/Crossant-235/tree/main/STLs/Tools" target="_blank" rel="noopener noreferrer">3D Printed Guide</a> </td>
      <td>1x</td>
      <td>3D Printed guide for drilling positions.</td>
    </tr>

  </tbody>
</table>

### Frame Dimensions
<img
  style={{width: 300, radius: 10}}
  src={require('../../../static/img/frame-assembly/frame_dimensions.png').default}
  alt="Example banner"
/>
<table>
  <thead>
    <tr>
      <th>Colors</th>
      <th>Dimensions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style={{ color: "#c30d0d" }}>Red</strong></td>
      <td>530mm</td>
    </tr>
    <tr>
      <td><strong style={{ color: "#0090ff" }}>Blue</strong></td>
      <td>350mm</td>
    </tr>
    <tr>
      <td><strong style={{ color: "#078901" }}>Green</strong></td>
      <td>300mm</td>
    </tr>
  </tbody>
</table>




 ## 1.1 Blind Joint
 > - a) You'll need to drill and tap the necessary holes for the blind joints. You can utilize the jig provided to you on [Github](https://github.com/Pole-Engineering/Crossant-235/tree/main/STLs/Tools) to ensure the holes are drilled in the correct positions.
 >
 > - Holes should be drilled on the 530mm extrusions at positions **10mm, 125mm, and 200mm** from the top and **10mm** from the bottom of the extrusion.
 >
 >
 >
 >![Frame](../../../static/img/frame-assembly/drilljig.PNG)
 >
 > - b) You need to tap both holes on all of the 350mm.
 >
 >![Frame](../../../static/img/frame-assembly/drilled-extrusions.PNG)
 >
 > - c) Drive the bolt into the tapped holes by approximately 10mm.
 >
 >![Frame](../../../static/img/frame-assembly/extrusion1.PNG)
 >
 >- d) Finally, pass the extrusion's slot over the bolt, securing it through the holes you've drilled 
 >
 >:::caution 
 >Tightening the bolts excessively can potentially damage the threads.
 >:::
 >
 >![Frame](../../../static/img/frame-assembly/frame-hex.PNG)

 ## 1.2 Assembly Process
> Here, we begin assembling the frame. Please pay careful attention to the steps.
> 
> ### Step 1
> - First, you need to attach the lowermost extrusions to the vertical ones using blind joints.
>
> ![Frame](../../../static/img/frame-assembly/step1.PNG)

> ### Step 2
> - Secure the extrusion that will support the middle Z-rail using corner brackets.
> - The extrusion should be centered right beneath the bottom profile. (175mm from both side)
> 
> ![Frame](../../../static/img/frame-assembly/step2.PNG)
 

> ### Step 3
> - Finally, slide all the other 350mm extrusions from the top into the slots of the 530mm extrusions and tighten the blind joints. 
> - Don't forget to add 2 more corner brackets for the middle Z-rail holder extrusion to secure to the upper extrusion.
> 
> ![Frame](../../../static/img/frame-assembly/step3.PNG)
>
 
 ## You've Done It!
  Congratulations, you have successfully assembled the frame. You can now proceed with the gantry and z-axis assembly process.