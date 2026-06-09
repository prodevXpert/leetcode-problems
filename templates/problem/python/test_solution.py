import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from solution import Solution


def run_tests() -> None:
    s = Solution()
    cases = [
        # (input, expected)
    ]
    for i, (inp, expected) in enumerate(cases, 1):
        result = s.solve(inp)
        assert result == expected, f"Case {i}: got {result}, want {expected}"
    print(f"All {len(cases)} tests passed.")


if __name__ == "__main__":
    run_tests()
