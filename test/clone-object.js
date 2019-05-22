describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    for(var key in expected){
      var value = expected[key];
      obj[key] = value;
    }

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
