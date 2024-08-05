
import coolingfans from '/img/coolingfans.png';

## Fan Selection
>When selecting a fan for a specific application, the choice of bearing type is a critical decision that significantly impacts the fan's performance, lifespan, and noise level. Axial and blower fans, two common types, are typically equipped with either sleeve or dual ball bearings.

### Sleeve Bearings
>A simple design consisting of a cylindrical sleeve or bushing that supports a rotating shaft. Lubrication is provided by oil or grease.

### Dual Ball Bearings
>A more complex design featuring two rows of ball bearings that support the rotating shaft. A cage separates the balls and lubrication is provided by grease.

### Which One to Choose?
>Sleeve and dual ball bearings are two common types used in fans. Sleeve bearings are simpler, less expensive, and quieter at low speeds, but they have a shorter lifespan and are more sensitive to temperature and contaminants. Dual ball bearings, on the other hand, offer longer life, higher speed capabilities, and better resistance to environmental factors, but they are more costly. 

## Cooling Fans
>There are four types of cooling fans you can use, each with its own advantages and disadvantages. Below, you can find what these fans are:
><div style={{textAlign: 'center'}}>
  <img src={coolingfans} alt="overview" style={{width: 1000, opacity: 1}}/>
  </div>

### WS7040
>Since WS7040 is not mounted on the toolhead, the weight impact is only that of the CPAP hose carrying the air from the fan to the toolhead. The noise level is high, but the air pressure is quite substantial.
>
>When purchased from a site like AliExpress or BIQU, it usually comes with its driver, so you can connect it to your motherboard and use it as is.


### Roborock Fan
>The Roborock fan we refer to is actually the fan that provides suction for Roborock brand robot vacuums. While it shares many features with the WS7040, you need to make or have a driver for the Roborock fan made through a PCB production site like JLCPCB using a Gerber file. Although the total cost is lower than the WS7040, it is a bit more labor-intensive. However, in the end, both deliver very similar performance.

### 5015 Blower
>The 5015 blower fan is mounting directly on the toolhead same as 4028 fan. Its reduced weight minimizes the load on the toolhead compared to 4028 fan so resulting in less impact on input shaper performance compared to the 4028. However, this weight advantage comes at the cost of lower airflow compared to other options.

### Delta 4028
>The Delta 4028, commonly referred to as a server fan, generates a significantly high air pressure as well. Nevertheless, its mounting on the toolhead introduces additional mass to the system, consequently deteriorating the input shaper results.

