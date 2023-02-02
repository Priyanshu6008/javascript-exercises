const fibonacci = function(a) {
    let n=0;
    let m=1;
    let c;
    if(a<0)return "OOPS";
    else if(a==1)return 1;
    else if(a>0){
        for(let i=0;i<a-1;i++){ 
            c=n+m;
            n=m;
            m=c;
        }
        return c;
    }
};

// Do not edit below this line
module.exports = fibonacci;
