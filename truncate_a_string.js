function truncateString(str, num) {
    // Clear out that junk in your trunk
    return str.length > num ? str.substr(0, num) + '...' : str;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function truncateStringSplit(str, num) {
    return str.length > num ? str.split('').slice(0, num).join('') + '...' : str;
}

console.log(truncateStringSplit("A-tisket a-tasket A green and yellow basket", 8));