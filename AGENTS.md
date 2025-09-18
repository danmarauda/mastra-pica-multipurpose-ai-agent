# Repository Guidelines
## Project Structure & Module Organization
Mastra + Pica logic lives under `src/mastra`. Define conversational agents in `src/mastra/agents`, shared tools (Pica connectors, prompt generation) in `src/mastra/tools`, and orchestration workflows in `src/mastra/workflows`. `src/example-memory-usage.ts` demonstrates memory patterns and is a good sandbox for experimenting with new embeddings. Runtime LibSQL artefacts (`mastra.db`, `mastra-memory.db`, `mastra-code-review-memory.db`) are generated locally; treat them as disposable and keep them out of commits. High-level docs sit in `README.md`, with workflow specifics in `WORKFLOW_README.md`.

## Build, Test & Development Commands
Use Node 20.9+ with your preferred package manager; pnpm is fastest. Typical flow:
```bash
pnpm install
pnpm dev          # Launch Mastra dev playground with hot reload
pnpm build        # Compile agents/workflows for deployment
pnpm start        # Serve the built bundle
```
`npm run <script>` works equivalently. When working on a new agent, register it in `src/mastra/index.ts` so `pnpm dev` picks it up immediately.

## Coding Style & Naming Conventions
Write TypeScript with ES module syntax and 2-space indentation. Export agents, tools, and workflows as named constants from their files, then register them in `src/mastra/index.ts`. Use `PascalCase` for classes/agents, `camelCase` for helpers, and prefix long-lived prompts with context (e.g., `projectAssistantPrompt`). Keep configuration isolated to `.env` and load via `dotenv/config`. Validate runtime input with `zod` schemas so workflows fail fast with precise messaging.

## Testing Guidelines
The repository lacks a default automated suite; new features should add focused coverage. Prefer lightweight integration checks that execute workflows via `npx tsx` scripts alongside examples, asserting schema outputs with `zod`. Document how to replay the scenario in your PR description and ensure `pnpm build` passes before requesting review.

## Commit & Pull Request Guidelines
Recent history uses concise, present-tense summaries ("Added new workflows for project onboarding…"). Follow the same tone, keep commits scoped to a logical unit, and include co-authors when applicable. Pull requests should describe motivation, list key changes, note testing performed, and link any related issues. Include screenshots or console excerpts when behavior changes, and mention required env variables for reviewers.

## Security & Configuration Tips
Store secrets in `.env` only; never commit them. At minimum set `OPENAI_API_KEY` and `PICA_SECRET`, plus any connector-specific tokens referenced in your tools. Regenerate API keys if they leak, and document new configuration knobs in the README or this guide so other agents remain functional.
