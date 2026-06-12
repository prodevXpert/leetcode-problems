# Max Consuctive Ones

- **LeetCode:** [485](https://leetcode.com/problems/max-consecutive-ones)
- **Difficulty:** Easy
- **Topics:** Arrays
- **Date solved:** 2026-06-12

## Problem Summary

Given a binary array nums, return the maximum number of consecutive 1's in the array.

## Approach

Walk the array once while tracking the current streak of consecutive 1s and the best streak seen so far.

Initialize current = 0 and max = 0.
For each element:
If it is 1, increment current.
If it is 0, the streak ends — update max with current, then reset current to 0.
After the loop, check max against current once more (handles a streak that ends at the last index).
Return max.
Key insight: You only need two counters, not extra arrays or grouping. A 0 is a streak boundary; everything between two 0s is one consecutive block of 1s.

Data structures: None beyond two integer variables — pure array scan.

## Complexity

- **Time:** O(n)
- **Space:** O(1)

## Learnings

- 

## Solutions

| Language | Path |
|----------|------|
| Python | `python/solution.py` |
| Javascript | `javascript/solution.js` |

## Local Tests

```bash
python python/test_solution.py
node javascript/test_solution.js
```
