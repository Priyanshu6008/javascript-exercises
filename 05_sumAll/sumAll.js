const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  else if (a < 0 || b < 0) {
    return "ERROR";
  } else if (b > a) {
    let c = 0;
    for (let index = a; index < b + 1; index++) {
      c += index;
    }
    return c;
  } else if (b < a) {
    let c = 0;
    for (let index = b; index < a + 1; index++) {
      c += index;
    }
    return c;
  } 
  
};

// Do not edit below this line
module.exports = sumAll;
