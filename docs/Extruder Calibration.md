import placeholder from '/static/img/placeholder.png';

# Extruder Calibration
Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don’t confuse this with the [extrusion multiplier](asd); one is a printer setting, while the other is a filament-specific adjustment.

## How to Calibrate?
You can follow the instructions below to calibrate your extruder.

- ### a) Let the printer to extrude 101mm or higher.
   - ```properties title="printer.cfg"
    ##########################################################################################
    ##  Define "max_extrude_only_distance" to extruder section and set it to "101" or more  ##
    ##########################################################################################

     [extruder]
    #step_pin: PG12
    #dir_pin: PG11
    #enable_pin: !PG13
    #microsteps: 16
    #rotation_distance: 33.500
    #nozzle_diameter: 0.400
    max_extrude_only_distance:101
    #filament_diameter: 1.750
    #heater_pin: PB1 # Heat0
    #sensor_pin:  PC1 # T0 Header
    #sensor_type: EPCOS 100K B57560G104F
    ``` 
- ### b) Heat up your hotend.
  - ```properties title="Console"
    ###############################################################
    ##  Change the [XXX] to the temperature you want to heat up  ##
    ###############################################################

    M104 S[XXX]             ; Heat up the hotend to [XXX]c° 
    ```
  - :::info Cold Tuning
  You can calibrate your extruder while the nozzle is cold but that requires to *removing the nozzle* for the direct drive and *removing ptfe tube* for the bowden setup.
  You need to define `min_extrude_temp:0`under `[extruder]` section in the `printer.cfg`
  :::

- ## c) Extrude a bit to enable the stepper.
   
  - ```properties title="Console"
    M83             ; Set extruder to relative mode
    G1 E5 F50       ; Extrude 5mm
    ```      

- ### d) Use your caliper to place a piece of tape to desired lenght, for example 110mm.

  - <div style={{textAlign: 'center'}}>
    <img src={placeholder} alt="overview" style={{width: 1000, opacity: 1}}/>
    </div>

   - :::tip
If you're going to do calibration over 100mm, tape is confined to 110mm. This way, while extruding filament, you'll prevent the tape from getting inside the extruder.
:::

- ### e) Extrude 100mms of filament.
    - ```properties title="Console"
    G1 E100 F60       ; Extrude 100mm
    ```      
- ### f) Measure the distance between the tape and extruder.
-   Measure the distance between the filament entry point of the extruder and the tape using calipers. In our example, we marked it at 110 mm and extruded 100 mm of filament. The measured distance came out to be 97.6 mm.

    - <div style={{textAlign: 'center'}}>
      <img src={placeholder} alt="overview" style={{width: 1000, opacity: 1}}/>
      </div>
    
    - :::caution
    asd
    :::
## How to Calculate?
### Manual Method
### Automated Method
