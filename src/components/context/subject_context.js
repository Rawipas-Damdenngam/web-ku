import { createContext, useState } from "react";
export const SubjectContext = createContext();

export function SubjectProvider(props) {
  const [subjects, setSubjects] = useState([]);

  function addSubject(subject) {
    setSubjects((prev) => [...prev, subject]);
    console.log(subjects);
  }

  function deleteSubject(subject) {
    setSubjects((prev) => prev.filter((subjects) => subjects != subject));
    console.log(subjects);
  }

  return (
    <SubjectContext.Provider value={{ subjects, addSubject, deleteSubject }}>
      {props.children}
    </SubjectContext.Provider>
  );
}
