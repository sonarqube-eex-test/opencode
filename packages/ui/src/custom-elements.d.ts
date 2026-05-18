import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-7ab07439887049858e083afcaa5de68a
 ACR-12eae4250e614755bc1551f232518b27
 ACR-d96c0591720d43ecb5217d580621d89f
 ACR-178af83250f1451ab44bacbe30e4e0d0
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
