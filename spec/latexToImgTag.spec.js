var latexToImgTag = require('../latexToImgTag')

describe('latex-to-unicode', function() {
  it('conforms to our replacer interface', function() {
    expect(latexToImgTag('\\frak{A} + \\alpha = 3')).toBe('![\\frak{A} + \\alpha = 3](https://latex.codecogs.com/png.latex?%5Cfrak%7BA%7D%20%2B%20%5Calpha%20%3D%203 "\\frak{A} + \\alpha = 3")')
  })
})

