// Euler Project #1
function multiples(num){
   var arr = [];

   for(i = 3; i <= num; i++) {
        if(i % 5 === 0 || i % 3 === 0) {
            arr.push(i);
        }
   }
   return arr;
}

var mult = multiples(1000);

// Euler Project #2
function fibb(num) {
    var arr = [0, 1];
    for(var i = 1; i < num - 1; i++) {
        arr.push(arr[i-1] + arr[i]);
    }

    return arr.filter( (a) => a%2 ==0).reduce( p, v) => p + v);
}

// Euler Project #3
function isPrime(num) {
    for(var i = 3; i < num; i+=2) {
        if(num % i === 0) { return false;}
    }
    return true;
}

function countPrimes(num) {
    var arr = [2];
    for(var i = 3; i < num; i+=2) {
        if(isPrime(i)) { arr.push(i); }
    }
    return arr;
}

var primeFactors = function(num, arr){
    var factor;

    for(i = arr.length; i > 0; i--) {
        if(num % arr[i] === 0) {
            factor = arr[i];
            break;
        }
    }
    return factor;
}

document.getElementById("txtMulti").value += mult;

document.getElementById("txtFibb").value += fibb(34)

var primeArr = countPrimes(8000);
document.getElementById("txtPrime").value = primeFactor(600851475143, primeArr) + ": ";
document.getElementById("txtPrime").value += primeArr;

