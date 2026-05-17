import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-8b7fc050a39a404aa9b2f443830d36a5
 ACR-9609beadb00b4c42a041840525e53508
 ACR-49a3d45ef1b945b39644fa2c2d0eae14
 ACR-ef537abe581143f59f1c9e7d0e4217f4
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
