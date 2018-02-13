---
layout: project
permalink: /projects/led
title: LED SuperController
imagelink:
tilecolor: "38, 166, 91"
tagline: A tactile and web interface for RGB LED strips and music
---

This project is the both the origin of my maker journey, and the greatest continuing driver of it.  I wanted to create an interface for controlling a super cool RGB LED strip to replace the [crappy IR remote](https://i.imgur.com/aAzoZlt.png) that it came with.  That's what it started as.  It started as a small box with 3 potentiometers, 3 MOSFETs, and an LCD screen. It has morphed countless times and is now - as of Feb 2018 - a Raspberry Pi-driven, web-connected, music-sensitive lighting powerhouse, which just happens to double as my sunrise alarm clock.

<img src="https://i.imgur.com/FvP3k3C.jpg" style="width:100%; max-width: 600px;"/>

**A 5m strip fits nicely around a coffee can**
{: .mycaption}

## First iteration

Under advisement from some electrical engineering colleagues, I delved headfirst into the world of Arduinos and transistors with only an intro circuits course under my belt.  A +12V line fed the entire strip, and the R,G, and B channels were individual paths to ground, so using PWM from an ATMega 328 (Arduino Uno or Nano), I could, with 8-bit fidelity, control the intensity of each of the red, green, and blue channels of my strip. That's switching a lot of power though, so it was important to heatsink the MOSFET bodies in the end product, lest they melt the insulation of a passing wire and cause a dangerous short circuit.

<img src="https://i.imgur.com/9mqHjXO.png" style="width:100%; max-width: 600px;"/>

**The very beginnings**
{: .mycaption}

Now it was all about putting the pieces into a neat enclosure, tidying it up, and coding a simple text UI for the LCD screen / 5-way switch.

<img src="https://i.imgur.com/HOHze0T.png?" style="width:100%; max-width: 600px;"/>

**Arduino Nano, 3 potentiometers, 5-way switch, backlit 2x16 LCD, microphone, 4P2T switch, power adapter**
{: .mycaption}

The small knob in the center is a 5-way switch, which lets you navigate left, right, up, down, and through a menu.  The menu consisted of different modes, including "Constant Color" where the knobs dictate red, green, and blue color intensity respectively.  There was also a "Strobe" mode, "Clapper" mode, "Fade" mode, and a half-functional "Party" mode.

<img src="https://i.imgur.com/2zYALq3l.png" style="width:100%; max-width: 600px;"/>

**Nice and cleaned up.  In constant color mode.**
{: .mycaption}

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/BasicAdorableBengaltiger.webm">
</video>

**Here's a video of the clapper in action! *snap* *snap***
{: .mycaption}

## Second Iteration

While the package was pretty, and the screen was neat, the device spent 98% of its time in "Constant Color" simply lighting the room and doing nothing particularly fancy.  It was bulky and needed to be downsized/modernized.  Scrap the screen and the 5-way switch, I just needed 3 tactile knobs in a light switch-sized package that I could affix to the wall.  Adafruit offered a [Altoid tin-sized enclosure](https://www.adafruit.com/product/97) specifically for this purpose, as well as a really cool compatible [breadboard](https://www.adafruit.com/product/723).

<img src="https://i.imgur.com/BX1asV1l.png" style="width:100%; max-width: 600px;"/>

**Partly finished wiring**
{: .mycaption}

The Arduino headers and the transistors ended up too tall for the tin. So I had to hover the board in between the base and the top of the tin.  Some leftover standoffs did the job.  I was underwhelmed by the design, but at least it was interesting and efficacious.

<img src="https://i.imgur.com/BTx7Fcxl.png" style="width:100%; max-width: 600px;"/>

**Finished Side-View**
{: .mycaption}

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/MarvelousSardonicAiredale.webm">
</video>


## Third Iteration

The previous iteration was doing its job as a way to lightly light a room with color.  It was tactile and responsive and small and good at its job.  But I wanted it to be smarter.  People had been singing the praises of "[sunrise alarm clocks](https://gizmodo.com/a-light-up-alarm-completely-changed-my-life-1535668863)" for some time, and I figured that had to be a way to do that time-dependent automation on my own.  I also wanted to pair the raising of the lights with the raising of music volume, especially of a custom Spotify playlist.  Some phone apps can use Pandora as an alarm, but few can use a Spotify playlist, and none can do it well.  So I built my own, and called it *Rise*!

It involved
- The same transistor and Arduino set up for actually changing the LED strip color/intensity.
- A Raspberry Pi to keep the alarm and run a webserver to change the lights manually.
- A Flask App that runs said server and translates requests into actions to push to the Arduino
- A brilliant 3rd party app called [Mopidy](https://www.mopidy.com/) which is my interface to and from Spotify
- mpc, a command line line media controller that allows me to script the music events via Mopidy's MPD daemon
- a cron job to instantiate the alarm (yes, it's very hacky I know)
- a conveniently sized can to wrap the LED's around so they act more lamp-like, while also hiding the Arduino/transitor internals inside.

The picture at the top of this page shows hos it's set up currently.

I also hacked into the the Python code running Mopidy, to see whether I could send web requests to my Flask server in tune with the frequencies of the music being played.  Without an addressable LED strip though, it is pretty hard to turn music into a very convincing visual.  Here's my best go at it. 

<video id="vid" style="width: 100%; max-width: 600px;"  >
<source src="https://scontent-lax3-1.cdninstagram.com/vp/594aabedf0c73b8c1750440f5f4532ef/5A85D196/t50.2886-16/26826267_154946995157921_1283383833462308864_n.mp4">
</video>

## Gen 4 Coming Soon!
