import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center">
            <div className="container mx-auto p-2 text-center pt-20">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Riwayat Pendidikan</h2>
            </div>
            <RowRiwayat jenjang="SD" sekolah="SDN CIKOPO 2" tahun="2010 - 2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 JATINANGOR" tahun="2016 - 2019" />
            <RowRiwayat jenjang="SMA" sekolah="SMAM 1 JATIANNGOR" tahun="2019 - 2022" />
            <RowRiwayat jenjang="Perguruan Tinggi" sekolah="Ma'soem University" tahun="2022 - 2026" />
        </div>
    );
}