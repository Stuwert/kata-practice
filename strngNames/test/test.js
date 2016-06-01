let expect = require('chai').expect;
let listFunc = require('../app');


describe('listFunc takes an array of names and returns a string', function(){
  it('should work with multiple names', function(){
    let thisArray = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
    expect(listFunc(thisArray)).to.equal('Bart, Lisa, & Maggie');
  })

  it('should work with 2 names', function(){
    let thisArray = [ {name: 'Bart'}, {name: 'Lisa'} ];
    expect(listFunc(thisArray)).to.equal('Bart & Lisa');
  })

  it('should work with 1 name', function(){
    let thisArray = [ {name: 'Bart'} ];
    expect(listFunc(thisArray)).to.equal('Bart');
  })

  it('shoudl work with no names', function(){
    let thisArray = [ ];
    expect(listFunc(thisArray)).to.equal('');
  })
})
