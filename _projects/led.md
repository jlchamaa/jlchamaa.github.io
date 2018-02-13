---
layout: project
permalink: /projects/led
title: LED SuperController
imagelink:
tilecolor: "38, 166, 91"
tagline: A tactile and web interface for RGB LED strips and music
---

This project is the both the origin of my maker journey, and the greatest continuing driver of it.  I wanted to create an interface for controlling a super cool RGB LED strip to replace the [crappy IR remote](https://i.imgur.com/aAzoZlt.png) that it came with.  That's what it started as.  It started as a small box with 3 potentiometers, 3 MOSFETs, and an LCD screen. It is morphed countless times and is now - as of Feb 2018 - a Raspberry Pi-driven, web-connected, music-sensitive lighting powerhouse, which just happens to double as my sunrise alarm clock.

<img src="https://i.imgur.com/FvP3k3C.jpg" style="width:100%; max-width: 600px;"/>

**A 5m strip fits nicely around a coffee can**
{: .mycaption}

## First iteration

Under advisement from some electrical engineering colleagues, I delved headfirst into the world of Arduinos and transistors with only an intro circuits course under my belt.  Using PWM from an ATMega 328 (Arduino Uno or Nano), I could, with 8-bit fidelity, control the intensity of each of the red, green, and blue channels of my strip. A +12V line fed the entire strip, and the R,G, and B channels were individual paths to ground.

<img src="https://i.imgur.com/9mqHjXO.png" style="width:100%; max-width: 600px;"/>

**The very beginnings**
{: .mycaption}

Now it was all about putting the pieces into a neat enclosure, tidying it up, and coding a simple text UI for the LCD screen / 5-way switch.

<img src="https://i.imgur.com/HOHze0T.png?" style="width:100%; max-width: 600px;"/>

**Arduino Nano, 3 potentiometers, 5-way switch, backlit 2x16 LCD, microphone, 4P2T switch, power adapter**
{: .mycaption}

<img src="https://i.imgur.com/2zYALq3l.png" style="width:100%; max-width: 600px;"/>

**Nice and cleaned up.  In constant color mode.**
{: .mycaption}

### More to come
