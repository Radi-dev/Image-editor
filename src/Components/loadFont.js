export async function loadFont(fontFamily, url) {
  const font = new FontFace(fontFamily, `local(${fontFamily}), url(${url})`);
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add("fonts-loaded");
}
