import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtifactEditComponent from "../components/ArtifactEditComponent";
import BackButton from "../components/BackButton";
import { baseUrl } from "../services/api";

const ArtifactsEdit = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [counter, setCounter] = useState(false);
  const [add, setAdd] = useState(false);

  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [desc, setDesc] = useState();
  const [location, setLocation] = useState();
  const [family, setFamily] = useState();
  const [section, setSection] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getArtifacts();
  }, [counter, add]);

  const getArtifacts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/artifacts`);
      setArtifacts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      setArtifacts((prev) => {
        return prev.filter((ele, idx) => {
          return ele?._id !== id;
        });
      });
      const res = await axios.delete(`${baseUrl}/artifacts/delete/${id}`);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateArtifact = async () => {
    try {
      const res = await axios.post(`${baseUrl}/artifacts/create`, {
        name,
        image,
        location,
        section,
        family,
        desc,
      });
      if (res.status === 200) {
        setAdd(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        paddingTop: 40,
        flexDirection: "column",
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
          marginBottom: 10,
        }}
      >
        Artifacts edit
      </h1>
      <div
        style={{
          width: "100px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          color: "white",
          backgroundColor: "#621360",
          cursor: "pointer",
          marginBottom: 20,
        }}
        onClick={() => {
          setAdd(!add);
        }}
      >
        Add Artifact
      </div>
      {add && (
        <div
          style={{
            width: "80%",
            backgroundColor: "#621360",
            display: "flex",
            flexDirection: "column",
            padding: 10,
            gap: 10,
            marginBottom: 20,
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
          />
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Family"
            onChange={(e) => {
              setFamily(e.target.value);
            }}
          />
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <input
            style={{
              width: "80%",
              height: 40,
              paddingLeft: 10,
              outline: "none",
            }}
            placeholder="Section Number"
            onChange={(e) => {
              setSection(e.target.value);
            }}
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
            onClick={handleCreateArtifact}
          >
            Submit
          </div>
        </div>
      )}
      {artifacts?.map((data, idx) => (
        <div
          style={{
            width: "90vw",
            display: "flex",
            alignItems: "center",
          }}
          key={idx}
        >
          <ArtifactEditComponent
            data={data}
            setCounter={setCounter}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default ArtifactsEdit;
