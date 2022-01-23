import React from "react";
import Draggable from "react-draggable";
const Workspace = React.forwardRef(({ image, ...props }, ref) => {
  return (
    <section ref={ref} className="relative w-full h-full border">
      {props.children.map((child, i) => (
        <Draggable key={i} bounds="parent">
          <div className="absolute">{child}</div>
        </Draggable>
      ))}
      <img src={image} alt="" className="mb-4"></img>
    </section>
  );
});

export default Workspace;
