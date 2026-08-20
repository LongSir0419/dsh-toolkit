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
  r.skillService = typeof ctx?.skillManager === 'object' && ctx.skillManager !== null;
  r.toolkitPlugin = typeof ctx?.toolkit === 'object' && ctx.toolkit !== null;
  if (r.mcpService) {
    const snap = await ctx.mcpInventory.list();
    r.mcpEntries = snap?.entries?.length;
  }
  if (r.skillService) {
    const list = await ctx.skillManager.skillList();
    const skills = Array.isArray(list) ? list : (list?.skills ?? []);
    r.skillCount = skills.length;
  }
} catch (e) { r.error = String(e?.stack || e); }
try { await booted.shutdown?.(); } catch {}
console.log('=== TOOLKIT BOOT VERIFY ===');
console.log(JSON.stringify(r, null, 2));
setTimeout(() => process.exit(r.error ? 1 : 0), 300);
