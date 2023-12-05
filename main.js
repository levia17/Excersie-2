function calNear(a) {
  var input = parseInt(a);
  if (typeof input == "number") {
    if (input % 2 == 0 || input % 3 == 0 || input % 5 == 0 || input % 7 == 0) {
      var loop1 = 0,
        loop2 = 0;
      for (var i = input; i > 0; i--) {
        var storage2 = 0;
        if (i == 2 || i == 3 || i == 5 || i == 7) {
          // console.log("This is Prime");
          // console.log(i);
          // console.log("---------");
          storage2 = i;
          break;
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
          // console.log("This is Composite numbers");
          // console.log(i);
          // console.log("---------");
        } else {
          // console.log("This is Prime");
          // console.log(i);
          // console.log("---------");
          storage2 = i;
          break;
        }
        loop1 += 1;
      }
      for (var i = input; ; i++) {
        var storage1 = 0;
        if (i == 2 || i == 3 || i == 5 || i == 7) {
          // console.log("This is Prime");
          // console.log(i);
          // console.log("---------");
          storage1 = i;
          break;
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
          // console.log("This is Composite numbers");
          // console.log(i);
          // console.log("---------");
        } else {
          // console.log("This is Prime");
          // console.log(i);
          // console.log("---------");
          storage1 = i;
          break;
        }
        loop2 += 1;
      }
    //   console.log(`loop1 ${loop1}`);
    //   console.log(`loop2 ${loop2}`);
      console.log(`số nguyên tố trước ${a} là ${storage2}`);
      console.log(`số nguyên tố sau ${a} là ${storage1}`);
      if (loop1 > loop2) {
        console.log(`Số nguyên tố gần nhất với ${a} là ${storage1}`);
      } else if (loop1 < loop2) {
        console.log(`Số nguyên tố gần nhất với ${a} là ${storage2}`);
      } else {
        console.log(`Số nguyên tố gần nhất với ${a} là ${storage1} và ${storage2}`);
      }
    }
    // else if ( input == 2 || input == 3 || input == 5 || input == 7){
    //     console.log("This is Prime");
    //     console.log(input);
    //     console.log("---------");
    //     console.log(`Số nguyên tố gần nhất với ${input} là chính nó`)
    // }
    else {
      console.log("This is Prime");
      console.log(input);
      console.log("---------");
      console.log(`Số nguyên tố gần nhất với ${input} là chính nó`);
    }
  } else {
    alert("Thís isn't a number!!!");
  }
}
/******************************************************************************************************/

function calCount(a){
  const inputCal = `${a}`;
  if(typeof a == "number"){
    if(Number.isInteger(a) == true){
      console.log(`Đây là số nguyên, số nguyên có trong phần tử này là ${inputCal.length}`)
    } else {
      const posDot = inputCal.indexOf(`.`);
      const integer = ``;
      const decimal = ``;
      const countBefore = 0;
      const countAfter = 0;
      if(inputCal.lastIndexOf(`0`) == inputCal.length - 1){
        inputCal.pop();
      }
      for(const i = posDot - 1; i >= 0;i--){
        console.log(inputCal[i]);
        integer += inputCal[i];
        countBefore += 1;
      } 
      for(const i = posDot + 1; i < inputCal.length; i++){
        console.log(inputCal[i]);
        decimal += inputCal[i];
        countAfter += 1;
      }
        const changeToReserve = integer.split("");
        const reserve = changeToReserve.reverse();
        const changeAgain = reserve.toString();  
      console.log(`Integer in array: ${changeAgain.replaceAll(",", "")}`);
      console.log(`Decimal in array: ${decimal}`);
      console.log(`Số nguyên trong phần tử là ${countBefore}, số thập phân là ${countAfter}`);
    }
  } else alert("This isn't a number")
}

/***************************************************************************************/ 

function findRealNum (a){
  var input = `${a}`;
  var posDot = input.indexOf(`.`)
  var countForInte = 0;
  var space = `0.`;
if(typeof a == "number"){
    for(var i = posDot - 2;i >= 0; i--){
      countForInte += 1;
      space += 0;
      console.log(space);
    }
    space += 1;
    console.log(space);
    var resultBe = a + parseFloat(space);
    var resultAf = a - parseFloat(space);
    console.log(`Số liền sau của ${a}: ${resultAf}`);
    console.log(`Số liền trước của ${a}: ${resultBe}`);
} else alert("This isn't a number!!")
}