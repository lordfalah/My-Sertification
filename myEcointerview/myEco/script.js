const fizzBuzz = Array(20)
  .fill()
  .map((_, idx) => idx + 1)
  .map((idx) => {
    let word = "";

    if (idx % 3 === 0 && idx % 5 === 0) {
      word = "FIZZ BUZZ";
    } else if (idx % 3 === 0) {
      word = "FIZZ";
    } else if (idx % 5 === 0) {
      word = "BUZZ";
    } else {
      word = idx.toString();
    }

    return word;
  })
  .join();

// const palindrome = (value) => {
//   const result = value.split("").reverse().join("");
//   if (value === result) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not Palindrome");
//   }
// };

// palindrome("ashole");
// palindrome("aba");

const palindrome = (value) => {
  //   let reverse = "";
  //   for (let i = value.length - 1; i >= 0; i--) {
  //     reverse += value[i];
  //   }

  for (let i = 0; i < value.length; i++) {
    let first = i;
    let last = value.length - i - 1;
    // if (value[first] !== value[last]) {
    //   console.log("NOT Palindrome");
    //   break;
    // }

    // console.log(first);
    // console.log(last);

    console.log(`${value[first]} : ${value[last]}`);
  }
  //   console.log("palindrome");
};

palindrome("kodok");
