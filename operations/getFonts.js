const getFonts = (setFontsArr) => {
  let { fonts } = document;
  const it = fonts.entries();

  let fontsArr = [];
  let done = false;

  while (!done) {
    const font = it.next();
    if (!font.done) {
      fontsArr.push(font.value[0].family);
    } else {
      done = font.done;
    }
  }

  // converted to set then arr to filter repetitive values
  setFontsArr([...new Set(fontsArr)]);
};

export default getFonts;
