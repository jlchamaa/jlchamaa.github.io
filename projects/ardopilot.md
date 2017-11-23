---
layout: default
permalink: /projects/ardopilot
---

# [ArdoPilot](https://github.com/jlchamaa/ArdoPilot)

<iframe src="https://www.youtube-nocookie.com/embed/oJ_n7qzUJ5w?rel=0" style="width:100%; max-width:600px; height:315px;" frameborder="0" allowfullscreen></iframe>

During my junior year at UCLA, Thales Avionics hosted an multi-week "Arduino Challenge" on several SoCal campuses that provided teams of students with an Arduino and resources to build a project from scratch.  The project was supposed to address a need in one of the company's many competencies, which are mainly military technologies and avionics.  The Irvine, CA office that was hosting the competition mainly focuses on engineering and manufacturing in-flight entertainment systems for commercial jets.
While most other entrants worked on projects with a military application, my teammate and I (Team Aluminati) developed a product that augments the audio and video of the in-flight entertainment based upon whether you are awake or asleep.

<img src="/assets/ardoPilot_eyes.jpg" style="width:100%; max-width: 600px;"/>

#### What does it do?

The device detects whether the passenger is falling asleep, or closing their eyes for an extended period of time.  As the passenger dozes off:
1. It turns down the volume in the headset gently, and pauses the movie after 30 seconds of closed eyes.
2. It gently dims the cabin lights as the passenger falls asleep, so they aren't awoken by their overhead lamp being left on.
3. After the passenger has been asleep for several minutes, it turns the cabin lights a very dim blue, informing the cabin crew to not disturb them.
