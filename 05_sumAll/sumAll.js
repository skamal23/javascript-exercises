const sumAll = function(low,high) {
    if (low < 0 || high < 0){
        return 'ERROR';
    }
    if(typeof low !== "number" || typeof high !== "number"){
        return 'ERROR';
    }
    if(!Number.isInteger(low) || !Number.isInteger(high)){
        return 'ERROR';
    }
    if(low > high){
        temp = low;
        low = high;
        high = temp;
    }
    let sum = 0;
    for(let i = low; i<=high;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
