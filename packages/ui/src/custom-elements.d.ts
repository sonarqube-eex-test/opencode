import { DIFFS_TAG_NAME } from "@pierre/diffs"

/*ACR-66aa2127a8bb4f5b968ae6ca794ef4e4
 ACR-3ddbeb972df6443cb87668fbc502ec3b
 ACR-391d3718ca5c41d8b761dd8cb2d13844
 ACR-3b6523d1638d423599242ebaeb2a431f
 */

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      [DIFFS_TAG_NAME]: HTMLAttributes<HTMLElement>
    }
  }
}

export {}
