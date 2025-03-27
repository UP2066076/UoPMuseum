import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../services/api";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const HomeEdit = () => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();

  const [name, setName] = useState(data?.name);
  const [image, setImage] = useState(data?.image);
  const [desc, setDesc] = useState(data?.desc);

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
  }, [edit]);

  const handleSubmit = async () => {
    try {
      const res = await axios.patch(
        `${baseUrl}/site/main/edit/header/6497380f48bf60bca1978cc2`,
        {
          name,
          image,
          desc,
        }
      );
      if (res.status === 200) {
        setEdit(!edit);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", top: 30, left: 40 }}>
        <BackButton
          onClick={() => {
            navigate("/admin/panel");
          }}
        />
      </div>
      <h1
        style={{
          marginTop: 40,
        }}
      >
        Home section edit
      </h1>
      {!edit ? (
        <div
          style={{
            width: "80%",
            backgroundColor: "#621360",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            marginTop: 30,
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
              paddingLeft: 20,
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
      ) : (
        <div
          style={{
            width: "80%",
            backgroundColor: "#621360",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            marginTop: 70,
            gap: 10,
          }}
        >
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Title"
            defaultValue={data?.name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            defaultValue={data?.image}
          />
          <textarea
            style={{
              width: "80%",
              height: 200,
              padding: 10,
              outline: "none",
            }}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            defaultValue={data?.desc}
            placeholder="Description"
          />
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
      )}
      <div
        style={{
          width: "100px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "#621360",
          marginTop: 20,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          setEdit(!edit);
        }}
      >
        Edit
      </div>
    </div>
  );
};

export default HomeEdit;
