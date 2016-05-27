var fs = require('fs')
var path = require('path')
var symbols = require('currency-symbol-map/map')
var unique = require('array-unique')
var esc = require('escape-regexp')
symbols.GHC = '₵'

var noncents = (function () {
  var noncents = ['\\.', '[A-Z]+\\\$']
  var symbol
  for (var currency in symbols) {
    symbol = symbols[currency]
    if (symbols.hasOwnProperty(currency) && !!symbol) {
      noncents.push(esc(symbol))
    }
  }
  return new RegExp('^[0-9\.]*('
    + unique(noncents).join('|') +
  ')[0-9\.]*$')
})()

fs.writeFileSync(
  path.join(__dirname, '../pattern.js'),
  'module.exports = ' + noncents
)
