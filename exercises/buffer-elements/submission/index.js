var setup         = require('./setup')
var ELEMENT_DATA  = require('./data.json').elements
var ELEMENT_COUNT = ELEMENT_DATA.length

var setAngle

exports.init = function(gl) {
  setAngle = setup(gl)

  //TODO: Set up the element array buffer here
}

exports.draw = function(gl) {
  gl.clearColor(1,1,1,1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  setAngle(0.003 * Date.now())

  //TODO: Draw the elements here
}
