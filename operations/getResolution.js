// get user resolution

const getResolution = (dataContext) => {
  dataContext.setResolution({
    current: {
      width: screen.width,
      height: screen.height,
    },
    available: {
      width: screen.availWidth,
      height: screen.availHeight,
    },
  });
};

export default getResolution;
