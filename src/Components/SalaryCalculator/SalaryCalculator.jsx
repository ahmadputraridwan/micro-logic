import { useState } from "react";

const SalaryCalculator = () => {
    const [gajiPokok, setGajiPokok] = useState(0);
    const [tunjangan, setTunjangan] = useState(0);
    const [kewajiban, setKewajiban] = useState(0);
    const [gajiKotor, setGajiKotor] = useState(null);
    const [gajiBersih, setGajiBersih] = useState(null);

    const calcGaji = () => {
        if (gajiPokok && !isNaN(gajiPokok) && tunjangan !== 0 && !isNaN(tunjangan) && kewajiban !== 0 && !isNaN(kewajiban)) {
            const gajiKotor = parseFloat(gajiPokok) + parseFloat(tunjangan);
            const gajiBersih = gajiKotor - parseFloat(kewajiban);
            setGajiKotor(gajiKotor);
            setGajiBersih(gajiBersih);
        } else {
            alert('Gaji Pokok, Tunjangan, dan Kewajiban harus diisi dengan angka!');
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Kalkulator Gaji</h1>
            <div className="card text-center container" style={{width: '18rem'}}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="gajiPokok">Gaji Pokok:</label>
                        <input
                            type="number"
                            className="form-control my-2"
                            id="gajiPokok"
                            value={gajiPokok}
                            onChange={(e) => setGajiPokok(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tunjangan">Tunjangan:</label>
                        <input
                            type="number"
                            className="form-control my-2"
                            id="tunjangan"
                            value={tunjangan}
                            onChange={(e) => setTunjangan(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="kewajiban">Kewajiban:</label>
                        <input
                            type="number"
                            className="form-control my-2"
                            id="kewajiban"
                            value={kewajiban}
                            onChange={(e) => setKewajiban(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark m-3"
                        onClick={calcGaji}
                    >
                        Hitung Gaji
                    </button>
                    <div className="mt-3">
                        <p>Gaji Kotor: Rp.{gajiKotor}</p>
                        <p>Gaji Bersih: Rp.{gajiBersih}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalaryCalculator