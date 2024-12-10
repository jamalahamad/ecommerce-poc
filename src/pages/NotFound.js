import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "10%",
  },
  header: {
    fontSize: "4rem",
    color: "#ff0000",
  },
  message: {
    fontSize: "1.5rem",
    color: "#333",
  },
  link: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFound;
