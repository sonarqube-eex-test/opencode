import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-6f1df88ae86549dba46905f9d516104a
 ACR-871276934d654d3ba48c859a8babae80
 ACR-b7482e023e7c4bbe9ea945e881498026
 ACR-121d2f89dd2c4d81be9c43e8d5774421
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
