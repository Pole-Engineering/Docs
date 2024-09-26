
Extruder calibration is simply the process of ensuring that when you command the printer to extrude 100mm of filament, it actually extrudes exactly 100mm. Don’t confuse this with the [extrusion multiplier](asd); one is a printer setting, while the other is a filament-specific adjustment.

# How to Tune?
- Let the printer to extrude 101mm or higher.
```properties title="printer.cfg"
[extruder]  
max_extrude_only_distance: 101
``` 