import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-a564a6bb08a7435cb8747f6428990bed
 ACR-4219961d9acf4719ac8efbf043064c4b
 ACR-d86ba008f8d7400ab3fd09001ad6f4c8
 ACR-b2d148937c8d4af5958d03fcf86ca1fe
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
