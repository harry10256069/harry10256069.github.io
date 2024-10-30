$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

            //create platforms
            //createPlatform(x,y,width,height)
            createPlatform(200, 200, 100, 10)
            createPlatform(750, 450, 125, 35)
            createPlatform(650, 450, 125, 50)
            createPlatform(450, 575, 150, 35)
            createPlatform(100, 650, 100, 50)
            createPlatform(350, 325, 100, 50)

            //create cannons
            //you pick the wall you want the cannon on, then the position, then the time between shots in milliseconds
            // your wall choices are: 'top' 'left' 'right' or 'bottom'
            //createCannon("top",200,4)
            createCannon("right", 450, 2000)
            createCannon("top", 450, 2000)
            createCannon("bottom", 100, 2000)

            //create collectables
            //createCollectable("www.pictureOfFish.jpg",59,299)
            createCollectable("steve",630,100)
            createCollectable("max", 400, 0)
            createCollectable("database", 200, 0)
            
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
