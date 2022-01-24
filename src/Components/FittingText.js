import { Textfit } from "react-textfit";
import { useResizeDetector } from "react-resize-detector";

export default function FittingText(props) {
  /*  
  const onResize = useCallback(() => {
    // on resize logic
  }, []);*/

  const sizes = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 20,
    //onResize,
  });
  return (
    <>
      <div
        ref={sizes.ref}
        className="absolute box-border bg-blue-400 rounded border border-dashed shadow p-2 overflow-hidden "
        style={{ resize: "both" }}
      >
        <Textfit mode="multi" style={{ height: "100%" }}>
          {props.children}
        </Textfit>
      </div>
    </>
  );
}
