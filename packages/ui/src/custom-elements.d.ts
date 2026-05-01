import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-3186a19eb3e6499981c2c8abc36ac601
ACR-5cb605af5c65486e95ea02a0d8312946
ACR-87e0743b686d475b9d7b080fd36212a7
ACR-362c9521317c4130b766fc0661fd9d37
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
