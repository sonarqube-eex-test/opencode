import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-d4d74ab38e9b4fd99e0f1955af6ee019
 ACR-9a2e0e051bf9427caf54baee475ee384
 ACR-52fffbfc4ba448a19dbafe0101cf71a8
 ACR-3b21c21188e54e80b7c9e63c27515aef
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
