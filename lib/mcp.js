// dsh-toolkit: thin re-export for the dsh-mcp-manager member bundle.
// Loader entries resolve this subpath (a profile-root dependency), and Node
// resolves the member package from inside the toolkit's own dependency tree,
// which works on non-hoisted isolated node_modules layouts.
export { default } from '@wanghailong0419/dsh-mcp-manager';
export * from '@wanghailong0419/dsh-mcp-manager';
