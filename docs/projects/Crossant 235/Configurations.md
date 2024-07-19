---
sidebar_position: 2
---
# Configuration

# Z Axis
>Crossant currently supports four different Z systems officially: rigid leadscrew Z, belted leadscrew Z, kinematic leadscrew Z, and kinematic belted Z. Here's a comparison of their advantages and disadvantages against each other, so you can choose the most suitable system for yourself:
>## Kinematic vs. Rigid Z Systems
>In the rigid Z system, the bed is fixed to the Z joints via rodends, ensuring a secure attachment with bolts. In the kinematic Z system, [Maxwell coupling](https://en.wikipedia.org/wiki/Kinematic_coupling) allows the bed to be removed or adjusted without needing any bolts, facilitating easy detachment.
>### Kinematic Z System:
>>- **Advantages:**
  - Ease of Assembly: Kinematic systems are generally easier to assemble and user-friendly.
  - Easy Modifiability: These systems allow users to easily modify the printer and make various improvements.
- **Disadvantages:**
  - Requires Heavier Beds: Kinematic systems may perform worse with lighter print beds, which can be limiting for some users.
  - Higher Filament Usage: These systems may require extra parts, increasing filament costs.
>
> ### Rigid Z System:
>
>>- **Advantages:**
  - Stronger Z Axis: Rigid systems provide a stronger and more stable Z axis, offering excellent performance regardless of whether the print bed is heavy or light.
  - Lower Filament Cost: These systems require fewer parts, thereby reducing filament costs.
  - Lower Cantilever: Due to their design, rigid systems can be designed with a lower cantilever, resulting in less system flex compared to kinematic systems.
- **Disadvantages:**
  - Difficulty in Assembly: Rigid systems are generally more difficult to assemble and require more attention.
  - Difficulty in Modification: Rigid systems can make modifications more challenging.
>
>## Belted vs. Leadscrew Z
>### Belted Z :
>>- **Advantages:**
  - More Precise Z Axis: Belted systems offer a more precise Z axis.
  - **Fast Z-Hop Movements: These systems are capable of quicker Z-hop movements.
  - Ease of Maintenance: Belted systems are generally easier to maintain.
- **Disadvantages:**
  - Difficulty in Assembly: Belted systems are usually more difficult to assemble.
  - Higher Cost: These systems tend to be more expensive.
  - Z Axis Loss: There is an approximate 20mm~ loss in the Z axis.
  - Heavy Beds Fall: For very heavy print beds (+6-7 kg), the bed may slip when the motors are disengaged.
>
>### Leadscrew Z:
>
>>- **Advantages:**
  - Ease of Assembly: Leadscrew systems are generally easier to assemble.
  - Better Operation with Heavy Beds: These systems handle heavy print beds more effectively.
  - Increased Z Axis Range: Leadscrew systems provide up to 20mm more Z axis range.
  - Lower Cost: Leadscrew systems are generally less expensive.
- **Disadvantages:**
  - Slower Speed: Leadscrew systems move more slowly compared to belted systems.
  - Needs Maintenance: These systems needs to maintenance.
  
  # Frame

  ## Default Frame vs Sidepack Frame