import React, { useState } from "react";

const Form = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = () => {
    setIsFormVisible(false);
  };

  return (
    <div style={{ border: "1px solid blue", width: "50%" }}>
      <div>
        <button onClick={showForm}>Add node</button>
        <button onClick={showForm}>Add leaf</button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit"></button>
        </form>
      )}
    </div>
  );
};

export default Form;
