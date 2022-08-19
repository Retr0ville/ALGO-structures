for (i=0, time = 1; i <= 1000000; i++, time += 1){
  setTimeout(() => {
    console.log(Math.ceil((Math.random() * 6)))
  }, time);
}