import { Link } from "react-router-dom";
import SalaryCalculator from "../Components/SalaryCalculator/SalaryCalculator";

const SalaryCalcPage = (props) => {
    return (
        <div>
            <button className="btn btn-info mt-5 mx-5"><Link to ="/">Kembali</Link></button>
            <SalaryCalculator {...props}/>
        </div>
    );
};

export default SalaryCalcPage