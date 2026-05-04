import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-5022edffc59f4ac8af54fb2282c1e331
ACR-7afd7e5a49ca4a33a3780404f3565dc2
ACR-6bbda1e6d2cb46ebb125f096fd4261e8
ACR-4345550f930b4b03b56539d6fd1c12f0
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
