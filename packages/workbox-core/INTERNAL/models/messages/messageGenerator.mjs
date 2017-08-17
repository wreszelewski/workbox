import messages from './messages.mjs';
import core from '../../../index.mjs';

const generatorFunction = (code, ...args) => {
  const message = messages[code];
  if (!message) {
    core.INTERNAL.logHelper.warn(`Unable to find message for code '${code}'`);
    return code;
  }

  if (typeof message === 'function') {
    return message(...args);
  }

  return message;
};

const exportedValue = (process.env.NODE_ENV === 'prod') ?
  null : generatorFunction;

export default exportedValue;