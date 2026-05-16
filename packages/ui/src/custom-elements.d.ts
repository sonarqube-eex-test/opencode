import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-69ec5c61e9204e9d91e234d2e09974b9
 ACR-9eb003fa7768484a988160864133c14f
 ACR-a15d2f443044466995dc622d94088655
 ACR-eafbf3aea9564633a982909767a03de6
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
