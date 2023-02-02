const repeatString = function(str,n) {
    if(n<0){
        return 'ERROR';
    }
    let v='';
    for (let index = 0; index < n; index++) {
         v+=str;
    }
    return v
};

// Do not edit below this line
module.exports = repeatString;
