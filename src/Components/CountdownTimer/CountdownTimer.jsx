import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [tanggal, setTanggal] = useState('');
    const [waktu, setWaktu] = useState(0);
    const [aktif, setAktif] = useState(false);
    const [menghitung, setMenghitung] = useState(false);

    const handleTanggalWaktuChange = (event) => {
        setTanggal(event.target.value);
    };
    
    const handleStartClick = () => {
        if (!tanggal) {
            alert(`Silahkan tentukan waktu terlebih dahulu.`);
            return;
        }

        const targetWaktu = new Date(tanggal).getTime() / 1000;
        const waktuSekarang = Math.floor(Date.now() / 1000);

        if (targetWaktu <= waktuSekarang) {
            alert(`Waktu yang dimasukan harus lebih dari waktu sekarang.`);
            return;
        }

        setWaktu(targetWaktu - waktuSekarang);
        setAktif(true);
        setMenghitung(true);
    };

    const handleResetClick = () => {
        setAktif(false);
        setTanggal('');
        setWaktu(0);
        setMenghitung(false);
    };

    useEffect(() => {
        let intervalId;
    
        if (aktif) {
            intervalId = setInterval(() => {
                setWaktu((waktuSebelum) => {
                    const newWaktu = waktuSebelum - 1;
                    if (newWaktu <= 0) {
                        clearInterval(intervalId);
                        setAktif(false);
                        setMenghitung(false);
                        alert(`Waktu habis!`);
                    }
                    return newWaktu;
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [aktif]);

    // format waktu dalam hh:mm:ss
    const formatWaktu = (detik) => {
        const jam = Math.floor(detik / 3600);
        const menit = Math.floor((detik % 3600) / 60);
        const sisaDetik = detik % 60;

        return `${String(jam).padStart(2, "0")}:${String(menit).padStart(2, "0")}:${String(sisaDetik).padStart(2, "0")}`;
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Countdown Timer</h1>
            <div className="card text-center container" style={{width: '18rem'}}>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">
                            Tanggal dan Waktu:
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={tanggal}
                                onChange={handleTanggalWaktuChange}
                            />
                        </label>
                    </div>
                    <div className="mb-3">
                        <button
                            className="btn btn-primary me-2"
                            onClick={handleStartClick}
                            disabled={menghitung}
                        >
                            Mulai
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={handleResetClick}
                            disabled={!menghitung}
                        >
                            Reset
                        </button>
                    </div>
                    <p className="card-text">Waktu yang tersisa:</p>
                    <p className="card-text">{formatWaktu(waktu)}</p>
                </div>
            </div>
        </div>
    );
    
};

export default CountdownTimer;