import React, { useState } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const Location = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  useState(() => {
    function success(pos) {
      setLocation(pos.coords);
      setLoading(false);
    }

    function error(err) {
      setError(err.message);
      setLoading(false);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  if (loading) {
    return <div>Please, accept geoposition request</div>;
  }

  if (error) {
    return <div>Error while getting position: {error}</div>;
  }

  return (
    <div>
      <div>Latitude: {location.latitude}</div>
      <div>Longitude: {location.longitude}</div>
      <div>More or less {location.accuracy} meters. </div>
    </div>
  );
};
