
// Fixes for pointer lock and full screen

var launchIntoFullscreen = function(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

Spudzy.prototype.initControls = function() {
   this.controls = {
      keyToggles: [256],
      mouseToggle: false,
      mousePosition : {
         x : 0,
         y : 0
      }
   };

   this.bindEvents();
}

Spudzy.prototype.setMousePosition = function(e) {
   var rect = canvas.getBoundingClientRect();
   this.controls.mousePosition = {
      x : (e.clientX - rect.left),
      y : (e.clientY - rect.top)
   };
}

Spudzy.prototype.bindEvents = function() {
   var self = this;

   $(canvas).bind('keydown', function(e) {
      var keyCode = e.keyCode || e.which;
      self.controls.keyToggles[keyCode] = true;
      self.onKeyDown(keyCode);
   });

   $(canvas).bind('keyup', function(e) {
      var keyCode = e.keyCode || e.which;
      self.controls.keyToggles[keyCode] = false;
      self.onKeyUp(keyCode);
   });

   $(canvas).mousemove(function(e) {
      self.setMousePosition(e);
      self.onMouseMove(self.controls.mousePosition.x, self.controls.mousePosition.y);
   });

   $(canvas).mouseup(function() {
      self.controls.mouseToggle = false;
      self.onMouseUp(self.controls.mousePosition.x, self.controls.mousePosition.y);
   });

   $(canvas).mousedown(function() {
      self.controls.mouseToggle = true;
      self.onMouseDown(self.controls.mousePosition.x, self.controls.mousePosition.y);
      launchIntoFullscreen(canvas);
   });
}

