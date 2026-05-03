import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-f8152d53850d4aaebb9eb2c34d2de9f3
ACR-096b56495ba248b0aa488403c1cf7ec1
ACR-929ecea5aab042249af8a583a5c1a294
ACR-869192afc0bb41acaac4c0876170abf6
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
