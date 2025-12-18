import { createPortal } from "react-dom";
import Overlay from "./Overlay";

function Modal({ children, onClose }) {
  return createPortal(
    <Overlay onClose={onClose}>{children}</Overlay>,
    document.body
  );
}

export default Modal;
