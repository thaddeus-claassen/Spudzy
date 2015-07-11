
var planets;
var currPlanet;

var Spudzy = function() {
   this.initControls();
   this.lastTime = 0;
}

Spudzy.prototype.start = function() {
   planets = [];
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
      }
   }
} // end updateState()

Spudzy.prototype.drawFrame = function() {
   // clear the canvas
   context.fillStyle = "#FFAFAF";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // draw the planets and units
   for (var pI = 0; pI < planets.length; pI++) {
      planets[pI].draw();
      for (var uI = 0; uI < planets[pI].units.length; uI++) {
         planets[pI].units[uI].draw();
      }
   }
} // end drawFrame()

Spudzy.prototype.drawPercentage = function() {
   // context.fillStyle = "#FFFFFF";
   // ctx.font = "30px Arial";
   // ctx.fillText("Percentage: " + this.percentage + "%",10,50);
}

Spudzy.prototype.onKeyDown = function(key) {
   console.log(keyCode);
}

Spudzy.prototype.onKeyUp = function(key) {

}

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
