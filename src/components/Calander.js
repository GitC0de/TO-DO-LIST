import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Calander.css";

function Calander() {

    const {date} = useParams();
    
    let today =  new Date(date);
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const tomorrow = new Date(today.setDate(today.getDate() + 2));
    today = new Date(today.setDate(today.getDate() - 1));

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, "0");

    
    const yesterdayYear = yesterday.getFullYear();
    const yesterdayMonth = (yesterday.getMonth() + 1).toString().padStart(2, '0');
    const yesterdayDay = yesterday.getDate().toString().padStart(2, "0")
    
    const tomorrowYear = tomorrow.getFullYear();
    const tomorrowMonth = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
    const tomorrowDay = tomorrow.getDate().toString().padStart(2, "0");


    return (
        <div className="calander">
                <Link to = {`/${yesterdayYear}-${yesterdayMonth}-${yesterdayDay}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                </Link>
                <h2>{year}-{month}-{day}</h2>
                <Link to = {`/${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </Link>
            </div>            
    )
}

export default Calander;