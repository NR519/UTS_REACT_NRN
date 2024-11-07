import React from 'react';
import '../stylish.css';
import { warna } from '../color';

interface RiwayatPendidikanProps {
  level: string;
  namasekolah: string;
  year: string;
}

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-2 text-center pt-20" style={{ color: warna.textColor }}>
      <h1 className="text-4xl font-bold mb-6 tracking-widest" style={{
          color: warna.textColor,
          textShadow: warna.boxShadow,
          fontFamily: 'Southern, sans-serif',
        }}>
        Riwayat Pendidikan
      </h1>
      <RowRiwayat level="TK" namasekolah="TK Wasilatunnaja" year="2009 - 2010" />
      <RowRiwayat level="SD" namasekolah="SD Karapiak 2" year="2011 - 2016" />
      <RowRiwayat level="SMP" namasekolah="SMPN 1 Cimanggung" year="2016 - 2019" />
      <RowRiwayat level="SMA" namasekolah="SMA YADIKA CICALENGKA" year="2019 - 2022" />
    </div>
  );
}

function RowRiwayat({ level, namasekolah, year }: RiwayatPendidikanProps) {
  return (
    <div className="education-container" style={{ padding: '10px' }}>
      <div
        className="rounded-lg p-4 my-5"
        style={{
          backgroundColor: warna.background,
          color: warna.textColor,
          boxShadow: warna.boxShadow,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-3px',
            left: '-3px',
            right: '-3px',
            bottom: '-3px',
            borderRadius: 'inherit',
            background: `linear-gradient(to right, ${warna.border}, #ffffff, #ffffff)`,
            zIndex: -1,
          }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4">{level}</h3>
            <p className="col-span-12 md:col-span-4">{namasekolah}</p>
            <p className="col-span-12 md:col-span-4">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
