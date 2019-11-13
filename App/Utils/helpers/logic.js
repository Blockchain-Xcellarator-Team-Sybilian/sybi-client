import { every, some } from 'lodash';
import { DEFAULT } from 'App/Constants';

const ifElse = (conditions, conditionTrue, conditionFalse, or) => {
  if (!Array.isArray(conditions)) {
    return ifElse([conditions], conditionTrue, conditionFalse);
  }

  const predicate = or ? some : every;

  return predicate(conditions, Boolean) ? conditionTrue : conditionFalse;
};

/**
 * @param func
 * @param params array of parameter, pass in [] if none
 * @param conditionFalse
 * @returns {*}
 */
const ifFunction = (func, params = [], conditionFalse) => (typeof func === 'function' ? func(...params) : conditionFalse);

// if undefined, call default function
// else if function, call it, otherwise return value
const switchCase = (value, { [DEFAULT]: defaultFn, [value]: fn } = {}) => ifElse(typeof fn === 'undefined', ifFunction(defaultFn, [], defaultFn), ifFunction(fn, [], fn));

// validate if is email
const isEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const LOGIC_HELPERS = {
  ifElse,
  ifFunction,
  switchCase,
  isEmail,
};
