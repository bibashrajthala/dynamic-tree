import { useState } from "react";
import { Trees } from "./Logic";
const newNode = new Trees();
var z = {};
const AddNodes = ({ setTraversedData, node }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [leafTitle, setLeafTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(`📁 ${e.target.value}`);
  };
  const leafTitleHandler = (e) => {
    setLeafTitle(`🔰 ${e.target.value}`);
  };
  const nodeHandler = () => {
    const value = localStorage.getItem("node") || null;
    if (value) {
      newNode.add(title, value);
      const x = newNode.findBFS(value);
      console.log(x);
      setData((prev) => [...prev, x]);
      console.log(data[0]);
      setTraversedData(data[0]);
      newNode.traverseBFS((node) => {
        console.log("node", node);
      });
      console.log(data[0].children);
      function start(node) {
        console.log("data start", node.data);
        // path += node.data;
        // path += "/";

        if (node.children) {
          node.children.forEach((child) => {
            if (child.data === title) {
              start(child);
            }
          });
        }
      }
      start(x);
    } else {
      newNode.add(title, null);
      const x = newNode.findBFS(title);
      setData((prev) => [...prev, x]);
      setTraversedData(x);
    }
  };
  const leafHandler = () => {
    const value = localStorage.getItem("node") || null;
    if (value) {
      newNode.add(leafTitle, value);
      const x = newNode.findBFS(value);
      setData((prev) => [...prev, x]);
      setTraversedData(data[0]);
      localStorage.clear();
    } else {
      newNode.add(leafTitle, null);
      const x = newNode.findBFS(title);
      setData((prev) => [...prev, x]);
      setTraversedData(x);
    }
  };
  return (
    <div>
      <div>
        <input
          onChange={titleHandler}
          type="text"
          name=""
          id=""
          placeholder="Node title"
        />
        <button onClick={nodeHandler}> Add Node</button>
      </div>
      <div>
        <input
          onChange={leafTitleHandler}
          type="text"
          name=""
          id=""
          placeholder="Leaf title"
        />
        <button onClick={leafHandler}> Add Leaf</button>
      </div>
    </div>
  );
};

export default AddNodes;
