import React from "react";
import AddClientModal from "../components/AddClientModal";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import AddProjectsModal from "../components/AddProjectsModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectsModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
