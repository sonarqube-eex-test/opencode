import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-7eb82565d38e4e85b9fa00c2b64d2424
 ACR-288aba457f81400baee4aa512ebe20ed
 ACR-a2655140da85487986ec2f1e6988396b
 ACR-e3fa25dff34148f4a52039d5cea9d32a
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
