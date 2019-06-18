# FEND-Memory-Game

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## I have done the following steps to complete the Project

### Cloning and Downloading the Project

-   After reading the Instructions, I have downloaded the skeleton project of Matching Game from a link of GitHub which is provided by **Udacity**.
-   Then I unzipped the skeleton project folder.
-   I observed the following sub-folders (`css/app.css`,`img/geometry2.png`,`js/app.js`,`index.html`(main file),`README.md`).

### Code Modifications

-   At first in `js/app.js` file I used the pre-defined 'shuffle' function to shuffle the cards on deck.
-   Then I used a loop to add Event Listeners to each card in the same JavaScript file.
-   Then I added timer function to the main frame of game by setInterval .
-   In the root html page `index.html` I modified the cards identification by adding `type=""` tag to it such that same cards have same type.
-   Then in `js/app.js` file I wrote the functions for matching and unmatching of cards individually.
-   Unmatching of cards requires a new style for handling the effectiveness, so I wrote  **unmatch** class style in `css/app.css` stylesheet.
-   Number of moves is also to be incremented when two cards are flipped.
-   So code for count increment of moves is written in the same function where card equivalence is checked.
-   Rating of game is dependent on number of moves taken to complete the total game.


-  If the move count is &lt;=14 number of stars are 3.
-   Else if the move count is 14> and &lt;=20 start count is 2.
-   Else  for any move count exceeding 20 will have only 1 star.


-   So code modification like importing of "fa-star" from `index.html` to the variable in `js/app.js` is done.
-   A variable is used to decrease the count of stars on the window.
-   After successful completion of game a alert is raised displaying time taken to complete the game, number of stars achieved, and a congratulation message by using `swal` pre-defined methods.
