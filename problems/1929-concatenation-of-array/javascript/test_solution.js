const { getConcatenation } = require('./solution');

const cases = [
    { nums:[1, 2, 1], expected: [1, 2, 1, 1, 2, 1] },
    { nums:[1, 3, 2, 1], expected: [1, 3, 2, 1, 1, 3, 2, 1] },
];

cases.forEach(({ nums, expected }) => {
    const result = getConcatenation(nums);
    console.log(result);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Expected ${expected} but got ${result}`);
});

console.log('All test cases passed!');