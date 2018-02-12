---
layout: project
permalink: /projects/sportsmap
title: Sports Map
imagelink: "https://i.imgur.com/JVPQfrsl.jpg"
tilecolor: "240,52,52"
tagline: An LED backlit canvas map that syncs with live sports scores
---
I couldn't tell you where the idea came from, but it combined my love of maps, sports, LEDs, and programming, and it's one of the projects that I am most proud of.

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/WickedLividBarasinga.webm">
</video>

The concept is simple -- create a map that responds with color to live sporting events.  My implementation is an individually designed black and white canvas map of North America, free of political boundaries, 
that shows the 40 cities in North America with a professional baseball, football, or basketball team.  An internet-connected Raspberry Pi keeps track of live in-game updates from those leagues, and when a team scores,
it tells an Arduino to
-  light up the city of the team that scored
-  flash that team's colors
-  flashes each color once per each point scored

Los Angeles flashes  **purple** **gold** **purple** **gold** **purple** **gold** in real time when the Lakers hit a three-pointer. 

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/AggravatingIncompleteCondor.webm">
</video>

On a busy Sunday in November, when all three of these leagues are having games going on, the map gets very hectic and exciting.
On a slow sports day, random false scoring events can be fed in to make the map dance and look pretty.  It is quite eye-catching.

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://giant.gfycat.com/ForcefulForkedJunebug.webm">
</video>

## Engineering

This project had both laborious hardware and software engineering processes, which I will describe separately.

#### Hardware

The hardware challenge was both to create the map, and to wire and affix the LEDs properly to the map.

##### Map
Firstly, since there isn't (to my knowledge) any existing maps that show a borderless North America and highlight exclusively the 40 American and Canadian cities that boast an MLB, NFL, or NBA team, I had to create one for myself.
I used the same software that I used on my [UCLA Map]({{ site.baseurl  }}{% link _hobbies/uclamap.md %}), QGIS, the open source Geographic Information System.  I was able to create the following image using open-source data and make it fit the 3:2 ratio that I was aiming for.
I then got the image printed on a 20"x30" canvas from Costco.

<img src="https://i.imgur.com/h1dPvTTh.png" style="width:100%; max-width: 600px;"/>

##### LEDs

Since the LEDs in the map had to show different colors at different cities simultaneously, using an addressable RGB LED strip was necessary.  The joy of addressable strips is that they only need a single GPIO pin to operate. 
I could have used any small microcontroller, but since the electronics were all going to hide in the space behind the canvas, real estate was not a constraint and I opted for the Arduino Uno I had on hand.

However, the real difficulty was that the cities on this map were obviously not conducive to being backlit by a linearly spaced LED strip, at least not without wasting a ton of LEDs as I wove from city to city behind the canvas.

<video id="vid" style="width: 100%; max-width: 600px;" preload="auto" muted="muted" loop="loop" autoplay="autoplay">
<source src="https://cdn-shop.adafruit.com/product-videos/1024x768/2954-05.mp4">
</video>

The cheapest way I could find to get my LEDs spaced out as I desired was to splice and solder each one myself -- and that's what I did.

<img src="https://i.imgur.com/JVPQfrsh.jpg" style="width:100%; max-width: 600px;"/>

**6 solder joints per LED x 40 LEDs = 240 solder joints**
{: .mycaption}


Once they were all wired together to fit a single path, it was all about lining them up with the cities and attaching them with duct tape.

<img src="https://i.imgur.com/ICUSCSnh.jpg" style="width:100%; max-width: 600px;"/>

**DUCT TAPE FTW**
{: .mycaption}


#### Software

The trick to this project was finding a reliable (and free) source for live sports data.  Before undertaking the project, I looked to see if ESPN had an API, and they did.  I figured that it would be easy enough to use and I put off learning how to use it until after my LEDs were in place.
Little did I know, the API was deprecated in 2014 and they weren't handing out more developers keys....

Worst came to worst, and I settled for having to scrape the data off of ESPN's website.  They have a live updating scoreboard for all of the sports I needed, so I could just scrape the HTML for the values associated with each team, and it would be done....HAHAHAH OF COURSE NOT.

The problem?  ESPN updates their scoreboards via delayed javascript calls.  So CURLing the scoreboard URL finds a scoreboard with some empty scores and some out-of-date scores (e.g. shows the halftime score during the 4th quarter).

The solution?  CBS Sports also has a live updating scoreboard for all needed sports, and scoring updates are pushed over a WebSocket!  Just connect to the socket and subscribe to the events that interest you.  A Node.js script automates this process, and keeps track of the scores via the JSON that comes in whenever there is a scoring event in a game that I care about.

Node -> Python -> Arduino

<img src="https://i.imgur.com/8jW3vev.png" style="width:100%; max-width: 600px;"/>

**A quiet sports night with only a Wolves v. Blazers Matchup**
{: .mycaption}


The Python script runs a Node script that outputs scoring events, which are piped over USB to an Arduino ready to receive the messages and flash the LEDs.
