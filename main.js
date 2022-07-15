const fizzBuzz =(num)=>{
  var res = []
  for(i=0 ; i<=num; i++){
    i % 15 === 0 && res.push('FizzBuzz')
    i % 3 === 0 && i % 5 !== 0 && res.push('Fizz')
    i % 5 === 0 && i % 3 !== 0 && res.push('Buzz')
    i % 5 !== 0 && i % 3 !== 0 && res.push(String(i))
  }
  console.log(res);
}

fizzBuzz(100)