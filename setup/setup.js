/**
 * setup.js
 * @author: Chris Young <cyoung@mobiquityinc.com>
 * @description: demonstrates how to setup a canvas for use with the CanvasRenderingContext2D API
 */

(function () {

  /**
   * First we need to get a reference to the canvas element.
   */
  var canvas = document.getElementsByTagName('canvas')[0];

  /**
   * Now we can try to get a CanvasRenderingContext2D object that can be used to draw on the canvas.
   */
  var context = canvas.getContext('2d');

  /**
   * Always remember to check that the context was successfully retrieved.
   */
  if (!context)
    return alert('This web page requires support for HTML5 Canvas!');

  /**
   * Here we set the canvas dimensions to match the dimensions of the web page.
   * This prevents our drawings from coming out blurry.
   */
  canvas.height = document.body.offsetHeight;
  canvas.width = document.body.offsetWidth;

  /**
   * Finally let's draw a square in the center of the screen to make sure everything is working properly.
   */
  context.fillRect(canvas.width / 2 - 32, canvas.height / 2 - 32, 64, 64);

})();

