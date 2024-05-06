import React from "react";
import Contact from "../Contact";
import StudentsList from "../StudentsList";

const Main = ({students}) => {
  return (
    <div>
      <p>Main</p>
      <Contact/>
      <StudentsList students={students}/>
    </div>
  );
};

export default Main;
