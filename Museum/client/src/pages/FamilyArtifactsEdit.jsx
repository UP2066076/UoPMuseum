import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtifactEditComponent from "../components/ArtifactEditComponent";
import BackButton from "../components/BackButton";
import FamilyArtifactEditComponent from "../components/FamilyArtifactEditComponent";
import { baseUrl } from "../services/api";

const FamilyArtifactsEdit = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [counter, setCounter] = useState(false);
  const [add, setAdd] = useState(false);

  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [desc, setDesc] = useState();
  const [artifactsArray, setArtifactsArray] = useState([]);
  const [singleArtifact, setSingleArtifact] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getFamilyArtifacts();
  }, [counter, add]);

  const getFamilyArtifacts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/artifacts/family/`);
      console.log(res.data);
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
      const res = await axios.delete(
        `${baseUrl}/artifacts/family/delete/${id}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEnterArtifacts = () => {
    setSingleArtifact("");
    setArtifactsArray([...artifactsArray, singleArtifact]);
  };

  const handleCreateArtifact = async () => {
    try {
      const res = await axios.post(`${baseUrl}/artifacts/family/create`, {
        name,
        image,
        desc,
        artifacts: artifactsArray,
      });
      if (res.status === 200) {
        setAdd(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteArtifact = (id) => {
    setArtifactsArray((prev) => {
      return prev.filter((ele, idx) => {
        return idx !== id;
      });
    });
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
        Artifacts Family edit
      </h1>
      <div
        style={{
          width: "150px",
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
        Add Family Artifact
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
            placeholder="Family"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <input
              style={{
                width: "50%",
                height: 40,
                paddingLeft: 10,
                outline: "none",
              }}
              placeholder="Enter Artifacts"
              onChange={(e) => {
                setSingleArtifact(e.target.value);
              }}
            />
            <div
              style={{
                width: "100px",
                backgroundColor: "white",
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              onClick={handleEnterArtifacts}
            >
              Enter
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              gap: 20,
            }}
          >
            {artifactsArray?.map((d, idx) => (
              <div
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  backgroundColor: "white",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                onClick={() => {
                  handleDeleteArtifact(idx);
                }}
              >
                {d}
              </div>
            ))}
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
          <FamilyArtifactEditComponent
            data={data}
            setCounter={setCounter}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </div>
  );
};

export default FamilyArtifactsEdit;
