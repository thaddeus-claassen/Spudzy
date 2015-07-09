
var planets;
var currPlanet;

var Spudzy = function() {
   this.initControls();
   this.lastTime = 0;
}

Spudzy.prototype.start = function() {
   planets = [];
	var planet = new Planet(new Vector(200, 200),0);
   planets.push(planet);

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
   planet.update(dt);
} // end updateState()

Spudzy.prototype.drawFrame = function() {
   planet.draw();
   guy.draw();
} // end drawFrame()

Spudzy.prototype.onMouseMove = function(x, y) {
   console.log("move: " + x + ", " + y);
} // end onMouseMove()

Spudzy.prototype.onMouseUp = function(x, y) {
   console.log("up: " + x + ", " + y);
} // end onMouseUp()

Spudzy.prototype.onMouseDown = function(x, y) {
   console.log("down: " + x + ", " + y);
   for (var i = 0; i < planets.length; i++) {
      var thePlanet = planets[i];
      var vector = new Vector(thePlanet.position.x - x, thePlanet.position.y - y);
      if (vector.length <= thePlanet.radius) {
         currPlanet = thePlanet;
         break;
      } // end if
   } // end for
} // end onMouseDown()
