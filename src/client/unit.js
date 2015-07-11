var Unit = function(planet, position) {
   this.planet = planet;
   this.playerID = planet.playerID;
   this.position = position;
   this.color = "#8c1242";
   this.speed = 5;
   this.radius = 5;
   this.orbitDistance = randomRange(2,25);
   this.orbitAngle = randomAngle();
} // end Unit()

Unit.prototype.setPlayer = function(playerID) {
   this.playerID = playerID;
} // end setPlayer()

Unit.prototype.update = function(dt) {
   var orbitDistance = this.planet.radius + this.radius + this.orbitDistance;
   var orbitDirection = Vector.prototype.fromAngle(this.planet.orbitOffset + this.orbitAngle);
   var orbitLocation = this.planet.position.added(orbitDirection.constMulted(orbitDistance));
   var unitToDest = orbitLocation.subtracted(this.position);

   var distanceToDest = unitToDest.length();
   var displacement = 0.01 * this.speed * dt;
   displacement = Math.min(displacement, distanceToDest);

   this.position.add(unitToDest.normalized().constMulted(displacement));
}

Unit.prototype.draw = function() {
   context.fillStyle = this.color;
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
} // end draw()
