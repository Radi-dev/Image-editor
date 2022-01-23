import React from "react";
import Draggable from "react-draggable";
const Workspace = React.forwardRef(({ image, ...props }, ref) => {
  return (
    <section ref={ref} className="relative">
      {props.children.map((child, i) => (
        <Draggable key={i}>
          <div className="w-full h-full">{child}</div>
        </Draggable>
      ))}
      <img src={image} alt="" className="mb-4"></img>
      <div>HELLO</div>
    </section>
  );
});

export default Workspace;
