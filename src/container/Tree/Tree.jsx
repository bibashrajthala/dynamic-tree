import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

const Tree = ({ data, setAddTreeElement }) => {
  //   console.log(data);

  // const [addTreeElement, setAddTreeElement] = useState(true);

  const selectNodeHandler = (selectedNode) => {
    console.log(selectedNode);
    const { id, type } = selectedNode;
    // console.log(id);
    localStorage.setItem("selectedNodeId", id);

    if (type === "node") {
      setAddTreeElement(true);
    }
    if (type === "leaf") {
      setAddTreeElement(false);
    }
  };

  const displayNodes = data.map((node, index) => {
    const { id, label, type, children } = node;
    return (
      <div key={id}>
        <h3 onClick={() => selectNodeHandler(node)}>{label}</h3>

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
          {children.length ? (
            <Tree data={children} setAddTreeElement={setAddTreeElement} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });
  return (
    <div style={{ width: "48vw", height: "100%" }}>
      {/* tree */}
      <div>{displayNodes}</div>
    </div>
  );
};

export default Tree;
