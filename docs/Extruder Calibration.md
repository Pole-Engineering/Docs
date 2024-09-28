import placeholder from '/static/img/placeholder.png';

# Extruder Calibration

Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don’t confuse this with the [extrusion multiplier](asd); one is a printer setting, while the other is a filament-specific adjustment.

## Why is it Important?

Extrusion calibration is crucial because it ensures that the printer extrudes and retracts the correct amount of filament during the printing process. Proper extrusion calibration leads to better print quality and improved mechanical properties of the printed object.

- **Prevents Over Extrusion**
- **Prevents Under Extrusion**
- **Enhances Print Quality**
- **Affects Retraction**

## How to Calibrate?

You can use one of the two methods outlined below, for extruder calibration;
:::caution
Make sure your hotend is not fully or partially clogged before the calibration. Clogs can cause wrong calibration.
:::

### Calibration Macro

We have prepared a macro that allows you to perform many steps of the manual extruder calibration method with a single button press. Below are the instructions:

- #### a) Firstable you need to add the following macro to your printer.cfg


  - ```properties showLineNumbers title="printer.cfg"
  ##############################################################
  ## Replace current "rotation distance" with the new value
  ##############################################################
  [gcode_macro _load_unload]
  gcode:
  {% set saved_extruder = printer.toolhead.extruder %}
  {% set EXTRUDER = params.EXTRUDER|default(saved_extruder)|lower %}
  {% set km = printer["gcode_macro _km_globals"] %}

  # Use the global min as default if provided, else use per extruder min + 5.

  {% set default_minimum = km.load_min_temp if km.load_min_temp else
  (printer.configfile.settings[EXTRUDER].min_extrude_temp + 5) %}
  {% if 'MINIMUM' in params %}
  {% set MINIMUM = params.MINIMUM|int %}

  # This is the special case for a filament change after an idle timeout.

  {% elif printer.pause_resume.is_paused and printer[EXTRUDER].target == 0 and
  printer["gcode_macro resume"].saved_extruder_temp %}
    ```
- #### b) Write the macro's name to console to initiate the macro


  - ```properties showLineNumbers title="Console"
  EXTRUDER_CALIBRATION
     ```
- #### c) Place the tape


  - <div style={{textAlign: 'center'}}>

  <img src={placeholder} alt="overview" style={{width: 1000, opacity: 1}}/>
  </div>

You have obtained the necessary values for calibration! You can now proceed to the [calculation](/Extruder%20Calibration#how-to-calculate) tab to finalize the calibration process.

### Manual Calibration

- #### a) Let the printer to extrude 101mm or higher.


  - ```properties showLineNumbers title="printer.cfg"
  ##########################################################################################
  ## Define "max_extrude_only_distance" to extruder section and set it to "101" or more
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
- #### b) Heat up your hotend. 


  - ```properties showLineNumbers title="Console"
    ###############################################################
    ##  Change the [XXX] to the temperature you want to heat up  ##
    ###############################################################

    M104 S[XXX]             ; Heat up the hotend to [XXX]c° 
    ```
  - :::info Cold Tuning
    You can calibrate your extruder while the nozzle is cold but that requires to *removing the nozzle* for the direct drive and *removing ptfe tube* for the bowden setup.
    You need to define `min_extrude_temp:0`under `[extruder]` section in the `printer.cfg`
    :::
- #### c) Extrude a bit to enable the stepper.


  - ```properties showLineNumbers title="Console"
    M83             ; Set extruder to relative mode
    G1 E5 F50       ; Extrude 5mm
    ```
- #### d) Use your caliper to place a piece of tape to desired lenght, for example 110mm.


  - <div style={{textAlign: 'center'}}>
    <img src={placeholder} alt="overview" style={{width: 1000, opacity: 1}}/>
    </div>
  - :::tip
    For example, if you're going to do calibration over 100mm, place the tape to 110mm. This way, while extruding filament, you'll prevent the tape from getting inside the extruder.
    :::
- #### e) Extrude 100mms of filament.


  - ```properties title="Console"
  G1 E100 F60       ; Extrude 100mm
  ```
- #### f) Measure the distance between the tape and extruder.
- Measure the distance between the filament entry point of the extruder and the tape using calipers. In our example, we marked it at 110 mm and extruded 100 mm of filament. The measured distance came out to be 97.6 mm.

  - <div style={{textAlign: 'center'}}>
    <img src={placeholder} alt="overview" style={{width: 1000, opacity: 1}}/>
    </div>

## How to Calculate?

We offer you two different options to calculate your new rotation distance. The first option allows you to calculate it by plugging your measured values into the formula, while the second option provides a Klipper macro.

Rotation distance is calculated by this simple formula below:

$$
New Rotation Distance = {(Current Rotation Distance × Requested Length) \over (Measured Filament Length - 10)}

$$

:::caution
Don't forget that you placed the tape 10 mm higher than where it should be, so you need to subtract 10 mm from the measured filament length.
:::

### Manual Method

You can calculate your new rotation distance value by yourself using calculator.

- ### Calculation

  - #### When we plug the actual values into the formula:
    $$
    New Rotation Distance = {(24.3 × 100) \over (107 - 10) } = {2430 \over 97 } = 25,051
    $$

    According to our calculations, our new rotation distance value is `25,051`
  - #### Replace the rotation distance with the new value that you have calculated.
  - ```properties showLineNumbers title="printer.cfg"
    ###############################################################
    ##  Replace current "rotation distance" with the new value   ##
    ###############################################################
    [extruder]
    #step_pin: PG12
    #dir_pin: PG11
    #enable_pin: !PG13
    #microsteps: 16
    rotation_distance: 25.051         ; Replace the rotation distance value
    #nozzle_diameter: 0.400
    #max_extrude_only_distance:101
    #filament_diameter: 1.750
    #heater_pin: PB1 # Heat0
    #sensor_pin:  PC1 # T0 Header
    #sensor_type: EPCOS 100K B57560G104F
    ```

### Automated Method

If you use the macros below, the macro itself will handle tasks like heating the hotend and extruding filament. You just need to input the starting values for temperature and the requested filament length. In the other macro, you enter the measured length and how many millimeters were extruded, and the macro will calculate the new rotation distance for you. The new rotation distance will be displayed in the console.

- #### Add the macro below to your printer.cfg

  - ```properties showLineNumbers title="printer.cfg"
    ##############################################################
    ##  Replace current "rotation distance" with the new value  ##
    ##############################################################
    [gcode_macro _load_unload]
    gcode:
      {% set saved_extruder = printer.toolhead.extruder %}
      {% set EXTRUDER = params.EXTRUDER|default(saved_extruder)|lower %}
      {% set km = printer["gcode_macro _km_globals"] %}
      # Use the global min as default if provided, else use per extruder min + 5.
      {% set default_minimum = km.load_min_temp if km.load_min_temp else
            (printer.configfile.settings[EXTRUDER].min_extrude_temp + 5) %}
      {% if 'MINIMUM' in params %}
        {% set MINIMUM = params.MINIMUM|int %}
      # This is the special case for a filament change after an idle timeout.
      {% elif printer.pause_resume.is_paused and printer[EXTRUDER].target == 0 and
              printer["gcode_macro resume"].saved_extruder_temp %}
        {% set MINIMUM = printer["gcode_macro resume"].saved_extruder_temp %}
      # Use the target temp if higher than the default.
      {% elif printer[EXTRUDER].target > default_minimum %}
        {% set MINIMUM = printer[EXTRUDER].target %}
      {% else %}
        {% set MINIMUM = default_minimum %}
      {% endif %}
      {% if MINIMUM < printer.configfile.settings[EXTRUDER].min_extrude_temp %}
        { action_raise_error("Extrude below minimum temp.") }
      {% elif printer.pause_resume.is_paused %}
        # Clear the saved E if we're (un-)loading while paused.
        SET_GCODE_VARIABLE MACRO=resume VARIABLE=saved_e VALUE="{0.0}"

- #### b) Write the macro's name to console to initiate the macro
   - ```properties showLineNumbers title="Console"
  EXTRUDER_CALIBRATION
```


