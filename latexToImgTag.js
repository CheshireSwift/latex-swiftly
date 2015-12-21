function latexToImgTag(latex) {
  var uriEncodedLatex = encodeURIComponent(latex)
  var uri = `http://www.sciweavers.org/tex2img.php?eq=${uriEncodedLatex}&bc=Transparent&fc=Black&im=png&fs=12&ff=arev&edit=0`
  return `![${latex}](${uri} "${latex}")`
}

module.exports = latexToImgTag

