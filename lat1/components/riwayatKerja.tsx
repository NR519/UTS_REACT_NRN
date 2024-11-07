import '../app/kelas.css';

interface RowRiwayatKerjaProps {
    tahun_kerja: string;
    instansi: string;
    bekerja_sebagai: string;
  }

function BarisRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="p-4 mb-2 border border-gray-300 rounded-md shadow-md bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="font-semibold col-span-12 md:col-span-4 text-center">
            {props.tahun_kerja}
          </div>
          <div className="col-span-12 md:col-span-4 text-center">
            {props.instansi}
          </div>
          <div className="text-gray-500 col-span-12 md:col-span-4 text-center">
            {props.bekerja_sebagai}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatKerja(){
    return (
        <div>
            <h1 className="text-black-300 font-bold judul mt-10 mb-10">Riwayat Pekerjaan</h1>
        <BarisRiwayatKerja tahun_kerja="2003 - 2010" instansi="Rumah Sakit Hasan Sadikin" bekerja_sebagai="Dokter Spesialis Mobile Legend" />
        <BarisRiwayatKerja tahun_kerja="2010 - 2012" instansi="Polda Jabar" bekerja_sebagai="Kepala Polisi" />
        <BarisRiwayatKerja tahun_kerja="2013 - 2019" instansi="Masoem University" bekerja_sebagai="Dosen Bahasa Mars" />
        <BarisRiwayatKerja tahun_kerja="2019 - Sekarang" instansi="N.A.S.A" bekerja_sebagai="Astronot Matahari" />
        </div>
    );
}