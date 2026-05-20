import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-47774b30646f4736a3e9720e9418b602
 ACR-b98c91313a084544b439f2b81eb34274
 ACR-deed5b455890463b86c67c70275a378b
 ACR-b4349b4cd95a487d8e790e2753880144
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
