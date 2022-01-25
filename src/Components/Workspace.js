import React, { useState } from "react";
import Draggable from "react-draggable";
import FittingText from "./FittingText";

const EditBox = (props) => {
  return (
    <Draggable key={props.i} handle="strong">
      <div
        key={props.i}
        className="absolute cursor-default w-min max -w-xs overflow-hidden"
      >
        <strong
          style={props.style.printModeAll}
          className=" bg-ye llow-300 z-10 absolute inset-x-0 text-center text-gray-500 text-transp arent "
        >
          {"< o >"}
        </strong>

        <FittingText style={props.style} child={props.child} />
      </div>
    </Draggable>
  );
};

const Workspace = React.forwardRef(({ image, ...props }, ref) => {
  return (
    <section ref={ref} className="relative w-max h-max border">
      {props.children.map((child, i) => (
        <EditBox i={i} child={child} style={props.style} />
      ))}
      <img src={image} alt="" className=""></img>
    </section>
  );
});

export default Workspace;
