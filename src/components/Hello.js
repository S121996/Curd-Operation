import React from "react";

const Hello = () => {
  // return(
  //     <div>
  //         <h1>Hello Sumit</h1>
  //     </div>
  // )

  return React.createElement(
    "div",
    // null,
    {id:'hello',className:'dummyClass'},
    React.createElement("h1", null, "hello sumit")
  );
};

export default Hello;
