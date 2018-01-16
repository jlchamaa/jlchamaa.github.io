---
layout: default
permalink: /projects/mirror
title: Infinity Mirror
---
# Infinity Mirror

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/BlaringSlimIndigowingedparrot.webm">
</video>
In my hunt for a fun project that I could build my best friend Jenn for her birthday, I came across this instructable for an [infinity mirror](http://www.instructables.com/id/IKEA-Infinity-Mirror/).
It consists of a deep frame or shadowbox, some colorful LEDs, a 100% reflective mirror, and a semi-transparent mirror, otherwise known as a 'one way' mirror.

#### How does it work?

A semi-transparent mirror allows light to be partially transmitted and partially reflected.  The effect is that when one side of the mirror is lit more brightly than the reverse, the intensity of the reflected light on that side is greater than the transmitted light from the dim other side, and the pane appears like a mirror.
From the perspective of the dark side, the transmited light from the opposing bright side is of higher intensity than the reflected light from the same side, and the pane appears like a window.

Therefore, with the LEDs are turned off inside the box, a bright room turns the box into a simple mirror.  However, in a dark room, when the LEDs are on, the front window becomes transparent from the outside, allowing a viewer to look inside. Furthermore, from the LEDs perspective, the pane is a mirror, which causes endless internal reflection with the other permanent mirror parallel to it.  Your transparent view allows you to see all of these internal reflections and you get the hallway effect.

#### What Hardware?

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://cdn-shop.adafruit.com/product-videos/1024x768/2954-05.mp4">
</video>

**The LEDs are 4 feet of [Adafruit NeoPixels](https://www.adafruit.com/product/2954), an easy to use addressable LED strip.  They can all be individually addressed by a single digital I/O pin on an Arduino.**

---


<img src="https://cdn-shop.adafruit.com/970x728/2590-01.jpg" style="width:100%; max-width: 600px;"/>

**The microcontroller is an [Adafruit Metro Mini](https://www.adafruit.com/product/2590), a great Arduino Uno alternative, with the same ATMega 328 chip, but in a tiny breadboard friendly package.**

---

#### More pics?
You got it.

<img src="/assets/mirrorApart.jpg" style="width:100%; max-width: 600px;"/>

**Without the rear mirror**

<img src="/assets/mirrorResistor.jpg" style="width:100%; max-width: 600px;"/>

**1000uF capacitor on the wall-wart jack because NeoPixels are finicky and will fry if subjected to a voltage spike upon plug-in. 470 Ohm pull-down resistor on the data line to prevent any floating voltage silliness.**

---

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/UnsightlyUnluckyAlbertosaurus.webm">
</video>

**The full animation program!**
