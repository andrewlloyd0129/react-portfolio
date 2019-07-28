import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
      <h2>We couldnt find your page</h2>
      <Link to="/">Return To Home</Link>
    </div>
  );
}