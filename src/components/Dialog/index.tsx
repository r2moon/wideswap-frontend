import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useBodyNoScroll } from "hooks";

const DialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  overflow: hidden;
`;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  background: darken($grey, 10);
  animation: fadeIn 0.2s;
`;

const DialogScrollContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const DialogArea = styled.div`
  max-width: 100%;
  width: 400px;
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  background: white;
  z-index: 10001;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  animation: showDialog 0.2s;
  padding: 24px 0 16px 0;
`;

const DialogHeader = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 16px;
`;

const DialogTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: $black;
`;

const DialogContent = styled.div`
  flex-grow: 1;
  padding: 0 16px;
`;

type Props = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Dialog = ({ title, onClose, children }: Props) => {
  useBodyNoScroll();

  return createPortal(
    <DialogContainer>
      <DialogOverlay />
      <DialogScrollContainer>
        <DialogArea>
          {title && (
            <DialogHeader>
              <div>
                <DialogTitle>{title}</DialogTitle>
              </div>
            </DialogHeader>
          )}
          <DialogContent>{children}</DialogContent>
        </DialogArea>
      </DialogScrollContainer>
    </DialogContainer>,
    document.body
  );
};

export default Dialog;
