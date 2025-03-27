import React, { useState } from "react";

const Artifacts = ({ data, edit }) => {
  const [name, setName] = useState(data?.name);
  const [image, setImage] = useState(data?.image);
  const [desc, setDesc] = useState(data?.desc);

  const handleSubmit = () => {};

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
    </div>
  );
};

export default Artifacts;
