# Shuffle the Array

- **LeetCode:** [1470](https://leetcode.com/problems/shuffle-the-array/)
- **Difficulty:** Easy
- **Topics:** Array
- **Date solved:** 2026-06-11

## Problem Summary

Given `nums` of length `2n` in the form `[x1, x2, ..., xn, y1, y2, ..., yn]`, return the array shuffled as `[x1, y1, x2, y2, ..., xn, yn]` — interleaving the first half with the second half.

## Approach

For each index `i` from `0` to `n - 1`, take one element from the first half and one from the second half:

- `x_i` is at `nums[i]`
- `y_i` is at `nums[i + n]`
- Place them at `ans[2*i]` and `ans[2*i + 1]`

- **Python:** list comprehension with index formula `nums[i // 2 + (i % 2) * n]`.
- **JavaScript:** loop `n` times, `push(nums[i])` then `push(nums[i + n])`.

## Complexity

- **Time:** O(n) — each of the `n` pairs is processed once.
- **Space:** O(n) — the output array has length `2n`.

## Learnings

- Practice interleaving two halves of an array with a single loop.
- Python index math can replace an explicit loop; JavaScript uses a straightforward `push` loop.
- Keep solution files export-only for JS (`module.exports`) so tests can import cleanly.

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
python3 problems/1470-shuffle-the-array/python/test_solution.py
node problems/1470-shuffle-the-array/javascript/test_solution.js
```
