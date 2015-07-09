
var POINTER_LOCK_CHANGE = null;
if ("onpointerlockchange" in document) {
   POINTER_LOCK_CHANGE = 'pointerlockchange';
} else if ("onmozpointerlockchange" in document) {
   POINTER_LOCK_CHANGE = 'mozpointerlockchange';
} else if ("onwebkitpointerlockchange" in document) {
   POINTER_LOCK_CHANGE = 'webkitpointerlockchange';
}

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

   $(window).bind('keydown', function(e) {
      var keyCode = e.keyCode || e.which;
      self.controls.keyToggles[keyCode] = true;
      console.log(keyCode);
   });

   $(window).bind('keyup', function(e) {
      var keyCode = e.keyCode || e.which;
      self.controls.keyToggles[keyCode] = false;
   });

   canvas.addEventListener('mousemove', function(e) {
      self.setMousePosition(e);
      self.onMouseMove(self.controls.mousePosition.x, self.controls.mousePosition.y);
   }, false);

   $(window).mouseup(function() {
      self.onMouseUp(self.controls.mousePosition.x, self.controls.mousePosition.y);
   });

   $(window).mousedown(function() {
      self.onMouseDown(self.controls.mousePosition.x, self.controls.mousePosition.y);
   });

   // $(window).bind('click', function (e) {
   //    canvas.requestPointerLock = canvas.requestPointerLock ||
   //                                canvas.mozRequestPointerLock ||
   //                                canvas.webkitRequestPointerLock ||
   //                                canvas.msRequestPointerLock;
   //    canvas.requestPointerLock();
   //    launchIntoFullscreen(canvas);
   // });
}

