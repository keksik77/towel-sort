module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  }
   for(let i = 0;i< matrix.length;i++)
   {
      if(Array.isArray(matrix[i]))
      {
        matrix[i].sort(function (prev, next) {return prev - next;});
        if(i%2!=0)
        {
          matrix[i].reverse();
        }
      }
    }
    let map1 = [];
    map1 = matrix.reduce(function(a, b) {return a.concat(b);}, []);
    return map1;
}
