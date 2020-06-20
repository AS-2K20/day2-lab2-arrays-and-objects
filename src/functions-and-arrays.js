// Progression #1: Greatest of the two numbers
var i;
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }
  else{
    return num2;
  }
}

// Progression #2: The lengthy word
var words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  var len=0;
  var longestword;
  if(words==""){
    return null;
  }
  else if(words.length==1){
    return words[0];
  }
  else{
  for(i=0;i<words.length;i++){
    if(words[i].length>len){
      len = words[i].length;
      longestword = words[i];
    }
  }
  return longestword;
  }  
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
var sum=0;
if(words==""){
  return 0;
}
for(i=0;i<numbers.length;i++){
  sum += numbers[i];
}
return sum;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
var sum=0;
if(numbersAvg==""){
  return null;
}
for(i=0;i<numbersAvg.length;i++){
  sum += numbersAvg[i];
}
var midpt = parseInt(numbersAvg.length);
var avg = sum/midpt;
return avg;
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
var len = 0;
if(wordsArr==""){
  return null;
}
for(i=0;i<wordsArr.length;i++){
len += wordsArr[i].length ;
}
var midpt = parseInt(wordsArr.length);
var avg = len/midpt;
return avg;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
  if(wordsUnique==""){
    return null;
  }
 var uniqueword = new Set(wordsUnique);
 uniqueword = [...uniqueword];
 return uniqueword;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement (wordsFind,searchWord){
  if(wordsFind==""){
    return null;
  }
 var result = wordsFind.includes(searchWord);
 return result;
  
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount,searchWord){
  var counts = {};
  if(wordsCount==""){
    return 0;
  }
  wordsCount.forEach(function (searchWord) {
    counts[searchWord] = (counts[searchWord] || 0)+1;
  });

  if (counts[searchWord]==undefined){
    return 0;  
  }
  else{
  return counts[searchWord];
  }
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
