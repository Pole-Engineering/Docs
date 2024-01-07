---
sidebar_position: 5
---



# 5. Electronics/Wiring
## Overview
 We have reached the electronics section, but first, carefully read the information below.

### AC Voltage

>Before working with AC voltage, make sure the printer is unplugged, and ensure that all capacitors are discharged.
>
> :::caution
Before performing any tasks with AC voltage, please remember to wear insulated gloves. Contact with AC voltage can lead to health issues.
:::
>
> There are global standards established by [IEC](https://www.iec.ch/homepage) for AC voltage. You can see the standards for your region in the table below. Paying attention to the table below is crucial; otherwise, you may come into contact with AC voltage, and that would not be good at all.
>
> Be careful not to touch AC voltage anywhere, as it can damage your components.
> 
> | Wire & cable  | US/Canada                   | Europe & UK   | China & Russia | Oceania       | Japan         | India         |
 | -------------- | --------------------------- | ------------- | -------------- | ------------- | ------------- | ------------- |
 | Live / Line    | ![black wire] ![red wire]   | ![brown wire] | ![yellow wire] | ![red wire]   | ![black wire] | ![red wire]   |
 | Neutral        | ![white wire] ![grey wire]  | ![blue wire]  | ![black wire]  | ![black wire] | ![white wire] | ![black wire] |
 | Ground / Earth | ![green wire] ![earth wire] | ![earth wire] | ![earth wire]  | ![green wire] | ![green wire] | ![earth wire] |
>
> :::danger
Before plugging in the printer, be sure to properly adjust the voltage setting on the side of the power supply unit. Otherwise, there is a high likelihood of damaging the power supply unit.
<img
  style={{width: 300, radius: 10}}
  src={require('../../../static/img/electronics/voltage-selector.png').default}
  alt="Example banner" 
/>
:::

### DC Voltage
>When it comes to the DC voltage section, it's important to note that there is no globally standardized color code for DC voltage. We provided the color codes for better understanding of wiring diagrams, but you are not obligated to follow these colors when making connections.
>
>| Potential | Colour                       | Note        |
| --------- | ----------------------------- | --------    |
| Ground    | ![black wire]                 | Ground Lane |
| 5V        | ![red wire]                   | 5V Lane     |
| Signals   | ![white wire]                 | Signals     |
| 12V       | ![yellow wire]                | 12V Lane    |
| 24V       | ![orange wire]                | 24V Lane    |
| 48V       | ![purple wire]                | 48V Lane    |

### Wire Thickness
>You should consider the currents that the cables will carry when selecting the thickness of the cables. You can refer to the table below to determine which thickness to use for each application.
>
>| Gauge     |     Section   |            Note                         |                  
| --------- | --------------|-----------------------------------------| 
| 14 AWG    | 1.5mm2        |Mostly used power lines                  |
| 18 AWG    | 1mm2          |Used for heatbed and hotend              |
| 24 AWG    | 0.5mm2        |Used for all other low voltage appliance |






[black wire]: /img/electronics/wire-black.png
[blue wire]: /img/electronics/wire-blue.png
[brown wire]: /img/electronics/wire-brown.png
[green wire]: /img/electronics/wire-green.png
[earth wire]: /img/electronics/wire-green-yellow.png
[grey wire]: /img/electronics/wire-grey.png
[orange wire]: /img/electronics/wire-orange.png
[purple wire]: /img/electronics/wire-purple.png
[red wire]: /img/electronics/wire-red.png
[white wire]: /img/electronics/wire-white.png
[yellow wire]: /img/electronics/wire-yellow.png
[CEI/IEC 60446]: https://webstore.iec.ch/p-preview/info_iec60446%7Bed4.0%7Den.pdf
