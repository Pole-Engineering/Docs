---
sidebar_position: 1
---

import extrusions from '/img/extrusions.png';
import terminology from '/img/terminology.png';

# Material Guide
>During the design process of the Crossant 3D printer, we took care to select materials that are readily available in the market and of sufficient quality to easily meet our needs. This is a major reason why the printer is budget-friendly.

## BOM (Bill of Materials)

### Parts
>You can easily access the BOM for the Crossant 235 [here](https://docs.google.com/spreadsheets/d/1u00vXnCiODAP5KC5nTiRgINJnbgC2SU4T4h_pg1mv24/edit?gid=0#gid=0) or by joining our [Discord](https://discord.gg/poleengineering) server and using the bot. The BOM on Google Sheets lists all the parts for the different configurations of the printer. You should select the parts according to the configuration you are building. On the far right, you can see the prices of the parts and the total cost at the bottom. Please note that the BOM is still a work in progress (WIP).

### Fasteners
>In the [fasteners BOM](https://docs.google.com/spreadsheets/d/1u00vXnCiODAP5KC5nTiRgINJnbgC2SU4T4h_pg1mv24/edit?gid=67070895#gid=67070895), like in the regular BOM, it specifies where to source the different fasteners based on the various configurations. This document is also a work in progress (WIP).

## Extrusions

### Extrusion Selections
>In the market, there are two different types of extrusions available: one type has M5 threaded holes for blind joints, while the other type has M6 threaded holes. When purchasing bolts for blind joints and when printing parts, it's important to pay attention to which type of extrusion you have.
>
>:::caution
Make sure that the extrusions you purchase are T-slot. Since the width of the MGN9 is small, you may encounter issues when using it with V-slot extrusions.
:::
<div style={{textAlign: 'center'}}>
  <img src={extrusions} alt="overview" style={{width: 1000, opacity: 1}}/>
</div>


### Misumi Terminology
>Let's break down the terminology that is used by **[Misumi](https://us.misumi-ec.com/)**.
<div style={{textAlign: 'center'}}>
  <img src={terminology} alt="overview" style={{width: 1000, opacity: 1}}/>
</div>
>
>**HFSB5** indicates the type of extrusion in metric units, **2020** specifies the extrusion's dimensions (20mm x 20mm), 530 indicates the length in mm, and **AP10, BP115, CP190, DP520** denote the positions for access holes for blind joints. If the suffix **TPW** were present, it would mean that both ends of the extrusion are tapped for M5 threads. This naming convention allows you to understand the type, dimensions, length, and specific drilling locations on the extrusion just by reading the file name.
>
>If you're on a budget, you can save money by drilling the access holes and tapping the ends of the extrusion yourself, thereby reducing costs.

## Materials and Prints

### Which Filaments to Print?
> ### [ABS](https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene)
>You need to print most of the parts with ABS material. ABS provides high temperature resistance compared with other common 3D printing materials. ABS's glass transition temperature (Tg)  is around 105°C (221°F) so its ideal for the parts that exposed to heat such as motor mounts. We highly recommend ABS for the 3D printed parts.
> ### [ASA](https://en.wikipedia.org/wiki/Acrylonitrile_butadiene_styrene)
>ASA shows very similar properties to ABS filament. The main differences between them are ASA's UV light resistance and its heat resistance of 110°C (230°F).
> ### [PETG](https://en.wikipedia.org/wiki/Polyethylene_terephthalate)
>PETG might be the second best option to print parts out of it. PETG has glass transition temperature (Tg) around 85°C (185°F). It's not recommended for enclosed printers.
> ### [PLA](https://en.wikipedia.org/wiki/Polylactic_acid)
>PLA is the worst option to use for areas exposed to heat because of the low glass transition temperature(Tg). PLA's glass transition (Tg) temperature is around 60°C (140°F). But you can still use PLA for panel trims or skirts.
> ### [CF or GF Blends](https://en.wikipedia.org/wiki/Carbon_fibers)
>You can use CF (Carbon Fiber) or GF (Glass Fiber) blends of any filament you choose, but remember that CF filaments can be abrasive. It's essential to use a steel nozzle instead of a brass nozzle to prevent wear when printing with these materials.

### Print Settings
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
      <td>%35</td>
      <td>%25</td>
    </tr>
  </tbody>
</table>

### File Namings
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

### Supports & Printing Order
>You don't need to worry about printing order and supports. All 3D parts are designed to be printable without supports and have been exported in the correct printing order. Simply load the STL files into your slicer and start printing!

### Estimated Material Usage
>For the Crossant 235, you will need approximately **1.7 kg** of filament in total. This includes **1.3 kg of primary color** filament and** 0.5 kg of secondary color** filament. While these values may vary based on your specific print settings, we recommend sticking to the suggested settings to ensure optimal results. You can click [here](https://docs.google.com/spreadsheets/d/1RtJ5HZQiUQ9FG7aCbiwWdeYn1X8yEAY99f9AgUKDLBo/edit?usp=sharing) to acces the estimated material usage sheet which is still WIP.

## Community and Official Mods
>You can view all the mods made for the Crossant at [mods.pole.engineering](https://mods.pole.engineering). Additionally, there is a forum page dedicated to mods on our [Discord](https://https:discord.gg/poleengineering) server. If you want to download mods for the Crossant, be sure to check these out. If you want to upload your mods, click [here](https://mods.pole.engineering/upload) to get the necessary information.

## Tools
> Having the tools listed will significantly ease your work while building the Crossant.
> - Caliper
> - Multimeter
> - Crim Tools
> - Crimps
> - Hex Key Set
> - Set of Screwdrivers
> - Locksmith Angle
> - Wire Stripper
> - Soldering Iron _(Not mandatory but good to have one)_




