import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState();
  return (
    <div className="mt-3 h-3/4">
      <input
        className="border rounded-xl border-gray-400 mx-2 px-2 w-11/12 h-full"
        type="text"
        onChange={(e) => setCode(e.target.value)}
        placeholder="Your code"

      />
    </div>
  );
};

export default CodeEditor;


