import React from 'react'
import StudentsListItem from `../StudentsListItem`

const StudentsList = ({students}) => {
  return (
   <ul>
    {students && 
    students.map((s)=>{
      return <StudentsListItem students={students} key={students.id}/>;
    })}
   </ul>
  )
}

export default StudentsList