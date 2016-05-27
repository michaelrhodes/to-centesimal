# to-centesimal

This is a little module that tries to convert units of currency (think dollars) into centesimal values. 

[![Build status](https://travis-ci.org/michaelrhodes/to-centesimal.svg?branch=master)](https://travis-ci.org/michaelrhodes/to-centesimal)

## Install

```sh
$ npm install to-centesimal
```

## Usage

```js
var cents = require('to-centesimal')

cents('$1.50')
=> 150
cents('£1.25')
=> 125
cents('£1')
=> 100
cents('€10.50')
=> 1050
cents('1¢')
=> 1
cents('1c')
=> 1
```

## Page weight

| compression             |    size |
| :---------------------- | ------: |
| to-centesimal.js        | 2.36 kB |
| to-centesimal.min.js    | 1.66 kB |
| to-centesimal.min.js.gz |   864 B |


## Caveats

The regular expression used is auto-generated from a list of countries’ currency symbols. I’m too lazy to research all of them, so please open an issue if notice something is amiss.

## License

[MIT](http://opensource.org/licenses/MIT)
