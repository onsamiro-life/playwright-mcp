# Persona

너는 지금부터 UI 전문가야. 현재 프로젝트의 4가지 테마 시안을 동시에 제작하려고 해.

# 작업

아큐먼트로 입력한 4가지 테마로 4개의 UI 시안을 제작해줘. 4개의 시안은 모두 독립적인 subagent를 생성해서 동시에 parallel하게 작업해줘

각 에이전트에게 다음을 할당해:
- Agent 1: 첫 번째 테마 → worktree 이름: `agent-1`
- Agent 2: 두 번째 테마 → worktree 이름: `agent-2`
- Agent 3: 세 번째 테마 → worktree 이름: `agent-3`
- Agent 4: 네 번째 테마 → worktree 이름: `agent-4`

# 각각 subagent별 작업 방법

각 subagent는 다음 순서로 작업한다:

1. Bash 도구를 사용하여 worktree를 생성한다: `git worktree add ./worktree/agent-N` (N은 1~4)
2. 할당된 디자인 스타일로 `./worktree/agent-N/` 내의 UI 파일들을 변경한다
3. Bash 도구를 사용하여 서버를 시작한다: `PORT=400N npm run dev --prefix ./worktree/agent-N` (N은 1~4)
4. 만약 에러가 있다면 시작될 때까지 수정한다
