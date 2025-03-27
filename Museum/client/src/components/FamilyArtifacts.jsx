import React from "react";

const FamilyArtifacts = ({ data }) => {
  return (
    <div
      style={{
        width: "45%",
        backgroundColor: "#621360",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        marginBottom: 10,
        cursor: "pointer",
      }}
    >
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
            {data?.artifacts.map((d) => (
              <div
                style={{
                  width: "25%",
                  backgroundColor: "white",
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {d}
              </div>
            ))}
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
    </div>
  );
};

export default FamilyArtifacts;
