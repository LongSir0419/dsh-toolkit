// dsh-toolkit: host half.
// The toolkit itself carries no logic — it exists so a single
// `dsh plugin --profile web add @wanghailong0419/dsh-toolkit`
// installs and mounts both member bundles (dsh-mcp-manager and
// dsh-skill-manager), which register their own services and
// settings sections. This entry is a no-op that keeps the loader
// happy when the bundle patch references this package.
export default function toolkitPlugin(ctx) {
  ctx?.logger?.debug?.("dsh-toolkit: mounted (member bundles register their own services)");
}
