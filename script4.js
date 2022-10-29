var midtermGrade;

function test(midtermGrade){
  if (midtermGrade == 100){
    return "wow...must be nice, but also slay";
  }else if (midtermGrade >= 55) {
    return "YOU PASSED";
  }else if (midtermGrade < 55 ) {
    return "you failed, but also...same";
  }else {
    return "did you take the midterm?";
  }
}
console.log(test(83));

// testing conditions
// console.log(test(100));
// console.log(test(63));
// console.log(test(55));
// console.log(test(32));
// console.log(test("hi"));
