import Modal from '@components/modal/Modal';
import React, { useEffect } from "react";

export const TransparentModal = ({ children, ...props }) => {
  const contentProps = {
    bg: "none",
    shadow: "none",
  };
  return (
    <Modal {...props} bg="red" contentProps={contentProps}>
      {children}
    </Modal>
  );
};
