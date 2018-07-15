function largestOfFour(arr) {
   // You can do this!
   // el.sort always compares the first argument to be lower than the second and acts accordingly. Passing a callback function we can invert this order as seen below:
   // [1,2].sort((a,b) => a - b)) => [1,2]
   // [1,2].sort((a,b) => (b - a)) => [2,1]
   // negative: sort first operand to have a lower index than the second;
   // equal: no sorting performed;
   // positive: sort first operand to have a greater index than the second;
   // [4,5,1,3].sort((a,b) => b - a) => 5-4 = 1 = 5,4, 1-4 = -3 = 4,1, 3-1 = 2 = 3, 1 = [5,4,3,1]
   return arr.map(el => el.sort((a,b) => b - a)[0]);
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function largestOfFourReduceMax(arr) {
    // Using the Math.max() method over the spread array elements in order to find the largest value in each one.
    return arr.map(el => Math.max(...el));
}

console.log(largestOfFourReduceMax([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

function largestOfFourReduce(arr) {
    // Using the array.reduce(), a check is performed on the current value is performed against the previous one which is stored as init.
    // If the current value is greater than the previous, then init is set accordingly
    return arr.map(el => el.reduce((init, val) => {
            if(val >= init) init = val;
            return init;
        }, 0)
    );
}

console.log(largestOfFourReduce([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))