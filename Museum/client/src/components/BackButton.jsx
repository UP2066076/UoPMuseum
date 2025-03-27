import React from "react";
import Arrow from "../assets/arrrow1.png";

const BackButton = ({ onClick }) => {
  return (
    <div
      style={{
        width: 70,
        height: 70,
        backgroundColor: "#621360",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <img
        src={Arrow}
        style={{ width: "60%", height: "60%", cursor: "pointer" }}
      />
    </div>
  );
};

export default BackButton;
