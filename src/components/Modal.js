//수정 모달 내부
import React, { useRef, useState } from "react";
import Revise from "./Revise";
import "./Modal.css";

function Modal({ date, beforeTitle }) {

    const [modal, setModal] = useState(false);
    const [revision, setRevision] = useState('');

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    const ReviseRef = useRef(null);

    const handleReviseList = () => {
        if (ReviseRef.current) {
            ReviseRef.current.reviseList();
        }

        setModal(false);

    };

    
     
    return (
        <>
        <button onClick={showModal} className="revise">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </button>
        {
            modal 
            ? <div className="modal">
                    <div className="modalInner">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <center>
                        <h2 className="reviseText">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                            </svg>
                            &nbsp; 할 일 수정
                        </h2>
                        </center>
                        <div className="reviseForm">
                        <input value={revision} onChange={e => setRevision(e.target.value)} className="reviseInput"></input>
                        <button onClick={handleReviseList} className="reviseDone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>
                        </button>
                        </div>
                        <Revise ref={ReviseRef} date={date} beforeTitle={beforeTitle} afterTitle={revision} />
                    </div>
                </div>
            : null
        }
        
        </>
    )
}

export default Modal;
