---
layout: hobby
permalink: /hobbies/cubes
title: Cubes
imagelink: "https://i.imgur.com/8fj4UDXl.png"
tilecolor: "231, 76, 60"
---
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<!--source src="https://giant.gfycat.com/PettyLightheartedFalcon.webm"-->
<source src="https://giant.gfycat.com/UnderstatedGargantuanLarva.webm">
</video></div>
Poly Cubed: Pomona, CA -- 28.67 seconds
{: .mycaption}


---

### Fishy Method

I've been solving 3x3 Rubik's Cubes for 10+ years now.  My methodology, a semi-custom Fridrich derivative I call 'Fishy Method' is far from optimal, but I've come to enjoy the creative freedom it lends me, and the relative few amount of algorithms that I need to commit to memory.
My current average solve time is around 30 seconds, which is hardly record shattering, but fast enough for a decent party trick. (I party with nerds)

---

#### The Cross
The first, easiest, and most critical portion of the solve is to get 'the cross' solved.  The cross is a + sign of the same color on one side, with edges extending over into the four surrounding centers, as shown below.  By convention, most speedcubers start with white, but the same ideas work for any start color.
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://i.imgur.com/96IWLB5.mp4">
</video></div>
This portion of the solve doesn't really depend on rote memorization of algs, but on a good geometrical understanding of the cube.  Typically, a speedcuber is allowed 15 seconds to inspect the cube before starting the timer and beginning a solve. The majority of this time is usually spent devising a plan to create the cross. Being able to do this well requires the ability to look several moves ahead and understand the cube mechanics well.

---

#### F2L (First Two Layers)
Slightly more mechanical, but still somewhat intuitive is the F2L portion of the solve. Though the first two layers also includes the cross from the last step, F2L usually refers to the process of adding in 4 sets of corners and edges to accompany the cross.
Here you can see a corner-edge pair getting placed correctly into its 'home', using a classic F2L technique called 'The Hammer'.
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://i.imgur.com/XcXTcPb.mp4">
</video></div>
Now, most of the time, the edge and corner pieces will not be so conveniently paired for immediate execution of The Hammer.  The clever part of F2L is manipulating the pieces, wherever they are, into a contigious position so that they can be quickly placed with The Hammer.
Do this for all four corners, and you'll have the first two layers solved, and you'll have completed F2L!

<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://i.imgur.com/zVSdy9F.mp4">
</video></div>

---

#### Top Cross
The top cross is where my method begins to deviate from the standard Fridrich method.  True speedcubers orient the top cross and the top corners at the same time. To do both in one quick algorithm requires the memorization of [57](https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/orient-the-last-layer-oll/) algorithms.  Lots of people can do it, but by separating the two, I can do each cross and corners using only two short algs for each.
For the top cross, you can, from any starting point, use 
##### F R U R' U' F'
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://i.imgur.com/KdTbs5C.mp4">
</video></div>
which will orient (yellow up) the top edges, but not permute them (place them with their respective centers).

---

#### OLL (Orient the Last Layer)
Since the last layer edges were oriented in the last step, the corners are the only pieces left to be oriented.  Once this is done, the entire top face ought to be yellow, but the colors around on the sides will be out of position.
To do this step, I employ a simple classic algorithm called the Sune, which looks like this.
##### R U R' U R U2 R'
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://i.imgur.com/Z0iGPGS.mp4">
</video></div>
The Sune orients the corners specifically from this starting position.

<img src="https://www.speedsolving.com/wiki/images/c/ce/Suneinfo.png" />

Do you see the fishy??  That's how this method got its name, somehow.

However, by using a combination of the Sune and it's cousin the 'Anti-Sune' (R U2 R' U' R U' R'), you can orient any set of corners in no more than two algorithms.  It is massive convenience, at the loss of quite some time, but that's the trade-off I choose to make.

---

#### PLL (Perumte Last Layer)
Fridrich's method requires memorization of [21](https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/permutate-the-last-layer-pll/) distinct algorithms to tackle all possible permutations of the last layer.  It's hard at this point in the solve to fudge your way out of just memorizing the algs, but there are some shortcuts I take, so that I only have to remember 7 of the 21, again accepting a loss in speed.  Some of the algs, like the G's, can be completed by using two simpler algs.  Other algs can be 'commuted' to another alg via a few set up moves, and then commuted back.  It's a hack, but it gets the job done for me. Below is a table describing my PLL strategy as of 2017.
##### Y-Perm 
<div style='position:relative;padding-bottom:54%'><video style='width:100%;height:100%;position:absolute;top:0;left:0' preload="auto" loop="loop" autoplay="autoplay" controls>
<source src="https://giant.gfycat.com/ShamelessAlarmedEastsiberianlaika.webm">
</video></div>

| Image | Perm Name | Derivative |
| --- | --- | --- |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-01.png" /> | **A** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-02.png" /> | **A** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-06.png" /> | **U** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-07.png" /> | **U** | Mirror of other **U** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-08.png" /> | **J** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-09.png" /> | **J** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-10.png" /> | **T** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-21.png" /> | **Y** | **Need to Know** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-03.png" /> | **E** | Two **A**'s or Two **T**'s |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-04.png" /> | **Z** | Two **U**'s |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-05.png" /> | **H** | Two **U**'s |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-11.png" /> | **R** | Commuted **J** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-12.png" /> | **R** | Commuted **J** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-13.png" /> | **F** | Commuted **T** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-14.png" /> | **G** | **A** + **U**  |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-15.png" /> | **G** | **A** + **U**  |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-16.png" /> | **G** | **A** + **U**  |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-17.png" /> | **G** | **A** + **U**  |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-18.png" /> | **V** | Commuted **Y** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-19.png" /> | **N** | Commuted **T** |
|<img src="https://ruwix.com/pics/fridrich/friedrich-pll-20.png" /> | **N** | Commuted **T** |

