---
sidebar_position: 1
---
import ghosting from '/static/img/ghosting.png';
import pid from '/static/img/pid.png';
import heatgraph from '/static/img/heatgraph.png';

# Printer Tuning
>There are certain guidelines you needss to follow to get high-quality prints and, more importantly, prints with accurate dimensions. We have compiled them for you on this page.

## Temperature
>Different types of filament need to be printed within specific temperature ranges. For example, PLA should be printed at 200-220°C, while ABS should be printed at 230-260°C. To find the best value for the filament you have, you can print a temperature tower and observe the results to determine which temperature gives the best outcome.
>
><div style={{textAlign: 'center'}}>
  <img src={heatgraph} alt="overview" style={{width: 1200, opacity: 1}}/>
  </div>

## Chamber Temperature
>Filaments like ABS and ASA require a high ambient temperatures when printing; otherwise, the filament can warp or lift off the bed, and layers may separate. To prevent this, you should print in an enclosed printer. PLA, on the other hand, does not favor high ambient temperatures, making it more difficult to print in an enclosed printer.

## Retraction
>Depending on the type of filament you use, you may need to adjust the retraction settings. For example, PETG does not perform as well with retraction compared to other filaments. To find the best retraction distance, you can print a retraction tower and choose the setting that gives the best result.

## Pressure Advance
>Pressure Advance is a feature in 3D printing that helps to manage the pressure of the filament inside the nozzle during printing. It is particularly useful for improving print quality by addressing issues related to filament oozing or stringing, especially during sudden changes in print direction.
>
>You can use the Pressure Advance tuning from **[Ellis' Print Tuning Guide](https://ellis3dp.com/Print-Tuning-Guide/articles/pressure_linear_advance/pattern_method.html)** for adjusting the Pressure Advance settings.

## Extrusion Multiplier
>When printing, it may be necessary to adjust the extrusion multiplier to ensure the printer extrudes the correct amount of material. In Klipper, this setting is adjusted by changing the rotation distance in the configuration file. 
>
>Click [here](https://pole.enginering) for the necessary information and a calculation tool.


## Input Shaper
>Input Shaper is a feature that is designed to reduce vibrations and resonances during printing, improving print quality by compensating for these mechanical vibrations. You can see more about input shaper by clicking **[here](https://www.klipper3d.org/Measuring_Resonances.html)**.
>
>When printing at high speeds, you may encounter a surface defect known as ghosting or ringing. On the left, you can see a print without this defect, while on the right, you can see the effect of the defect.
>
><div style={{textAlign: 'center'}}>
  <img src={ghosting} alt="overview" style={{width: 600, opacity: 1}}/>
  </div>

## PID Calibration
>PID tuning is particularly used for temperature control. It ensures that the heating components (nozzle and heat bed) maintain the target temperatures consistently. This process enhances print quality and ensures consistent material extrusion. Click [here](https://www.klipper3d.org/Config_checks.html?h=pid#calibrate-pid-settings) to acces more detailed informations.
>
><div style={{textAlign: 'center'}}>
  <img src={pid} alt="overview" style={{width: 1200, opacity: 1}}/>
  </div>

