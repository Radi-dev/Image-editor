import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import FittingText from "./FittingText";
import Modal from "./Modal";
import { AppContext } from "./contexts";
import { WorkspaceContext } from "./contexts";

const EditBox = ({ child, i }) => {
  const { guideStyles } = useContext(AppContext);
  return (
    <Draggable handle="strong">
      <div
        key={i}
        style={{ left: `${i * 2}rem` }}
        className="absolute cursor-default botto m-28 w-min max -w-xs overflow-hidden"
      >
        <strong
          style={guideStyles.printModeAll}
          className=" z-10 absolute inset-x-0 text-center text-gray-500 text-transp arent "
        >
          {`< ${child.id} >`}
        </strong>

        <FittingText child={child} />
      </div>
    </Draggable>
  );
};

const Workspace = React.forwardRef((props, ref) => {
  const { image, fullImage, childrenItems } = useContext(AppContext);
  const [open, setOpen] = useState(null);
  const itemClick = (item) => setOpen(item);

  return (
    <WorkspaceContext.Provider value={{ open, setOpen, itemClick }}>
      <Modal />
      <section ref={ref} className="w-screen h-max  box-border ">
        {childrenItems.map((child, i) => (
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
