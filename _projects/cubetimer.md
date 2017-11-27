---
layout: default
gitlink: https://github.com/jlchamaa/CLImer
title: CLI Cube Timer
permalink: /projects/cubetimer
---

# Command Line Cube Timer

<img src="/assets/timer1.png" style="width:100%; max-width: 600px;"/>

Written in Python and using the ncurses terminal painting library, the CLI cube timer (a.k.a. "CLImer") is the best way to record and store your cube solves while never leaving the comfort of the shell.  This tool merges the required tools of a niche hobby with the required environment of another niche hobby, leaving a target audience of literally just myself. 

But I like it, so that's all that matters.

#### CLImer in Action

<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0;' preload="auto" loop="loop" controls="controls">
<source src="/assets/timerClip.webm">
</video></div>

**A proof of concept, showing the regulation maximum 15 second countdown, an example 10.23 second solve, the subsequent storing of the solve and its associated scramble and averages, and its deletion**
#### Featues
1. Ability to track any number of sessions, with independent times, averages, and scrambles.
2. Ability to +2, DNF, or delete any solve.
3. Completely mouse-free UX, using single keyboard presses to naviagate and manage your times.
4. Stores all times, scrambles, and averages in a SQLite DB.

#### Shortcomings / Features I still want to add.
1. More robust average calculation.
2. Better OO design.  Some classes are more monolithic than I'd like.
3. Support timing with a Stackmat, rather than the spacebar.
4. Scrambles for bigger cubes like the 4x4x4.
