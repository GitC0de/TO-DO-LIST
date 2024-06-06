import AddInput from "../components/AddInput";
import Calander from "../components/Calander";
import Modify from "../components/Revise";
import Schedule from "../components/Schedule";

import "./Home.css";

function Home() {

    return (
        <div className="home">
            <div className="header">
                <h2>쿠씨씨 투두리스트</h2>
            </div>
            <Calander />
            <Schedule />
            <AddInput />
        </div>
    )
}

export default Home;