#!/usr/bin/env bash
# Usage: ./scripts/new-problem.sh 1929 concatenation-of-array
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ID="${1:?Usage: new-problem.sh <leetcode-id> <slug>}"
SLUG="${2:?Usage: new-problem.sh <leetcode-id> <slug>}"
DEST="$ROOT/problems/${ID}-${SLUG}"

if [[ -d "$DEST" ]]; then
  echo "Already exists: $DEST"
  exit 1
fi

cp -r "$ROOT/templates/problem" "$DEST"
echo "Created: $DEST"
echo "Next: edit README.md, solution.py, and test_solution.py"
