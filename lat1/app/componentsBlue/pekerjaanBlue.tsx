import React from 'react';
import '../stylish.css';
import { warnaPekerjaanHijauToscaBiruMuda } from '../color';

interface Job {
  year: string;
  instansi: string;
  as: string;
}

export default function PekerjaanBlue() {
  return (
    <div className="container mx-auto p-2 text-center pt-20" style={{ color: warnaPekerjaanHijauToscaBiruMuda.textColor }}>
      <h1
        className="text-4xl font-bold mb-6 tracking-widest"
        style={{
          color: warnaPekerjaanHijauToscaBiruMuda.textColor,
          textShadow: warnaPekerjaanHijauToscaBiruMuda.boxShadow,
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
          backgroundColor: warnaPekerjaanHijauToscaBiruMuda.background,
          color: warnaPekerjaanHijauToscaBiruMuda.textColor,
          boxShadow: warnaPekerjaanHijauToscaBiruMuda.boxShadow,
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
            background: warnaPekerjaanHijauToscaBiruMuda.borderGradient,
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
