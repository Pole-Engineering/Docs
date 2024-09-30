

# Temperature Controls
Here, we will explain how you can tune two different temperature control methods. One is the PID (Proportional-Integral-Derivative) method, which is natively supported by Klipper, and the other is the MPC (Model Predictive Control) method found in [DangerKlipper (DK)](https://github.com/DangerKlippers/danger-klipper/tree/bleeding-edge-v2), a modified version of Klipper.

:::tip skip to;
- #### [What is the Advantage of the MPC over PID?](/Printing%20Guide/Temperature%20Controls#what-is-the-advantage-of-the-mpc-over-pid)
- #### [PID Tuning](/Printing%20Guide/Temperature%20Controls#pid-tuning)
- #### [MPC (Model Predictive Control)](/Printing%20Guide/Temperature%20Controls#mpc-model-predictive-control)
  - #### [Advantages of MPC over PID](/Printing%20Guide/Temperature%20Controls#advantages-of-mpc-over-pid)
  - #### [Configuration Changes](/Printing%20Guide/Temperature%20Controls#configuration-changes)
  - #### [PTC Heater Power](/Printing%20Guide/Temperature%20Controls#ptc-heater-power)
  - #### [Filament Physical Properties](/Printing%20Guide/Temperature%20Controls#filament-physical-properties)
  - #### [Calibration Process](/Printing%20Guide/Temperature%20Controls#calibration-process)
:::

## What is the Advantage of the MPC over PID?
MPC has a few advantages over PID, here you can see few of them below;
- The current estimate of the surrounding ambient temperature.
- The influence of filament feed rate on heat loss to the filament, assuming the filament starts at the ambient air temperature.
- The impact of the fan on heat dissipation into the surrounding air.
- The most recent power setting applied to the hotend.

## PID Tuning
PID calibration is necessary for the proper functioning of heater elements. PID (Proportional-Integral-Derivative) is a control algorithm used to maintain the temperature of heating elements at a target value.
- #### a) Initiate the PID calibration by :
  -  For the Hotend:
     - ```properties showLineNumbers title="Console"
    PID_CALIBRATE HEATER=extruder TARGET=220
       ```

  - For the Heatbed
    - ```properties showLineNumbers title="Console"
    PID_CALIBRATE HEATER=heat_bed TARGET=80
      ```

:::info
When performing PID tuning, if you are using a CPAP fan, set the fan to 50%. If you are using a 5015 fan, set the fan to 100% for accurate PID tuning.
:::
 - #### b) Initiate the PID calibration by :   
    - Save the config by:
        - ```properties showLineNumbers title="Console"
        SAVE_CONFIG

:::tip PID Macro
You can add the macros below for easier PID tunes for the future.

```properties showLineNumbers title="Console"
[gcode_macro PID_EXTRUDER]
gcode:
    M117 PID Tuning Extruder to 220 C
    PID_CALIBRATE HEATER=extruder TARGET=220
    TURN_OFF_HEATERS 
    SAVE_CONFIG

[gcode_macro PID_BED]
gcode:
    M117 PID Tuning Bed to 80 C
    PID_CALIBRATE HEATER=heater_bed TARGET=80
    TURN_OFF_HEATERS 
    SAVE_CONFIG
```
:::

## MPC (Model Predictive Control)
Model Predictive Control (MPC) is an advanced temperature control method that offers a proactive alternative to traditional PID control. By using a system model, MPC simulates the hotend's temperature and adjusts the heater power to maintain the target temperature.

Unlike reactive methods, MPC anticipates temperature fluctuations by accounting for factors like thermal mass, heater power, heat loss to ambient air and fans, and heat transfer into the filament. This allows MPC to predict heat dissipation and adjust heater power accordingly, resulting in more stable temperature control.

### Advantages of MPC over PID:

- **Faster response:** MPC reacts quickly to changes in fan speed or flow rate.
- **Wider range:** Once calibrated, MPC works well across different printing temperatures.
- **Easier calibration:** Simplified compared to PID.
- **Sensor compatibility:** Works with any hotend sensor, even those with noisy readings.
- **Versatile heater support:** Effective with both cartridge and PTC heaters.
- **Flow adaptability:** Manages both high and low flow hotends with consistent temperature control.

### Configuration Changes
To use MPC as the temperature controller for the extruder use the following basic configuration block.

```properties showLineNumbers title="printer.cfg"
[extruder]
control: mpc                        ; The temperature control method
heater_power: 50                    ; The nameplate heater power in watts
cooling_fan: fan                    ; Fan that is cooling extruded filament and the hotend
filament_diameter: 1.75             ; Filament diameter
filament_density: 1.20              ; Material density of the filament being printed.
filament_heat_capacity: 1.8         ; Material specific heat capacity of the filament being printed.
```

### PTC Heater Power
For PTC-style heaters, it is recommended to set `heater_power:(XX)` at the standard printing temperature for your printer. Below are some common PTC heaters for reference. If your specific heater isn't listed, the manufacturer should provide a temperature and power curve.

| Heater Temp (C) | Rapido 2 (W) | Rapido 1 (W) | Dragon Ace old (W) | Dragon Ace new (W) | Revo 40 (W) |Revo 60 (W) |
|:---------------:|:------------:|:------------:|:------------------:|:------------------:|:-----------:|:----------:|
| 180             | 72           | 52           | 51                 | 66                 | 30          |45          |
| 200             | 70           | 51           | 48                 | 63                 | 29          |44          |
| 220             | 67           | 50           | 46                 | 60                 | 28          |43          |
| 240             | 65           | 49           | 44                 | 58                 | 28          |42          |
| 260             | 64           | 48           | 43                 | 55                 | 27          |40          |
| 280             | 62           | 47           | 41                 | 53                 | 27          |39          |
| 300             | 60           | 46           | 39                 | 51                 | 26          |38          |

### Filament Physical Properties
MPC performs optimally when it knows the energy required (in Joules) to heat 1mm of filament by 1°C. The material values provided in the tables below are sourced from popular filament manufacturers and material data references. These values are adequate for MPC to enable the FFF feature.
  
  - | Material | Density [g/cm³] | Specific heat [J/g/K] |
    | -------- |:---------------:|:---------------------:|
    | PLA      | 1.25            | 1.8 - 2.2             |
    | PETG     | 1.27            | 1.7 - 2.2             |
    | PC+ABS   | 1.15            | 1.5 - 2.2             |
    | ABS      | 1.06            | 1.25 - 2.4            |
    | ASA      | 1.07            | 1.3 - 2.1             |
    | PA6      | 1.12            | 2 - 2.5               |
    | PA       | 1.15            | 2 - 2.5               |
    | PC       | 1.20            | 1.1 - 1.9             |
    | TPU      | 1.21            | 1.5 - 2               |
    | TPU-90A  | 1.15            | 1.5 - 2               |
    | TPU-95A  | 1.22            | 1.5 - 2               |
    | ABS-CF   | 1.11            | 1.8 - 2.2             |
    | ASA-CF   | 1.11            | 1.3 - 2.1             |
    | PA6-CF   | 1.19            | 2 - 2.5               |
    | PC+ABS-CF| 1.22            | 1.5 - 2.2             |
    | PC+CF    | 1.36            | 1.1 - 1.9             |
    | PLA-CF   | 1.29            | 1.8 - 2.2             |
    | PETG-CF  | 1.30            | 1.7 - 2.2             |  

### Calibration Process
The MPC calibration routine needs to be executed for each heater that will be controlled by MPC to establish the model parameters. For successful calibration, the extruder must be capable of reaching 200°C. Calibration is carried out using the following G-code command.
- #### a) Initiate the Calibration with Followin Command
    - ````properties showLineNumbers title="Console"
        MPC_CALIBRATE HEATER=<heater> [TARGET=<temperature>] [FAN_BREAKPOINTS=<value>]
      ````
        - `HEATER=<heater>`:  
            The extruder heater to be calibrated.  
            
        - `TARGET=<temperature>`:  
            _Default Value:200°C_  
            Sets the calibration temperature. The default of 200C is a good target for the extruder. MPC calibration is temperature independent, so calibrating the extruder at higher temperatures will not necessarily produce better model parameters. This is an area of exploration for advanced users.  
            
        - `FAN_BREAKPOINTS=<value>`:  
            _Default Value: 3_  
            This setting determines the number of fan setpoints to test during calibration. You can specify an arbitrary number of breakpoints; for example, using 7 breakpoints would result in fan speeds of (0%, 16%, 33%, 50%, 66%, 83%, 100%). It is advisable to choose a number that includes one or more test points below the lowest fan speed typically used. For instance, if the lowest commonly used fan speed is 20%, it is recommended to use 11 breakpoints to test at 10% and 20% fan speeds within the lower range.

     :::info
     Ensure that the part cooling fan is off before starting calibration.
     :::

- #### b) Save Config
    - ````properties showLineNumbers title="Console"
        SAVE_CONFIG
      ````

And you’re all set! For more information and additional features, check the DangerKlipper documentation by clicking [here](https://dangerklipper.io/MPC.html?h=mpc#mpc-algorithm).
