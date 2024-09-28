
# Input Shaper
Input shaping is a technique to reduce or eliminate vibrations (also known as resonance) that occur when the printer moves at high accels. These vibrations can cause visible print defects such as ringing or ghosting, where the surface of the print shows repeating patterns or distortions, especially around corners or sharp changes in direction.

:::info
### Should be Done Before
- [Extruder Calibration](/Extruder%20Calibration) must be done.
- [Extrusion Multiplier](/Extruder%20Calibration) must be done.
- [Pressure Advance](/Extruder%20Calibration) must be done.
:::

## How it Works?
Input shaping works by adjusting the motion commands sent to the printer’s motors, pre-compensating for these vibrations. Essentially, it modifies the acceleration and deceleration profile of the printer’s movements to cancel out the resonance frequencies, allowing higher accelerations without introducing print defects.

## Why is it Important?
Input shaping is important in 3D printing because it directly addresses the problem of vibrations or resonance during high-speed movements, leading to significant improvements in print quality and performance. Here are the key reasons why input shaping is crucial:
 - **Reduces Ringing and Ghosting**
 - **Enables Higher Print Speeds**
 - **Improves Dimensional Accuracy**
 - **Enhances Surface Quality**
 
## How to Tune Input Shaper?
Unlike other calibrations, input shaping is more specific to Klipper firmware and requires the installation of certain packages. Below, you’ll find a step-by-step guide on how to set up input shaping for your printer and how to interpret the graphs you generate during the process.
 ###  Settings

- #### a) Connect your ADXL345 to your printer.
You can find detailed wiring informations by clicking [here](asd).

- #### b) Install the required packages.
SSH into your printer and run the following commands to install packages
  - ```properties showLineNumbers title="SSH"
    sudo apt-get update
    sudo apt update
    sudo apt install python3-numpy python3-matplotlib libatlas-base-dev libopenblas-dev
    ```
- #### c) Install NumPy in the Klipper environment by running the command:
  - ```properties showLineNumbers title="SSH"
    ~/klippy-env/bin/pip install -v numpy
    ```
- #### d) Make the required changes to define ADXL345 in printer.cfg.
  - ```properties showLineNumbers title="printer.cfg"
    [adxl345]
    cs_pin: adxl:gpio1
    spi_bus: spi0a
    axes_map: x,z,y

    [resonance_tester]
    accel_chip: adxl345
    probe_points:
        # Somewhere slightly above the middle of your print bed
        147,154, 20
    ```
  - :::caution
  You need to include this section if you connected your ADXL345 other than your main controller.
    ```properties showLineNumbers title="printer.cfg"
    [mcu adxl]
    serial: /dev/serial/by-id/<mySerial>    
    # Change <mySerial> to whatever you found above. For example, usb-Klipper_rp2040_E661640843545B2E-if00

- #### e) Time to run real life tests!
    
    When you type the commands below to console, the specified axis of the printer will start to oscillate. At first, you will be able to see this oscillation, but as the HZ increases, you will only hear the sound. Don’t worry, the sounds are completely normal.

    - #### For Axis X
    -   ```properties showLineNumbers title="Console"
    TEST_RESONANCES AXIS=X
    ```

    - #### For Axis Y
    -   ```properties showLineNumbers title="Console"
    TEST_RESONANCES AXIS=Y
    ```