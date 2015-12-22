function latexToImgTag(latex) {
  var uriEncodedLatex = encodeURIComponent(latex)
  var uri = `https://latex.codecogs.com/png.latex?${uriEncodedLatex}`
  return `![${latex}](${uri} "${latex}")`
}

module.exports = latexToImgTag

