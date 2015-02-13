/**
 * drawing.js
 * @author: Chris Young <cyoung@mobiquityinc.com>
 * @description: demonstrates basic drawing with the CanvasRenderingContext2D API using paths
 */

(function () {

  var canvas = document.getElementsByTagName('canvas')[0],
      context = canvas.getContext('2d');

  if (!context)
    return alert('This web page requires support for HTML5 Canvas.');

  canvas.height = document.body.offsetHeight;
  canvas.width = document.body.offsetWidth;

  /**
   * Paths are an easy way to draw complex shapes; they work just like the pen tool in Photoshop.
   * To draw a path we first we call context.beginPath() to create a new subpath.
   * This prevents our path from being connected to any paths that may have been previously drawn.
   */
  context.beginPath();

  /**
   * To start the path we first move the cursor to the first point in the shape.
   * moveTo() will create a new point in the path without a connecting line segment.
   * This will prevent a stray line connecting to the cursors previous position before begining the path.
   * We will also be using fillText() to label our points for more clarity.
   */
  context.moveTo(canvas.width / 2 - 150, canvas.height / 2 - 50);
  context.fillText('1', canvas.width / 2 - 165, canvas.height / 2 - 47);

  /**
   * A path consists of a series of points connected by line segments.
   * Here we connect lines to form a star.
   */
  context.lineTo(canvas.width / 2 + 150, canvas.height / 2 - 50);
  context.fillText('2', canvas.width / 2 + 160, canvas.height / 2 - 47);

  context.lineTo(canvas.width / 2 - 100, canvas.height / 2 + 150);
  context.fillText('3', canvas.width / 2 - 110, canvas.height / 2 + 160);

  context.lineTo(canvas.width / 2, canvas.height / 2 - 150);
  context.fillText('4', canvas.width / 2 - 3, canvas.height / 2 - 155);

  context.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 150);
  context.fillText('5', canvas.width / 2 + 105, canvas.height / 2 + 162);

  /**
   * Now we connect the last point in the path to the first point in the path.
   */
  context.closePath();

  /**
   * Finally we stroke our path to draw it on to the canvas.
   * We could also use fill() here to draw a solid shape.
   */
  context.stroke();

})();

