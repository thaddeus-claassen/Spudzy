var Planet = function(position, playerID) {
   this.units = [];
   this.position = position;
   this.playerID = playerID;
   this.radius = 30;
   this.unitCreationRate = 1; // unit/s
   this.spawnTimer = 0;
}// end Planet()

Planet.prototype.spawnUnit = function() {
   var newUnit = new Unit({x:Math.random()*500, y:Math.random()*500});
   this.units.push(newUnit);
}// end spawn()

Planet.prototype.moveUnits = function(newPlanet, percent) {
   for (var i = 0; i < this.units.length*(percent/100); i++) {

   }// end for
}// end moveUnits()

Planet.prototype.update = function(dt) {
   this.spawnTimer += dt;
   if (this.spawnTimer > this.unitCreationRate*1000) {
      this.spawnTimer -= this.unitCreationRate*1000;
      this.spawnUnit();
   }// end if
}// end update()

Planet.prototype.draw = function() {
   context.fillStyle = "#c82124";
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
}// end draw()