# Scatter Bag

Scatter Bag (name a WIP) is a simple and fun HTML5 game. The goal of the game is to get the falling objects into the bin of the same color.

**NOTE: The framework we used appears to have some bugs in Google Chrome. We recommend playing on Firefox or Safari.**

## Controls

The player controls the ledges in the middle of the screen.

- Desktop: Left and right arrow keys.
- Mobile: Touch and hold left or right portion of the screen (not yet supported).

## Research

Going into this project, our group knew very little about game development and even less about game development with HTML5. After several hours of comparing different HTML5 game engines, we eventually decided to use [Phaser](http://www.phaser.io) as the backbone of our game. From the official website, Phaser is:

> A fast, free and fun open source framework
> for Canvas and WebGL powered browser games

## Completed Tasks and Time Spent

- Created the initial enviroment, including the "preoload", "create", and "update" functions: 1 hour.
- Added assets (background image, breifcase, ledges) to the "preload" function and instantiated these objects in the "create" function: 2 hours.
- Used ARCADE engine to render collisions between falling object and ledges: 4 hours.
- ARCADE engine turned out to be too limited for what we needed (angled collisions); rewrote the game using the P2 physics engine: 5-7 hours.
- Wrote code to get keyboard input, i.e., the left and right arrows to rotate the ledges: 1-2 hours.
- Wrote function to generate new briefcase objects at a fixed interval: 2 hours.
- Added logic to remove falling objects from the game once they hit the ground: 1-2 hours.

- Completed various other tasks, such as cleaning up the code, connecting modules, and modifying sprite images: 3-4 hours.
- Debugging: 8-10 hours.

## To-do List

- Make the falling objects (briefcases) be one of four different colors. (done!)
- Add four different colored bins to catch the falling objects. (done!)
- Add score / counter for briefcases that fall into the right bin. (done!)
- Have a game over screen appear after three briefcases miss their correct bin.
- Add a main menu screen.
- Add mobile touch support. (done?)
- Add game music.
- Right now most game images (such as the background) are borrowed from the web, but we plan to draw our own for the final demo. (done!)
- Potential: Change from briefcase to a more circular object, e.g., a marble or baseball. (done?)
- Potential: Add a high scores list.

Special thanks to Tiffany Lu for the background image :)