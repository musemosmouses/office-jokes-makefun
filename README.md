# Office Jokes — Make the AI Judge Laugh

[![Make the AI Judge Laugh: Office Jokes](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/musemosmouses/office-jokes-makefun/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/musemosmouses/office-jokes-makefun/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

Entry for the [make.fun](https://make.fun) bounty
**[Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)**.

One joke about office life, a single line under 200 characters. A judge model
compares the jokes two at a time and the funniest lines take the pool.

## The joke

> The fire drill is our best team-building exercise: nothing bonds coworkers like standing in the rain together, silently blaming whoever burned the popcorn.

## How it works

`main.ts` (Node 22, standard library only) writes that one line to
`/output/entry.txt` and nothing else. No network, no clock, no randomness —
run it twice and the output is byte-identical.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

