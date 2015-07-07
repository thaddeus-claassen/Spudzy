var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function start() {

	var planet = new Planet({x:200,y:200},0)
   	var guy = new Unit(planet);
   	guy.draw();

}// end start()
 
var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.length = function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
}

Vector.prototype.normalize = function() {
	var len = this.length();
	this.x = this.x / len;
	this.y = this.y / len;
}

var Planet = function(position, playerID) {
	this.position = position;
	this.playerID = playerID;
	this.radius = 30;
	this.unitCreationRate = 1; // unit/s
}// end Planet()

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
	context.fillStyle = "#c82124";
	context.beginPath();
	context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
	context.closePath();
	context.fill();
}// end draw()