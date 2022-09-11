import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { modal, active, inactive } from './index.module.css';

export const Modal = props => {
  const [isBrowser, setIsBrowser] = useState(false);
  const Component = ({ custom, message, children, show, onClick: handle }) => {

    return (
      <div className={`${modal} ${show ? active : ''}`}>
        {custom ? children : <p>{message}</p>}
        <span
          className="material-symbols-outlined"
          onClick={handle}
        >
          close
        </span>
      </div>
    );
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) return ReactDOM.createPortal(<Component {...props} />, document.getElementById('modal-root'));
};
