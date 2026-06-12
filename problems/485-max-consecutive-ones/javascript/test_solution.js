const { findMaxConsecutiveOnes } = require('./solution');

function runTests() {
    const cases = [
        [[1,1,0,1,1,1], 3],
        [[1,0,1,1,0], 2],
        [[0,0,0], 0],
        [[1,1,1], 3],
        [[1,0,1,0,1], 1],
    ];

    cases.forEach(([input, expected], i) => {
        const result = findMaxConsecutiveOnes(input);
        console.assert(result === expected, `Case ${i + 1}: got ${result}, want ${expected}`);
    });

    console.log(`All ${cases.length} tests passed.`);
}

runTests();