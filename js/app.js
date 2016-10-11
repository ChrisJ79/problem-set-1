


// Problem Set #1
// Requirements:
//


        // Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

        var letterCapitalize = function(str) {
          str = "I am a string!";
          return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
      };

      letterCapitalize();


/*************************************************************************************************************************************************/

        // Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.

        var wordCount =  function(str) {
            str = "hellooooo my name is chris";
            return str.split().length;
        };

        wordCount(str);

/*************************************************************************************************************************************************/

        // Bonus: Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

        function optimusPrime(y) {
    if  (x = 2, x < y, x++) {
         if (y % x === 0) {
         return false;
         } else {
              return true;
           }
    }
        }

        optimusPrime(4);
