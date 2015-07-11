var Unit = function(planet, position) {
   this.planet = planet;
   this.playerID = planet.playerID;
   this.position = position;
   this.color = "#8c1242";
   this.speed = 5;
   this.radius = 5;
   this.orbitDistance = randomRange(0,15);
} // end Unit()

Unit.prototype.setPlayer = function(playerID) {
   this.playerID = playerID;
} // end setPlayer()

Unit.prototype.update = function(dt) {
   var planetVec = this.planet.position.subtracted(this.position);
   var direction = planetVec.normalized();
   var distSquared = (planetVec).lengthSquared();

   if (distSquared < square(this.planet.radius + this.radius + this.orbitDistance)) {
      
      // orbit

   } else {
      // move towards
      this.position.add(direction.constMulted(0.01 * this.speed * dt));
   }
}

Unit.prototype.draw = function() {
   context.fillStyle = this.color;
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
} // end draw()
