
import slicers from '/img/slicers.png';

# Print Files
>On this page, we've covered the details about the 3D parts you need to print for the Crossant. This includes information on file naming conventions, print settings, material consumption, and more.

## Print Settings
>We recommend using the 'durable' settings for optimal strength, but the parts will also work if printed with the 'weaker' option. However, they will be noticeably less robust.
<table>
  <thead>
    <tr>
      <th>Settings</th>
      <th>Durable (Recommended)</th>
      <th>Weaker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Layer Height</td>
      <td>0.2mm</td>
      <td>0.28mm</td>
    </tr>
    <tr>
      <td>Line Width</td>
      <td>0.4mm</td>
      <td>0.5mm</td>
    </tr>
    <tr>
      <td>Wall Count</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Top &amp; Bottom Layer Count</td>
      <td>5</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Infill Pattern</td>
      <td>Honeycomb, Triangle, Cubic</td>
      <td>Gyriod, Grid, Cubic</td>
    </tr>
    <tr>
      <td>Infill Density</td>
      <td>**%35**</td>
      <td>**%25**</td>
    </tr>
  </tbody>
</table>

## File Namings
>One of the biggest reasons Crossant is user-friendly is its file naming conventions. By simply reading the file names, you can easily understand what the part is, how many are needed, its color, and tolerance.
<table>
  <thead>
    <tr>
      <th>Format</th>
      <th>Mean</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong style={{ color: "#ffb201" }}>xy_motor_mounts</strong>_x4.stl
      </td>
      <td>File Name</td>
    </tr>
    <tr>
      <td>
        xy_motor_mounts_<strong style={{ color: "#ffb201" }}>x2</strong>.stl
      </td>
      <td>Quantity</td>
    </tr>
    <tr>
     <td>
       xy_joint_<strong style={{ color: "#ffb201" }}>[+0.2]</strong>_x4.stl
      </td>
      <td>Tolerance</td>
    </tr>
    <td>
        <strong style={{ color: "#ffb201" }}>[a]</strong>_top_shear_x4.stl
      </td>
      <td>Accent Color 1</td>
    <tr>
      <td>
        <strong style={{ color: "#ffb201" }}>[b]</strong>_z_joint_rear.stl
      </td>
      <td>Accent Color 2</td>
    </tr>
  </tbody>
</table>

## Supports & Printing Order
>You don't need to worry about printing order and supports. All 3D parts are designed to be printable without supports and have been exported in the correct printing order. Simply load the STL files into your slicer and start printing!
>:::caution
In some parts, holes are covered with two layers. This is because the slicer treats them as bridges and prints them that way. These two layers significantly simplify the printing process and reduce the need for supports.
>
You can easily break these thin layers with something like a screwdriver and then assemble your part.
:::

## Estimated Material Usage
>For the Crossant 235, you will need approximately **1.7 kg** of filament in total. This includes **1.3 kg of primary color** filament and** 0.5 kg of secondary color** filament. While these values may vary based on your specific print settings, we recommend sticking to the suggested settings to ensure optimal results. You can click [here](https://docs.google.com/spreadsheets/d/1RtJ5HZQiUQ9FG7aCbiwWdeYn1X8yEAY99f9AgUKDLBo/edit?usp=sharing) to acces the estimated material usage sheet which is still WIP.

## Slicers
>You can choose the slicer that best fits your needs from the three we recommend: **[PrusaSlicer](https://github.com/prusa3d/PrusaSlicer)**, **[SuperSlicer](https://github.com/supermerill/SuperSlicer)**, and **[OrcaSlicer](https://github.com/SoftFever/OrcaSlicer)**. Both SuperSlicer and OrcaSlicer are open-source projects developed based on PrusaSlicer. Therefore, while the use of all three slicers is similar, each has its own feature advantages. For more detailed information, you can refer to the documentation of each slicer.

<div style={{textAlign: 'center'}}>
  <img src={slicers} alt="overview" style={{width: 1000, opacity: 1}}/>
</div>
