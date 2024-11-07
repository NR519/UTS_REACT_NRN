import React from 'react';
import '../stylish.css'; // CSS for component styles
import { warnahobiMerahKuning } from '../color'; // Color and styling config

// Import local images
import kodingImage from '../ngoding.jpeg';
import gamingImage from '../gaming.jpg';
import filmImage from '../movie.jpeg';
import comicImage from '../comic.jpeg';

const hobbiesData = [
  {
    name: 'Ngoding',
    images: [kodingImage],
  },
  {
    name: 'Gaming',
    images: [gamingImage],
  },
  {
    name: 'Nonton Film',
    images: [filmImage],
  },
  {
    name: 'Baca Komik',
    images: [comicImage],
  },
];

const HobbiesRed = () => {
  return (
    <div className="hobbies-wrapper">
      <h3
        className="text-4xl font-bold mb-6 mt-8 tracking-wider text-center"
        style={{
          color: warnahobiMerahKuning.text || '#333',
          fontFamily: warnahobiMerahKuning.fontFamily || 'Arial, sans-serif',
        }}
      >
        Hobi Saya
      </h3>

      <div className="hobbies-container grid grid-cols-2 gap-8 mt-8 mx-auto max-w-6xl px-6">
        {hobbiesData.map((hobby, index) => (
          <div
            key={index}
            className="hobby-card"
            style={{
              background: warnahobiMerahKuning.borderGradient || 'linear-gradient(to bottom right, #f9f9f9, #eaeaea)',
              borderRadius: '1.5rem',
              padding: '1rem',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className="hobby-box p-3 rounded-lg" // Increased padding here
              style={{
                backgroundColor: warnahobiMerahKuning.containerBg || '#fff',
                borderRadius: '1.25rem',
                boxShadow: warnahobiMerahKuning.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.15)',
                textAlign: 'center',
                margin: '.01rem', // Negative margin to pull the box outwards
              }}
            >
              <p
                className="hobby-name mb-4 text-xl font-semibold"
                style={{
                  color: warnahobiMerahKuning.text || '#333',
                  textShadow: warnahobiMerahKuning.textShadow || '1px 1px 2px rgba(0,0,0,0.2)',
                  fontFamily: warnahobiMerahKuning.fontFamily || 'Arial, sans-serif',
                }}
              >
                {hobby.name}
              </p>

              {/* Display each image with enhanced styling */}
              <div className="hobby-images grid grid-cols-1 gap-4">
                {hobby.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="hobby-image-box">
                    <img
                      src={image.src}
                      alt={`${hobby.name} ${imgIndex + 1}`}
                      className="hobby-image w-full h-48 object-cover rounded-lg mb-2"
                      style={{
                        borderRadius: '0.75rem',
                        border: '2px solid rgba(255,255,255,0.6)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesRed;
