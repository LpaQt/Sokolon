# super-sorcerer

A script for automating the game for a Sorcerer.

## Dependencies

* **Library** - Installed automatically.
* **AutoHotkey** - From here https://www.autohotkey.com.

## Set the Hotkey

Install AutoHotkey from https://www.autohotkey.com/ and execute command **sorc hotkey [hotkey]** to set the hotkey.   
The hotkey must match the keybind on which the <img width="32" height="32" valign="middle" src="https://teralore.com/items/icon_skills/auraburn_tex.png"> **Flame Pillar** skill is assigned.

## Commands

Toolbox(/8)| Command description
--- | ---
**sorc** | Module enable/disable.
**sorc ui** | Show module settings GUI (also you can use **Ctrl+Shift+B**).
**sorc automb**<br>*(default: on)* | Auto cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/c5_strengthenmana.png"> **Mana Boost** near the boss on rotation.
**sorc autoimp**<br>*(default: on)* | Auto cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/collapse_tex.png"> **Implosion** with cancel animation on rotation.
**sorc lancesoffcd**<br>*(default: on)* | Auto cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/icespear_tex.png"> **Ice Lances** off cooldown on rotation.
**sorc autolances**<br>*(default: off)* | Auto cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/icespear_tex.png"> **Ice Lances** after cast <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/blastball_tex.png"> **Arcane Pulse** and <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/manaburst_tex.png"> **Nova** on rotation/<br>out of rotation.
**sorc autolockon**<br>*(default: off)* | Auto lockon and cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/trackinginferno_tex.png"> **Flaming Barrage** and <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/mpsink_tex.png"> **Mana Volley** near the boss<br>out of rotation.
**sorc primemb**<br>*(default: off)* | Additional cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/primalfire_tex.png"> **Prime Flame** off colldown during <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/c5_strengthenmana.png"> **Mana Boost** on rotation.
**sorc primeforce**<br>*(default: off)* | Cast for <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/primalfire_tex.png"> **Prime Flame** instead of <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/visionfirestorm_tex.png"> **Arcane Storm** and <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/upliftedglacier_tex.png"> **Iceberg** on rotation.
**sorc useitem**<br>*(default: off)* | Auto use **Root Beer** item after cast of <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/c5_strengthenmana.png"> **Mana Boost** skill near the boss.
**sorc usebrooch**<br>*(default: on)* | Auto use **Brooch** after cast of <img width="24" height="24" valign="middle" src="https://teralore.com/items/icon_skills/c5_strengthenmana.png"> **Mana Boost** skill near the boss.
**sorc hotkey `hotkey`**<br>*(default: off)* | Set new hotkey for triggering rotation (use `off` as value to disable the hotkey function).
**sorc debug**<br>*(default: off)* | Toggle debug mode.
