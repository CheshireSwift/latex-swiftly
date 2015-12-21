var latexDelimit = /!\$([^\$]*?)\$/g

function search(input, replacer) {
  return input.replace(latexDelimit, (match, latex) => replacer(latex))
}

module.exports = search

