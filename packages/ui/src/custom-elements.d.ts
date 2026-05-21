import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-ef37fd69360542b7813cd528aec56b4c
 ACR-fb642a8f9a1a4788a4e2eaa2a68cb02a
 ACR-844d08fba8cc46a681385a73c2663b36
 ACR-322d6f0f6ff84a3cbc44bf75926dea2e
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
