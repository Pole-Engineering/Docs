import placeholder from '/static/img/placeholder.png';

# Extrusion Multiplier
The extrusion multiplier (also called flow rate) is a setting to adjust the amount of filament extruded by the printer. It acts as a scaling factor applied to the extruder's flow rate and helps fine-tune the filament output to match the actual filament flow with what the printer thinks it is extruding.
:::info
### Should be Done Before
- [Extruder Calibration](/Extruder%20Calibration) must be done.
- [Pressure Advance](/Extruder%20Calibration) must be done.
:::

## Why is it important?
An accurate extrusion multiplier ensures that:

 - **Over-extrusion** (too much filament) is avoided, which can lead to blobs, stringing, or poor surface quality.
 - **Under-extrusion** (too little filament) is corrected, which can result in gaps, weak layers, or poor adhesion between layers.