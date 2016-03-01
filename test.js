var test = require('tape')
var cents = require('./index')

test('it works, at least sometimes',
  function (assert) {
    assert.equal(cents('$1.50'), 150)
    assert.equal(cents('£1.25'), 125)
    assert.equal(cents('£1'), 100)
    assert.equal(cents('€10.50'), 1050)
    assert.equal(cents('¥1'), 100)
    assert.equal(cents('1¢'), 1)
    assert.equal(cents('1c'), 1)
    assert.ok(isNaN(cents('a1')))
    assert.end()
  })
