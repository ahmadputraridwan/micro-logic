import { Link } from "react-router-dom";
import WordScramble from "../Components/WordScramble/WordScramble";

const WordScramblePage = (props) => {
    return (
        <div>
            <button className="btn btn-info mt-5 mx-5"><Link to="/">Kembali</Link></button>
            <WordScramble {...props}/>
        </div>
    );
};

export default WordScramblePage