import React from "react";
import CodeEditor from "./CodeEditor";
import TestCases from "./TestCases";
import SubmissionButtons from "./SubmissionButtons";

const RightContainer = () => {
  return (
    <>
      <CodeEditor/>
      <TestCases/>
      <SubmissionButtons/>
    </>
  )
  
};

export default RightContainer;
