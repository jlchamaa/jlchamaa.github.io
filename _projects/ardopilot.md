---
layout: default
gitlink: https://github.com/jlchamaa/ArdoPilot
title: ArdoPilot
permalink: /projects/ardopilot
imagelink: "https://i.imgur.com/OioFC2Vl.jpg"
tilecolor: "224, 130, 131"
---

# [ArdoPilot](https://github.com/jlchamaa/ArdoPilot)

<iframe src="https://www.youtube-nocookie.com/embed/oJ_n7qzUJ5w?rel=0" style="width:100%; max-width:600px; height:315px;" frameborder="0" allowfullscreen></iframe>

During my junior year at UCLA, Thales Avionics hosted an multi-week "Arduino Challenge" on several SoCal campuses that provided teams of students with an Arduino and resources to build a project from scratch.  The project was supposed to address a need in one of the company's many competencies, which are mainly military technologies and avionics.  The Irvine, CA office that was hosting the competition mainly focuses on engineering and manufacturing in-flight entertainment systems for commercial jets.
While most other entrants worked on projects with a military application, my teammate and I (Team Aluminati) developed a product that augments the audio and video of the in-flight entertainment based upon whether you are awake or asleep.

<img src="https://i.imgur.com/OioFC2V.jpg" style="width:100%; max-width: 600px;"/>

#### What does it do?

The device detects whether the passenger is falling asleep, or closing their eyes for an extended period of time.  As the passenger dozes off:
1. It turns down the volume in the headset gently, and pauses the movie after 30 seconds of closed eyes.  When they wake up, they can continue they can continue the movie roughly where they left off instead of having to figure out where they fell asleep.
2. It gently dims the cabin lights as the passenger falls asleep, creating a more sleep-conducive environment.
3. After the passenger has been asleep for several minutes, it turns the cabin lights a very dim blue, informing the cabin crew to not disturb them.

#### How does it do it?

We used the open-source computer vision software OpenCV, which has several classifiers for facial features including open eyes.  Each passing second of the software finding a face, but not finding open eyes, changes a variable representing our guess of the passenger's awareness.  The OpenCV returns a lot of false negatives, so we require a high threshold of certainty before we begin to augment the passenger's environment, lest we disturb the experience of an alert passenger.

When the variable maintained by our CV program reaches critical points, it fires off simulated keypresses to trigger the media player's hotkeys.  This of course only works if the media player is in focus.  This isn't a very robust solution, but hey IT'S GOOD ENOUGH FOR THE DEMO. The LEDs were controlled by an Arduino using PWM switching on three transistors for Red, Green, and Blue.  The CV program sent state information to the Arduino over a USB connection, which was significantly more robust than the media manipulation methodology.
