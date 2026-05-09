import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-d944a97a80004824b384bf6dc59323f1
 ACR-cbc81daab059458bbc27eafd2223fa0d
 ACR-62b62dc5be454fb19d6a83b5e8ac860a
 ACR-c4639e3b729a4393bbf7b7aa35ca4317
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
