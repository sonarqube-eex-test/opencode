import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-a9d1d25305e64143a9b5eaf955d3dbf1
 ACR-ee937d8e4b544f94a75f87e655db0cfa
 ACR-1d5194b2354d417e8c8bf2590aa8b3f5
 ACR-69d16b4fdca04754a9c558771e35ff7a
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
