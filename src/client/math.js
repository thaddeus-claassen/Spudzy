
var Vector = function(x, y) {
   this.x = x;
   this.y = y;
}// end Vector()

// Returns the magnitude of the vector
Vector.prototype.length = function() {
   return Math.sqrt(this.x * this.x + this.y * this.y);
}// end length()

// Normalize the vector
Vector.prototype.normalize = function() {
   var len = this.length();
   this.x = this.x / len;
   this.y = this.y / len;
}// end normalize()

// Return a new normalized vector
Vector.prototype.normalized = function() {
   var len = this.length();
   return new Vector(this.x / len, this.y / len);
}// end normalized()

// Multiply this vector by a constant
Vector.prototype.constMult = function(num) {
   this.x = num * this.x;
   this.y = num * this.y;
}// end constMult()

// Return a new vector multiplied by a constant
Vector.prototype.constMulted = function(num) {
   return new Vector(num * this.x, num * this.y);
}// end constMulted()

// Add a vector to this vector
Vector.prototype.vecAdd = function(vec) {
   this.x += vec.x;
   this.y += vec.y;
}

// Return a new vector that was a added to by another vector
Vector.prototype.vecAdded = function(vec) {
   return new Vector(this.x + vec.x, this.y + vec.y);
}