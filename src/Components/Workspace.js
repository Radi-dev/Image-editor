import React, { useState } from "react";
import Draggable from "react-draggable";

const EditBox = (props) => {
  return !props.toggleResize ? (
    <Draggable key={props.i} bounds="parent" handle="strong">
      <div key={props.i} className="absolute " style={{}}>
        <strong className="cursor">
          <div>Drag here</div>
        </strong>
        <div
          className="absolute box-border overflow-hidden w-max h-max "
          style={{ resize: "both" }}
        >
          {props.child}
        </div>
      </div>
    </Draggable>
  ) : (
    <div
      key={props.i}
      className="absolute   "
      style={{ width: "", height: "" }}
    >
      <div className=" overflow-hidden  " style={{ resize: "both" }}>
        {props.child}
      </div>
    </div>
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
