var Planet = function(position, playerID) {
   this.units = [];
   this.playerID = playerID;
   this.position = position;
   this.color = "#c82124";
   this.radius = randomRange(25,40);
   this.unitCreationRate = 1; // unit/second
   this.spawnTimer = 0;
   this.orbitOffset = 0;
}// end Planet()

Planet.prototype.spawnUnit = function() {
   var newUnit = new Unit(this, new Vector(Math.random()*500, Math.random()*500));
   this.units.push(newUnit);
}// end spawn()

Planet.prototype.moveUnits = function(newPlanet, percent) {
   for (var i = 0; i < this.units.length*(percent/100); i++) {
      var theUnit = units[i];
      theUnit.moveTo(newPlanet);
   }// end for
}// end moveUnits()

Planet.prototype.update = function(dt) {
   // Update orbit offset
   this.orbitOffset += .0005 * dt;

   // Spawn units if it is time
   this.spawnTimer += dt;
   if (this.spawnTimer > this.unitCreationRate*1000) {
      this.spawnTimer -= this.unitCreationRate*1000;
      this.spawnUnit();
   }// end if
}// end update()

Planet.prototype.draw = function() {
   context.fillStyle = this.color;
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
}// end draw()