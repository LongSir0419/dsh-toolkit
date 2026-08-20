# dsh-toolkit

[English](README.md) | [中文](README_CN.md)

A DeepSeek Harness (DSH) plugin toolkit — **install two essential plugins with one command**: MCP Manager and Skill Manager. Ready to use right after install; the settings page automatically gains **MCP Manager** and **Skill Manager** sections.

[![npm](https://img.shields.io/npm/v/@wanghailong0419/dsh-toolkit)](https://www.npmjs.com/package/@wanghailong0419/dsh-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Screenshots

| MCP Manager | Skill Manager |
|---|---|
| ![mcp](docs/preview_mcp.png) | ![skill](docs/preview_skill.png) |

## Features

### 🧩 MCP Manager — Settings → MCP Manager
- **List overview**: each server shows connection status (green dot) + registered tool count
- **Click to expand / collapse**: click anywhere on a row to expand details (Server name / module / config JSON), click again to collapse (input fields and buttons excluded)
- **Add / edit / delete / rename / enable-disable**: inline form to configure MCP servers, enable/disable toggle, writes to `$DSH_HOME/profiles/web/cordis.patch.yml`
- **Connection test**: independent MCP handshake (initialize + tools/list) to verify reachability, tool count and latency
- **Cache optimization**: re-entering the page is instant (stale-while-revalidate); add/edit/delete updates state locally without flicker

### 🎯 Skill Manager — Settings → Skill Manager
- **List overview**: lists all Skills under `$DSH_HOME/skills` (name + description)
- **Click to expand / collapse**: click anywhere on a row to expand details (Skill name + SKILL.md content)
- **Edit / rename / add / delete**: inline editing of name and content; rename syncs the directory name; delete has a confirmation step
- **Enable / disable**: toggle takes effect immediately; disabling adds `disable-model-invocation: true` to the frontmatter and the watcher instantly excludes it from the model directory — no restart needed

## Installation

```bash
dsh plugin --profile web add @wanghailong0419/dsh-toolkit
dsh web   # restart to take effect
```

## Included Packages

| Package | Version | Entry |
|---|---|---|
| [@wanghailong0419/dsh-mcp-manager](https://github.com/LongSir0419/dsh-mcp-manager) | ^0.1.3 | Settings → **MCP Manager** |
| [@wanghailong0419/dsh-skill-manager](https://github.com/LongSir0419/dsh-skill-manager) | ^0.1.4 | Settings → **Skill Manager** |

## Install Individually / Remove

```bash
# Install individually
dsh plugin --profile web add @wanghailong0419/dsh-mcp-manager
dsh plugin --profile web add @wanghailong0419/dsh-skill-manager

# Remove the whole toolkit
dsh plugin --profile web remove @wanghailong0419/dsh-toolkit

# Upgrade
dsh plugin --profile web update @wanghailong0419/dsh-toolkit
```

## License

MIT
