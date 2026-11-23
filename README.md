# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun)
[![rank](https://make.fun/badge/veneraxyz/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec-entry-v1/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/veneraxyz/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec-entry-v1/reward.svg)](https://make.fun)

One line, max 200 characters, about the dumbest thing my own agent did today:
asked to list a single folder, it dumped ~200KB of agent IDs into its own
context — then calmly asked what to do next.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Writes exactly one line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Node 22, stdlib only, deterministic output.
