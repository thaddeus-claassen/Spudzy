var Unit = function(position) {
   this.position = position;
   this.speed = 1;
   this.radius = 5;
} // end Unit()

Unit.prototype.setPlayer = function(playerID) {
   this.playerID = playerID;
} // end setPlayer()

Unit.prototype.moveTo = function(direction) {
   this.x += this.speed * direction.x;
   this.y += this.speed * direction.y;
} // end moveTo()

Unit.prototype.draw = function() {
   context.fillStyle = "#8c1242";
   context.beginPath();
   context.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI, true);
   context.closePath();
   context.fill();
} // end draw()
