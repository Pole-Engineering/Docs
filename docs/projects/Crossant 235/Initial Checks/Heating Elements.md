import tempmonitor from '/img/tempmonitor.png';

>Ensuring the proper functioning of the heating elements in the Crossant is crucial for print quality. More importantly, following these steps helps prevent any risky situations from arising.

## Monitoring the Temperatures
>Before performing any calibration related to the heaters, make sure that the temperatures read through your interface (Mainsail or Fluidd) are reasonable. For example, it is not normal for your hotend to read 100°C when you first turn on the printer.
<div style={{textAlign: 'center'}}>
  <img src={tempmonitor} alt="overview" style={{width: 1000, opacity: 1}}/>
  </div>

### Checking
>To ensure that the extruder and heatbed are heating correctly, set a specific temperature value (e.g., 50°C) and check if they reach and maintain this temperature properly. If you haven't performed a PID tuning yet, it is normal for the temperature to be unstable.


## PID Tuning the Heaters
>PID calibration is necessary for the proper functioning of heater elements. PID (Proportional-Integral-Derivative) is a control algorithm used to maintain the temperature of heating elements at a target value.
- Initiate the PID calibration by :
- For the Hotend:
 ```shell
PID_CALIBRATE HEATER=extruder TARGET=220
- For the Heatbed
 ```shell
PID_CALIBRATE HEATER=heater_bed TARGET=80
>
> :::info
When performing PID tuning, if you are using a CPAP fan, set the fan to 30%. If you are using a 5015 fan, set the fan to 70% for accurate PID tuning.
:::
>
>- Save the config by:
 ```shell
SAVE_CONFIG

