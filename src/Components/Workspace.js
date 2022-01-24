import React, { useState } from "react";
import Draggable from "react-draggable";

const EditBox = (props) => {
  return (
    <Draggable key={props.i} bounds="parent" handle="strong">
      <div
        key={props.i}
        className="absolute cursor-default max -w-xs overflow-hidden"
        style={{}}
      >
        <strong className=" bg-ye llow-300 z-10 absolute inset-x-0 text-center text-gray-500 text-transp arent ">
          {"< o >"}
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
        <EditBox i={i} child={child} />
      ))}
      <img src={image} alt="" className=""></img>
    </section>
  );
});

export default Workspace;
