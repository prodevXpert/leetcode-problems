const { getConcatenation } = require('./solution');

const cases = [
    { nums: [1, 2, 1], expected: [1, 2, 1, 1, 2, 1] },
    { nums: [1, 3, 2, 1], expected: [1, 3, 2, 1, 1, 3, 2, 1] },
];

for (let i = 0; i < cases.length; i++) {
    const { nums, expected } = cases[i];
    const result = getConcatenation(nums);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        console.error(`Case ${i + 1}: got ${JSON.stringify(result)}, want ${JSON.stringify(expected)}`);
        process.exit(1);
    }
}

console.log(`All ${cases.length} test cases passed!`);
