import React from 'react';
import '../stylish.css';
import { warnaPekerjaan } from '../color';

interface Job {
  year: string;
  instansi: string;
  as: string;
}

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-2 text-center pt-20" style={{ color: warnaPekerjaan.textColor }}>
      <h1
        className="text-4xl font-bold mb-6 tracking-widest"
        style={{
          color: warnaPekerjaan.textColor,
          textShadow: warnaPekerjaan.boxShadow,
          fontFamily: 'Southern, sans-serif',
        }}
      >
        Riwayat Pekerjaan
      </h1>
      <RowJob year="2013 - 2014" instansi="N.A.S.A" as="Astronaut" />
      <RowJob year="2014 - 2019" instansi="Amazon.com" as="Kepala Manajer" />
      <RowJob year="2020 - 2024" instansi="PT Indofood Sejahtera" as="C.E.O" />
    </div>
  );
}

function RowJob({ year, instansi, as }: Job) {
  return (
    <div className="education-container" style={{ padding: '10px' }}>
      <div
        className="rounded-lg p-4 my-5"
        style={{
          backgroundColor: warnaPekerjaan.background,
          color: warnaPekerjaan.textColor,
          boxShadow: warnaPekerjaan.boxShadow,
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
            background: `linear-gradient(to right, ${warnaPekerjaan.border}, #ffffff, #ffffff)`,
            zIndex: -1,
          }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <h3 className="col-span-12 md:col-span-4">{year}</h3>
            <p className="col-span-12 md:col-span-4">{instansi}</p>
            <p className="col-span-12 md:col-span-4">{as}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
