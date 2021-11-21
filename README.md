# Tic-Tac-Toe, a game made on HTML, CSS and JavaScript

<h1>How the game functions</h1>
<p>This game is automatically running from when you enter the page, the player's turn is indicated above the centerpiece.
To win the game, you must have 3 in a row. It's a classic game so good luck!</p>

<h1>Design</h1>
<p> The design is minimalistic, black and white to simulate playing on a good old fashioned blackboard. All elements are centered for the asthetics and means the page works on mobile extremely well as well as a desktop</p>

<h1>The code</h1>
<ul>
  <li>
    <h2>HTML</h2>
    <p>Extremely simple HTML structure with just a section of divs for the playing area, the text for all the elements</p>
  </li>
  <li>
    <h2>CSS</h2>
    <p>All the styling was done using SCSS and complied to create the CSS file. Again, pretty simple styling to keep it minimalistic, although the code could be neater if there was more time</p>
  </li>
  <li>
    <h2>JavaScript</h2>
    <p>A lot of trial and error to make it work properly, the winning scenario function is quite long and could probably be reduced down to a simpler code but that's the easiest way I could think of doing it at the time. The toggling between the two players took a bit of refining to ensure it works constantly and displays the current player along with the winning player correctly.</p>
  </li>
</ul>

<h1>Bugs</h1>
<p>There were two bugs when the basis of the game had finished.
One was that you could keep playing after someone had won, and the second was that you could toggle a tile when a move had been played on it.<p>
  <p> The bug where you could play after the game had been won was fixed by creating a function called gameOver which set the currentPlayer to a blank string and clears the innerHTML of playerTurn as the game is over. The second bug of a player being able to change between X and O after it was played is still on the game. That will be fixed once a bit more trial and error on developing it more</p>
  
<h1>Result</h1>
<p>The game is fully functional apart from having one minor bug which is not too important, the design is basically how I had envisioned it. There are some minor tweaks I would like to add later which is to display the X's and O's with animation as if it's either drawn on or a flip.</p>
