import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { baseUrl } from "../services/api";
import "./styles.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const { data } = await axios.post(`${baseUrl}/admin/login`, {
          email,
          password,
        });
        console.log(data);
        if (data.status === 200) {
          setPassword("");
          setEmail("");
          localStorage.setItem("user", JSON.stringify(data.data));
          navigate("/admin/panel");
        } else {
          alert("Wrong credentails, Try again");
        }
      } catch (err) {
        alert("Something went wrong");
        console.log(err);
      }
    } else {
      alert("Fill the fields before loging in");
    }
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", top: 30, left: 40 }}>
        <BackButton
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="loginCard">
        <p className="loginHeading">Login to your account</p>
        <div className="inputWrapper">
          <p className="inputHeader">Email address</p>
          <input
            className="loginInput"
            value={email}
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="inputWrapper">
          <p className="inputHeader">Password</p>
          <input
            className="loginInput"
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="loginButton" onClick={handleLogin}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
