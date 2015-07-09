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