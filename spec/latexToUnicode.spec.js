var latexToUnicode = require('latex-to-unicode')

// This is a silly test, because we're just asserting that a library does what it
// claims to. That said, I'm including it because it acts as explicit confirmation
// that it confirms to our expected interface for replacers (string -> string).
describe('latex-to-unicode', function() {
  it('conforms to our replacer interface', function() {
    expect(latexToUnicode('\\frak{A} + \\alpha = 3')).toBe('𝔄 + α = 3')
  })
})

