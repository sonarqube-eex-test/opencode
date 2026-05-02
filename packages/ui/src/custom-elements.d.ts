import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-cc15af3093944820ab1b20812d667fb8
ACR-180717decbce43d3b869dd694ed5ff7e
ACR-8ad344b60b8944208653d4c4ccdb6356
ACR-632a55fc1a314f0b8d8dbc47deab6b9a
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
