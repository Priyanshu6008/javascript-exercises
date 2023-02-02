const reverseString = function(word) {
    let v=''
    for(let i=word.length-1; i>=0; i--){
        v+=word[i];
    }
    return v;
};

// Do not edit below this line
module.exports = reverseString;
