// Exercise 1 (determine the max of 2 numbers)
// Exercise 2 (determine portrait or landscape)
// Exercise 3 (fizzBuzz)
// Exercise 4 (speed and demerit points)
// Exercise 5 (show number function)
// Exercise 6 (count truthy)
// Exercise 7 (show properties)
// Exercise 8 (sum multiples of 3 and 5)
// Exercise 9 (calculate grade)
// Exercise 10 (show stars)
// Exercise 11 (is prime?)
// Exercise 12 (show primes)
// Exercise 13 (max 3)
// Exercise 14 (min 3)
// Exercise 15 (get factors)
// Exercise 16 (median 3)
// Exercise 17 (xor)
// Exercise 18 (is factor?)
// Exercise 19 (is perfect?)
// Exercise 20 (area and circumference of circle)
// Exercise 21 (area of triangle)
// Exercise 22 (odd or even)
// Exercise 23 (letter to number)
// Exercise 24 (is leap year?)
// Exercise 25 (remove all instances of a character from a string)
// Exercise 26 (remove duplicate characters from string while keeping distinct)
// Exercise 27 (count vowels and consonants in a string)
// Exercise 28 (shift duplicate chars to end of a string)
// Exercise 29 (return sum if number of digits is equal to arg a, otherwise return b)
// Exercise 30 (squirrels in the park)
// Exercise 31 (lottery game)
// Exercise 32 (count repeating characters and overlaps)
// Exercise 33 (copy and join strings)
// Exercise 34 (count number of occurrences of a character in char array)
// Exercise 35 (remove white space from a char array)
// Exercise 36 (find duplicates in a char array)
// Exercise 37 (display "How are you" in reverse order)
// Exercise 38 (sort a number array in ascending order (no array.sort())
// Exercise 39 (sort a number array in descending order (no array.sort()))
// Exercise 40 (find missing number in number array)
// Exercise 41 (change calculator)
// Exercise 42 (tip recommender)

//********************************************************

// Write a function that determines the max of 2 numbers.
function max2(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

// Write a function to determine whether an image is in 
// portrait or landscape layout.
function portraitOrLandscape(imgHeight, imgWidth) {
    let orientation;

    (imgHeight > imgWidth) ? orientation = 'Portrait' :
        orientation = 'Landscape';

    return (orientation);
}

// Write a function that takes an input and returns 'Fizz'
// if the input is a number and divisible by 3, 'Buzz'
// if the input is a number and divisible by 5, 'FizzBuzz'
// if the input is a number and divisible by both 3 and 5,
// returns the original input if it is a number and neither
// divisible by 3 nor 5, or 'Not a number' if the input is
// not a number.
function fizzBuzz(input) {
    let result = input;

    if (typeof input !== 'number') result = 'Not a number.'
    if (input % 3 === 0) result = 'Fizz';
    if (input % 5 === 0) result = 'Buzz';
    if ((input % 3 === 0) && (input % 5 === 0)) result = 'FizzBuzz';

    return result;
}

// Write a function that accepts an input which is a driver's
// speed. For every 5 km/h the driver exceeds the speed limit,
// he receives 1 demerit point. If the driver exceeds 12
// points, their license is suspended.
function checkSpeed(speed) {
    const speedLimit = 70;
    const excessPerPoint = 5;
    let excessSpeed = 0;
    let points = 0;

    if (speed < speedLimit + excessPerPoint) {
        return 'Ok';
    } else {
        excessSpeed = speed - speedLimit;
        points = Math.floor(excessSpeed / excessPerPoint);
    }

    if (points <= 12) {
        return 'Points: ' + points;
    } else {
        return 'License Suspended';
    }

}

// Write a function that takes a number as an input and logs
// each number between zero and input to the console, as 
// well as whether each number is even or odd.
function showNumber(input) {
    for (let i = 1; i <= input; i++) {
        if (i % 2 !== 0) {
            console.log(i + ' Odd');
        } else {
            console.log(i + ' Even')
        }
    }
}

// Write a function which takes an array as an argument and 
// counts the number of 'truthy' elements within.
function countTruthy(array) {
    let count = 0;

    for (let value of array) {
        if (value) {
            count++;
        }
    }

    return 'The number of truthy elements is ' + count;
}

// Write a function which accepts an object as an argument and
// returns all the properties which are of type String.
function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key]);
        }
    }
}

// Write a function which accepts a number limit and returns the
// sum of all the multiples of 3 and 5 from zero up to the limit.
function sumMultiples(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

// Write a function which accepts an array of grades and returns 
// a letter grade based on the average of the array elements.
// Scores: 1-59 = F, 60-69 = D, 70-79 = C, 80-89 = B, 90-100 = A.

function calculateGrade(marks) {
    let count = 0;
    let total = 0;

    for (let score of marks) {
        total += score;
        count++;
    }

    let gradeScore = total / count;
    let gradeLetter;

    if (gradeScore < 60) gradeLetter = 'F';
    if (gradeScore >= 60 && gradeScore <= 69) gradeLetter = 'D';
    if (gradeScore >= 70 && gradeScore <= 79) gradeLetter = 'C';
    if (gradeScore >= 80 && gradeScore <= 89) gradeLetter = 'B';
    if (gradeScore >= 90) gradeLetter = 'A';

    return gradeLetter;
}

// Write a function which accepts a number of rows as an argument
// and prints one asterisk on each row, starting with one on line
// one, two on line two, and so on.
function showStars(rows) {
    let star = '*';
    let print = '';

    for (let i = 1; i <= rows; i++) {
        print += star;
        console.log(print);
    }
}

//Write a function which accepts a number as an argument and 
//returns true if the argument is prime.
function isPrime(n) {
    let prime = false;
    let factors = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors++;
        }
    }

    if (factors === 2) prime = true;

    return prime;
}

// Write a function which accepts a limit as an argument and 
// prints all the prime numbers up to the limit.
function showPrimes(limit) {
    for (let i = 0; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Write a function to determine the max of 3 numbers.
function max3(input1, input2, input3) {
    let max = input3;

    if (input1 > input2 && input1 > input3) max = input1;
    if (input2 > input3 && input2 > input1) max = input2;

    return max;
}

// Write a function to determine the min of 3 numbers.
function min3(input1, input2, input3) {
    let min = input3;

    if (input1 < input2 && input1 < input3) min = input1;
    if (input2 < input1 && input2 < input3) min = input2;

    return min;
}

// Write a function which accepts a number as an argument and 
// returns all the factors of that number (exclusive of n).
function getFactors(n) {
    let factors = [];

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

// Write a function to determine the median of 3 numbers.
function median3(input1, input2, input3) {
    let max = max3(input1, input2, input3);
    let min = min3(input1, input2, input3);
    let median = (((input1 + input2 + input3) - max) - min);

    return median;
}

// Write a function which accepts two boolean values and returns
// true if only one of the values is true.
function xor(bool1, bool2) {
    if (bool1 !== bool2) return 'true';
    else return 'false';
}

// Write a function which accepts two number arguments (k and n)
// and returns true if k is a factor of n.
function isFactor(k, n) {
    let factor = false;

    if (n % k === 0) factor = true;

    return factor;
}

// Write a function which accepts a number as an argument and
// returns true if the number is perfect.
function isPerfect(n) {
    let perfect = false;
    let factors = getFactors(n);
    let sum = 0;

    for (let value of factors) {
        sum += value;
    }

    if (sum === n) perfect = true;

    return perfect;
}

// Write a function which accepts a number argument representing
// the radius of a circle, then return the area and circumference.    
function circle(radius) {
    const pi = Math.PI
    let area = (radius * radius) * pi;
    area = area.toFixed(2);
    let circumference = 2 * pi * radius;
    circumference = circumference.toFixed(2);

    return 'Area: ' + area + ', Circumference: ' + circumference;
}

// Write a function which accepts two number arguments representing
// the base-width and height of a triangle, then return the
// triangle area.
function triangle(b, h) {
    let area = (0.5 * b) * h;
    return 'Area: ' + area;
}

// Write a function which accepts a number as an argument and
// determines whether the number is odd or even.
function oddOrEven(n) {
    let result = (n % 2 === 0) ? 'even' : 'odd';
    return result;
}

// Write a function which accepts a letter as an argument and
// returns its numerical value, both as position in the alphabet
// and as unicode.
function letterToNumber(letter) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let position = alphabet.indexOf(letter) + 1;
    let uni = letter.charCodeAt(0);
    console.log(uni);


    return 'Alphabet position: ' + position + ' Unicode value: ' + uni;
}

// Write a function which determines whether a 4-digit year is a leap year.
function isLeapYear(n) {
    let leap = false;

    if (n % 4 === 0) leap = true;
    if (n % 100 === 0 && n % 400) leap = true;

    return leap;
}

// Write a function to remove a given character from a string. E.g. remove
// all 'a' from 'avatar' should return 'vtr'.
function removeChar(string, char) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        if (char !== string.charAt(i)) {
            newString += string.charAt(i);
        }
    }
    return newString;
}

// Write a function to remove duplicate characters from a string.
function removeDuplicates(string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        if (!newString.includes(string.charAt(i))) {
            newString += string.charAt(i);
        }
    }

    return newString;
}

// Write a function which returns the number of vowels and consonants
// in a given string.
function vowelsAndConsonants(string) {
    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'a' ||
            string.charAt(i) === 'e' ||
            string.charAt(i) === 'i' ||
            string.charAt(i) === 'o' ||
            string.charAt(i) === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }

    return 'Vowels: ' + vowels + ' Consonants: ' + consonants;
}

// Write a function which takes a string as an argument and returns
// first the non-repeating characters, then the repeating characters
// at the end. E.g. 'morning' becomes 'morignn'.
function shiftDuplicates(string) {
    let stringArray = [];
    let unique = [];
    let duplicates = [];
    let result = '';

    for (let i = 0; i < string.length; i++) {
        stringArray.push(string.charAt(i));
    }
    for (let i = 0; i < stringArray.length; i++) {
        if (!unique.includes(stringArray[i])) {
            unique.push(stringArray[i]);
        } else {
            duplicates.push(stringArray[i]);
        }
    }
    for (let i = 0; i < unique.length -1; i++) {
        if (duplicates.includes(unique[i])) {
            duplicates.push(unique[i]);
            delete unique[i];
            i--;
        }
    }
    for (let i = 1; i < unique.length; i++) {
        result += unique[i];
    }
    for (let i = 0; i < duplicates.length; i++) {
        result += duplicates[i];
    }

    return result;
}

// Write a function which accepts two non-negative arguments a and b
// and returns their sum if the sum has the same number of digits
// as a. If the sum has more digits than a, return b.
function returnSum(a, b) {
    let sum = a + b;
    let numDigitsA = a.toString().length;
    let numDigitsSum = sum.toString().length;

    return (numDigitsSum > numDigitsA) ? b : sum;
}


// Write a function which accepts a number and a boolean representing
// a temperature and whether the season is Summer to determine if
// the squirrels are playing in the park. In the Summer, the 
// squirrels will play if the temperature is between 60 and 100F, 
// otherwise they play between 60 and 90F.
function squirrelsPlay(temp, isSummer) {
    let play = false;

    switch (isSummer) {
        case (false):
            if (temp > 59 && temp < 91) {
                play = true;
            }
            break;
        case (true):
            if (temp > 59 && temp < 101) {
                play = true;
            }
            break;
    }

    return play;
}

// Write a function which accepts three numbers as arguments
// representing numbers on a lottery ticket. 0 and 1 matching
// numbers = $0, 2 matching numbers = $10, 3 matches = $20.
// Numbers can be between zero and 9.
function lottery(a, b, c) {
    let win1 = Math.floor(Math.random() * 10);
    let win2 = Math.floor(Math.random() * 10);
    let win3 = Math.floor(Math.random() * 10);
    let matches = 0;
    let winnings = 0;

    if (a === win1 || a === win2 || a === win3) matches++;
    if (b === win1 || b === win2 || b === win3) matches++;
    if (c === win1 || c === win2 || c === win3) matches++;

    if (matches >= 3) {
        winnings = 20
    } else if (matches === 2) {
        winnings = 10
    } else
        winnings = 0

    return '$' + winnings
}

// Write a function which counts instances of repeating characters.
// Overlaps count as well. E.g. xxx counts as 2.
function countRepeats(string) {
    let count = 0;
    let i = 0;
    let j = 1;

    while (j < string.length) {
        if (string.charAt(i) === string.charAt(j)) {
            count++;
        }
        i++;
        j++;
    }
    return count;
}

// Write a function which accepts a number n and a string as arguments
// and returns a string that is n copies of the original string.
function copyString(n, string) {
    let newString = '';
    count = 0;

    while (count < n) {
        newString += string;
        count++;
    }
    return newString;
}

// Write a function to count the number of occurrences of the 
// letter 'a' in a character array.
function countCharsArray() {
    let array = ['a', 'a', 'b', 'b', 'c', 'd', 'a'];
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'a') count++;
    }

    return count;
}

// Write a function to remove all white spaces from a character
// array.
function removeWhiteSpace() {
    let array = ['a', 'v', 'a', 't', 'a', 'r', ' ', 'f', 'i', 'l', 'm'];
    return array.filter((item) => item !== ' ');
}

// Write a function to find duplicate characters in a character
// array.
function findDuplicatesInArray() {
    let array = ['a', 'v', 'a', 't', 'a', 'r', 'f', 'i', 'l', 'm', 2, 0, 0, 9]
    let uniqueArray = [];
    let duplicateArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i])
        } else {
            duplicateArray.push(array[i])
        }
    }
    return duplicateArray;
}

// Write a function to display words in reverse order. "How are you"
// should be displayed as "you are How".
function reverseOrder(str) {
    const array = str.split(' ');
    let string = '';

    for (let i = array.length -1; i >= 0; i--) {
        string = string + array[i];
        string = string + ' ';
    }
    console.log(array.length);
    
    return string;
}

// Write a function to sort a number array in ascending order.
function sortNumAsc() {
    let array = [9, 2, 0, 5, 3, 6, 1, 7, 8, 4];

    for (let i = array.length; i >= 0; i--) {
        for (let j = array.length - 1; j >= 0; j--) {
            if (array[i] > array[j]) {
                let tempNum = array[i];
                array[i] = array[j];
                array[j] = tempNum;
            }
        }
    }

    return array;
}

// Write a function to sort a number array in descending order.
function sortNumDesc() {
    let array = [9, 2, 0, 5, 3, 6, 1, 7, 8, 4];

    for (let i = array.length; i >= 0; i--) {
        for (let j = array.length - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                let tempNum = array[i];
                array[i] = array[j];
                array[j] = tempNum;
            }
        }
    }

    return array;
}

// Write a function to find the missing number in a number array.
function findMissing() {
    let array = [9, 2, 0, 5, 3, 1, 7, 8, 4];
    // sort the array in ascending order first.
    for (let i = array.length; i >= 0; i--) {
        for (let j = array.length - 1; j >= 0; j--) {
            if (array[i] > array[j]) {
                let tempNum = array[i];
                array[i] = array[j];
                array[j] = tempNum;
            }
        }
    }
    // now find the missing number.
    let missing;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i && typeof missing !== "number") {
            missing = i;
            console.log(i);
        }
    }

    return missing;
}

// Write a function which accepts two number arguments representing
// a bill amount an amount tendered, then calculates the change in
// number of dollar bills, quarters, dimes, nickels, and pennies.
function changeCalculator(bill, tendered) {
    let changeAmt = tendered - bill;
    changeAmt = changeAmt.toFixed(2);
    const dollarBill = 1;
    const quarter = 0.25;
    const dime = 0.1;
    const nickel = 0.05;
    const penny = 0.01;

    let countBills = Math.floor(changeAmt / dollarBill);

    if (countBills > 0) {
        changeAmt -= countBills;
        changeAmt = changeAmt.toFixed(2);
    }
    let countQuarters = Math.floor(changeAmt / quarter);
    if (countQuarters > 0) {
        changeAmt -= (countQuarters * quarter);
        changeAmt = changeAmt.toFixed(2);
    }
    let countDimes = Math.floor(changeAmt / dime);
    if (countDimes > 0) {
        changeAmt -= (countDimes * dime);
        changeAmt = changeAmt.toFixed(2);
    }
    let countNickels = Math.floor(changeAmt / nickel);
    if (countNickels > 0) {
        changeAmt -= (countNickels * nickel);
        changeAmt = changeAmt.toFixed(2);
    }
    let countPennies = Math.floor(changeAmt / penny);
    if (countPennies > 0) {
        changeAmt -= (countPennies * penny);
        changeAmt = changeAmt.toFixed(2);
    }

    let rtn = 'Dollar bills: ' + countBills + ' Quarters: ' +
        countQuarters + ' Dimes: ' + countDimes + ' Nickels: ' +
        countNickels + ' Pennies: ' + countPennies;

    return rtn;
}

// Write a function which accepts two arguments; the first is a 
// bill amount and the second is service quality; either 'poor',
// 'good', or 'great'.
function tipRecommender(bill, service) {
    let tip = 0;

    if (service === 'poor') {
        tip = bill * 0.16
        tip = tip.toFixed(2);
    } else if (service === 'good') {
        tip = bill * 0.22
        tip = tip.toFixed(2);
    } else {
        tip = bill * 0.26
        tip = tip.toFixed(2);
    }

    return 'The recommended tip is: $' + tip;
}



















