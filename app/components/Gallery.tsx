import React from 'react';
import Image from 'next/image'; // Import Image dari Next.js
import Makan from '../assets/makan.jpg';
import Tidur from '../assets/tidur.jpg';
import Menyanyi from '../assets/nyanyi.jpg';
import './hobbies.css'; // Import file CSS untuk styling

const MyGallery = () => {
  const Hobbies = [
    { name: "Makan", image: Makan },
    { name: "tidur", image: Tidur },
    { name: "Menyanyi", image: Menyanyi },
  ];

  return (
    <section className="gallery-container">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image src={hobby.image} alt={hobby.name} className="gallery-image" layout="responsive" width={150} height={100} />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;