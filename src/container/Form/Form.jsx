import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ data, addTreeElement, setData, treeData }) => {
  // const [addTreeElement, setAddTreeElement] = useState(true);
  // const [idInLocal, setIdInLocal] = useState("");
  const [newElement, setNewElement] = useState({
    label: "",
    type: "node",
    id: "",
    children: [],
  });

  const selectedNodeId = localStorage.getItem("selectedNodeId");

  function findById(array, id) {
    for (const item of array) {
      if (item.id === id) return item;
      if (item.children?.length) {
        const innerResult = findById(item.children, id);
        if (innerResult) return innerResult;
      }
    }
  }

  let selectedItem = findById(data, selectedNodeId);
  // console.log(selectedItem);
  // console.log("form");

  const onNodeChangeHandler = (e) => {
    // console.log(e.target.value);
    setNewElement({
      ...newElement,
      label: e.target.value,
      type: "node",
      id: uuid(),
    });
  };
  const onLeafChangeHandler = (e) => {
    // console.log(e.target.value);
    setNewElement({
      ...newElement,
      label: e.target.value,
      type: "leaf",
      id: uuid(),
    });
  };
  // console.log(newElement);

  const data1 = [...data];

  const addNodeHandler = () => {
    selectedItem.children.push(newElement);
    console.log(selectedItem);

    // const data2 = data.reduce((acc, node) => {
    //   if (node.id === selectedItem.id) {
    //     node = { ...selectedItem };
    //     console.log(node);
    //   }

    //   const data3 =
    //     node?.children?.length &&
    //     node.children.map((childnode) => {
    //       if (childnode.id === selectedItem.id) {
    //         childnode = { ...selectedItem };
    //         console.log(childnode);
    //         // return childnode;
    //       }
    //       return childnode;
    //     });

    //   if (!node.children.length) {
    //     return [...acc, ...node];
    //   } else {
    //     return [{ ...acc, ...node, children: data3 }];
    //   }
    // }, []);
    // console.log(data2);
    // setData(data2);

    function findById(array, id) {
      for (let item of array) {
        if (item.id === id) {
          // console.log("FOUND");
          console.log(item);
          item.children.push(newElement);
          // item = { ...selectedItem };
          return item;
        }
        if (item?.children?.length) {
          const innerResult = findById(item.children, id);
          if (innerResult) return innerResult;
        }
      }
      // setData(array);
    }
    findById(data1, selectedNodeId);
    // console.log(data1);
    setData(data1);
    // // console.log(data);

    // console.log(data);
  };
  // console.log(data);

  const addLeafHandler = () => {
    function findById(array, id) {
      for (const item of array) {
        if (item.id === id) {
          item.children.push(newElement);
          // setData(array);
          return item;
        }
        if (item.children?.length) {
          const innerResult = findById(item.children, id);

          if (innerResult) return innerResult;
        }
      }
    }

    findById(data1, selectedNodeId);
    setData(data1);

    // console.log(data);
  };

  return (
    <>
      {/* form  */}
      <div
        style={{
          width: "48vw",
          backgroundColor: "#aaa8a8",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {addTreeElement ? (
          <>
            {" "}
            <div>
              <input
                type="text"
                placeholder="Add node"
                onChange={onNodeChangeHandler}
                style={{
                  padding: "5px",
                  border: "1px solid #f3f3g5",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={addNodeHandler}
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  width: "9rem",
                  borderRadius: "5px",
                }}
              >
                Add node
              </button>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <input
                type="text"
                placeholder="Add leaf"
                onChange={onLeafChangeHandler}
                style={{
                  padding: "5px",
                  border: "1px solid #f3f3g5",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={addLeafHandler}
                style={{
                  marginLeft: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  width: "9rem",
                  borderRadius: "5px",
                }}
              >
                Add leaf
              </button>
            </div>
          </>
        ) : (
          <span>
            It is a leaf.You cant add further nodes or leaf to an existing leaf.
          </span>
        )}
      </div>
    </>
  );
};

export default Form;
