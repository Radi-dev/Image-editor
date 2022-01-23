import React from "react";
const Workspace = React.forwardRef(({ image, ...props }, ref) => {
  return (
    <section ref={ref} className="relative">
      {props.children.map((child, i) => (
        <div key={i} className="w-full h-full">
          {child}
        </div>
      ))}
      <img src={image} alt="" className="mb-4"></img>
      <div>HELLO</div>
    </section>
  );
});

export default Workspace;
