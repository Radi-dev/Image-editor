import React, { useState } from "react";
import FontPicker from "font-picker-react";
import { KEY } from "../key";

export default function FontPickComponent({
  activeFontFamily,
  displayFontFamily,
  onChangeFont,
}) {
  return (
    <div>
      <FontPicker
        apiKey={KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => onChangeFont(nextFont.family)}
        limit={200}
      />
      <div className=" pl-2 text-xs text-left font-thin text-gray-300">
        currently: {displayFontFamily}
      </div>
      <div className=" pl-2 text-left text-sm font-thin text-gray-400">
        {!window.navigator.onLine ? "Can't change font while offline" : ""}
      </div>
    </div>
  );
}
