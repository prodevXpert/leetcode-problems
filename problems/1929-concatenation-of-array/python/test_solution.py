import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from solution import Solution


def run_tests() -> None:
    s = Solution()
    cases = [
        ([1, 2, 1], [1, 2, 1, 1, 2, 1]),
        ([1, 3, 2, 1], [1, 3, 2, 1, 1, 3, 2, 1]),
    ]
    for i, (nums, expected) in enumerate(cases, 1):
        result = s.getConcatenation(nums)
        assert result == expected, f"Case {i}: got {result}, want {expected}"
    print(f"All {len(cases)} tests passed.")


if __name__ == "__main__":
    run_tests()
