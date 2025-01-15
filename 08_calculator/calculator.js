const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	return array.reduce((total,currentElement) => {
    return total + currentElement;
  },0);
};

const multiply = function(array) {
  return array.reduce((total,currentElement) => {
    return total * currentElement;
  } ,1);
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
  let sum = 1;
  for(let i = num; i > 0; i--){
    sum *= i;
  }
  return sum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
