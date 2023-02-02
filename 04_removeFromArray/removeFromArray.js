const removeFromArray = function(a,...args) {
    let c=[]
   a.forEach(element=>{
    if(!args.includes(element))c.push(element);
   });
    return c;
};

// Do not edit below this line
module.exports = removeFromArray;
