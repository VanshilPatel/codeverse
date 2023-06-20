import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState();
  return (
    <div className="mt-3">
      <input
        className="border rounded-2xl border-gray-400 mx-6 w-11/12 h-[35rem] "
        type="text"
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
};

export default CodeEditor;
