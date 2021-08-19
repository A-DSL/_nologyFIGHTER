# _nologyFIGHTER
Created for the _nology Game spec as part of a portfolio. Made with HTML, SCSS and Javascript.

The game adopts a simple 1-versus-1 rock-paper-scissors system. Players have 3 HP; Beam beats Blast, Blast beats Baseball Bat, and Baseball Bat beats Beam. The loser of a trade takes 1 damage, unless there is a tie.

Attacks also charge Energy. Energy gain is 10 per attack. Once your Energy reaches a sufficient amount, you can unleash one of three supers; your opponent can only beat this super with 1 type of attack, with the other two causing a loss. Supers are:

-Hyper Beam: Costs 30 Energy. Only loses to Baseball Bat/Homerun. 
-Explosion: Costs 40 Energy. Only loses to Beam/Ultra Beam. 
-Homerun: Costs 50 Energy. Only loses to Blast/Explosion.

Note that the AI has a couple of consistencies within their attack pattern. See if you can figure them out!

The images for this game are a set of stick figures with white outlines, alongside some visuals for the previously used attack. All of these were made in Asesprite at specific dimensions (80x128px for stick figures), then exported as PNGs.
