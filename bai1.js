function calNear(a) {
    var input = parseInt(a);
  if (typeof input == "number") {
    if (input % 2 == 0 || input % 3 == 0 || input % 5 == 0 || input % 7 == 0) {
      for (var i = input; ; i++) {
          var storage1 = 0;
        if (i == 2 || i == 3 || i == 5 || i == 7){
            console.log("This is Prime");
            console.log(i);
            console.log("---------");
            storage1 = i;
            break;
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
            console.log("This is Composite numbers");    
            console.log(i);
            console.log("---------");
        } else {
            console.log("This is Prime");    
            console.log(i);
            console.log("---------");
            storage1 = i;
            break; 
        }
      }
      console.log(`Số nguyên tố gần với ${a} là ${storage1}`)
    } else if ( input == 2 || input == 3 || input == 5 || input == 7){
        console.log("This is Prime");    
        console.log(input);
        console.log("---------");
        console.log(`Số nguyên tố gần nhất với ${input} là chính nó`)
    } else {
        console.log("This is Prime");
        console.log(input);
        console.log("---------");
        console.log(`Số nguyên tố gần nhất với ${input} là chính nó`)
    }
  } else {
    alert("Thís isn't a number!!!");
  }
}
