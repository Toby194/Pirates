import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function AllPirates() {
  const [pirates, setPirates] = useState([]);
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pirates')
      .then((response) => setPirates(response.data))
      .catch(() => setHasErrors(true));
  }, []);

  function handleDelete(id) {
    axios
      .delete('http://localhost:8000/api/pirates/' + id)
      .then(() => setPirates(pirates.filter((pirate) => pirate._id !== id)));
  }

  if (hasErrors) return 'Tenzing we have a problem';

  if (pirates == null) return 'Loading....';

  return (
    <div>
      Pirate Crew
      <div>
        <button type="button" onClick={() => navigate('/pirates/new')}>Add Pirate</button>
      </div>
      <div>
        <table>
          <tbody>
            {pirates.map((pirate) => (
              <tr key={pirate._id}>
                <td>
                  <img src={pirate.imageUrl} alt={pirate.name} />
                </td>
                <td>{pirate.name}</td>
                <td>
                  <button onClick={() => navigate('/pirates/' + pirate._id)}>
                    View Pirate
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(pirate._id)}>
                    Walk the Plank
                  </button> {' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
