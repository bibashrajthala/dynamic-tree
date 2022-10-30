import { useState } from "react";
import AddNodes from "./Form";
import Tree from "./Tree";
// import { root } from './data'
const Home = () => {
  const [traversedData, setTraversedData] = useState([]);

  return (
    <div>
      <header
        style={{
          width: "100vw",
          backgroundColor: "#f4f3d3",
          height: "3rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Header
      </header>
      <div
        className="flex"
        style={{
          display: "flex",
          minWidth: "100vw",
          justifyContent: "space-around",
        }}
      >
        <Tree {...traversedData} style={{ minWidth: "50%" }} />
        <AddNodes
          setTraversedData={setTraversedData}
          style={{ minWidth: "50%" }}
        />
      </div>
    </div>
  );
};

export default Home;
