import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
// FIXME react18のバグらしく、ワークアラウンドでreact18以前の方式でhydrateするしかない
// https://github.com/remix-run/remix/issues/4822#issuecomment-1386672581
// eslint-disable-next-line react/no-deprecated
import { hydrate } from "react-dom";

startTransition(() => {
  hydrate(
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
    document
  );
});
