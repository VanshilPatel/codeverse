import React from "react";
import CodeEditor from "./CodeEditor";
import SubmissionButtons from "./SubmissionButtons";



const RightContainer = () => {

  return (
    <div className="'border rounded-xl w-1/2 h-screen mt-14">
      <CodeEditor />

      <SubmissionButtons />
    </div>
  );
};

export default RightContainer;
