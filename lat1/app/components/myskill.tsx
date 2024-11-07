// SkillsSection.js
import React from 'react';
import '../stylish.css';
import { warnaskill} from '../color'; 


const SkillsSection = ({ }) => {
  const skills = [
    { name: "HTML", rating: 60 },
    { name: "CSS", rating: 60 },
    { name: "JavaScript", rating: 30 },
    { name: "PHP", rating: 50 },
    { name: "SQL", rating: 65 },
  ];

  return (
    
    <div className="w-full max-w-2xl mx-auto my-4">
      <h3 className="text-4xl font-bold mb-4 mt-8 tracking-wider text-center"
          style={{ 
            color: warnaskill.text, // Menggunakan warna putih
            textShadow: warnaskill.textShadow,
            fontFamily: warnaskill.fontFamily
          }}
      >
        Kemampuan Saya
      </h3>
      <section
        style={{
          backgroundColor: warnaskill.containerBg,
          padding: '1.5rem',
          fontFamily: warnaskill.fontFamily,
          borderRadius: '1rem',
          boxShadow: warnaskill.boxShadow,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-4px',
            left: '-4px',
            right: '-4px',
            bottom: '-4px',
            borderRadius: 'inherit',
            background: warnaskill.borderGradient,
            zIndex: -1,
          }}
        />
        <ul className="space-y-4">
          {skills.map(({ name, rating }, index) => (
            <li key={index} style={{ color: warnaskill.text, textShadow: warnaskill.textShadow, fontSize: '1.125rem' }}>
              <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span style={{ color: warnaskill.yearText, textShadow: warnaskill.yearTextShadow, fontSize: '0.875rem' }}>
                  {rating}%
                </span>
              </div>
              <div style={{ width: '100%', backgroundColor: '#434343', borderRadius: '0.5rem', height: '20px', marginTop: '5px' }}>
                <div
                  style={{
                    width: `${rating}%`,
                    background: 'linear-gradient(to right, #ffffff, #ffffff, #808080)',
                    height: '100%',
                    borderRadius: '0.5rem',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
    
  );
};

export default SkillsSection;
