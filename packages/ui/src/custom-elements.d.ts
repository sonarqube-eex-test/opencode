import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-702a52de6df84d2793e4a4763e71de79
 ACR-16c11d6436f04770bc64605e4b8efe98
 ACR-8ca24cb7c95145a68a8cc36db3738579
 ACR-10221c8806204fc4beccdea839da6819
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
