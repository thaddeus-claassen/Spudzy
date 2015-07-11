
var Vector = function(x, y) {
   this.x = x;
   this.y = y;
} // end Vector

Vector.prototype.lengthSquared = function() {
   return (this.x * this.x) + (this.y * this.y);
}

// Returns the magnitude of the vector
Vector.prototype.length = function() {
   return Math.sqrt(this.lengthSquared());
}

// Normalize the vector
Vector.prototype.normalize = function() {
   var len = this.length();
   this.x = this.x / len;
   this.y = this.y / len;
}

// Return a new normalized vector
Vector.prototype.normalized = function() {
   var len = this.length();
   return new Vector(this.x / len, this.y / len);
}

// Multiply this vector by a constant
Vector.prototype.constMult = function(num) {
   this.x = num * this.x;
   this.y = num * this.y;
}

// Return a new vector multiplied by a constant
Vector.prototype.constMulted = function(num) {
   return new Vector(num * this.x, num * this.y);
}

// Add a vector to this vector
Vector.prototype.add = function(vec) {
   this.x += vec.x;
   this.y += vec.y;
}

// Return a new vector that was added to by another vector
Vector.prototype.added = function(vec) {
   return new Vector(this.x + vec.x, this.y + vec.y);
}

// Subtract a vector from this vector
Vector.prototype.subtract = function(vec) {
   this.x -= vec.x;
   this.y -= vec.y;
}

// Return a new vector that was subtracted by another vector
Vector.prototype.subtracted = function(vec) {
   return new Vector(this.x - vec.x, this.y - vec.y);
}

Vector.prototype.fromAngle = function(angle) {
   return new Vector(Math.cos(angle), Math.sin(angle));
}

var randomRange = function(low, high) {
   return (high - low) * Math.random() + low;
}

var randomAngle = function() {
   return randomRange(0, 2 * Math.PI);
}

var squared = function(num) {
   return num * num;
}

