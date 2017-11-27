---
layout: default
permalink: /projects/soundscape
title: SoundScape
---

# Soundscape
IDEAHacks, the premier west coast hardware hackathon, is hosted in Ackerman Grand Ballroom at UCLA. On a 36-hour time limit, along with two of my UCLA Aerospace engineering friends and a computer scientist from USC, we developed **Soundscape**!  We placed [third](https://www.facebook.com/ideahacks.la/photos/a.1456888661229688.1073741828.1451652401753314/1653275828257636/) in the competition and won Fitbits!

<img src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/12440447_1653275828257636_3927811303484037364_o.jpg?oh=cab7d738f4660a77a8527e22b56073b1&oe=5A9993AA" style="width:100%; max-width: 600px;"/>

### What does it do?

Soundscape is a tool that allows the speakers in your home or office to adjust their volume based upon how close you are to the speaker.  The expected use case: as you move from your bedroom to the kitchen, the music playing on the bedroom speakers gradually fades out and the kitchen speakers fade in, creating a landscape of sound that follows you seemlessly throughout the home.

<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0;' preload="auto" loop="loop" controls="controls">
<source src="/assets/soundscape.mp4">
</video></div>

And here's the rushed 240p video evidence of it in action
#### How does it work?
Before I tell you, do you promise not to judge?

There are three tricks to pull this off in concert, each one a dirtier hack than the last.
##### 1. Calculate Location
Short of smart motion tracking cameras, doing precise real-time location tracking of an individual through the home is tricky.  Luckily, most of us are constantly carrying the powerful multi-band emitter known as a cell phone.  An Arduino UNO with a wifi shield, seated next to the speaker, measures the 2.4GHz wi-fi signal strength coming off of your phone and does some quick math to guesstimate your distance from the speaker.  3 speakers allows the system to roughly triangulate your location.
##### 2. Modulate Volume
With your rough location determined, each Arduino decides the volume intensity via a lookup table that roughly resembles a logistic function. The Arduino actually supresses the constant amplitude audio signal from to source X% by applying X% duty cycle pulse width modulation on the gate of a  MOSFET that is carrying the signal.  Should we have used an op-amp?  Of course. Did we have to overclock the Arduino to avoid a horrid 1000Hz square wave from being played through the speakers. Definitely. Would I go back and do it differently?  Probably not.
##### 3. Synchronize Music
It would've been nice to have a single centralized source of music.  However, we ended up just plugging a phone/laptop into each Soundscape speaker and starting the songs at the same time. HEY, IT WORKED FOR THE DEMO!
