import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const profileBoot = require('C:/Users/15354/.dsh/profiles/node_modules/@deepseek-ai/dsh/lib/profile-boot-DG5t9aNs.js');
const runProfile = profileBoot.o;
const env = new Map(Object.entries(process.env));
env.set('DSH_HOME', 'C:/Users/15354/.dsh');
const booted = await runProfile({ profile: 'web', patchFiles: [], args: ['--port', '3099'], environment: env, binName: 'dsh', cwd: process.cwd() });
const ctx = booted.ctx ?? booted;
const r = {};
try {
  r.mcpService = typeof ctx?.mcpInventory === 'object' && ctx.mcpInventory !== null;
  if (r.mcpService) {
    const snap = await ctx.mcpInventory.list();
    r.path = snap?.path;
    r.rawEntries = snap?.entries?.map(e => ({ id: e.id, name: e.name, enabled: e.enabled }));
    r.entryCount = snap?.entries?.length;
  }
} catch (e) { r.error = String(e?.stack || e); }
try { await booted.shutdown?.(); } catch {}
console.log('=== MCP LIST PROBE ===');
console.log(JSON.stringify(r, null, 2));
setTimeout(() => process.exit(0), 300);
