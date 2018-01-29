---
layout: project
permalink: /projects/wickedwinch
title: The Wicked Winch
imagelink: "https://i.imgur.com/pmsGC4Fl.png"
tilecolor: "190, 144, 212"
tagline: "UCLA Capstone Project: Autonomus Robot"
---
<img src="https://i.imgur.com/ugMtKiZ.jpg" style="width:100%; max-width: 600px;"/>

**My baby**

### The Project
In January 2016, the UCLA Mechanical Engineering Senior Class was split into groups of five, and assigned a task:

##### **Create a robot that**
1. Is completely autonomous
2. Can navigate a twisty and hilly course
3. Can launch a golf ball precisely 4 feet +/- 10% from the end of course 
4. Can traverse the course back to the starting point
5. Uses active steering
6. Can do this in under 2.5 minutes
7. Fits within an 11" x 11" x 11" volume
8. Costs less than $375


<img src="https://i.imgur.com/iSYXKaR.png" style="width:100%; max-width: 600px;"/>

**The Course**

---

<img src="https://i.imgur.com/MXwZxM3.png" style="width:100%; max-width: 600px;"/>

**The Best Team Ever**
 
 ---

### Design
We had to make some critical design decisions early that would affect our process thereafter.
1. Number of wheels
- We went with three wheels.  The two rears can be powered through a single axle.  The front steering wheel can be actively steered with a servo.
2. Sensor placement
- Left and Right sensors located near the centerline, forward and rear sensors angled downward.
3. Launch mechanism
- A *wicked* winch that loads a spring and quick releases a piston that pushes the ball out and up.
4. Drivetrain
- Belt-driven solid rear axle.

---

### Computer Aided Design

We had to have an accurate CAD by the end of 162D, which we would then build during 162E.

<img src="https://i.imgur.com/bCeTmFF.png" style="width:100%; max-width: 600px;"/>

**Full Solidworks CAD**

---

<img src="https://i.imgur.com/WvFLY3z.png" style="width:100%; max-width: 600px;"/>

**Solidworks CAD of the Launching Mechanism**

### Building & Programming

The launching mechanism was a half gear which, via a geared winch and fishing line, loaded a spring inside the barrel and pulled back the piston and ball-carriage. 

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/GlamorousHeavenlyBlackandtancoonhound.webm">
</video>

**Launching mechanism, without the release**

---

<img src="https://i.imgur.com/pmsGC4F.png" style="width:100%; max-width: 600px;"/>

**The pyhsical product**

---

<img src="https://i.imgur.com/8TR5Exh.png" style="width:100%; max-width: 600px;"/>

**The brains of the robot was a school-provided NI MyRIO, which -- of course -- had to be programmed in LabView**

---

<img src="https://i.imgur.com/RS2gHWs.png" style="width:100%; max-width: 600px;"/>

**A statechart was used to step the robot through the phases of its journey**

---

### The Results

We built the robot to spec, and managed to use only $275 in parts, $100 under budget!  At the final competition, it performed its task 3 times in a 5 minute window, without any adjustments or resets!

<iframe width="480" height="270" src="https://www.youtube.com/embed/4J1Lj29G1X0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
**A clean practice run in the lab!  The golf ball hits the target!**
