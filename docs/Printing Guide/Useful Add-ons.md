import Admonition from '@theme/Admonition';


## What is Add-ons?
Add-ons are scripts that are developed by the community. There are bunch of different add-ons for different use cases. They are installing via SSH with few commands. Here you can see few!

:::tip skip to;
- #### [DangerKlipper (DK)](/Printing%20Guide/Useful%20Add-ons#dangerklipper-dk-1)
  - #### [Bleeding Edge V2](/Printing%20Guide/Useful%20Add-ons#bleeding-edge-v2)
  - #### [Installation](/Printing%20Guide/Useful%20Add-ons#installation)
- #### [Reshelper](Printing%20Guide/Useful%20Add-ons#reshelper)
  - #### [Installation](/Printing%20Guide/Useful%20Add-ons#installation-2)
- #### [TMC Autotune](/Printing%20Guide/Useful%20Add-ons#tmc-autotune-1)
  - #### [Installation](/Printing%20Guide/Useful%20Add-ons#installation-4)
:::

## DangerKlipper (DK)
DangerKlipper is an alternative to Klipper, built on the Klipper firmware but with many additional useful features. Some of the advanced tuning methods mentioned in this documentation rely on features that are exclusive to DangerKlipper. This allows for greater control over your 3D printer.

### Bleeding Edge V2
Only fully tested and confirmed working features are merged into the main branch of DangerKlipper (DK). However, almost all of the features we discuss in this documentation can be found in DK's `bleeding-edge-v2` branch. Keep in mind that the features in `bleeding-edge-v2` have not been fully verified to work, and they may potentially cause issues. However, We do not recommend DangerKlipper's `bleeding-edge-v2` branch for inexperienced users. It is intended for advanced users only.,

### Installation
- #### a) Backup your Klipper instance
    - ```properties showLineNumbers title="Console"
    mv ~/klipper ~/klipper_old
       ```
- #### b) Clone the DangerKlipper Repository
    - ```properties showLineNumbers title="Console"
    git clone https://github.com/DangerKlippers/danger-klipper.git ~/klipper
    sudo systemctl restart klipper
       ```
- #### c) Switch to Bleeding Edge V2
- As we mention above, we dont recommend this step for inexperienced users.
    - ```properties showLineNumbers title="Console"
    git checkout bleeding-edge-v2
       ```



## Reshelper
Reshelper is an add-on developed by [lhndo](https://github.com/lhndo) (the owner of [LH Stinger](https://github.com/lhndo/LH-Stinger)). The main purpose of this addon is to automatically generate graphs and move them to a folder that you can see from Mainsail or Fluidd after a resonance test, without the need for SSH commands or FTP.

You can access the project's GitHub page by clicking [here](https://github.com/lhndo/ResHelper). For additional questions, you can also join the LH Stinger [Discord](https://discord.gg/kgEaJr6K5W) server.

:::info
### Where to use?
- Used in [Input Shaping](/Printing%20Guide/Input%20Shaping).
:::

### Installation
Installation is pretty straight forward.
  #### Paste this command to your SSH.
  - ```properties showLineNumbers title="SSH"
    cd ~
    rm -rf ResHelper
    git clone https://github.com/lhndo/ResHelper.git
    cd ResHelper
    git checkout newv2
    ./install.sh
    ```

And you are all set!

## TMC Autotune
This add-on calculates optimal values for most registers of TMC stepper motor drivers based on the motor’s datasheet information and the user’s selected tuning goal. By inputting key parameters such as current, voltage, and inductance from the datasheet, the tool provides register settings to ensure optimal performance. The user can choose a tuning goal like maximizing torque, reducing noise, or increasing efficiency, and the tool will adjust the register values accordingly. You can check their [Github](https://github.com/andrewmcgr/klipper_tmc_autotune) for further informations.

### Installation
- #### a) Run the command below to download the add-on
    - ```properties showLineNumbers title="Console"
    wget -O - https://raw.githubusercontent.com/andrewmcgr/klipper_tmc_autotune/main/install.sh | bash
       ```
- #### b) Update your moonraker.conf to enable updates
    - ```properties showLineNumbers title="moonraker.conf"
    [update_manager klipper_tmc_autotune]
    type: git_repo
    channel: dev
    path: ~/klipper_tmc_autotune
    origin: https://github.com/andrewmcgr/klipper_tmc_autotune.git
    managed_services: klipper
    primary_branch: main
    install_script: install.sh
    sudo systemctl restart klipper

And you are done!