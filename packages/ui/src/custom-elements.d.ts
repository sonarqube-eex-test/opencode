import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-108b60f2e802400d9a3b79862de5f112
 ACR-1f78999fc89d484fbc050d38c064f316
 ACR-85bf82b218f343288ef7365b731caf83
 ACR-1806e265f1624e7292be4dd8d9a6b872
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
