var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var Spudzy = function() {
   this.initControls();
   this.lastTime = 0;
}

var planet;
var guy;

Spudzy.prototype.start = function() {
	planet = new Planet({x:200,y:200},0)
   guy = new Unit(planet);

   // Starts looping
   window.requestAnimationFrame(this.loop.bind(this));
}// end start()

Spudzy.prototype.loop = function(currentTime) {
   var dt = currentTime - this.lastTime;
   this.lastTime = currentTime;

   this.updateState(currentTime, dt);
   this.drawFrame();

   window.requestAnimationFrame(this.loop.bind(this));
}

Spudzy.prototype.updateState = function(time, dt) {
   // console.log(dt);
}

Spudzy.prototype.drawFrame = function() {
   planet.draw();
   guy.draw();
}

var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}// end Vector()

Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}// end length()

Vector.prototype.normalize = function() {
	var len = this.length();
	this.x = this.x / len;
	this.y = this.y / len;
}// end normalize()

var Planet = function(position, playerID) {
	this.position = position;
	this.playerID = playerID;
	this.radius = 30;
	this.unitCreationRate = 1; // unit/s
}// end Planet()

Planet.prototype.spawnUnits = function() {
   var newUnit = new Unit(this);
}// end spawn()

Planet.prototype.draw = function() {
	context.fillStyle = "#c82124";
	context.beginPath();
	context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
	context.closePath();
	context.fill();
}// end draw()

var Unit = function(planet) {
	this.planet = planet;
	this.playerID = planet.playerID;
	this.position = planet.position;
	this.speed = 1;
	this.radius = 5;
}// end Unit()

Unit.prototype.moveTo = function(newPlanet) {
	var direction = new Vector(newPlanet.x - this.x, newPlanet.y - this.y);
	this.x += this.speed * direction.x;
	this.y += this.speed * direction.y;
}// end moveTo()

Unit.prototype.draw = function() {
	context.fillStyle = "#8c1242";
	context.beginPath();
	context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
	context.closePath();
	context.fill();
}// end draw()



Spudzy.prototype.onMouseMove = function(x, y) {
   console.log("move: " + x + ", " + y);
}

Spudzy.prototype.onMouseUp = function(x, y) {
   console.log("up: " + x + ", " + y);
}

Spudzy.prototype.onMouseDown = function(x, y) {
   console.log("down: " + x + ", " + y);
}
