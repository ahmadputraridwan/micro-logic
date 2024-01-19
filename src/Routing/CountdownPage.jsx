import { Link } from "react-router-dom";
import CountdownTimer from "../Components/CountdownTimer/CountdownTimer";

const CountdownPage = (props) => {
    return (
        <div>
            <button className="btn btn-dark mt-5 mx-5"><Link to ="/">Kembali</Link></button>
            <CountdownTimer {...props}/>
        </div>
    );
};

export default CountdownPage