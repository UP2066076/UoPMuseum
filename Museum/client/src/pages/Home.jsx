import axios from "axios";
import React, { useState, useEffect } from "react";
import ContactUs from "../components/ContactUs";
import FamilyArtifacts from "../components/FamilyArtifacts";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { baseUrl } from "../services/api";

const Home = () => {
  const [familyArtifacts, setFamilyArtifacts] = useState([]);
  const [sectionNumber, setSectionNumber] = useState([]);

  const getFamilyArtifacts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/artifacts/family/`);
      console.log(res.data);
      setFamilyArtifacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTotalSections = async () => {
    try {
      const res = await axios.get(`${baseUrl}/artifacts/get/section/count`);
      console.log("res", res);
      setSectionNumber(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFamilyArtifacts();
    getTotalSections();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Navbar />
      <div style={{ width: "100vw", paddingLeft: 10, paddingRight: 10 }}>
        <Hero />
      </div>
      <div
        style={{
          width: "100vw",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 30,
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Family artifacts</h3>
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {familyArtifacts?.map((data, key) => (
            <FamilyArtifacts data={data} />
          ))}
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 30,
        }}
      >
        <h3 style={{ marginBottom: 20 }}>Exhibits</h3>
        {sectionNumber?.map((data, idx) => (
          <Section data={data} key={idx} />
        ))}
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
