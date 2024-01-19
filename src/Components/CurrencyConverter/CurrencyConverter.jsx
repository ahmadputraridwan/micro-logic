import { useState } from "react";

const KonversiMataUang = () => {
    const [jumlah, setJumlah] = useState('');
    const [mataUangDari, setMataUangDari] = useState('USD');
    const [mataUangKedua, setMataUangKedua] = useState('EUR');
    const [jumlahKonversi, setJumlahKonversi] = useState(null);

    const konversiTarif = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.75,
        CNY: 6.42,
        JPY: 110.47,
        IDR: 15514,
        KRW: 1300,
        SGD: 1.35,
    };

    const konversiUang = () => {
        const konversiDari = konversiTarif[mataUangDari];
        const konversiKe = konversiTarif[mataUangKedua];

        if (!konversiDari || !konversiKe) {
            alert('Maaf, konversi mata uang tidak tersedia.');
            return;
        }

        const result = ( jumlah / konversiDari ) * konversiKe;
        setJumlahKonversi(result.toFixed(2));
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Konversi Mata Uang</h1>
            <div className="card text-center container" style={{width: '18rem'}}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="mataUangDari">Mata Uang Dari:</label>
                        <select
                            className="form-control my-2"
                            id="mataUangDari"
                            value={mataUangDari}
                            onChange={(e) => setMataUangDari(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CNY">CNY</option>
                            <option value="JPY">JPY</option>
                            <option value="IDR">IDR</option>
                            <option value="KRW">KRW</option>
                            <option value="SGD">SGD</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mataUangKedua">Ke Mata Uang:</label>
                        <select
                            className="form-control my-2"
                            id="mataUangKedua"
                            value={mataUangKedua}
                            onChange={(e) => setMataUangKedua(e.target.value)}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CNY">CNY</option>
                            <option value="JPY">JPY</option>
                            <option value="IDR">IDR</option>
                            <option value="KRW">KRW</option>
                            <option value="SGD">SGD</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="jumlah">Jumlah:</label>
                        <input
                            type="number"
                            className="form-control my-2"
                            id="jumlah"
                            value={jumlah}
                            onChange={(e) => setJumlah(e.target.value)}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-dark m-3"
                        onClick={konversiUang}
                    >
                        Konversi
                    </button>
                </div>
                <div className="card-body">
                    <h2>Jumlah Konversi:</h2>
                    <p className="card-text">{jumlahKonversi}</p>
                </div>
            </div>
        </div>
    );
};

export default KonversiMataUang;