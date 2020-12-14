/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  const isFizz = !(num % 3);
  const isBuzz = !(num % 5);
  if (isFizz && isBuzz) {
    return 'FizzBuzz';
  }
  if (isFizz) {
    return 'Fizz';
  }
  if (isBuzz) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return (a + b > c) && (b + c > a) && (a + c > b);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */

function doRectanglesOverlap(rect1, rect2) {
  const r1top2 = rect1.top + rect1.height;
  const r1Left2 = rect1.left + rect1.width;

  const r2Top2 = rect2.top + rect2.height;
  const r2Left2 = rect2.left + rect2.width;

  const topCondition = rect1.top < r2Top2 && r1top2 > rect2.top;
  const leftCondtion = rect1.left < r2Left2 && r1Left2 > rect2.left;

  return topCondition && leftCondtion;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const xline = (point.x - circle.center.x) ** 2;
  const yline = (point.y - circle.center.y) ** 2;
  const hypotenuse = Math.sqrt(xline + yline);

  return hypotenuse < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const arr = str.split('');
  return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let str = '';
  str = isStartIncluded ? str.concat('[') : str = str.concat('(');
  str = a < b ? str.concat(`${a}, ${b}`) : str.concat(`${b}, ${a}`);
  str = isEndIncluded ? str.concat(']') : str.concat(')');
  return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return num.toString(10).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let arr = ccn.toString(10).split('').map((el) => parseInt(el, 10));
  arr = arr.map((el, idx) => {
    if (idx % 2 && arr.length % 2) {
      if (el * 2 > 9) {
        return el * 2 - 9;
      }
      return el * 2;
    }
    if (!(idx % 2) && !(arr.length % 2)) {
      if (el * 2 > 9) {
        return el * 2 - 9;
      }
      return el * 2;
    }
    return el;
  });
  return arr.reduce((acc, el) => acc + el) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const sum = num.toString(10).split('').reduce((acc, el) => acc + Number.parseInt(el, 10), 0);
  if (sum > 9) {
    return getDigitalRoot(sum);
  }
  return sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (str.length % 2) {
    return false;
  }
  const operBrackets = ['[', '(', '{', '<'];
  const closeBrackets = [']', ')', '}', '>'];
  const brackets = [];

  for (let i = 0; i < str.length; i += 1) {
    if (operBrackets.includes(str[i])) {
      brackets.push(str[i]);
    } else {
      const closeIndex = closeBrackets.indexOf(str[i]);
      if (brackets[brackets.length - 1] === operBrackets[closeIndex]) {
        brackets.pop();
      } else {
        return false;
      }
    }
  }
  return brackets.length === 0;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  if (n === 10) {
    return num;
  }
  let result = '';
  let number = num;
  while (number >= 1) {
    result = result.concat(number % n);
    number = Math.floor(number / n);
  }
  return result.split('').reverse().join('');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let commonArr = pathes[0].split('/');

  for (let i = 1; i < pathes.length; i += 1) {
    const splitted = pathes[i].split('/');
    const tmpCommon = [];
    for (let j = 0; j < splitted.length; j += 1) {
      if (commonArr.indexOf(splitted[j]) > -1) {
        tmpCommon.push(splitted[j]);
      }
    }
    if (tmpCommon.length < commonArr.length) {
      commonArr = tmpCommon;
    }
  }
  return commonArr.reduce((acc, el) => acc.concat(el).concat('/'), '');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const result = [];
  for (let i = 0; i < m1.length; i += 1) {
    result.push([]);
    for (let j = 0; j < m2[i].length; j += 1) {
      let tmpRes = 0;
      for (let k = 0; k < m1[i].length; k += 1) {
        tmpRes += m1[i][k] * m2[k][j];
      }
      result[i].push(tmpRes);
    }
  }
  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

function checkHorizontal(position) {
  let checkThisWinner;
  for (let i = 0; i < position.length; i += 1) {
    checkThisWinner = position[i][i];
    if (checkThisWinner) {
      for (let j = 0; j < position.length; j += 1) {
        if (position[i][j] !== checkThisWinner) {
          checkThisWinner = undefined;
          break;
        }
      }
      if (checkThisWinner) {
        return checkThisWinner;
      }
    }
  }
  return undefined;
}

function checkVertical(position) {
  for (let i = 0; i < position.length; i += 1) {
    let checkThisWinner = position[0][i];
    if (checkThisWinner) {
      for (let j = 0; j < position.length; j += 1) {
        if (position[j][i] !== checkThisWinner) {
          checkThisWinner = undefined;
          break;
        }
      }
      if (checkThisWinner) {
        return checkThisWinner;
      }
    }
  }
  return undefined;
}

function checkDiagonal(position) {
  if (position[0][0] === position[1][1] && position[1][1] === position[2][2]) {
    return position[1][1];
  }
  if (position[0][2] === position[1][1] && position[1][1] === position[2][0]) {
    return position[1][1];
  }
  return undefined;
}

function evaluateTicTacToePosition(position) {
  const horizontal = checkHorizontal(position);
  if (horizontal) {
    return horizontal;
  }

  const vertical = checkVertical(position);
  if (vertical) {
    return vertical;
  }

  return checkDiagonal(position);
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
