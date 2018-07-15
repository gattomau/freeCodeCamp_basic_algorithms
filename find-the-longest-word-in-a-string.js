
function findLongestWordLengthMathMax(str) {
    return Math.max(...str.split(' ').map(el => el.length));
}

console.log(findLongestWordLengthMathMax('Mia mama xe superstravecionissima!!!'));

function findLongestWordLengthReduce(str) {
    return str.split(' ').reduce((init, val) => {
        init.length < val.length ? init = val : null;
        return init;
    }, '').length;
}

console.log(findLongestWordLengthReduce('Hi how are you'));

function findLongestWordLengthRecursive(str, str2arr = str.split(' '), ctrlString = '', cnt = 0) {
    if(str2arr[cnt].length > ctrlString.length) ctrlString = str2arr[cnt];
    if(cnt >= str2arr.length-1) return ctrlString.length;
    return findLongestWordLengthRecursive(str, str2arr, ctrlString, cnt+1);
}

console.log(findLongestWordLengthRecursive('How skatabatabant are youuuu?'));

function findLongestWordLengthFor(str) {
    let ctrlString = '';
    let arrString = str.split(' ');
    for(let i = 0; i < arrString.length; i++) {
        arrString[i].length > ctrlString.length ? ctrlString = arrString[i] : null;
    }
    return ctrlString.length;
}

console.log(findLongestWordLengthFor('Hi how are youuuu?'));