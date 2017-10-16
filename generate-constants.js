const generateConstants = ({ prefix, constants }) => {
  const newConstants = {};

  if (!prefix && !constants) {
    console.warn('no options provided to generateConstants'); // eslint-disable-line

    return newConstants;
  }

  if (!Array.isArray(constants) || !constants.length) {
    console.warn(`unavailable constants or wrong type: constant's type is "${typeof constants}", expected array.`); // eslint-disable-line

    return newConstants;
  }

  if (!prefix || typeof prefix !== 'string') {
    console.warn('prefix is not a string, no prefix will be applied to the constants'); // eslint-disable-line
  }

  const prefixString = (prefix && typeof prefix === 'string') ? `${prefix}/` : '';

  constants.forEach(constantString => {
    newConstants[constantString] = `${prefixString}${constantString}`;
  });

  return newConstants;
};

export default generateConstants;
