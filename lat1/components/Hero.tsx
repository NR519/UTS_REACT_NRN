import '../app/kelas.css';

export default function Hero(){
  return (
  <div className="container mx-auto p-2 text-center">
          <h1 className="text-white-300 font-bold judul">CV ONLINE</h1>
          <h1 className="text 3xl judul">Naufal Rifki Nugraha</h1>
          <Profile />
          <div className="deskripsi">
          <p>
            Mahasiswa di Ma'soem University <br />
            Fakultas Komputer, Prodi Sistem Informasi Semester 5 <br />
            Sedang Belajar ReactJS bersama Dosen pak Iin
          </p>
          </div>
  </div>
  );
}

function Profile() {
  return <img src="https://avatars.githubusercontent.com/u/163378655?v=4" className="myphoto" alt="Sponsbob" />
}

