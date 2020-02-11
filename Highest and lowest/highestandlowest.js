/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Sample Test - Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
*/

function highAndLow(numbers){
    var arr = numbers.split(' ')
    var highest = arr[0];
    var lowest = arr[0];
    
for (var i = 0; i < arr.length; i++) {
if (parseInt(arr[i]) >= highest) {
          highest = parseInt(arr[i]) 
  }
  else if (parseInt(arr[i]) <= lowest) {
          lowest = parseInt(arr[i]);
  }
  
  }
  return (highest + ' ' + lowest);
  } 