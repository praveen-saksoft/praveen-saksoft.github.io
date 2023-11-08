import { h, r as registerInstance, f as createEvent, e as Host, g as getElement } from './index-b6b593ed.js';

// DATE Utils Starts here
const ISO_DATE_FORMAT = /^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/;
var DaysOfWeek;
(function (DaysOfWeek) {
  DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
  DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
  DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
  DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
  DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
  DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
  DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
function createDate(day, month, year) {
  var dayInt = parseInt(day, 10);
  var monthInt = parseInt(month, 10);
  var yearInt = parseInt(year, 10);
  const isValid = Number.isInteger(yearInt) && // all parts should be integers
    Number.isInteger(monthInt) &&
    Number.isInteger(dayInt) &&
    monthInt > 0 && // month must be 1-12
    monthInt <= 12 &&
    dayInt > 0 && // day must be 1-31
    dayInt <= 31 &&
    yearInt > 0;
  // let yr, mn, dy;
  // yr = (yearInt.toString().length === 2) ? `20${yearInt}` : yearInt
  // mn = (yearInt.toString().length === 1) ? `0${yearInt}` : yearInt
  // dy = (yearInt.toString().length === 1) ? `0${yearInt}` : yearInt
  if (isValid) {
    return new Date(yearInt, monthInt - 1, dayInt);
  }
}
/**
 * @param value date string in format DD-MM-YYYY
 */
function parseISODate(value) {
  if (!value) {
    return;
  }
  const matches = value.match(ISO_DATE_FORMAT);
  if (matches) {
    return createDate(matches[1], matches[2], matches[3]);
  }
  else {
    let ndate = new Date(value);
    let d = ndate.getDate().toString(10);
    let m = (ndate.getMonth() + 1).toString(10);
    let y = ndate.getFullYear().toString(10);
    return createDate(d, m, y);
  }
}
/**
 * print date in format DD-MM-YYYY
 * @param date
 */
function printISODate(date) {
  if (!date) {
    return "";
  }
  var d = date.getDate().toString(10);
  var m = (date.getMonth() + 1).toString(10);
  var y = date.getFullYear().toString(10);
  // days are not zero-indexed, so pad if less than 10
  if (date.getDate() < 10) {
    d = `0${d}`;
  }
  // months *are* zero-indexed, pad if less than 9!
  if (date.getMonth() < 9) {
    m = `0${m}`;
  }
  return `${d}/${m}/${y}`;
}
/**
 * Compare if two dates are equal in terms of day, month, and year
 */
function isEqual(a, b) {
  if (a == null || b == null) {
    return false;
  }
  return isEqualMonth(a, b) && a.getDate() === b.getDate();
}
/**
 * Compare if two dates are in the same month of the same year.
 */
function isEqualMonth(a, b) {
  if (a == null || b == null) {
    return false;
  }
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}
function addDays(date, days) {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function addMonths(date, months) {
  const d = new Date(date);
  d.setMonth(date.getMonth() + months);
  return d;
}
function addYears(date, years) {
  const d = new Date(date);
  d.setFullYear(date.getFullYear() + years);
  return d;
}
function startOfWeek(date, firstDayOfWeek = DaysOfWeek.Monday) {
  var d = new Date(date);
  var day = d.getDay();
  var diff = (day < firstDayOfWeek ? 7 : 0) + day - firstDayOfWeek;
  d.setDate(d.getDate() - diff);
  return d;
}
function endOfWeek(date, firstDayOfWeek = DaysOfWeek.Monday) {
  var d = new Date(date);
  var day = d.getDay();
  var diff = (day < firstDayOfWeek ? -7 : 0) + 6 - (day - firstDayOfWeek);
  d.setDate(d.getDate() + diff);
  return d;
}
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function setMonth(date, month) {
  const d = new Date(date);
  d.setMonth(month);
  return d;
}
function setYear(date, year) {
  const d = new Date(date);
  d.setFullYear(year);
  return d;
}
/**
 * Check if date is within a min and max
 */
function inRange(date, min, max) {
  return clamp(date, min, max) === date;
}
/**
 * Ensures date is within range, returns min or max if out of bounds
 */
function clamp(date, min, max) {
  const time = date.getTime();
  if (min && min instanceof Date && time < min.getTime()) {
    return min;
  }
  if (max && max instanceof Date && time > max.getTime()) {
    return max;
  }
  return date;
}
/**
 * given start and end date, return an (inclusive) array of all dates in between
 * @param start
 * @param end
 */
function getDaysInRange(start, end) {
  const days = [];
  let current = start;
  while (!isEqual(current, end)) {
    days.push(current);
    current = addDays(current, 1);
  }
  days.push(current);
  return days;
}
/**
 * given a date, return an array of dates from a calendar perspective
 * @param date
 * @param firstDayOfWeek
 */
function getViewOfMonth(date, firstDayOfWeek = DaysOfWeek.Monday) {
  const start = startOfWeek(startOfMonth(date), firstDayOfWeek);
  const end = endOfWeek(endOfMonth(date), firstDayOfWeek);
  return getDaysInRange(start, end);
}
/**
 * Form random hash
 */
function chr4() {
  return Math.random()
    .toString(16)
    .slice(-4);
}
/**
 * Create random identifier with a prefix
 * @param prefix
 */
function createIdentifier(prefix) {
  return `${prefix}-${chr4()}${chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
}

const AegonDateInput = ({ onClick, dateFormatter, localization, name, formattedValue, placeHolder, valueAsDate, value, identifier, disabled, required, role, buttonRef, inputRef, onInput, onBlur, onFocus, }) => {
  return (h("div", { class: "date__input-wrapper" }, h("input", { class: "date__input", value: formattedValue, placeholder: placeHolder || localization.placeholder, id: identifier, disabled: disabled, role: role, required: required ? true : undefined, "aria-autocomplete": "none", onInput: onInput, onFocus: onFocus, onBlur: onBlur, autoComplete: "off", ref: inputRef }), h("input", { type: "hidden", name: name, value: value }), h("button", { class: "date__toggle", onClick: onClick, disabled: disabled, ref: buttonRef, type: "button" }, h("span", { class: "date__toggle-icon" }, h("svg", { "data-v-15ac5df2": "", width: "20", height: "20", viewBox: "0 0 12 14", xmlns: "http://www.w3.org/2000/svg" }, h("defs", null, h("path", { d: "M11.333 8.667H8V12h3.333V8.667zm-.666-7.334v1.334H5.333V1.333H4v1.334h-.667c-.74 0-1.326.6-1.326 1.333L2 13.333c0 .734.593 1.334 1.333 1.334h9.334c.733 0 1.333-.6 1.333-1.334V4c0-.733-.6-1.333-1.333-1.333H12V1.333h-1.333zm2 12H3.333V6h9.334v7.333z", id: "calendar_svg__a" })), h("g", { transform: "translate(-2 -1)", fill: "none", "fill-rule": "evenodd" }, h("mask", { id: "calendar_svg__b", fill: "#fff" }, h("use", { xlinkHref: "#calendar_svg__a" })), h("g", { mask: "url(#calendar_svg__b)", fill: "#000", "fill-opacity": ".54" }, h("path", { d: "M0 0h16v16H0z" }))))), h("span", { class: "date__vhidden" }, localization.buttonLabel, valueAsDate && (h("span", null, ", ", localization.selectedDateMessage, " ", dateFormatter.format(valueAsDate)))))));
};

const DatePickerDay = ({ focusedDay, today, day, onDaySelect, onKeyboardNavigation, focusedDayRef, disabled, inRange, isSelected, dateFormatter, }) => {
  const isToday = isEqual(day, today);
  const isMonth = isEqualMonth(day, focusedDay);
  const isFocused = isEqual(day, focusedDay);
  const isOutsideRange = !inRange;
  function handleClick(e) {
    onDaySelect(e, day);
  }
  return (h("button", { class: {
      "date__day": true,
      "is-outside": isOutsideRange,
      "is-today": isToday,
      "is-month": isMonth,
      "is-disabled": disabled,
    }, tabIndex: isFocused ? 0 : -1, onClick: handleClick, onKeyDown: onKeyboardNavigation, "aria-disabled": disabled ? "true" : undefined, disabled: isOutsideRange, type: "button", "aria-pressed": isSelected ? "true" : "false", "aria-current": isToday ? "date" : undefined, ref: el => {
      if (isFocused && el && focusedDayRef) {
        focusedDayRef(el);
      }
    } }, h("span", { "aria-hidden": "true" }, day.getDate()), h("span", { class: "date__vhidden" }, dateFormatter.format(day))));
};

function chunk(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function mapWithOffset(array, startingOffset, mapFn) {
  return array.map((_, i) => {
    const adjustedIndex = (i + startingOffset) % array.length;
    return mapFn(array[adjustedIndex]);
  });
}
const DatePickerMonth = ({ selectedDate, focusedDate, labelledById, localization, firstDayOfWeek, min, max, dateFormatter, isDateDisabled, onDateSelect, onKeyboardNavigation, focusedDayRef, }) => {
  const today = new Date();
  const days = getViewOfMonth(focusedDate, firstDayOfWeek);
  return (h("table", { class: "date__table", "aria-labelledby": labelledById }, h("thead", null, h("tr", null, mapWithOffset(localization.dayNames, firstDayOfWeek, dayName => (h("th", { class: "date__table-header", scope: "col" }, h("span", { "aria-hidden": "true" }, dayName.substr(0, 2)), h("span", { class: "date__vhidden" }, dayName)))))), h("tbody", null, chunk(days, 7).map(week => (h("tr", { class: "date__row" }, week.map(day => (h("td", { class: "date__cell" }, h(DatePickerDay, { day: day, today: today, focusedDay: focusedDate, isSelected: isEqual(day, selectedDate), disabled: isDateDisabled(day), inRange: inRange(day, min, max), onDaySelect: onDateSelect, dateFormatter: dateFormatter, onKeyboardNavigation: onKeyboardNavigation, focusedDayRef: focusedDayRef }))))))))));
};

const localization = {
  buttonLabel: "Choose date",
  placeholder: "DD-MM-YYYY",
  selectedDateMessage: "Selected date is",
  prevMonthLabel: "Previous month",
  nextMonthLabel: "Next month",
  monthSelectLabel: "Month",
  yearSelectLabel: "Year",
  closeLabel: "Close window",
  calendarHeading: "Choose a date",
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  locale: "en-GB",
};

const isoAdapter = { parse: parseISODate, format: printISODate };

const aegonDatePickerCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}:root{--color-primary:#005fcc;--color-text:#333;--color-text-active:#fff;--color-placeholder:#666;--color-button:#f5f5f5;--color-surface:#fff;--color-overlay:rgba(0, 0, 0, 0.8);--color-border:#333;--font:sans-serif;--font-normal:400;--font-bold:600;--radius:4px;--z-index:600}.date *,.date *::before,.date *::after{box-sizing:border-box;margin:0;width:auto}.date{box-sizing:border-box;color:var(--color-text);display:block;font-family:var(--font);margin:0;position:relative;text-align:left;width:100%}.date__input{-webkit-appearance:none;appearance:none;background:var(--color-surface);border:1px solid var(--color-border, var(--color-text));border-radius:var(--radius);color:var(--color-text);float:none;font-family:var(--font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.date__input:focus{border-color:var(--color-primary);box-shadow:0 0 0 1px var(--color-primary);outline:0}.date__input::-webkit-input-placeholder{color:var(--color-placeholder);opacity:1}.date__input:-moz-placeholder{color:var(--color-placeholder);opacity:1}.date__input:-ms-input-placeholder{color:var(--color-placeholder)}.date__input-wrapper{position:relative;width:100%}.date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;align-items:center;appearance:none;background:var(--color-button);border:0;border-radius:0;border-bottom-right-radius:var(--radius);border-top-right-radius:var(--radius);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--color-text);cursor:pointer;display:flex;height:calc(100% - 2px);justify-content:center;padding:0;position:absolute;right:1px;top:1px;user-select:none;width:48px;z-index:2}.date__toggle:focus{box-shadow:0 0 0 2px var(--color-primary);outline:0}.date__toggle-icon{display:flex;flex-basis:100%;justify-content:center;align-items:center}.date__dialog{display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;transform:scale(0.96) translateZ(0) translateY(-20px);transform-origin:top right;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--z-index)}@media (max-width: 35.9375em){.date__dialog{background:var(--color-overlay);bottom:0;position:fixed;right:0;top:0;transform:translateZ(0);transform-origin:bottom center}}.date__dialog.is-left{left:auto;right:0;width:auto}.date__dialog.is-active{opacity:1;transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.date__dialog-content{background:var(--color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--radius);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;transform:none;width:100%;z-index:var(--z-index)}@media (max-width: 35.9375em){.date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;transform:translateZ(0) translateY(100%);transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .date__dialog-content{opacity:1;transform:translateZ(0) translateY(0);visibility:visible}}.date__table{border-collapse:collapse;border-spacing:0;color:var(--color-text);font-size:1rem;font-weight:var(--font-normal);line-height:1.25;text-align:center;width:100%}.date__table-header{font-size:0.75rem;font-weight:var(--font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.date__cell{text-align:center}.date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--color-text);cursor:pointer;display:inline-block;font-family:var(--font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.date__day.is-today{box-shadow:0 0 0 1px var(--color-primary);position:relative;z-index:200}.date__day:hover::before,.date__day.is-today::before{background:var(--color-primary);border-radius:50%;bottom:0;content:\"\";left:0;opacity:0.06;position:absolute;right:0;top:0}.date__day[aria-pressed=true],.date__day:focus{background:var(--color-primary);box-shadow:none;color:var(--color-text-active);outline:0}.date__day:active{background:var(--color-primary);box-shadow:0 0 5px var(--color-primary);color:var(--color-text-active);z-index:200}.date__day:focus{box-shadow:0 0 5px var(--color-primary);z-index:200}.date__day:not(.is-month){box-shadow:none}.date__day:not(.is-month),.date__day[aria-disabled=true]{background:transparent;color:var(--color-text);cursor:default;opacity:0.5}.date__day[aria-disabled=true].is-today{box-shadow:0 0 0 1px var(--color-primary)}.date__day[aria-disabled=true].is-today:focus{box-shadow:0 0 5px var(--color-primary);background:var(--color-primary);color:var(--color-text-active)}.date__day[aria-disabled=true]:not(.is-today)::before{display:none}.date__day.is-outside{background:var(--color-button);box-shadow:none;color:var(--color-text);cursor:default;opacity:0.6;pointer-events:none}.date__day.is-outside::before{display:none}.date__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:16px;width:100%}.date__nav{white-space:nowrap}.date__prev,.date__next{-moz-appearance:none;-webkit-appearance:none;align-items:center;appearance:none;background:var(--color-button);border:0;border-radius:50%;color:var(--color-text);cursor:pointer;display:inline-flex;height:32px;justify-content:center;margin-left:8px;padding:0;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.date__prev,.date__next{height:40px;width:40px}}.date__prev:focus,.date__next:focus{box-shadow:0 0 0 2px var(--color-primary);outline:0}.date__prev:active:focus,.date__next:active:focus{box-shadow:none}.date__prev:disabled,.date__next:disabled{cursor:default;opacity:0.5}.date__prev svg,.date__next svg{margin:0 auto}.date__select{display:inline-flex;margin-top:4px;position:relative}.date__select span{margin-right:4px}.date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.date__select select:focus+.date__select-label{box-shadow:0 0 0 2px var(--color-primary)}.date__select-label{align-items:center;border-radius:var(--radius);color:var(--color-text);display:flex;font-size:1.25rem;font-weight:var(--font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.date__select-label svg{width:16px;height:16px}.date__mobile{align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:flex;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.date__mobile-heading{display:inline-block;font-weight:var(--font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.date__mobile-heading{display:none}}.date__close{-webkit-appearance:none;align-items:center;appearance:none;background:var(--color-button);border:0;border-radius:50%;color:var(--color-text);cursor:pointer;display:flex;height:24px;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.date__close{opacity:0}}.date__close:focus{box-shadow:0 0 0 2px var(--color-primary);outline:none}@media (min-width: 36em){.date__close:focus{opacity:1}}.date__close svg{margin:0 auto}.date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}";

function range(from, to) {
  var result = [];
  for (var i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
}
const keyCode = {
  TAB: 9,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
function cleanValue(input, regex, separator, e, dateLength) {
  const value = input.value;
  const cursor = input.selectionStart;
  const beforeCursor = value.slice(0, cursor);
  const afterCursor = value.slice(cursor, value.length);
  const filteredBeforeCursor = beforeCursor.replace(regex, "");
  const filterAfterCursor = afterCursor.replace(regex, "");
  const newValue = filteredBeforeCursor + filterAfterCursor;
  const newCursor = filteredBeforeCursor.length;
  const ONLY_DATE_FORMAT = /^(\d{2})$/;
  const DATE_MONTH_FORMAT = /^(\d{2})[-\/.:](\d{2})$/;
  if (e.inputType === 'insertText' && (newValue.match(ONLY_DATE_FORMAT) || newValue.match(DATE_MONTH_FORMAT))) { // Insert backword slash after month and day of month has been added
    input.value = newValue + separator;
    input.selectionStart = input.selectionEnd = newCursor + 1;
  }
  else if ((input.value.length > dateLength) || (e.inputType === 'deleteContentBackward' && (newValue.match(ONLY_DATE_FORMAT) || newValue.match(DATE_MONTH_FORMAT)))) { // Delete last char if date is more then Date Max length and if last char deleted of Day of Month and Month
    input.value = newValue.replace(/.$/, '');
    input.selectionStart = input.selectionEnd = (newCursor - 1);
  }
  else {
    input.value = newValue;
    input.selectionStart = input.selectionEnd = newCursor;
  }
  return newValue;
}
const DISALLOWED_CHARACTERS = /[^0-9\.\/\-:]+/g;
const TRANSITION_MS = 300;
const AegonDatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.aegonChange = createEvent(this, "aegonChange", 7);
    this.aegonBlur = createEvent(this, "aegonBlur", 7);
    this.aegonFocus = createEvent(this, "aegonFocus", 7);
    this.aegonOpen = createEvent(this, "aegonOpen", 7);
    this.aegonClose = createEvent(this, "aegonClose", 7);
    this.aegonError = createEvent(this, "aegonError", 7);
    /**
     * Own Properties
     */
    this.monthSelectId = createIdentifier("AegonDateMonth");
    this.yearSelectId = createIdentifier("AegonDateYear");
    this.dialogLabelId = createIdentifier("AegonDateLabel");
    this.initialTouchX = null;
    this.initialTouchY = null;
    this.enableActiveFocus = () => {
      this.activeFocus = true;
    };
    this.disableActiveFocus = () => {
      this.activeFocus = false;
    };
    this.toggleOpen = (e) => {
      e.preventDefault();
      this.open ? this.hide(false) : this.show();
    };
    this.handleEscKey = (event) => {
      if (event.keyCode === keyCode.ESC) {
        this.hide();
      }
    };
    this.handleBlur = (event) => {
      event.stopPropagation();
      this.aegonBlur.emit({
        component: "aegon-date-picker",
        value: event.target['value']
      });
    };
    this.handleFocus = (event) => {
      event.stopPropagation();
      this.aegonFocus.emit({
        component: "aegon-date-picker",
      });
    };
    this.handleTouchStart = (event) => {
      const touch = event.changedTouches[0];
      this.initialTouchX = touch.pageX;
      this.initialTouchY = touch.pageY;
    };
    this.handleTouchMove = (event) => {
      event.preventDefault();
    };
    this.handleTouchEnd = (event) => {
      const touch = event.changedTouches[0];
      const distX = touch.pageX - this.initialTouchX; // get horizontal dist traveled
      const distY = touch.pageY - this.initialTouchY; // get vertical dist traveled
      const threshold = 70;
      const isHorizontalSwipe = Math.abs(distX) >= threshold && Math.abs(distY) <= threshold;
      const isDownwardsSwipe = Math.abs(distY) >= threshold && Math.abs(distX) <= threshold && distY > 0;
      if (isHorizontalSwipe) {
        this.addMonths(distX < 0 ? 1 : -1);
      }
      else if (isDownwardsSwipe) {
        this.hide(false);
        event.preventDefault();
      }
      this.initialTouchY = null;
      this.initialTouchX = null;
    };
    this.handleNextMonthClick = (event) => {
      event.preventDefault();
      this.addMonths(1);
    };
    this.handlePreviousMonthClick = (event) => {
      event.preventDefault();
      this.addMonths(-1);
    };
    this.handleFirstFocusableKeydown = (event) => {
      if (event.keyCode === keyCode.TAB && event.shiftKey) {
        this.focusedDayNode.focus();
        event.preventDefault();
      }
    };
    this.handleKeyboardNavigation = (event) => {
      if (event.keyCode === keyCode.TAB && !event.shiftKey) {
        event.preventDefault();
        this.firstFocusableElement.focus();
        return;
      }
      var handled = true;
      switch (event.keyCode) {
        case keyCode.RIGHT:
          this.addDays(1);
          break;
        case keyCode.LEFT:
          this.addDays(-1);
          break;
        case keyCode.DOWN:
          this.addDays(7);
          break;
        case keyCode.UP:
          this.addDays(-7);
          break;
        case keyCode.PAGE_UP:
          if (event.shiftKey) {
            this.addYears(-1);
          }
          else {
            this.addMonths(-1);
          }
          break;
        case keyCode.PAGE_DOWN:
          if (event.shiftKey) {
            this.addYears(1);
          }
          else {
            this.addMonths(1);
          }
          break;
        case keyCode.HOME:
          this.startOfWeek();
          break;
        case keyCode.END:
          this.endOfWeek();
          break;
        default:
          handled = false;
      }
      if (handled) {
        event.preventDefault();
        this.enableActiveFocus();
      }
    };
    this.handleDaySelect = (_event, day) => {
      const isInRange = inRange(day, parseISODate(this.min), parseISODate(this.max));
      const isAllowed = !this.isDateDisabled(day);
      if (isInRange && isAllowed) {
        this.setValue(day);
        this.hide();
      }
      else {
        this.setFocusedDay(day);
      }
    };
    this.handleMonthSelect = e => {
      this.setMonth(parseInt(e.target.value, 10));
    };
    this.handleYearSelect = e => {
      this.setYear(parseInt(e.target.value, 10));
    };
    this.handleInputChange = (e) => {
      const target = this.AegonDateInput;
      cleanValue(target, DISALLOWED_CHARACTERS, this.separator, e, this.dateLength);
      const parsed = this.dateAdapter.parse(target.value, createDate);
      if (parsed && (target.value && target.value.length === this.dateLength)) {
        this.setValue(parsed);
        this.show();
      }
      else {
        const matches = target.value.match(ISO_DATE_FORMAT);
        if (matches) {
          const dt = new Date(target.value);
          if (!dt.getFullYear() || !dt.getDate() || !dt.getMonth()) {
            this.aegonError.emit({
              component: "aegon-date-picker",
              valueAsDate: new Date(target.value),
              value: target.value,
              error: 'Invalid Date'
            });
          }
        }
      }
    };
    this.processFocusedDayNode = (element) => {
      this.focusedDayNode = element;
      if (this.activeFocus && this.open) {
        setTimeout(() => element.focus(), 0);
      }
    };
    this.activeFocus = false;
    this.focusedDay = new Date();
    this.open = false;
    this.name = "date";
    this.identifier = "";
    this.disabled = false;
    this.role = undefined;
    this.direction = "right";
    this.required = false;
    this.dateLength = 10;
    this.separator = '/';
    this.value = "";
    this.min = "";
    this.max = "";
    this.firstDayOfWeek = DaysOfWeek.Monday;
    this.localization = localization;
    this.placeHolder = localization.placeholder;
    this.dateAdapter = isoAdapter;
    this.isDateDisabled = () => false;
  }
  connectedCallback() {
    this.createDateFormatters();
  }
  createDateFormatters() {
    this.dateFormatShort = new Intl.DateTimeFormat(this.localization.locale, { day: "numeric", month: "long" });
    this.dateFormatLong = new Intl.DateTimeFormat(this.localization.locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
  handleDocumentClick(e) {
    if (!this.open) {
      return;
    }
    const isClickOutside = e
      .composedPath()
      .every(node => node !== this.dialogWrapperNode && node !== this.datePickerButton);
    if (isClickOutside) {
      this.hide(false);
    }
  }
  async setFocus() {
    return this.AegonDateInput.focus();
  }
  async show() {
    this.open = true;
    this.aegonOpen.emit({
      component: "aegon-date-picker",
    });
    this.setFocusedDay(parseISODate(this.value) || new Date());
    clearTimeout(this.focusTimeoutId);
    this.focusTimeoutId = setTimeout(() => this.monthSelectNode.focus(), TRANSITION_MS);
  }
  async hide(moveFocusToButton = true) {
    this.open = false;
    this.aegonClose.emit({
      component: "aegon-date-picker",
    });
    clearTimeout(this.focusTimeoutId);
    if (moveFocusToButton) {
      setTimeout(() => this.datePickerButton.focus(), TRANSITION_MS + 200);
    }
  }
  addDays(days) {
    this.setFocusedDay(addDays(this.focusedDay, days));
  }
  addMonths(months) {
    this.setMonth(this.focusedDay.getMonth() + months);
  }
  addYears(years) {
    this.setYear(this.focusedDay.getFullYear() + years);
  }
  startOfWeek() {
    this.setFocusedDay(startOfWeek(this.focusedDay, this.firstDayOfWeek));
  }
  endOfWeek() {
    this.setFocusedDay(endOfWeek(this.focusedDay, this.firstDayOfWeek));
  }
  setMonth(month) {
    const min = setMonth(startOfMonth(this.focusedDay), month);
    const max = endOfMonth(min);
    const date = setMonth(this.focusedDay, month);
    this.setFocusedDay(clamp(date, min, max));
  }
  setYear(year) {
    const min = setYear(startOfMonth(this.focusedDay), year);
    const max = endOfMonth(min);
    const date = setYear(this.focusedDay, year);
    this.setFocusedDay(clamp(date, min, max));
  }
  setFocusedDay(day) {
    this.focusedDay = clamp(day, parseISODate(this.min), parseISODate(this.max));
  }
  setValue(date) {
    this.value = printISODate(date);
    this.aegonChange.emit({
      component: "aegon-date-picker",
      value: this.value,
      valueAsDate: date,
    });
  }
  /**
   * render() function
   */
  render() {
    const valueAsDate = parseISODate(this.value);
    const formattedDate = valueAsDate && this.dateAdapter.format(valueAsDate);
    const selectedYear = (valueAsDate || this.focusedDay).getFullYear();
    const focusedMonth = this.focusedDay.getMonth();
    const focusedYear = this.focusedDay.getFullYear();
    const minDate = parseISODate(this.min);
    const maxDate = parseISODate(this.max);
    const prevMonthDisabled = minDate != null && minDate.getMonth() === focusedMonth && minDate.getFullYear() === focusedYear;
    const nextMonthDisabled = maxDate != null && maxDate.getMonth() === focusedMonth && maxDate.getFullYear() === focusedYear;
    const minYear = minDate ? minDate.getFullYear() : selectedYear - 120;
    const maxYear = maxDate ? maxDate.getFullYear() : selectedYear + 100;
    return (h(Host, null, h("div", { class: "date" }, h(AegonDateInput, { dateFormatter: this.dateFormatLong, value: this.value, valueAsDate: valueAsDate, formattedValue: formattedDate, placeHolder: this.placeHolder, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, onClick: this.toggleOpen, name: this.name, disabled: this.disabled, role: this.role, required: this.required, identifier: this.identifier, localization: this.localization, buttonRef: element => (this.datePickerButton = element), inputRef: element => (this.AegonDateInput = element) }), h("div", { class: {
        "date__dialog": true,
        "is-left": this.direction === "left",
        "is-active": this.open,
      }, role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? "false" : "true", "aria-labelledby": this.dialogLabelId, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }, h("div", { class: "date__dialog-content", onKeyDown: this.handleEscKey, ref: element => (this.dialogWrapperNode = element) }, h("div", { class: "date__mobile", onFocusin: this.disableActiveFocus }, h("label", { class: "date__mobile-heading" }, this.localization.calendarHeading), h("button", { class: "date__close", ref: element => (this.firstFocusableElement = element), onKeyDown: this.handleFirstFocusableKeydown, onClick: () => this.hide(), type: "button" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 23", fill: "#5a5a5a" }, h("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })), h("span", { class: "date__vhidden" }, this.localization.closeLabel))), h("div", { class: "date__header", onFocusin: this.disableActiveFocus }, h("div", null, h("h2", { id: this.dialogLabelId, class: "date__vhidden", "aria-live": "polite", "aria-atomic": "true" }, this.localization.monthNames[focusedMonth], " ", this.focusedDay.getFullYear()), h("label", { htmlFor: this.monthSelectId, class: "date__vhidden" }, this.localization.monthSelectLabel), h("div", { class: "date__select" }, h("select", { id: this.monthSelectId, class: "date__select--month", ref: element => (this.monthSelectNode = element), onChange: this.handleMonthSelect }, this.localization.monthNames.map((month, i) => (h("option", { key: month, value: i, selected: i === focusedMonth, disabled: !inRange(new Date(focusedYear, i, 1), minDate ? startOfMonth(minDate) : null, maxDate ? endOfMonth(maxDate) : null) }, month)))), h("div", { class: "date__select-label", "aria-hidden": "true" }, h("span", null, this.localization.monthNamesShort[focusedMonth]), h("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" })))), h("label", { htmlFor: this.yearSelectId, class: "date__vhidden" }, this.localization.yearSelectLabel), h("div", { class: "date__select" }, h("select", { id: this.yearSelectId, class: "date__select--year", onChange: this.handleYearSelect }, range(minYear, maxYear).map(year => (h("option", { key: year, selected: year === focusedYear }, year)))), h("div", { class: "date__select-label", "aria-hidden": "true" }, h("span", null, this.focusedDay.getFullYear()), h("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" }))))), h("div", { class: "date__nav" }, h("button", { class: "date__prev", onClick: this.handlePreviousMonthClick, disabled: prevMonthDisabled, type: "button" }, h("svg", { "aria-hidden": "true", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "21", height: "21", viewBox: "0 0 24 24" }, h("path", { d: "M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" })), h("span", { class: "date__vhidden" }, this.localization.prevMonthLabel)), h("button", { class: "date__next", onClick: this.handleNextMonthClick, disabled: nextMonthDisabled, type: "button" }, h("svg", { "aria-hidden": "true", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "21", height: "21", viewBox: "0 0 24 24" }, h("path", { d: "M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" })), h("span", { class: "date__vhidden" }, this.localization.nextMonthLabel)))), h(DatePickerMonth, { dateFormatter: this.dateFormatShort, selectedDate: valueAsDate, focusedDate: this.focusedDay, onDateSelect: this.handleDaySelect, onKeyboardNavigation: this.handleKeyboardNavigation, labelledById: this.dialogLabelId, localization: this.localization, firstDayOfWeek: this.firstDayOfWeek, focusedDayRef: this.processFocusedDayNode, min: minDate, max: maxDate, isDateDisabled: this.isDateDisabled }))))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "localization": ["createDateFormatters"]
  }; }
};
AegonDatePicker.style = aegonDatePickerCss;

export { AegonDatePicker as aegon_date_picker };
