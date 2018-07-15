// Using the recursive function approach;
function factorialize(num) {
    return num > 0 ? num * factorialize(num - 1) : 1
}

// Approaching the problem using an old-fashioned for-loop
function factorializeForLoop(num) {
    for(let i = num-1; i > 0; i--) {
        num *= i;
    }
    return num;
}

// Approaching the problem using an old-fashioned while-loop
function factorializeWhileLoop(num) {
    let testNum = num;
    while(testNum > 1) {
        num *= testNum-1;
        testNum -= 1;
    }
    return num;
}

// Approaching the problem using an old-fashioned do-while-loop
function factorializeDoWhileLoop(num) {
    let testNum = num;
    do {
        num *= testNum - 1;
        testNum -= 1;
    } while(testNum > 1);
    return num;
}