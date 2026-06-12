const { shuffle } = require('./solution');

const cases = [
    { nums: [2,5,1,3,4,7], n: 3, expected: [2,3,5,4,1,7] },
    { nums: [1,2,3,4,4,3,2,1], n: 4, expected: [1,4,2,3,3,2,4,1] },
    { nums: [1,1,2,2], n: 2, expected: [1,2,1,2] },
];

for (let i = 0; i < cases.length; i++) {
    const { nums, n, expected } = cases[i];
    const result = shuffle(nums, n);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        console.error(`Case ${i + 1}: got ${JSON.stringify(result)}, want ${JSON.stringify(expected)}`);
        process.exit(1);
    }
}

console.log(`All ${cases.length} test cases passed!`);