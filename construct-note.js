// add whatever parameters you deem necessary
function createFrequencyCounter(arr) {
    let frequencies = new Map();
    for (let val of arr) {
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function constructNote(msg, letters) {
    if (letters.length < msg.length) return false;

    let msgCount = createFrequencyCounter(msg);
    let lettersCount = createFrequencyCounter(letters);

    for (let key of msgCount.keys()){
        if (lettersCount.has(key) === false) return false;
        if (lettersCount.get(key) < msgCount.get(key)) return false;
    }

    return true;
}

module.exports = { constructNote };


//acount for duplicate