---
sidebar_position: 3
---


# Input Shaper
Input shaping is a technique to reduce or eliminate vibrations (also known as resonance) that occur when the printer moves at high accels. These vibrations can cause visible print defects such as ringing or ghosting, where the surface of the print shows repeating patterns or distortions, especially around corners or sharp changes in direction.

:::info
### Should be Done Before
- [Extruder Calibration](/Extruder%20Calibration) must be done.
- [Extrusion Multiplier](/Extruder%20Calibration) must be done.
- [Pressure Advance](/Extruder%20Calibration) must be done.
:::

:::tip skip to;
- #### [how it works?](asd),
- #### [Why is it Important?](asd),
- #### [How to Tune Input Shaper?](asd),
- #### [Shaper Models](asd),
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
- #### f) Generate the Graphs
    After performing the resonance tests, Klipper generates a `.csv` file containing the results of the tests. By running a Python script using the commands below, we can graphically interpret this data by plotting it into a graph.

    - #### For Axis X Graph
    -   ```properties showLineNumbers title="Console"
    ~/klipper/scripts/calibrate_shaper.py /tmp/resonances_x_*.csv -o /tmp/shaper_calibrate_x.png
    ```

    - #### For Axis Y Graph
    -   ```properties showLineNumbers title="Console"
    ~/klipper/scripts/calibrate_shaper.py /tmp/resonances_y_*.csv -o /tmp/shaper_calibrate_y.png
    ```    
    :::caution
    You need to delete the older `.csv` files before you plotting datas to graphs, otherwise script will use both of the `.csv` files to generate the graphs and that'll cause 2 overlapped graphs to each other which makes harder to read and diagnose.
    :::
  
## Shaper Models
Klipper offers you 5 different shapers. Each one has its own advantage. You can see few details about them below;
- **ZV (Zero Vibration)**: ZV is a basic form of input shaping designed to reduce vibrations by adjusting motor acceleration.

- **MZV (Modified Zero Vibratio)**: MZV builds upon ZV by offering better vibration reduction, particularly for systems with higher resonance frequencies.

- **EI (Extra Insensitive)**: EI input shaping increases the system’s insensitivity to a range of vibration frequencies, allowing for better performance across varied conditions.

- **2-Hump EI (Two Hump Extra Insensitive)**: This variant of EI targets two dominant resonant frequencies simultaneously, providing improved performance for systems with dual frequency vibrations.

- **3-Hump EI (Three Hump Extra Insensitive)**: Like 2-Hump EI, this input shaping method is designed to target three resonance frequencies.

As written before, each one has their own advantages but we mostly recommend using `MZV` for our usecase.

