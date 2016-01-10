var highest = Math.pow(999, 2);
var palindromes = [];

var isPalindrome = function(n) {
    var x = (n.toString().split("").reverse().join(""));
    if(x.toString() === n.toString()) { return true;}
    return false;
}

for(var i = 750; i <= 999; i++) {
    for(var x = 750; x <= 999; x++) {
        if(isPalindrome(i * x)) {
            palindromes.push(i * x);
            document.getElementById("palinTextArea").value += i * x + "\t";
        }
    }
}

function smallestCommons(arr) {
  var numArr = [];
  for(var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      numArr.push(i);
  }
  var result = Math.min(...arr);
  
  function lcm(a, b) {
  	return (a * b) / gcd(a, b);
  }
  
  function gcd(a, b) {
  	return !b ? a : gcd(b, a % b);
  }
  
  numArr.map( function(n) { 
  	result = lcm(result, n);
    document.getElementById("lcmTextArea").value += result + "\t";
  });
  
  return result;
}

function erasePalin() {
    document.getElementById("palinTextArea").value = "";
}

function eraseLCM() {
    document.getElementById("lcmTextArea").value = "";
}

smallestCommons([1, 100]);

