import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quotes, setQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
      headers: { 'X-Api-Key': 'cdBndI2LSzj9AQv0RfM3xg==VnjQgPG1HNKXQoij' },
    })

      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching quote');
        }
        return res.json();
      })
      .then((data) => {
        setQuotes(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="quotes">
      <p>{quotes}</p>
    </div>
  );
};

export default Quote;
