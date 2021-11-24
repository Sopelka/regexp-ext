
const RegExpExtension = require('./index').re

describe('Simple strings', ()=>{
  test('"some word"', () => {
    const re = new RegExpExtension()
    const generatedRegExp = re.str('some word').get()
    expect(generatedRegExp).toEqual(/some word/)
  })

  test('Another simple strings', ()=>{
    const re = new RegExpExtension()
    const generatedRegExp = re.str('another word').get()
    expect(generatedRegExp).toEqual(/another word/)
  })


  describe('Special characters in .str() should be escaped', ()=>{
    test('Wildcard (*)', ()=>{
      const re = new RegExpExtension()
      const generatedRegExp = re.str('*word').get()
      expect(generatedRegExp).toEqual(/\*word/)
    })
    test('All special chars: [ ] \\ ^ $ . | ? * + ( )', ()=>{
      const re = new RegExpExtension()
      const generatedRegExp = re.str('[ ] \\ ^ $ . | ? * + ( )').get()
      expect(generatedRegExp).toEqual(/\[ \] \\ \^ \$ \. \| \? \* \+ \( \)/)
    })

  })

})

describe('.regexp() method', () => {
  test('Add arbitrary RegExp as a string', ()=>{
    const re = new RegExpExtension()
    const generatedRegExp = re.regexp('Hello,? World').get()
    expect(generatedRegExp).toEqual(/Hello,? World/)
  })
})


describe('Chaining: Combine regexp with several methods', ()=>{
  test('Several .str() methods', () => {
    const re = new RegExpExtension()
    const generatedRegExp = re.str('Super').str('Man').get()

    expect(generatedRegExp).toEqual(/SuperMan/)
  })
})