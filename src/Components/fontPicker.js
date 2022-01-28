import React, { useState } from "react";
import FontPicker from "font-picker-react";
import { KEY } from "../key";

export default function FontPickComponent({ activeFontFamily, onChangeFont }) {
  return (
    <div>
      <FontPicker
        apiKey={KEY}
        activeFontFamily={activeFontFamily}
        onChange={(nextFont) => onChangeFont(nextFont.family)}
        limit={200}
      />
    </div>
  );
}
