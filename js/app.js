


// Problem Set #1
// Requirements:
//
        // Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

        var letterCapitalize = function(str) {
          str = "I am a string!";
          str.charAt(0);
      };


        // Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.

        var wordCount =  function("howMany") {
            return word.
        }

        // Bonus: Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

        function optimusPrime(y) {
    if  (x = 2, x < y, x++) {
         if (y % x === 0) {
         return false;
         } else {
              return true;
           }
    }
        };

        optimusPrime(4);



// I went through some old stuff that I had worked on before and pieced this together...  I definitely didn't write this off of the top of my head (One day, though!)!!  But from lessons past and some online research I was able to piece this together and it makes sense to me (I hope it's right!!).
//
// The steps (in English) that would complete this equation:
//
// 1.  State the name of the function to be performed ‘optimusPrime’, and the parameter (y) of the function is the number that will be divided by the ‘divider’(x) to determine if the number is prime.
// 2.  Name the initial value of the divider (in this case, we start with 2, because any whole number divided by 1 is never prime).
// 3.  State that the divider (x)is less than the value of the number that we’re trying to determine is prime or not (y).
// 4.  State that the divider (x) will increase by one every time the function is run, up to just below the value of y, since it is stated that x is always less than y.
// 5.  If the remainder of the division of the number we are trying to determine is prime or not by the value of the divider (x) is equal to 0, then the number is not prime.  The function returns false.
// 6.  If x is greater than 0, and there is a remainder of any number besides 0, the number is prime.  The function returns true.
