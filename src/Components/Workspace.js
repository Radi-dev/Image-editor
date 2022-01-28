import React, { useState } from "react";
import Draggable from "react-draggable";
import FittingText from "./FittingText";
import Modal from "./Modal";

const EditBox = (props) => {
  return (
    <Draggable key={props.i} handle="strong">
      <div
        key={props.i}
        className="absolute cursor-default w-min max -w-xs overflow-hidden"
      >
        <strong
          style={props.style.printModeAll}
          className=" z-10 absolute inset-x-0 text-center text-gray-500 text-transp arent "
        >
          {`< ${props.child.id} >`}
        </strong>

        <FittingText
          style={props.style}
          child={props.child}
          modalHandler={props.modalHandler}
        />
      </div>
    </Draggable>
  );
};

const Workspace = React.forwardRef(({ image, fullImage, ...props }, ref) => {
  const [open, setOpen] = useState(null);
  const itemClick = (item) => setOpen(item);

  return (
    <>
      <Modal
        id={open}
        open={open}
        setOpen={setOpen}
        modChildStyles={props.modChildStyles}
      />
      <section ref={ref} className="w-screen h-max  box-border ">
        {props.children.map((child, i) => (
          <EditBox
            i={i}
            child={child}
            style={props.style}
            modalHandler={itemClick}
          />
        ))}

        <img
          style={fullImage ? { maxWidth: "max-content" } : { maxWidth: "100%" }}
          src={image}
          alt=""
        ></img>
      </section>
    </>
  );
});

export default Workspace;
