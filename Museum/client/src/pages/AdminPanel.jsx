import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        marginTop: 100,
      }}
    >
      <div
        style={{
          width: "40%",
          height: "300px",
          backgroundColor: "#621360",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          if (user) {
            navigate("/home/edit");
          } else {
            alert("Only admin can access");
          }
        }}
      >
        HomePage
      </div>
      <div
        style={{
          width: "40%",
          height: "300px",
          backgroundColor: "#621360",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          if (user) {
            navigate("/family/artifact/edit");
          } else {
            alert("Only admin can access");
          }
        }}
      >
        Family Artifacts
      </div>
      <div
        style={{
          width: "40%",
          height: "300px",
          backgroundColor: "#621360",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          if (user) {
            navigate("/artifact/edit");
          } else {
            alert("Only admin can access");
          }
        }}
      >
        Artifacts
      </div>
      <div
        style={{
          width: "40%",
          height: "300px",
          backgroundColor: "#621360",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          if (user) {
            navigate("/enquries/edit");
          } else {
            alert("Only admin can access");
          }
        }}
      >
        Enqueries
      </div>
    </div>
  );
};

export default AdminPanel;
