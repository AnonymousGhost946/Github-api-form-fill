import { useEffect, useState } from 'react';

function Api({ onDataFetch }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/AnonymousGhost946')
      .then((res) => res.json())
      .then((data) => {
        setUserData(data); // Store data in state
        onDataFetch(data);  // Pass data to parent (App.jsx) through the onDataFetch prop
      })
      .catch((error) => console.log('Error:', error));
  }, [onDataFetch]);

  return null;  // No need to render anything in this component
}

export default Api;
