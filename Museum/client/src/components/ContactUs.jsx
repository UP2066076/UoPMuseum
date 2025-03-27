import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../services/api";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const [isChecked, setIsChecked] = useState("");

  const onChange = () => {
    setIsChecked(true);
  };

  const handleSubmit = async () => {
    if (name && email && desc && isChecked) {
      try {
        const res = await axios.post(`${baseUrl}/query/create`, {
          name,
          email,
          desc,
        });
        if (res.status === 200) {
          setDesc("");
          setName("");
          setEmail("");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      style={{
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 40,
          gap: 20,
          backgroundColor: "#621360",
        }}
      >
        <h2 style={{ fontSize: 18, textAlign: "center", color: "white" }}>
          Contact us regarding your enquiries/concerns regarding the University
          of PORTSMOUTH computer museum
        </h2>
        <input
          style={{ width: "40%", height: 40, paddingLeft: 10, outline: "none" }}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <input
          style={{ width: "40%", height: 40, paddingLeft: 10, outline: "none" }}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <textarea
          style={{
            width: "80%",
            height: 200,
            padding: 10,
            outline: "none",
          }}
          value={desc}
          placeholder="Write your query here"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* <input type="checkbox" style={{ width: "20px", height: "20px" }} />
          <p style={{ color: "white" }}>Verify you are a human</p> */}
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </div>
        <div
          style={{
            width: "100px",
            height: 40,
            outline: "none",
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
