import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../services/api";
import Enquiry from "../components/Enquiry";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const EnquiriesEdit = () => {
  const [query, setQuery] = useState([]);

  const navigate = useNavigate();

  const getEnquiries = async () => {
    try {
      const res = await axios.get(`${baseUrl}/query/`);
      console.log(res);
      setQuery(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      setQuery((prev) => {
        return prev.filter((ele, idx) => {
          return ele?._id !== id;
        });
      });
      await axios.delete(`${baseUrl}/query/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEnquiries();
  }, []);
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
      <h2 style={{ marginBottom: 10 }}>User queries</h2>
      {query?.map((data, idx) => (
        <Enquiry
          handleDelete={handleDelete}
          id={data?._id}
          name={data?.name}
          email={data?.email}
          desc={data?.desc}
          key={idx}
        />
      ))}
    </div>
  );
};

export default EnquiriesEdit;
