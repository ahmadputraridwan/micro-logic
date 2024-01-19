import { Link } from "react-router-dom"
import KonversiMataUang from "../Components/CurrencyConverter/CurrencyConverter";

const ConverterPage = (props) => {
    return (
        <div>
            <button className="btn btn-dark mt-5 mx-5"><Link to ="/">Kembali</Link></button>
            <KonversiMataUang {...props}/>
        </div>
    );
};

export default ConverterPage