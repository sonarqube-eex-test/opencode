import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-459ec8f24bf74e8dafdaa8f1c2edd535
 ACR-6ccfc99398c14ec886ebff4d936b5250
 ACR-de0f1439026242288bdc95b4de4edb0f
 ACR-fd6462241ea743a38d1e8c34ee5b1658
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
