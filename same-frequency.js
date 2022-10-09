// add whatever parameters you deem necessary
function freqCounter(num){
    let frequencies = new Map();
    for (let n of num){
        let valCount = frequencies.get(n) || 0;
        frequencies.set(n, valCount + 1);
    }
    return frequencies;
}

function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) return false;
    let num1Freq = freqCounter(num1.toString());
    let num2Freq = freqCounter(num2.toString());

    for (let key of num1Freq.keys()){
        if (!num2Freq.has(key)) return false;
        if(num2Freq.get(key) !== num1Freq.get(key)) return false;
    }
    return true;

}

module.exports = { sameFrequency};