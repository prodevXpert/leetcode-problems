import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from solution import Solution


def run_tests() -> None:
    s = Solution()
    cases = [
        ([2, 5, 1, 3, 4, 7], 3, [2, 3, 5, 4, 1, 7]),
        ([1, 2, 3, 4, 4, 3, 2, 1], 4, [1, 4, 2, 3, 3, 2, 4, 1]),
        ([1, 1, 2, 2], 2, [1, 2, 1, 2]),
    ]
    for i, (inp, n, expected) in enumerate(cases, 1):
        result = s.shuffle(inp, n)
        assert result == expected, f"Case {i}: got {result}, want {expected}"
    print(f"All {len(cases)} tests passed.")


if __name__ == "__main__":
    run_tests()
