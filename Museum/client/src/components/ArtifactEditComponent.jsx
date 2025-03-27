import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../services/api";

const ArtifactEditComponent = ({ data, setCounter, handleDelete }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();
  const [desc, setDesc] = useState();
  const [family, setFamily] = useState();
  const [section, setSection] = useState(0);

  const [edit, setEdit] = useState(false);

  const handleSubmit = async () => {
    try {
      const res = await axios.patch(`${baseUrl}/artifacts/edit/${data?._id}`, {
        name,
        image,
        location,
        family,
        section,
        desc,
      });
      if (res.status === 200) {
        setEdit(!edit);
        setCounter((prev) => !prev);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#621360",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        marginBottom: 10,
        cursor: "pointer",
      }}
    >
      {!edit ? (
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: 20,
              paddingLeft: 20,
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              gap: 15,
              backgroundColor: "#621360",
              width: "80%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  padding: 10,
                  fontSize: "14px",
                }}
              >
                {data?.name}
              </div>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  padding: 10,
                  fontSize: "14px",
                }}
              >
                {data?.desc}
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "14px",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: 30,
                    alignItems: "center",
                    display: "flex",
                    padding: 10,
                    width: "100%",
                  }}
                >
                  Family :- {data?.family}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "14px",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    height: 30,
                    alignItems: "center",
                    display: "flex",
                    padding: 10,
                    width: "100%",
                  }}
                >
                  Location :- {data?.location}
                </div>
              </div>
            </div>
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
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div
            style={{
              marginLeft: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#621360",
              width: "20%",
            }}
          >
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
                setEdit(!edit);
              }}
            >
              Edit
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
                handleDelete(data?._id);
              }}
            >
              Delete
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
            defaultValue={data?.desc}
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
            defaultValue={data?.family}
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
            defaultValue={data?.location}
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
            defaultValue={data?.section}
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
    </div>
  );
};

export default ArtifactEditComponent;
