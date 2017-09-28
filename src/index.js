module.exports = function zeros(expression) {
  // your solution
  var countOfZeros = 0, countOfZeros2 = 0, countOfTwo = 0, countOfFives = 0, countOfFives2 = 0, countOfTwo2 = 0, twoS = 0;
  var fiveS = 0;
  var arr1 = [];
  var arr2 = [];
  var arr1result = [];
  var arr2result = [];
  var zero = 0;
  var expr = expression.split('*');

  for (var i = 0; i < expr.length; i++) {
    if (expr[i].indexOf("!!") === -1) {
      arr1 = expr[i].split('!');
      arr1result.push(Number(arr1[0]));
    } else {
      arr2 = expr[i].split('!!');
      arr2result.push(Number(arr2[0]));
    }
  }

  for (var i = 0; i < arr1result.length; i++) {
    for (var j = arr1result[i]; j >= 1; j--) {

      if ((arr1result[i] - j + 1) /5 % 5 === 0) {
        countOfFives = countOfFives + 2;
      } else if ((arr1result[i] - j + 1) % 5 === 0) {
        countOfFives = countOfFives + 1;
      }
      if ((arr1result[i] - j + 1) % 2 === 0) {
        countOfTwo = countOfTwo + 1;
      }
    }
  }

  for(var i = 0; i < arr2result.length; i++){
    if (arr2result[i] % 2 === 0) {
      for(var j = arr2result[i]; j >= 2; j = j - 2) {
        if ((arr2result[i] - j + 2) /5 % 5 === 0) {
          countOfFives2 = countOfFives2 + 2;
        } else if ((arr2result[i] - j + 2) % 5 === 0) {
          countOfFives2 = countOfFives2 + 1;
        }
        if ((arr2result[i] - j + 2) % 2 === 0) {
          countOfTwo2 = countOfTwo2 + 1;
        }
      }
    } else {
      for(var j = arr2result[i]; j >= 1; j = j - 2) {
        if ((arr2result[i] - j + 1) /5 % 5 === 0) {
          countOfFives2 = countOfFives2 + 2;
        } else if ((arr2result[i] - j + 1) % 5 === 0) {
          countOfFives2 = countOfFives2 + 1;
        }
        if ((arr2result[i] - j + 1) % 2 === 0) {
          countOfTwo2 = countOfTwo2 + 1;
        }
      }
    }
  }
  twoS = countOfTwo + countOfTwo2;
  fiveS = countOfFives + countOfFives2;
  zero = Math.min(twoS, fiveS);
  return zero;
}
