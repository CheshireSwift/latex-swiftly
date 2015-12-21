#!/usr/bin/env node

var program = require('commander')
var fs = require('fs')
var latexToUnicode = require('latex-to-unicode')

var search = require('./search')
var latexToImgTag = require('./latexToImgTag')

var file

program
  .version('1.0.0')
  .option('-i, --in-place', 'overwrite the input file, modifying it in place')
  .option('-u, --unicode', 'instead of outputting image tags, attempt to convert LaTeX to unicode characters')
  .arguments('<file name>')
  .action(function(fileArg) {
    file = fileArg
  })
  .parse(process.argv)

if (!file) {
  console.log('No input file provided.')
  return
}

fs.readFile(file, 'utf8', function(err, data) {
  if (err) { throw err }

  var replacer = program.unicode ? latexToUnicode : latexToImgTag
  var output = search(data, replacer)
  if (program.inPlace) {
    fs.writeFile(file, output, 'utf8');
  } else {
    console.log(output)
  }
})

