import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../services/api";

const Hero = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/site/main`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#621360",
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "32px",
        }}
      >
        {data?.name}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 20,
          paddingLeft: 10,
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <div
          style={{
            width: "35%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={data?.image}
            alt="museum"
            style={{ width: "90%", height: "150px", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            width: "65%",
            height: "150px",
            backgroundColor: "white",
            display: "flex",
            padding: 10,
            fontSize: "14px",
          }}
        >
          {data?.desc}
        </div>
      </div>
    </div>
  );
};

export default Hero;
