
// Sum All Primes

function sumPrimes(num) {
    var res = 0;
  
    function getPrimes(max) {
      var sieve = [];
      var i;
      var j;
      var primes = [];
      for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
          }
        }
      }
  
      return primes;
    }
  
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
  
    return res;
  }
  
  
  console.log(sumPrimes(10));
  
  // Arguments Optional
  
  function addTogether() {
      
      var checkNum = function(num) {
        if (typeof num !== "number") {
          return undefined;
        } else return num;
      };
    
      if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
          return undefined;
        } else {
          return a + b;
        }
      } else {
        var c = arguments[0];
    
        if (checkNum(c)) {
          return function(arg2) {
            if (c === undefined || checkNum(arg2) === undefined) {
              return undefined;
            } else {
              return c + arg2;
            }
          };
        }
      }
    }
    
    
    console.log(addTogether(2, 3));
  
    // Steamroller
  
    function steamrollArray(arr) {
      var flattenedArray = [];
      var flatten = function(arg) {
        if (!Array.isArray(arg)) {
          flattenedArray.push(arg);
        } else {
          for (var a in arg) {
            flatten(arg[a]);
          }
        }
      };
      arr.forEach(flatten);
      return flattenedArray;
    }
    
   
    console.log(steamrollArray([1, [2], [3, [[4]]]]));