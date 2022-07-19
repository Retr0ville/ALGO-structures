const sum =(a, b)=>{
  return a + b
}
// sum of n items AP n/2(2a + (n-1)d)

function sumMult35(a, b, max){const APSum=(diff, num)=>{
  var a = diff
  var n = Math.floor(num/diff)
  var res = n/2 * ((2 * a ) + ((n-1) * diff))
  return res
}
var sumMa = APSum(a, max)
var sumMb = APSum(b, max)

return sumMa + sumMb
}
console.log(sumMult35(3, 5, 1000));

// O(1) yay