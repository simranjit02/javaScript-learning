function test(number) {
    if (number % 2 === 0) {
      console.log("number is even");
    } else {
      console.log("number is odd");
    }
  }
  test(16);
  
  function testnumber(number) {
    return number % 2 === 0;
  }
  console.log(testnumber(9));
  
  function firstLetter(text) {
    return text[0];
  }
  console.log(firstLetter("simran"));
  function getindex(MyArr, numb) {
    for (let i = 0; i <= MyArr.length; i++) {
      if (MyArr[i] === numb) {
        return i;
      }
    }
    return ` ${numb} <= a wala number nai hega oye 😥 `;
  }
  
  const arr = [2, 4, 6, 8, 53];
  console.log(getindex(arr, 5));
  
  // -----function expression- nichy wala------
  
  const getindexNumber = function (MyArr, numb) {
    for (let i = 0; i <= MyArr.length; i++) {
      if (MyArr[i] === numb) {
        return i;
      }
    }
    return ` ${numb} <= a wala number nai hega oye 😥 `;
  };
  
  const Newarray = [2, 4, 6, 8, 53];
  const answer = getindexNumber(Newarray, 8);
  console.log("index of your number is =>", answer);
  
  // -----arrrow-function------
  const testnumbers = (number) => {
    return number % 2 === 0;
  };
  console.log(testnumbers(8));
  
  const data_A = "guddu😒";
  const data_B = "+ immu😍 ";
  const X = data_A + data_B;
  console.log(X);
  