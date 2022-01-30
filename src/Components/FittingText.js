import { Textfit } from "react-textfit";
import { useResizeDetector } from "react-resize-detector";
import { useContext } from "react";
import { AppContext, WorkspaceContext } from "./contexts";

export default function FittingText({ child }) {
  const { editModeStyles } = useContext(AppContext);
  const { itemClick } = useContext(WorkspaceContext);

  const sizes = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 20,
    //onResize,
  });
  return (
    <div
      ref={sizes.ref}
      className="relative text-center resize bg-blue-300 bg-opacity-20 rounded border-2 border-gray-800 border-dashed p-2 overflow-hidden "
      style={editModeStyles.printModeBorder}
      onClick={() => itemClick(child.id)}
    >
      <Textfit mode="multi" style={{ height: "100%", ...child.style }}>
        <div>{child.data}</div>
      </Textfit>
      <span
        className="  -rotate-45 absolute block -right-1.5 -bottom-1.5 text-center pointer-events-none p w-6 h-6 rounded-full bg-gray-300"
        aria-hidden="true"
        style={editModeStyles.printModeAll}
      >
        ↓
      </span>
    </div>
  );
}
