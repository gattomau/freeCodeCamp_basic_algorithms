function repeatStringNumTimes(str, num, ctrlStr = '', cnt = 0) {
    return cnt >= num ? ctrlStr : repeatStringNumTimes(str, num, ctrlStr.concat(str), cnt+1);
}

console.log(repeatStringNumTimes('ma', 3))