function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
function isInvalidOTPInput(key) {
  if (key === undefined)
    return false; // fix for autocomplete feature on iPhone
  if (key.trim() === '')
    return true;
  const allowedKeys = ['Backspace', 'Enter'];
  return isNaN(key) && !allowedKeys.includes(key);
}
function isDeleteContentKey(key) {
  return key === 'Backspace' || key === 'Delete';
}
const restrictToNumberType = (evt) => {
  const theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  if (!key.length)
    return;
  const regex = /^[0-9\b]+$/;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault)
      theEvent.preventDefault();
  }
};
const builtInINRCurrencyFormat = (number) => {
  return Number(number).toLocaleString('en-IN', { currency: 'INR', minimumFractionDigits: 0 });
};
const currencyINRPattern = "^[0-9,]+$";

export { isDeleteContentKey as a, builtInINRCurrencyFormat as b, currencyINRPattern as c, isInvalidOTPInput as i, restrictToNumberType as r };
