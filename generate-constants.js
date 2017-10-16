const generateConstants = ({ prefix, constants }) => {
  const newConstants = {};
  let prefixString;
  
  if (!prefix && !constants) {
    console.warn('no options provided to generateConstants');
    
    return newConstants;
  }
  
  if (!Array.isArray(constants) && !constants.length) {
    console.warn(`no constants available. type of constants is ${typeof constants}, expected an array.`);

    return newConstants;
  }
  
  if (!prefix || typeof prefix !== 'string') {
    console.warn('prefix is not a string, no prefix will be applied to the constants');
    
    prefixString = (typeof prefix === 'string') ? `${prefix}/` : '';
  }

  constants.forEach(constantString => {
    newConstants[constantString] = `${prefixString}${constantString}`;
  });

  return newConstants;
};

export default generateConstants;
