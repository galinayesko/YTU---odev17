// App.js

import React, { useState } from 'react';
import './index.css';
import Person from './Person.jsx';
import data from './data.js';

const App = () => {

    const [kisiler, setKisiler] = useState(data)

    const clearList = () => {
        setKisiler([]); // Boş bir dizi ile liste temizlenir
      };
    
      return (
        <main>
          <section className='container'>
            <h1>{kisiler.length} Birthdays Today</h1>
            {kisiler.map((kisi, index) => (
              <Person key={index} {...kisi} />)
              )}
            <button className="btn" onClick={clearList}>
              Clear All
            </button>
            </section>
        </main>
      );
    };
    
    export default App;
