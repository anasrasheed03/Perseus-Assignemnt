import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

const ModalWrapper = (props) => {
    const [isActiveModal, setActiveModal] = useState(true);


    return (
        <Modal show={isActiveModal} centered className="modalDiv">
            {props.children}
        </Modal>

    );
};

export default ModalWrapper;