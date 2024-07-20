---
sidebar_position: 6
---
# Software
>
>The Crossant, like many other printers, uses Klipper firmware.
>## [Klipper](https://github.com/Klipper3d/klipper)
Klipper is a firmware designed to improve the performance and capabilities of various 3D printers. Unlike traditional firmware that runs on a single microcontroller, Klipper leverages the computational power of a Raspberry Pi or similar single-board computer to handle complex calculations.
>### [Moonraker](https://github.com/Arksine/moonraker)
Moonraker is a key component in the Klipper ecosystem, acting as a REST API server that facilitates communication between the Klipper firmware running on a microcontroller and the web-based user interfaces such as Mainsail and Fluidd.
>### [Mainsail](https://github.com/mainsail-crew/mainsail) and [Fluidd](https://github.com/fluidd-core/fluidd)
Mainsail and Fluidd are both web-based, lightweight interfaces. They both offer numerous customizations and features that make using your printer easier. Their installation methods are quite similar.

# Installation Process
>We recommend [Kiauh](https://github.com/dw-0/kiauh/tree/master) for Klipper installation. Kiauh is a script that allows you to install everything necessary for Klipper firmware and its related components all at once.
* **Step 1:** 
To download this script, ensure Git is installed on your system. If Git isn't installed or if you're uncertain, execute the following command:
```shell
sudo apt-get update && sudo apt-get install git -y
```
* **Step 2:** 
Once Git is installed, you can download Kiauh into your home directory using the following command:
```shell
cd ~ && git clone https://github.com/dw-0/kiauh.git
```
* **Step 3:** 
Initiate Kiauh by executing the command:
```shell
./kiauh/kiauh.sh
```
* **Step 4:** 
Once you are in the main menu of Kiauh, you will see various actions listed based on what you intend to do. To select an action, enter the corresponding number at the "Perform action" prompt and press ENTER to confirm.

# Building and Flashing the MCU
>To use Klipper with your motherboard, you need to flash a firmware build that is tailored for the specific features of your motherboard. Here's how you can do it:
* **Step 1:** 
To flash the MCU (Microcontroller Unit), run the following code:
```shell
cd ~/klipper/
make menuconfig
```
When the prompt appears, configure the settings appropriate for the MCU you are flashing, save the settings, and then quit the configuration tool.
* **Step 2:** 
After configuring the settings for the MCU, proceed to build the firmware using the following command.
```shell
make
```
* **Step 3:** 
 Once you have built the firmware, transfer it to your SD card and flash it onto your MCU.
* **Step 4:** 
  Run this command to retrieve the ID of your MCU:
```shell
ls /dev/serial/by-id/
```
Output should look like this:
```shell
/dev/serial/by-id/usb-1a86_USB2.0-Serial-if00-port0
```

# Printer Config File
>The ```printer.cfg``` file is a configuration file that allows you to make specific configuration changes on the printer, containing all the settings for the printer.
>
>You can click [here](https://github.com/Pole-Engineering/Crossant-235) to access custom ```cfg``` files created specifically for various motherboards compatible with Crossant.
