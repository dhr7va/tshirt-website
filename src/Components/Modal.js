import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
