# LeetCode Daily Practice

A personal repository for solving [LeetCode](https://leetcode.com/) problems **one per day**, with each problem isolated in its own folder so it can be reviewed, revised, or referenced independently later.

## Purpose

- Build consistent problem-solving habits (1 problem / day)
- Keep solutions, notes, and tests together per problem
- Maintain a searchable history of approaches, complexity, and learnings
- Make it easy to revisit or share a single problem without digging through unrelated code

## Repository Structure

```
leetcode-problems/
├── README.md                 # This file — overview + progress tracker
├── .gitignore
├── templates/
│   └── problem/              # Copy this when starting a new problem
│       ├── README.md
│       ├── solution.py
│       └── test_solution.py
└── problems/
    └── {id}-{slug}/          # One folder per LeetCode problem
        ├── README.md         # Problem link, notes, complexity (language-agnostic)
        ├── python/
        │   ├── solution.py
        │   └── test_solution.py
        ├── javascript/
        │   ├── solution.js
        │   └── test_solution.js
        └── go/               # Add only the languages you use
            ├── solution.go
            └── solution_test.go
```

### Naming Convention

Each problem folder uses:

```
{leetcode-number}-{kebab-case-slug}
```

Examples:

- `1929-concatenation-of-array`
- `1-two-sum`
- `206-reverse-linked-list`

This keeps folders sortable by problem ID and readable in GitHub search.

## Daily Workflow

1. **Pick today's problem** on LeetCode.
2. **Create a folder** (copy from `templates/problem/` or use the helper script below).
3. **Solve** in a language subfolder (e.g. `python/solution.py`); add more languages later in sibling folders.
4. **Document** in the problem's `README.md`: link, difficulty, topics, approach, time/space complexity, and what you learned (keep notes language-agnostic).
5. **Run local tests** per language, e.g. `python problems/<folder>/python/test_solution.py`
6. **Commit** with a consistent message:

   ```
   solve(1929): concatenation of array
   ```

7. **Update the progress table** in this README (date + status).

### Quick Start (new problem)

```bash
# Example: problem 1929 — Concatenation of Array
PROBLEM_ID=1929
SLUG=concatenation-of-array
DEST=problems/${PROBLEM_ID}-${SLUG}
cp -r templates/problem "$DEST"
# Then edit DEST/README.md, solution.py, and test_solution.py
```

## Management Strategy

| Goal | How this repo supports it |
|------|---------------------------|
| **One problem = one unit of work** | Each problem is a self-contained folder with code, tests, and notes |
| **Easy to find later** | `{id}-{slug}` naming + progress table below |
| **Clean git history** | One commit per solved problem (`solve(id): title`) |
| **Revisit without noise** | Open only that problem's folder; no shared mutable files |
| **Multiple languages** | Add `python/`, `javascript/`, `go/` subfolders under the same problem |
| **Track streak & topics** | Progress table columns: date, ID, title, difficulty, topics, status |
| **Scale to hundreds of problems** | Flat `problems/` directory; no nested date folders (avoids clutter) |

### Multi-language convention

Keep **one problem folder**, add **one subfolder per language**:

```
problems/1929-concatenation-of-array/
├── README.md          # Shared: approach, complexity, learnings
├── python/
├── javascript/
└── rust/              # only when you solve it in Rust
```

- **README.md** at the problem root = algorithm notes (same idea across languages).
- **Language subfolders** = implementation + tests for that runtime.
- **Day 1:** solve in your primary language only; add other languages anytime without restructuring.
- **Commits:** `solve(1929): concatenation of array (python)` or `add(1929): javascript solution`.

Avoid splitting by language at the repo root (`python/problems/...`, `js/problems/...`) — that makes it harder to manage or share a single problem as one unit.

### Optional extensions (add when needed)

- `notes.md` — longer write-ups or interview prep
- Git tags per milestone: `git tag day-30`, `git tag problems-50`
- GitHub Issues labeled `problem-1929` for follow-up questions on a specific problem

### What to avoid

- **One giant `solutions.py`** — hard to manage individually
- **Date-only folders** (`2026-06-10/`) — hard to find a problem by number later
- **Mixing multiple problems in one commit** — breaks per-problem history

## Progress

| # | Date | ID | Title | Difficulty | Topics | Status |
|---|------|-----|-------|------------|--------|--------|
| 1 | — | [1929](https://leetcode.com/problems/concatenation-of-array/) | Concatenation of Array | Easy | Array | 🟡 In progress |

**Legend:** ✅ Done · 🟡 In progress · ⬜ Planned

## Running Tests

From the repo root:

```bash
python problems/1929-concatenation-of-array/python/test_solution.py
```

## License

Personal practice repository. Solutions are for learning; respect LeetCode's terms when sharing publicly.
