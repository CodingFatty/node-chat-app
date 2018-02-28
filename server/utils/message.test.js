var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Den';
    var text = 'text';
    var res = generateMessage(from, text);

    expect(res).toInclude({from,text})
    expect(res.createdAt).toBeA('number')
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'hi';
    var res = generateLocationMessage(from, 1, 1);
    var url = 'https://www.google.com/maps?q=1,1';

    expect(res).toInclude({from, url})
    expect(res.createdAt).toBeA('number')
  })
})
