var round = require('round-precision')
var noncents = require('./pattern')

module.exports = function (str) {
  return noncents.test(str) ?
    centesimal(clean(str)) :
    parseFloat(str)
}

function centesimal (str) {
  return round(parseFloat(str) * 100, 0)
}

function clean (str) {
  return str.replace(/^[^0-9]+/, '')
}
