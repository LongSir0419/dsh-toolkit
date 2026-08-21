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
  r.mcp = typeof ctx?.mcpInventory;
  r.skill = typeof ctx?.skillManager;
  if (typeof ctx?.mcpInventory === 'object') {
    const snap = await ctx.mcpInventory.list();
    r.mcpEntries = snap?.entries?.length;
  }
  if (typeof ctx?.skillManager === 'object') {
    const list = await ctx.skillManager.skillList();
    const skills = Array.isArray(list) ? list : (list?.skills ?? []);
    r.skillCount = skills.length;
  }
  // client discovery: check table for toolkit-related keys
  const cm = ctx?.clientModules;
  r.cm = typeof cm;
  if (cm && typeof cm.table?.size === 'number') {
    const keys = [...cm.table.keys()];
    r.wanghailong = keys.filter(k => k.includes('wanghailong'));
    r.total = keys.length;
  }
} catch (e) { r.error = String(e?.stack || e); }
try { await booted.shutdown?.(); } catch {}
console.log('=== SUBPATH ENTRY VERIFY ===');
console.log(JSON.stringify(r, null, 2));
setTimeout(() => process.exit(0), 300);
