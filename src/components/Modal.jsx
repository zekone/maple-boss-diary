import "./Modal.css";
import { useEffect } from "react";

const Modal = ({ isModalOpen, setIsModalOpen, message, buttonName, onClick, onClose}) => {

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        }
    }, [isModalOpen]);

    const handleClick = () => {
        document.body.style.overflow = 'auto';
        onClick();
        setIsModalOpen(false);
    }

    const handleClose = () => {
        document.body.style.overflow = 'auto';
        onClose();
        setIsModalOpen(false);
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <button className="modal-button" onClick={handleClick}> {buttonName} </button>
                <button className="modal-button" onClick={handleClose}> Close </button>
            </div>
        </div>
    )
}

export default Modal