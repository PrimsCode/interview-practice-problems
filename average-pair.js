// add whatever parameters you deem necessary

function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let calAvg = (arr[left] + arr[right]) / 2;
        
        if (calAvg === avg){
            return true;
        } else if (calAvg > avg) {
            right--;
        } else {
            left++;
        }
    }

    return false;    
}

module.exports = { averagePair};


// should return true if a pair exists
