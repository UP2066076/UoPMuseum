import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#621360",
        display: "flex",
        padding: 20,
        gap: 30,
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 2,
          paddingRight: 20,
          paddingLeft: 20,
          cursor: "pointer",
        }}
      >
        Home
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        Artifacts
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: 10,
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 2,
          cursor: "pointer",
        }}
      >
        Contact us
      </div>
    </div>
  );
};

export default Navbar;
