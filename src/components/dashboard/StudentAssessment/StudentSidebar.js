import React, { useEffect, useState } from "react";
import "./StudentSidebar.css";
import axios from "./axios";
import { Link, useParams } from "react-router-dom";

function StudentSidebar({ ques, setQn, setQnIndex, setQnLen, setRole }) {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if(ques && ques.length > 0){
      setQuestions(ques)
    }
  }, []);

  // const handleActiveItem = (id, qn) => {
  //   let elem = document.querySelector(".studentSidebarQuestion");
  //   {
  //     selectedRole.map((item) =>
  //       item.questionsArray.map((i) => {
  //         if (qn[2] === i[2]) {
  //           console.log(qn[2], i[2]);
  //           elem.classList.add("activeItem");
  //         }
  //       })
  //     );
  //   }
  //   setQn(qn);
  // };

  const selectedRole = questions.filter((item) => item._id === id);
  const qnsLen = selectedRole[0]?.questionsArray.length;

  const handleClick = (item, ind) => {
    setQn(item);
    setQnIndex(ind);
  };

  return (
    <div className="studentSidebar">
      <div className="studentSidebarContainer">
        <div className="indexing">
          {ques.map((item, ind) =>
            <div
              className="studentSidebarQuestion"
              key={ind}
              // onClick={() => handleActiveItem(qn[2], qn)}
              onClick={() => handleClick(item, ind)}
            >
              <div className="sidebar__qn">Q{ind + 1}</div>
              <p>{item.question.statement}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentSidebar;
