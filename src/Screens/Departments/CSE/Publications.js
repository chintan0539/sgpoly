import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";
import NavLinks from "./NavLinks";
import * as firebase from "firebase";

const Publications = () => {
  const [studentData, setStudentData] = useState(null);
  const [facultyData, setFacultyData] = useState(null);

  const getPublication = async (dept) => {
    const dbRef = firebase.database().ref("publications").child(dept);
    let result = [];
    dbRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        result = Object.values(snapshot.val());
        console.log(result);
        let publishedByFaculty =
          result && result.filter((val) => val.publishedBy === "Faculty");
        let publishedByStudent =
          result && result.filter((val) => val.publishedBy === "Student");
        console.log(publishedByFaculty);
        setStudentData(publishedByStudent);
        setFacultyData(publishedByFaculty);
      }
    });
  };

  useEffect(() => {
    getPublication("Computer Science");
  }, []);
  return (
    <Main className="container-lg">
      <div class="row">
        <DeptMenu dept="Computer Science" subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            {studentData && (
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Faculty Paper Publications / Presentations</h3>
                </div>
                <div className="col-12 text-center">
                  <div class="list-group">
                    {facultyData &&
                      facultyData.map((val, idx) => (
                        <span
                          class="list-group-item list-group-item-action"
                          key={idx}
                        >
                          {val.name} published {val.category} on {val.title} at{" "}
                          {val.platform} in year {val.year}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
            {studentData && (
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Student Paper Publications / Presentations</h3>
                </div>
                <div className="col-12 text-center">
                  <div class="list-group">
                    {studentData &&
                      studentData.map((val, idx) => (
                        <span
                          class="list-group-item list-group-item-action"
                          key={idx}
                        >
                          {val.name} published {val.category} on {val.title} at{" "}
                          {val.platform} in year {val.year}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Publications;
