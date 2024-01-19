import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4 text-center">Challenge Task</h1>
                <p className="lead text-center">
                Aplikasi ini merupakan contoh implementasi React dengan beberapa fitur seperti Countdown Timer, Currency Converter, Salary Calculator, TicTacToe dan Word Scramble.
                </p>
                <hr className="my-4"/>
                <p>
                Silahkan klik tombol dibawah ini untuk melihat lebih detail.
                </p>
                <p className="lead d-flex">
                    <Link className="btn btn-dark btn-lg m-2" to="/countdown" role="button">
                    Countdown Timer
                    </Link>
                    <Link className="btn btn-dark btn-lg m-2" to="/converter" role="button">
                    Currency Converter
                    </Link>
                    <Link className="btn btn-dark btn-lg m-2" to="/tictactoe" role="button">
                    TicTacToe
                    </Link>
                    <Link className="btn btn-dark btn-lg m-2" to="/salary" role="button">
                    Salary Calculator
                    </Link>
                    <Link className="btn btn-dark btn-lg m-2" to="/wordscramble" role="button">
                    Word Scramble
                    </Link>
                  
                </p>
            </div>
        </div>
    );
};

export default HomePage