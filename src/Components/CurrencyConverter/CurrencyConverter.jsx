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
        <div>
            <h1>Konversi Mata Uang</h1>
            <div>
                <label>
                    Masukan Jumlah:
                    <input type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Mata Uang Dari:
                    <select value={mataUangDari} onChange={(e) => setMataUangDari(e.target.value)}>
                        {Object.keys(konversiTarif).map((mataUang) => (
                            <option key={mataUang} value={mataUang}>
                                {mataUang}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Mata Uang Kedua:
                    <select value={mataUangKedua} onChange={(e) => setMataUangKedua(e.target.value)}>
                        {Object.keys(konversiTarif).map((mataUang) => (
                            <option key={mataUang} value={mataUang}>
                                {mataUang}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <button onClick={konversiUang}>Konversi</button>
            </div>
            {jumlahKonversi !== null && (
                <p>
                    {jumlah} {mataUangDari} = {jumlahKonversi} {mataUangKedua}.
                </p>
            )}
        </div>
    );
};

export default KonversiMataUang;