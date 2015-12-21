#!/usr/bin/env node

var program = require('commander')
var fs = require('fs')
var latexToUnicode = require('latex-to-unicode')

var latexDelimit = /\$([^\$]*?)\$/

program
  .version('1.0.0')
  .arguments('<file|string>')
  .action(function(file) {
    fs.readFile(file, 'utf8', function(err, data) {
      if (err) throw err
      var results = latexDelimit.exec(data)
      fs.writeFile('test.txt', latexToUnicode(results[1]), 'utf8');
      console.log('waffle time?')
    })
  })
  .parse(process.argv)

