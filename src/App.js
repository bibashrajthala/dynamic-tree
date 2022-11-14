import { useState } from "react";
import "./App.css";
// import Home from "./component/Home";
// import Form from "./components/Form/Form";
// import Tree from "./components/Tree/Tree";
// import { treeData } from "./data/data";

import { v4 as uuid } from "uuid";
import Tree from "./container/Tree/Tree";
import Form from "./container/Form/Form";

// const treeData = [
//   {
//     // id: uuid(),
//     id: "0",
//     label: "root",
//     type: "node",
//     children: [
//       {
//         id: uuid(),
//         label: "node 1",
//         type: "node",
//         children: [
//           {
//             id: uuid(),
//             label: "node 1.1",
//             type: "node",
//             children: [],
//           },
//           {
//             id: uuid(),
//             label: "node 1.2",
//             type: "node",
//             children: [],
//           },
//         ],
//       },
//       {
//         id: uuid(),
//         label: "node 2",
//         type: "node",
//         children: [],
//       },
//     ],
//   },
// ];

const treeData = [
  {
    // id: uuid(),
    id: "0",
    label: "root",
    type: "node",
    children: [],
  },
];

function App() {
  const [data, setData] = useState(treeData);
  const [addTreeElement, setAddTreeElement] = useState(true);

  // console.log(data);

  return (
    <div
      className="App"
      style={{ display: "flex", padding: "2rem", height: "100vh" }}
    >
      {/* <header
        style={{
          height: "2rem",
          textAlign: "center",
          backgroundColor: "orangered",
        }}
      >
        Header
      </header>
      <div style={{ display: "flex", width: "100vw" }}>
        <Tree data={treeData} />
        <Form />
      </div> */}
      {/* <Home /> */}
      <Tree data={data} setAddTreeElement={setAddTreeElement} />
      <Form data={data} addTreeElement={addTreeElement} setData={setData} />
    </div>
  );
}

export default App;
