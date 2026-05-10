import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-854c745c258e4655be75caeb06df43fb
 ACR-0a8165c22e124cad877509cef9cd5da3
 ACR-63dfb04d7d074d9cbe9ec7cc73d53f5f
 ACR-e8003f7553a540f4884cd7396ebc3b29
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
