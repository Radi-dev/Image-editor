import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import FittingText from "./FittingText";
import Modal from "./Modal";
import { AppContext } from "./contexts";
import { WorkspaceContext } from "./contexts";

const EditBox = ({ child, i }) => {
  const { editModeStyles } = useContext(AppContext);
  return (
    <Draggable handle="strong">
      <div
        key={i}
        className="absolute cursor-default w-min max -w-xs overflow-hidden"
      >
        <strong
          style={editModeStyles.printModeAll}
          className=" z-10 absolute inset-x-0 text-center text-gray-500 text-transp arent "
        >
          {`< ${child.id} >`}
        </strong>

        <FittingText child={child} />
      </div>
    </Draggable>
  );
};

const Workspace = React.forwardRef(({ children }, ref) => {
  const { image, fullImage } = useContext(AppContext);
  const [open, setOpen] = useState(null);
  const itemClick = (item) => setOpen(item);

  return (
    <WorkspaceContext.Provider value={{ open, setOpen, itemClick }}>
      <Modal id={open} />
      <section ref={ref} className="w-screen h-max  box-border ">
        {children.map((child, i) => (
          <EditBox i={i} child={child} />
        ))}

        <img
          style={fullImage ? { maxWidth: "max-content" } : { maxWidth: "100%" }}
          src={image}
          alt=""
        ></img>
      </section>
    </WorkspaceContext.Provider>
  );
});

export default Workspace;
