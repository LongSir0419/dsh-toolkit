# dsh-toolkit

DeepSeek Harness (DSH) 插件工具包——一条命令安装两个插件：

- [@wanghailong0419/dsh-mcp-manager](https://github.com/LongSir0419/dsh-mcp-manager)：MCP 服务器管理（列表/展开/编辑/改名/启停/测试连接）
- [@wanghailong0419/dsh-skill-manager](https://github.com/LongSir0419/dsh-skill-manager)：Skill 管理（列表/展开/编辑/改名/新增/删除/启停）

[![npm](https://img.shields.io/npm/v/@wanghailong0419/dsh-toolkit)](https://www.npmjs.com/package/@wanghailong0419/dsh-toolkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 安装

```bash
dsh plugin --profile web add @wanghailong0419/dsh-toolkit
dsh web   # 重启生效
```

一条命令同时安装 `dsh-mcp-manager` 与 `dsh-skill-manager`，并在设置页出现 **mcp管理** 与 **Skill管理** 两个分区。

## 单独安装 / 移除

```bash
# 单独安装
dsh plugin --profile web add @wanghailong0419/dsh-mcp-manager
dsh plugin --profile web add @wanghailong0419/dsh-skill-manager

# 移除整个工具包
dsh plugin --profile web remove @wanghailong0419/dsh-toolkit

# 升级
dsh plugin --profile web update @wanghailong0419/dsh-toolkit
```

## 包含内容

| 包 | 版本 | 功能 |
|---|---|---|
| `@wanghailong0419/dsh-mcp-manager` | ^0.1.3 | 设置 → mcp管理：MCP 服务器列表、展开详情、内联编辑、改名、启用/停用、测试连接 |
| `@wanghailong0419/dsh-skill-manager` | ^0.1.4 | 设置 → Skill管理：Skill 列表、展开详情、内联编辑、改名、新增、删除、启用/停用 |

## License

MIT
