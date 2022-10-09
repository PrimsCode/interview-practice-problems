// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrValues) {
    let newObj = {};

    arrKeys.forEach((element, idx) => {
        if(arrValues[idx]){
            newObj[element] = arrValues[idx];
            idx++;
        } else {
            newObj[element] = null;
        }
        
    })

    return newObj;
}


module.exports = { twoArrayObject};