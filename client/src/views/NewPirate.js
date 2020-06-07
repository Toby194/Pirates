import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function NewPirate() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [phrase, setPhrase] = useState('');
  const [chest, setChest] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [leg, setLeg] = useState('true');
  const [patch, setPatch] = useState('true');
  const [hook, setHook] = useState('true');

  function handleSubmit(event) {
    event.preventDefault();
  

    axios.post('http://localhost:8000/api/pirates', {
        name,
        phrase,
        chest,
        position,
        imageUrl,
        leg,
        patch,
        hook,
      })
      .then(() => navigate('/pirates'))
      .catch(console.log);
  }
  return (
    <div>
      <h1>New Pirate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Phrase</label>
          <input
            name="phrase"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
        </div>
        <div>
          <label>Chest</label>
          <input
            name="chest"
            value={chest}
            onChange={(e) => setChest(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          Crew Position:
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option></option>
            <option>Captain</option>
            <option>BoatSwain</option>
            <option>Powder Monkey</option>
            <option>Quarter Master</option>
            <option>First Mate</option>
          </select>
        </div>
        <div>
          <label>Leg</label>
          <input
            type="checkbox"
            checked={leg}
            onChange={(e) => setLeg(e.target.checked)}
          />
        </div>
        <div>
          <label>Patch</label>
          <input
            type="checkbox"
            checked={patch}
            onChange={(e) => setPatch(e.target.checked)}
          />
        </div>
        <div>
          <label>Hook</label>
          <input
            type="checkbox"
            checked={hook}
            onChange={(e) => setHook(e.target.checked)}
          />
        </div>
        <button>Add a pirate</button>
      </form>
    </div>
  );
}

export default NewPirate;
