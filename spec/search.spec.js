var search = require('../search')

describe('the searcher', function() {
  function sparklify(match) {
    return '~*' + match + '*~'
  }

  it('replaces !$latex$ input using the provided function', function() {
    var output = search('LaTeX: !$latex is magic$ yay!', sparklify)
    expect(output).toBe('LaTeX: ~*latex is magic*~ yay!')
  })

  it('replaces !$multiple$ latex !$inputs$', function() {
    var output = search('LaTeX: !$latex$ is !$magic$ yay!', sparklify)
    expect(output).toBe('LaTeX: ~*latex*~ is ~*magic*~ yay!')
  })
})

