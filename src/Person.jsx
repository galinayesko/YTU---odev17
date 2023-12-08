// Person.jsx

import React from 'react';

const Person = ({ name, age, image }) => {
  return (
    <main className="kisi-liste">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{`${age} years`}</p>
      </div>
    </main>
  );
};

export default Person;
