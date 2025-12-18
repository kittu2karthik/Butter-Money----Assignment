import { useEffect } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

import Button from "./Button";

const OverlayElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  z-index: 1001;
  max-height: 90vh;
  overflow-y: auto;
`;

function Overlay({ children, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  return (
    <OverlayElement>
      <StyledModal>
        <Button
          style={{
            transform: "translateX(0.8rem)",
            transition: "all 0.2s",
            position: "absolute",
            top: "1.2rem",
            width: "2.4rem",
            height: "2.4rem",
            right: "1.9rem",
            padding: "0.4rem",
          }}
          onClick={onClose}
        >
          <IoClose />
        </Button>

        {children}
      </StyledModal>
    </OverlayElement>
  );
}

export default Overlay;
