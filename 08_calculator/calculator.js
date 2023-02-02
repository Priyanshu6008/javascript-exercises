const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	if(a>b)return a-b;
  else if(b>a)return b-a;
};

const sum = function(a) {
	 return a.reduce((total,current)=>total+current,0);
};

const multiply = function(a) {
 return a.length?a.reduce((total,current)=>total*current):0;

};

const power = function(a,b) {
  return Math.pow(a,b);
}; 

const factorial = function(a) {
  let s=1;
  if(a==0||a==1)return 1;
  else{
    for(let i=1;i<a+1;i++){s*=i;}
    return s;
  }
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
