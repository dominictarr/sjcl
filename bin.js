var fs = require('fs')

var data = require('crypto').pseudoRandomBytes(1e7)//.toString('binary')
var sjcl = require('./core')

var hash = sjcl.hash.sha1.hash

//fs.readFile(process.argv[2], 'binary', function (err, data) {
  console.error('read', data.length)
  var start = Date.now()
  console.log(hash(data))
  var end = Date.now()
  console.log('time', end - start)
//})
