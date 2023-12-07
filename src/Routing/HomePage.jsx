import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Challenge List</p>
            <ul>
                <li>
                    <Link to="/countdown">Countdown Timer</Link>
                </li>
                <li>
                    <Link to="/converter">Currency Converter</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage