import React, { useCallback, useEffect, useState } from "react";
import { Node, Trees } from "./Logic";

const Tree = ({ data, children }) => {
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren]);
  const childHandler = (e) => {
    const text = e.target.textContent;
    localStorage.setItem("node", text);
  };
  return (
    <div>
      <span onClick={handleClick}>
        <h4
          onClick={childHandler}
          style={{ fontWeight: showChildren ? "bold" : "normal" }}
        >
          {data}
        </h4>
      </span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          left: 25,
          borderLeft: "1px solid",
          paddingLeft: 10,
          cursor: "pointer",
        }}
      >
        {showChildren && (children ?? []).map((node) => <Tree {...node} />)}
      </div>
    </div>
  );
};

export default Tree;
