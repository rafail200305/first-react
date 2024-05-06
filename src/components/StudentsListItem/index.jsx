import React from "react";
import { students } from "../../assets/Data";
const StudentsListItem = ({students}) => {
    return <li>{students.name}</li>
};
export default StudentsListItem;