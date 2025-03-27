import axios from "axios";
import React from "react";
import { baseUrl } from "../services/api";

const Enquiry = ({ id, name, email, desc, handleDelete }) => {
  return (
    <div
      style={{
        width: "600px",
        backgroundColor: "#621360",
        display: "flex",
        flexDirection: "column",
        padding: 12,
        gap: 15,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "18px",
          color: "white",
        }}
      >
        Name : {name}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "18px",
          color: "white",
        }}
      >
        Email : {email}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          fontSize: "18px",
          color: "white",
        }}
      >
        Query : {desc}
      </div>
      <div
        style={{
          width: "100px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
          marginTop: 20,
          color: "#621360",
          cursor: "pointer",
        }}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default Enquiry;
