/**
 * drawing.js
 * @author: Chris Young <cyoung@mobiquityinc.com>
 * @description: demonstrates basic drawing with the CanvasRenderingContext2D API
 */

(function () {

  var canvas = document.getElementsByTagName('canvas')[0],
      context = canvas.getContext('2d');

  if (!context)
    return alert('This web page requires support for HTML5 Canvas.');

  canvas.height = document.body.offsetHeight;
  canvas.width = document.body.offsetWidth;

  /**
   * Rectangles are the most simple shape to draw.
   * First we set the fillStyle to be used. Any valid CSS color can be used here (even RGBA!).
   * Then we call fillRect(x, y, w, h) to draw a solid rectangle.
   */
  context.fillStyle = '#aaa';
  context.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);
  
  /**
   * You can also draw an outlined rectangle by using context.strokeRect().
   * This is a common pattern in the CanvasRenderingContext2D API;
   * most "fill" methods have a corresponding "stroke" method.
   */
  context.strokeStyle = '#666';
  context.strokeRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);

  /**
   * Drawing text is just like drawing a rectangle.
   * First we set the font to be used. Any valid CSS font can be used here (it even supports @font-face!).
   * Then we call fillText('string', x, y) to draw solid text.
   * We could also use strokeText() for outlined text.
   */
  context.font = 'bold 2em sans-serif';
  context.fillStyle = '#000';
  context.fillText('CANVAS', canvas.width / 2 - 66, canvas.height / 2 + 119);

  /**
   * In order to draw an image we first must first create an image object, set it's source, and then wait for it to load.
   */
  var image = new Image(200, 200);
  image.src = 'image.png';

  /**
   * Always remember to check if the image failed to load.
   */
  image.addEventListener('error', function (event) {
    alert('Failed to load image!');
  });

  /**
   * After the image has loaded we can draw it on to the canvas.
   */
  image.addEventListener('load', function (event) {
    context.drawImage(image, canvas.width / 2 - 100, canvas.height / 2 - 120);
  });

})();

