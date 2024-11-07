import foto from "../iam.jpeg";


export default function HeroesBlue() {
  return (
    <section>
      <div className="container mx-auto p-2 flex flex-col items-center">
        <h1 className="text-gray-300 font-bold text-4xl text-center" style={{ fontFamily: 'southern' }}>
          CV ONLINE
        </h1>
        <hr className="my-5 gradient-hrBlue" />
          <div className="w-1/3">
            <Profile />
            <h1 className="text-4xl font-semibold text-3xl text-center" style={{ fontFamily: 'southern' }}>
              Naufal Rifki Nugraha
            </h1>
          </div>
        <hr className="my-5 gradient-hrBlue" />
        <div className="flex w-full">
            <p className="text-lg text-gray-300 text-5x1 text-justify" style={{ fontFamily: 'southern', lineHeight: '2' }}>
            Sebagai mahasiswa Universitas Masoem angkatan 2022 dengan NIM 222505053, saya memiliki keahlian dalam desain grafis yang meliputi keterampilan pengkodean dan penggunaan aplikasi editing untuk merancang layout yang estetis. Sepanjang studi, saya telah mendalami prinsip-prinsip dasar desain, seperti tipografi dan teori warna, yang membantu saya menghasilkan karya yang efektif secara visual dan komunikatif. Selain itu, saya sangat menjunjung tinggi kedisiplinan dan ketekunan, yang saya yakini sebagai fondasi penting untuk mencapai hasil terbaik dalam proyek desain maupun pendidikan. Dengan manajemen waktu yang baik dan jadwal kerja yang terstruktur, saya selalu terbuka untuk mempelajari tren terbaru di bidang desain grafis dan berkomitmen untuk memberikan kontribusi positif serta kreatif di bidang ini.
            </p>
        </div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <img 
      src={foto.src} 
      alt="ivgb" 
      className="MizuNoKokyu w-80 h-80 object-cover" // Memperbesar gambar
    />
  );
}
