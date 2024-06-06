//할 일 입력 시 날짜와 함께 정보 넘겨줌

import React, { useRef, useState } from 'react';
import AddSchedule from "./AddSchedule";
import { useParams } from "react-router-dom";
import "./AddInput.css";

function AddInput() {

    const { date } = useParams();

    const [toDo, setToDo] = useState('');

    const AddScheduleRef = useRef(null);

    const handleAddToList = () => {
        if (AddScheduleRef.current) {
            AddScheduleRef.current.addToList();
        }

        setToDo('');
    };

    return (
        <div className='toDoForm'>
            <input className="toDoInput" value={toDo} onChange={e => setToDo(e.target.value)} placeholder='할 일을 입력하세요...'></input>
            <button className="toDoButton" onClick={handleAddToList}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar-plus" viewBox="0 0 16 16">
                    <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
            </button>
            <AddSchedule ref={AddScheduleRef} date={date} title={toDo} />
        </div>
    )
}

export default AddInput;