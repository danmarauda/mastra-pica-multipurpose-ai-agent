
import { Mastra } from '@mastra/core/mastra';
import { PinoLogger } from '@mastra/loggers';
import { LibSQLStore } from '@mastra/libsql';
import { weatherWorkflow } from './workflows/weather-workflow';
import { weatherAgent } from './agents/weather-agent';
import { projectAssistantAgent } from './agents/project-assistant-agent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, projectAssistantAgent },
  storage: new LibSQLStore({
    // Use persistent file storage for telemetry, evals, and agent memory
    url: "file:./mastra.db",
  }),
  logger: new PinoLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
