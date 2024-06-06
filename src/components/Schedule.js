import { useState } from "react";
import { useStateValue } from "../StateProvider";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import Remove from "./Remove";
import "./Schedule.css";

function Schedule() {
    const [{ list }, dispatch] = useStateValue();
    const [completed, setCompleted] = useState({});

    const { date } = useParams();

    const handleCheckboxChange = (title) => {
        setCompleted((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

        return (
            <div className="schedule">
                { list.map((item) => (
                    item.date == date ?
                    <div key={item.title} className="scheduleItem">
                        <input type="checkbox" checked={ completed[item.title] || false } onChange={() => handleCheckboxChange(item.title)} className="ScheduleBox"></input>
                        <label style={{ textDecoration: completed[item.title] ? "line-through" : "none"}} className="scheduleText">{item.title}</label>
                        <div className="Button1">
                        <Modal date={item.date} beforeTitle={item.title} />
                        </div>
                        <div className="Button2">
                        <Remove title={item.title} />
                        </div>

                    </div>
                    : null
                ))}

            </div>
        )
    
}

export default Schedule;


