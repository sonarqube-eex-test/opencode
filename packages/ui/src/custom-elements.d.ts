import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-99a7201a28844bb7955163c12544161d
 ACR-848d6f3efc6741cf972e47854d7d6686
 ACR-00f54f0d28a14c8685621ac458903879
 ACR-ea1a338d3d7b4f73acfe83e1888fd7c4
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
