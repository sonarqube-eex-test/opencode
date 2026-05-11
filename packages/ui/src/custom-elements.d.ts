import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-8a13f10b9c694daf916831938c17f579
 ACR-92f10e50f89d4b8492e257c8d412444c
 ACR-62ae235a45d04d2293209e882ce0f1ea
 ACR-3f04acfc2f0a41a2800e17619f1d3bb8
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
