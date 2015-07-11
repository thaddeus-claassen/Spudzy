
var planets;
var currPlanets;
var currPercent;

var Spudzy = function() {
   this.initControls();
   this.lastTime = 0;
   currPercent = 100;
}

Spudzy.prototype.start = function() {
   planets = [];
   currPlanets = [];
   var border = 50;
   for (var i = 0; i < 4; i++)
      planets.push(new Planet(new Vector(randomRange(border, canvas.width - border), randomRange(border, canvas.height - border)),0));
   // Starts looping
   window.requestAnimationFrame(this.loop.bind(this));
} // end start()

Spudzy.prototype.loop = function(currentTime) {

   var dt = currentTime - this.lastTime;
   this.lastTime = currentTime;

   this.updateState(currentTime, dt);
   this.drawFrame();

   window.requestAnimationFrame(this.loop.bind(this));
} // end loop()

Spudzy.prototype.updateState = function(time, dt) {
   for (var i = 0; i < planets.length; i++) {
      planets[i].update(dt);
      for (var j = 0; j < planets[i].units.length; j++) {
         planets[i].units[j].update(dt);
      } // end for
   } // end for
} // end updateState()

Spudzy.prototype.drawFrame = function() {
   // clear the canvas
   context.fillStyle="#FFAFAF";
   context.fillRect(0, 0, canvas.width, canvas.height);
   for (var pI = 0; pI < planets.length; pI++) {
      var planet = planets[pI];
      planet.draw();
      for (var uI = 0; uI < planet.units.length; uI++) {
         planet.units[uI].draw();

      } // end for
   } // end for
} // end drawFrame()

Spudzy.prototype.onMouseMove = function(x, y) {
   if (this.controls.mouseToggle) {
      for (var i = 0; i < planets.length; i++) {
         var thePlanet = planets[i];
         if (currPlanets.indexOf(thePlanet) == -1) {
            var vector = new Vector(thePlanet.position.x - x, thePlanet.position.y - y);
            if (vector.length() <= thePlanet.radius) {
               currPlanets.push(thePlanet);
               console.log("onMouseMove planet " + i);
               break;
            } // end if
         } // end if
      } // end for
   }// end if
} // end onMouseMove()

Spudzy.prototype.onMouseUp = function(x, y) {
   for (var i = 0; i < planets.length; i++) {
      var thePlanet = planets[i];
      var vector = new Vector(thePlanet.position.x - x, thePlanet.position.y - y);
      if (vector.length() <= thePlanet.radius) {
         console.log("Inside planet radius");
         for (var j = 0; j < currPlanets.length; j++) {
            currPlanets[j].moveUnits(thePlanet, currPercent);
         } // end for
         break;
      }// end if
   } // end for
   currPlanets = [];
} // end onMouseUp()

Spudzy.prototype.onMouseDown = function(x, y) {
   for (var i = 0; i < planets.length; i++) {
      var thePlanet = planets[i];
      var vector = new Vector(thePlanet.position.x - x, thePlanet.position.y - y);
      if (vector.length() <= thePlanet.radius) {
         currPlanets.push(thePlanet);
         console.log("onMouseDown planet " + i);
         break;
      } // end if
   } // end for
} // end onMouseDown()
