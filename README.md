# 🚀 Pica Mastra Project Assistant

[![Mastra](https://img.shields.io/badge/Powered%20by-Mastra-blue?style=flat-square)](https://mastra.ai)
[![Pica](https://img.shields.io/badge/Integrated%20with-Pica-green?style=flat-square)](https://picaos.com)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

> A powerful AI Project Assistant with access to **100+ app integrations** through Pica - from Google Workspace to Slack, GitHub to Notion, and everything in between. Built with Mastra for intelligent Agentic AI conversations and memory.

## ✨ Features

### 🔗 **100+ App Integrations via Pica**
Connect to virtually any app you use:

**Productivity & Documents**
- **Google Workspace**: Gmail, Google Drive, Google Docs, Google Sheets, Google Places, Google Calendar
- **Microsoft 365**: Outlook, OneDrive, Word, Excel, PowerPoint, Teams
- **Notion**: Database management, page creation, content operations

**Development & Code**
- **GitHub**: Repository management, issues, pull requests, actions
- **GitLab**: Project management, CI/CD, merge requests
- **Anthropic**: Advanced AI chat completion, code assistance and analysis
- **OpenAI**: Advanced AI chat completion, code assistance and analysis
- **DeepSeek**: Advanced AI chat completion, code assistance and analysis

**Communication & Social**
- **Slack**: Channel management, messaging, workspace administration

**Research & Search**
- **Exa**: Powerful web search and content discovery
- **Perplexity**: AI-powered research and analysis
- **ScrapingDog**: Extract data from any website

**And 100+ more integrations!** - CRMs, databases, e-commerce platforms, marketing tools, and specialized industry applications.

### 🧠 **Smart Memory System**
- Remembers your preferences, projects, and conversation history
- Maintains context across different topics and sessions
- Provides intelligent suggestions based on past interactions

## 🛠 Prerequisites

- **Node.js** 20.9.0 or higher
- **npm** or **yarn**
- **OpenAI API Key** (for embeddings and chat)
- **Pica API Key** (for integrations)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/sagacious-satadru/pica-mastra-demo-app.git
cd my-pica-mastra-app
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# OpenAI Configuration (required for AI responses and embeddings)
OPENAI_API_KEY=your_openai_api_key_here

# Pica Configuration (required for app integrations)
PICA_SECRET=your_pica_secret_key_here

# Optional: Custom configuration
MASTRA_LOG_LEVEL=info
```

### 3. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:4111` with the interactive playground available.

## 💡 What You Can Do

Ask your Project Assistant to help with any task using the 100+ available integrations:

**📝 Document & Content Management**
- "Create a new Google Doc for the project requirements"
- "Update the team spreadsheet with this week's progress"
- "Send an email to stakeholders with the project update"

**🔍 Research & Analysis**
- "Search the web for best practices on mobile app onboarding"
- "Analyze the competitive landscape for e-commerce platforms"
- "Find recent articles about AI in project management"

**💬 Team Communication**
- "Post an update to the #general Slack channel"
- "Schedule a team meeting for next week"
- "Create a Discord announcement for the community"

## 🎮 Using the Playground

1. Start the development server: `npm run dev`
2. Open `http://localhost:4111` in your browser
3. Select "Project Assistant" from the agent dropdown
4. Start chatting! The agent will remember your preferences and context.

> **Tip**: For persistent memory across sessions, provide a unique `resourceId` (your user ID) and `threadId` (conversation topic) in the playground settings.

## 📁 Project Structure

```
my-pica-mastra-app/
├── src/
│   ├── mastra/
│   │   ├── index.ts                    # Main Mastra configuration
│   │   ├── agents/
│   │   │   ├── project-assistant-agent.ts  # Main agent with memory
│   │   │   └── super-agent.ts             # Additional agent
│   │   └── tools/
│   │       └── pica-tools.ts              # Pica integrations
│   └── example-memory-usage.ts           # Usage examples
├── package.json                           # Dependencies and scripts
├── .env                                  # Environment variables
└── README.md                             # This file
```

## 🔧 Configuration

### Memory Settings

In `project-assistant-agent.ts`, you can customize:

```typescript
const memory = new Memory({
  storage: new LibSQLStore({ url: "file:./mastra-memory.db" }),
  vector: new LibSQLVector({ connectionUrl: "file:./mastra-memory.db" }),
  embedder: openai.embedding("text-embedding-3-small"),
  options: {
    lastMessages: 15,        // Conversation history length
    semanticRecall: {
      topK: 3,              // Number of similar messages to recall
      messageRange: 2,      // Context around each recalled message
      scope: 'resource'     // Search across all user threads
    },
    workingMemory: {
      enabled: true,
      scope: 'resource'     // Persist across all user conversations
    }
  }
});
```

## 📊 Database Files

The application creates these database files:

- `mastra-memory.db` - Conversation history and vector embeddings
- `mastra.db` - System telemetry and application data

## 🚀 Deployment

### Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
```

### Production Considerations

1. **Database**: Use external database for production (PostgreSQL, etc.)
2. **Environment**: Set production environment variables
3. **Scaling**: Consider vector database scaling for large user bases
4. **Monitoring**: Enable logging and observability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Mastra Docs](https://mastra.ai/docs)
- **Pica Integrations**: [Pica Documentation](https://docs.picaos.com/get-started/introduction)
- **Issues**: Create an issue in this repository

---

<div align="center">

**Built with ❤️ using [Mastra](https://mastra.ai) and [Pica](https://picaos.com)**

*Making AI agents smarter, one conversation at a time.*

</div>
