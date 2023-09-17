import React, { useState } from "react";
import moon from "../assests/moon.svg";
import sun from "../assests/sun.svg";

const ToggleButton = () => {
  const [dark, handleMode] = useState(false);
  console.log(dark);
  return (
    <div>
      <button onClick={handleMode}>
        <img src={dark ? moon : sun} />
      </button>
    </div>
  );
};

export default ToggleButton;
