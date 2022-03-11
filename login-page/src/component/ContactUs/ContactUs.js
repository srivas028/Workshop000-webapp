import React, {useState} from "react";

import { Modal, Button } from "react-bootstrap";
import './ContactUs.css'

const ContactUs = () => {
    const [entered, setEntered] = useState(false);
    const [modal, setModal] = useState(false);

    const onFeedBack = () => {
        setEntered(true)
    }

    const onClose = () => {
        setEntered(false)
    }

    const onSaveChanges = () => {
        setModal(true);
    }

    return (
        <div>
            {!entered && 
            <div className="button">
                <Button className="btn btn-primary"  type="click" onClick={onFeedBack}>Give Feedback</Button>
            </div>
            }
            {entered &&
            <div>
                {!modal &&
                <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>Feedback</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input className="input" type="text" placeholder="Enter your Feedback" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="click" onClick={onClose}>Close</Button>
                        <Button variant="primary" type="click" onClick={onSaveChanges}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                }
                {modal && 
                <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>Feedback</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Thankyou for your Feedback</p>
                    </Modal.Body>
                </Modal.Dialog>}
        </div>}
        </div>
    )
}

export default ContactUs;