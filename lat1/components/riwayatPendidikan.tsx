import '../app/kelas.css';

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }

function BarisRiwayat(props: RowRiwayatProps) {
  return (
    <div className="p-4 mb-2 border border-gray-300 rounded-md shadow-md bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="font-semibold col-span-12 md:col-span-4 text-center">
            {props.jenjang}
          </div>
          <div className="col-span-12 md:col-span-4 text-center">
            {props.sekolah}
          </div>
          <div className="text-gray-500 col-span-12 md:col-span-4 text-center">
            {props.tahun}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPendidikan(){
    return (
        <div>
        <h1 className="font-bold judul mt-10 mb-10">Riwayat Pendidikan</h1>
        <BarisRiwayat jenjang="SD" sekolah="SDN Karapiak 2" tahun="2010 - 2016" />
        <BarisRiwayat jenjang="SMP" sekolah="SMPN 1 Cimanggung" tahun="2016 - 2019" />
        <BarisRiwayat jenjang="SMA" sekolah="SMAN Yadika Cicalengka" tahun="2019 - 2022" />
        <BarisRiwayat jenjang="Kuliah" sekolah="Universitas Masoem" tahun="2022 - Sekarang" />
        </div>
    );
}