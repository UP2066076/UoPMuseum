import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import HomeEdit from "./pages/HomeEdit";
import FamilyArtifacts from "./components/FamilyArtifacts";
import ArtifactsEdit from "./pages/ArtifactsEdit";
import EnquiriesEdit from "./pages/EnquiriesEdit";
import FamilyArtifactsEdit from "./pages/FamilyArtifactsEdit";
import AdminLogin from "./pages/AdminLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/panel" element={<AdminPanel />} />
      <Route path="/" element={<Home />} />
      <Route path="/home/edit" element={<HomeEdit />} />
      <Route path="/family/artifact/edit" element={<FamilyArtifactsEdit />} />
      <Route path="/artifact/edit" element={<ArtifactsEdit />} />
      <Route path="/enquries/edit" element={<EnquiriesEdit />} />
    </Routes>
  );
};

export default App;
