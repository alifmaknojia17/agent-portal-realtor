import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={'modal-wrapper'}>
        <div onClick={close} className={'modal-backdrop'} />
        <div className={'modal-box'}>{props.children}</div>
      </div>,
      document.getElementById('modal-root')
    );
  }

  return null;
});

export default Modal;
