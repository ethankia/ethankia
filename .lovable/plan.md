

## Problem

The site shows blank on GitHub Pages because `vite.config.ts` is missing the `base` option. When deployed to GitHub Pages at a subpath (e.g., `https://ethankia.github.io/repo-name/`), all JS/CSS asset paths resolve to `/` instead of the correct subpath, so the browser loads nothing.

## Plan

1. **Add `base` to `vite.config.ts`** - Set `base: "./"` so all asset paths are relative. This works universally regardless of the repo name or hosting path.

That single change should fix the blank page on GitHub Pages. The `HashRouter` is already in place for client-side routing, so no other changes are needed.

