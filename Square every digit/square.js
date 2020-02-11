/* 
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer.


Sample test - Test for git

Test.assertEquals(squareDigits(9119), 811181);
*/

function squareDigits(num){
    var sum = [];
    var arr = num.toString().split('');
    for(var i = 0; i < arr.length; i++) {
    sum.push(arr[i] * arr[i]);
    }
    var final = Number(sum.join(''));
      return final
    }
