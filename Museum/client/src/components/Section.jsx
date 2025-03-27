import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../services/api";
import Carousal from "./Carousal";

const Section = ({ data }) => {
  const [artifacts, setArtifacts] = useState([]);

  const sectionNames = [
    "Peripherals",
    "Desktop",
    "Laptops",
    "Mechanicals",
    "Calculator",
    "Storage",
    "Cameras",
    "Keyboards",
    "Circuit boards",
  ];

  useEffect(() => {
    getArtifacts();
  }, []);

  const getArtifacts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/artifacts?section=${data}`);
      console.log(`section ${data}`, res.data);
      setArtifacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ paddingLeft: 45 }}>
      <div style={{ marginBottom: 10 }}>{sectionNames[data]}</div>
      <Carousal artifacts={artifacts} />
    </div>
  );
};

export default Section;
