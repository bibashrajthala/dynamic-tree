import React, { useState } from "react";

const Tree = ({ data }) => {
  return (
    <div style={{ width: "50%" }}>
      <ul>
        {data.map((tree) => (
          <TreeNode node={tree} key={tree.key} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  //   const [isformPageVisible, setisformPageVisible] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li>
      <div onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            {/* <FontAwesomeIcon icon="caret-right" /> */}
          </div>
        )}

        <div>
          {/* <i className={`mr-1 ${node.icon}`}> </i> */}
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div>
          <ul>
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;
