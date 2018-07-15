// Solving the problem in the simplest way possible using the Array.prototype.reverse method
function reverseString(str) {
    return str.split('').reverse(str).join('');
}

// Using a recursive function to loop through the string in reverse order, pushing each value to arr and then joining it to obtain the resulting, reversed string
function reverseStringRecursive(str, cnt = str.length-1, arr = []) {
    console.log(cnt);
    if(cnt < 0) return arr.join('');
    return reverseStringRecursive(str, cnt-1, arr.concat(str[cnt]));
}

console.log(reverseStringRecursive('mona'));