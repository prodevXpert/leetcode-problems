import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from solution import Solution


def run_tests() -> None:
    s = Solution()
    cases = [
        ([1, 1, 0, 1, 1, 1], 3),
        ([1, 0, 1, 1, 0, 1], 2),
        ([0, 0, 0], 0),
    ]
    for i, (inp, expected) in enumerate(cases, 1):
        result = s.findMaxConsecutiveOnes(inp)
        assert result == expected, f"Case {i}: got {result}, want {expected}"
    print(f"All {len(cases)} tests passed.")


if __name__ == "__main__":
    run_tests()
