import React from 'react';
import RikPhoto from '../assets/Lab/Rik_Photo.jpg';
import Unkn from '../assets/Lab/UNKNOWN.webp';
// Sample lab data
const labs = [
  {
    id: 1,
    title: 'ESC201(2025 ODD SEM)',
    image: RikPhoto,
    resources: 'https://drive.google.com/file/d/1NAfouInwQNdMFbYRon8YpDY0EnmsNbvx/view?usp=drivesdk',
  },
  {
    id: 2,
    title: 'EE Lab 2',
    image: Unkn,
    resources: '/resources/lab2.pdf',
  },
  {
    id: 3,
    title: 'EE Lab 3',
    image:Unkn,
    resources: '/resources/lab3.pdf',
  },
  {
    id: 4,
    title: 'EE Lab 4',
    image: Unkn,
    resources: '/resources/lab4.pdf',
  },
    {
    id: 5,
    title: 'EE Lab 4',
    image: Unkn,
    resources: '/resources/lab4.pdf',
  },
    {
    id: 6,
    title: 'EE Lab 4',
    image: Unkn,
    resources: '/resources/lab4.pdf',
  },
];

export default function Labs() {
  // Open resource in new tab
  const openResource = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '2.1em' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Labs</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          
        }}
      >
        {labs.map((lab) => (
          <div
            key={lab.id}
            style={{
              border: '5px solid #ccc',
              textDecorationColor:'solid black',
              borderRadius: '10px',
              overflow: 'hidden',
              cursor: 'pointer',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onClick={() => openResource(lab.resources)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
            src={lab.image}
            alt={lab.title}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />

            <h3 style={{ padding: '1rem 0' }}>{lab.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
