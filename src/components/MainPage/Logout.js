import React from 'react';
import { Link } from 'react-router-dom';
import "./Logout.css";

export const Logout = () => {
  return (
    <Link to="/" variant="body2">
      Log Out
    </Link>
  )
}
