

# TMC Tuning
For TMC tuning, you'll need the [TMC Autotune](/Printing%20Guide/Useful%20Add-ons#tmc-autotune-1) add-on. This extension generates optimal values for most registers of TMC stepper motor drivers by using the motor’s datasheet specifications and the user’s selected tuning goal. By leveraging this data, the extension ensures that the motor operates efficiently and meets the user's specific requirements, whether the focus is on performance, noise reduction, or precision. Click [here](/Printing%20Guide/Useful%20Add-ons#installation-5) to see the installation guide.

:::tip skip to;
- #### [Config Details](/Printing%20Guide/TMC%20Tuning#config-details-1)
  - #### [Must be Included](/Printing%20Guide/TMC%20Tuning#must-be-included-1)
  - #### [Autotune Configuration](/Printing%20Guide/TMC%20Tuning#autotune-configuration-1)
  - #### [Defining Stepper](/Printing%20Guide/TMC%20Tuning#defining-stepper-1)
:::

## Config Details
### Must be Included
Your driver configurations should have following lines;
- #### Pins
- #### Currents (run,hold,homing currents)
- #### Interpolate
    - ```properties showLineNumbers title="printer.cfg"
    ####################################################
    ## Add `interpolate: true` in your driver configs ##
    ####################################################
    [tmc(XXXX) stepper(x)]
    interpolate: true
      ```
### Autotune Configuration
To enable autotuning for your TMC drivers and motors, add the following to your printer.cfg file. Be sure to adjust the motor names and modify or remove any sections as necessary. After making these changes, restart Klipper:

 - ```properties showLineNumbers title="printer.cfg"
    [autotune_tmc stepper_x]
    motor: ldo-42sth48-2004mah
    [autotune_tmc stepper_y]
    motor: ldo-42sth48-2004mah

    [autotune_tmc stepper_z]
    motor: ldo-42sth48-2004ac
    [autotune_tmc stepper_z1]
    motor: ldo-42sth48-2004ac
    [autotune_tmc stepper_z2]
    motor: ldo-42sth48-2004ac
    [autotune_tmc stepper_z3]
    motor: ldo-42sth48-2004ac

    [autotune_tmc extruder]
    motor: ldo-36sth20-1004ahg
      ```
    - :::info
     Check the [`motor_database.cfg`](https://github.com/andrewmcgr/klipper_tmc_autotune/blob/main/motor_database.cfg) file in the repository to see available steppers.
     :::
    - :::tip
      You can add several additional parameters into `[autotune_tmc]` section. Check their Github description to see available parameters.
      :::
### Defining Stepper
You can add your own stepper with adding the following section to `motor_database.cfg`.
  - ```properties showLineNumbers title="motor_database.cfg"
    ################################
    ## Change the required values ##
    ################################
    [motor_constants my_custom_motor]
    # Coil resistance, Ohms
    resistance: 0.00
    # Coil inductance, Henries
    inductance: 0.00
    # Holding torque, Nm
    holding_torque: 0.00
    # Nominal rated current, Amps
    max_current: 0.00
    # Steps per revolution (1.8deg motors use 200, 0.9deg motors use 400)
    steps_per_revolution: 200
      ```

And you are all set!