import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-b1997844bfd04141afe9afbd3211ef20
 ACR-3cc95cfe5d0a4435ad39aea0fc3d0f6c
 ACR-7c69dfc912a64f48b2a27404d19f2ce7
 ACR-fb10aeabf15a4e1ea2b00322e6dddd41
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
