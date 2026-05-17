import { JSX, Show } from "solid-js"
import "./modal.css"

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: JSX.Element
}

export function Modal(props: Readonly<ModalProps>) {
  return (
    <Show when={props.open}>
      <div data-component="modal" data-slot="overlay" onClick={props.onClose} onKeyDown={(e) => { if (e.key === "Escape") props.onClose(); }}>
        <div data-slot="content" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <Show when={props.title}>
            <h2 data-slot="title">{props.title}</h2>
          </Show>
          {props.children}
        </div>
      </div>
    </Show>
  )
}
