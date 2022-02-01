export default function TextStyleToggles({
  bold,
  italic,
  changeBold,
  changeItalic,
  ...props
}) {
  return (
    <>
      <div className="grid grid-cols-2 mt-3">
        <div className="mb-8 flex">
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              name="Bold"
              id="Bold"
              onChange={changeBold}
              className={`${
                bold === "normal" ? "right-5 " : "bg-green-500 right-0"
              } checked:bg- green-500 outline-none focus:outline-none checked :right-0 duration-200 ease-in absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer`}
            />
            <label
              htmlFor="Bold"
              className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span
            style={{ color: bold === "normal" ? "rgb(156 163 175)" : "black" }}
            className=" font-medium"
          >
            Bold
          </span>
        </div>
        <div className="mb-8 flex">
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              name="Italic"
              id="Italic"
              onChange={changeItalic}
              className={`${
                italic === "normal" ? "right-5 " : "bg-yellow-500 right-0"
              } checked:bg- yellow-500 outline-none focus:outline-none  checked:ri ght-0 duration-200 ease-in absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer`}
            />
            <label
              htmlFor="Italic"
              className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span
            style={{
              color: italic === "normal" ? "rgb(156 163 175)" : "black",

              fontStyle: "italic",
            }}
            className=" font-medium"
          >
            Italic
          </span>
        </div>

        <fieldset className="col-span-2 grid grid-cols-2">
          <legend className="text-cente">Text Alignment</legend>
          <div className="mb-3 gap-3 flex items-center">
            <div className="inline-flex  items-center ">
              <input
                type="radio"
                name="textAlign"
                className="form-radio h-5 w-5 text-purple-500"
              />
              <label
                htmlFor="Purple"
                className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <div className="mb-3 gap-3 flex items-center">
            <div className="inline-flex  items-center ">
              <input
                type="radio"
                name="textAlign"
                className="form-radio h-5 w-5 text-black"
              />
              <label
                htmlFor="Black"
                className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="mb-3 gap-3 flex items-center">
            <div className="inline-flex  items-center ">
              <input
                type="radio"
                name="textAlign"
                className="form-radio h-5 w-5 text-indigo-500"
              />
              <label
                htmlFor="Indigo"
                className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="mb-3 gap-3 flex items-center">
            <div className="inline-flex  items-center ">
              <input
                type="radio"
                name="textAlign"
                className="form-radio h-5 w-5 text-red-500"
              />
              <label
                htmlFor="Red"
                className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </fieldset>
      </div>
    </>
  );
}
<div className="mb-3 flex">
  <div className="relative inline-block w-10 mr-2 align-middle select-none">
    <label className="inline-flex items-center mt-3">
      <input
        type="radio"
        className="form-radio h-5 w-5 text-purple-600"
        checked
      />
      <span className="ml-2 text-gray-700">label</span>
    </label>
  </div>
  <span className="text-gray-400 font-medium">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  </span>
</div>;
