const palindromes = function (str) {
    const v=str.toLowerCase().replace(/[^a-z]/g, "");
    return(v
        .split("")
        .reverse()
        .join("")==v);
};



// Do not edit below this line
module.exports = palindromes;
