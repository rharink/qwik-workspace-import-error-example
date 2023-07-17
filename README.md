# Minimal error example imporing component from workspace package

Reproduce:

```shell
pnpm -r run build.lib
cd apps/qwik-app && pnpm build
```

This should result in the following error:

```
"TaKey" is not exported by "../../packages/qwik-icons/lib/tabler.index.qwik.mjs", imported by "src/s_xyl1qowpydi.js".
file: /Users/robert/projects/play/qwik-package-import-example/apps/qwik-app/src/s_xyl1qowpydi.js:5:9
3: import Infobox from "~/components/starter/infobox/infobox";
4: import Starter from "~/components/starter/next-steps/next-steps";
5: import { TaKey } from "qwik-icons/tabler";
            ^
6: import { Fragment as _Fragment } from "@builder.io/qwik/jsx-runtime";
7: import { _jsxC } from "@builder.io/qwik";
error during build:
RollupError: "TaKey" is not exported by "../../packages/qwik-icons/lib/tabler.index.qwik.mjs", imported by "src/s_xyl1qowpydi.js".
...
```
