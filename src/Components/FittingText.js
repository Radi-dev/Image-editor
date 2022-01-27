import { useState } from 'react'
import { Textfit } from "react-textfit";
import { useResizeDetector } from "react-resize-detector";
import Modal from './Modal'

export default function FittingText(props) {
  const defaultStyle = props.child.style
  const [modalOpen, setModalOpen] = useState(false);
  const [styles, setStyles] = useState(defaultStyle);

  const handleChangeStyle = (newStyles) => {
    setStyles({...styles, ...newStyles});
  }
 const closeModal = () => {
   setModalOpen(false)
 }
  const sizes = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 20,
  });
  return (
    <>
      <div
        ref={sizes.ref}
        className="relative text-center resize bg-blue-300 bg-opacity-20 rounded border-2 border-gray-800 border-dashed p-2 overflow-hidden "
        style={props.style.printModeBorder}
        onClick={() => setModalOpen(true)}
      >
        <Textfit mode="multi" style={{ height: "100%", styles }}>
          {props.child.data}
          <Modal
            isOpen={modalOpen}
            onSetNewStyles={handleChangeStyle}
            closeModal={closeModal}
          />
        </Textfit>
        <span
          className="  -rotate-45 absolute block -right-1.5 -bottom-1.5 text-center pointer-events-none p w-6 h-6 rounded-full bg-gray-300"
          aria-hidden="true"
          style={props.style.printModeAll}
        >
          ↓
        </span>
      </div>
    </>
  );
}
