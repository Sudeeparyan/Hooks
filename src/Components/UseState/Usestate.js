import React, { useState } from "react";

function Usestate() {
  const [show, setShow] = useState({ value: false });
  const showResult = () => {
    setShow({ value: !show.value });
  };
  console.log(show);
  return (
    <div>
      <button onClick={showResult}>Show</button>
      {show.value ? <h3>Hidden</h3> : null}
    </div>
  );
}

export default Usestate;
