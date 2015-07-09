var Unit = function(planet, position) {
   this.planet = planet;
   this.playerID = planet.playerID;
   this.position = position;
   this.speed = 1;
   this.radius = 5;
} // end Unit()

Unit.prototype.setPlayer = function(playerID) {
   this.playerID = playerID;
} // end setPlayer()


Unit.prototype.moveTo = function(planet) {
   this.planet = planet;
}// end moveTo()

Unit.prototype.update = function(dt) {
   var planetVec = new Vector(this.planet.x - this.x, this.planet.y - this.y);
   var direction = planetVec.normalized();
   var dist = (planetVec).length();

   if (dist < this.planet.radius * 1.5) {
      // orbit
   } else {
      // move towards
      this.position.vecAdd(direction.constMulted(dt));
   }
}

Unit.prototype.draw = function() {
   context.fillStyle = "#8c1242";
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
} // end draw()
