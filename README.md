# ⚠️ This package has been renamed to `gemini-researcher`

> **NOTICE:** `better-gemini-mcp` has been deprecated and renamed to **[gemini-researcher](https://github.com/capyBearista/gemini-researcher)**.
>
> Please use the new package going forward:
> ```bash
> npm install -g gemini-researcher
> ```
>
> **NPM:** [npmjs.com/package/gemini-researcher](https://www.npmjs.com/package/gemini-researcher)  
> **GitHub:** [github.com/capyBearista/gemini-researcher](https://github.com/capyBearista/gemini-researcher)

---

# Better Gemini MCP (Deprecated)

[![NPM Version](https://img.shields.io/npm/v/gemini-researcher?logo=npm&label=gemini-researcher)](https://www.npmjs.com/package/gemini-researcher)
[![License: BSD-3 Claude](https://img.shields.io/badge/License-BSD%203--Clause-white.svg)](https://opensource.org/licenses/BSD-3-Clause)

A lightweight, stateless MCP (Model Context Protocol) server that lets developer agents (Claude Code, GitHub Copilot) delegate deep repository analysis to the Gemini CLI. The server is read-only, returns structured JSON (as text content), and is optimized to reduce the calling agent's context and model usage.

## Migration Guide

Update your MCP client configuration to use `gemini-researcher`:

**Before (deprecated):**
```json
{
  "mcpServers": {
    "better-gemini": {
      "command": "npx",
      "args": ["better-gemini-mcp"]
    }
  }
}
```

**After (current):**
```json
{
  "mcpServers": {
    "gemini-researcher": {
      "command": "npx",
      "args": ["gemini-researcher"]
    }
  }
}
```

## Why the rename?

The name `gemini-researcher` better reflects the project's expansion from just an MCP server to providing other agentic harnesses (i.e., CLI/headless mode + Agent Skills).

## Full Documentation

For complete documentation, installation instructions, and usage examples, please visit:

**→ [github.com/capyBearista/gemini-researcher](https://github.com/capyBearista/gemini-researcher)**

---

<p align="center">
  Made with ♡ for the AI-assisted dev community
</p>
