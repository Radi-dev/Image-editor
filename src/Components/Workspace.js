import React, { useState } from "react";
import Draggable from "react-draggable";

const EditBox = (props) => {
  return (
    <Draggable key={props.i} bounds="parent" handle="strong">
      <div key={props.i} className="absolute " style={{}}>
        <strong className=" text-transp arent cursor">
          <div>o</div>
        </strong>

        {props.child}
      </div>
    </Draggable>
  );
};

const Workspace = React.forwardRef(({ image, ...props }, ref) => {
  return (
    <section ref={ref} className="relative w-max h-max border">
      {props.children.map((child, i) => (
        <EditBox i={i} child={child} toggleResize={props.toggleResize} />
      ))}
      <img src={image} alt="" className=""></img>
    </section>
  );
});

export default Workspace;
