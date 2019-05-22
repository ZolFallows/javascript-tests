describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    var res = []

    const recursiveFunc = function(data){
        if(Array.isArray(data)){
          for(var i=0; i<data.length; i++){
            if(Array.isArray(data[i])){
              recursiveFunc(data[i])
            }else{
              res.push(data[i])
            }
          }
        } else {
          res.push(data)
        }
    } 
    
    for(var i=0; i<arr.length; i++){
      recursiveFunc(arr[i])
    }

    arr = res.sort()
    
    expect(arr).toEqual(expected);
  });
});