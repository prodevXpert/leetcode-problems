# Concatenation of Array

- **LeetCode:** [1929](https://leetcode.com/problems/concatenation-of-array/)
- **Difficulty:** Easy
- **Topics:** Array, Simulation
- **Date solved:** 2026-06-10

## Problem Summary

Given `nums` of length `n`, return an array of length `2n` where the first `n` elements and the last `n` elements are both `nums` — i.e. concatenate two copies of `nums`.

For each index `i` where `0 <= i < n`:

- `ans[i] = nums[i]`
- `ans[i + n] = nums[i]`

## Approach

Build the result by appending a second copy of `nums` to itself.

- **Python:** `nums + nums` — creates a new list containing both copies.
- **JavaScript:** `nums.concat(nums)` — same idea, returns a new array without mutating the original.

No extra logic is needed: read the problem literally as array concatenation.

## Complexity

- **Time:** O(n) — each element is copied once into the output array.
- **Space:** O(n) — the output array has length `2n`.

## Learnings

- Warm-up problem for array basics and output sizing (`2n`).
- Python `+` and `*` (`nums * 2`) both concatenate lists; JavaScript uses `concat` or spread (`[...nums, ...nums]`).
- Keep solution files export-only for JS (`module.exports`) so tests can import the function cleanly.

## Solutions

| Language   | Path                    |
|------------|-------------------------|
| Python     | `python/solution.py`    |
| JavaScript | `javascript/solution.js` |

## Local Tests

From this problem folder:

```bash
python3 python/test_solution.py
node javascript/test_solution.js
```

From the repo root:

```bash
python3 problems/1929-concatenation-of-array/python/test_solution.py
node problems/1929-concatenation-of-array/javascript/test_solution.js
```
