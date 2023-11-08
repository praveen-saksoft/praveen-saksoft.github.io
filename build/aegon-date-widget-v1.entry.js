import { r as registerInstance, h } from './index-8e01e03f.js';
import { D as DATE_PICKER_TITLE, M as MONTHS } from './constants-bd45614c.js';

const formatDate = (date) => {
  var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  return [year, month, day].join('-');
};
const getPossibleYears = (minYear, maxYear) => {
  const possibleYears = [];
  for (let i = minYear; i <= maxYear; i++) {
    possibleYears.push(i);
  }
  return possibleYears;
};
const defaultMinDate = () => {
  const today = new Date();
  return formatDate(new Date(today.setFullYear(today.getFullYear() - 5)));
};
const defaultMaxDate = () => {
  const today = new Date();
  return formatDate(new Date(today.setFullYear(today.getFullYear() + 5)));
};
const getMinYear = (minDate) => {
  return new Date(minDate).getFullYear();
};
const getMaxYear = (maxDate) => {
  return new Date(maxDate).getFullYear();
};
const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const aegonDateWidgetV1Css = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.aegon-date-widget{display:flex;flex-direction:column;position:relative;align-items:flex-start;font-size:16px}.aegon-date-widget-picker{position:absolute;background-color:#ffffff;color:#000;box-shadow:0px 3px 8px 0 rgba(0, 0, 0, 0.1);top:100%;padding:16px 8px;z-index:4;width:-webkit-fill-available;border:1px solid #e8e8e8}.aegon-date-widget-selectionlabel{margin:0 0 6px;text-align:left;padding-left:4px}.aegon-date-widget-yearslist,.aegon-date-widget-monthslist,.aegon-date-widget-dayslist{flex-wrap:wrap;padding:0;margin:0;list-style:none;-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.aegon-date-widget-yearitem,.aegon-date-widget-monthitem,.aegon-date-widget-dayitem{padding:4px;margin:0;color:#000;text-align:center}.aegon-date-widget-yearitem input,.aegon-date-widget-monthitem input,.aegon-date-widget-dayitem input{display:none}.aegon-date-widget-yearitem input:checked+label,.aegon-date-widget-monthitem input:checked+label,.aegon-date-widget-dayitem input:checked+label{background:#87CEFA;color:#ffffff}.aegon-date-widget-yearitem label,.aegon-date-widget-monthitem label,.aegon-date-widget-dayitem label{border-radius:16px;padding:0.5em;display:inline-block}.aegon-date-widget-yearitem label:hover,.aegon-date-widget-monthitem label:hover,.aegon-date-widget-dayitem label:hover{background:#87CEFA}.aegon-date-widget-yearitem.disabled,.aegon-date-widget-monthitem.disabled,.aegon-date-widget-dayitem.disabled{color:#bbb}.aegon-date-widget-yearitem.disabled label:hover,.aegon-date-widget-monthitem.disabled label:hover,.aegon-date-widget-dayitem.disabled label:hover{background:none}.aegon-date-widget-dayitem{margin:0;padding:0}.aegon-date-widget-monthitem{width:50px}mwc-textfield{--mdc-text-field-fill-color:$white;--mdc-theme-background:$white;--mdc-theme-primary:$textField}";

const AegonDateWidgetV1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.possibleYears = [];
    this.initiateDatePicker = () => {
      /* Set MinYear and MaxYear based on MinDate and MaxDate passed in props */
      this.minYear = getMinYear(this.minDate);
      this.maxYear = getMaxYear(this.maxDate);
      /* Prepare years data (array) based on*/
      this.possibleYears = getPossibleYears(this.minYear, this.maxYear);
      /* Dynamic title for date picker */
      this.setDatePickerTitle(DATE_PICKER_TITLE.YEAR);
      /* Set Min and Max values for date and month picker */
      this.minDate && this.setMinDateValues();
      this.maxDate && this.setMaxDateValues();
    };
    this.setDatePickerTitle = (title) => {
      this.title = title;
    };
    /*  Whether or not to disable the month */
    this.isMonthDisabled = (selectedMonth) => {
      let isMonthDisabled = false;
      if (this.minYear === this.maxYear) {
        isMonthDisabled =
          selectedMonth < this.minSelectedMonth ||
            selectedMonth > this.maxSelectedMonth;
      }
      else if (this.selectedYear === this.minYear) {
        isMonthDisabled = selectedMonth < this.minSelectedMonth;
      }
      else if (this.selectedYear === this.maxYear) {
        isMonthDisabled = selectedMonth > this.maxSelectedMonth;
      }
      return isMonthDisabled;
    };
    /*  Whether or not to disable the date */
    this.isDateDisabled = (selectedDate) => {
      let isDateDisabled = false;
      if (this.minYear === this.maxYear) {
        if (this.minSelectedMonth == this.maxSelectedMonth) {
          isDateDisabled =
            selectedDate < this.minSelectedDate ||
              selectedDate > this.maxSelectedDate;
        }
        else if (this.selectedMonth === this.minSelectedMonth) {
          isDateDisabled = selectedDate < this.minSelectedDate;
        }
        else if (this.selectedMonth === this.maxSelectedMonth) {
          isDateDisabled = selectedDate > this.maxSelectedDate;
        }
      }
      else if (this.selectedYear === this.minYear &&
        this.selectedMonth === this.minSelectedMonth) {
        isDateDisabled = selectedDate < this.minSelectedDate;
      }
      else if (this.selectedYear === this.maxYear &&
        this.selectedMonth === this.maxSelectedMonth) {
        isDateDisabled = selectedDate > this.maxSelectedDate;
      }
      return isDateDisabled;
    };
    this.setMinDateValues = () => {
      const minSelectedDateValue = new Date(this.minDate);
      this.minSelectedDate = minSelectedDateValue.getDate();
      this.minSelectedMonth = minSelectedDateValue.getMonth() + 1;
    };
    this.setMaxDateValues = () => {
      const maxSelectedDateValue = new Date(this.maxDate);
      this.maxSelectedDate = maxSelectedDateValue.getDate();
      this.maxSelectedMonth = maxSelectedDateValue.getMonth() + 1;
    };
    /* Year change event */
    this.onYearChange = (event) => {
      const { value } = event.target;
      this.selectedYear = Number(value);
      this.showMonths = true;
      this.setDatePickerTitle(DATE_PICKER_TITLE.MONTH);
    };
    /* Month change event */
    this.onMonthChange = (event) => {
      const { value } = event.target;
      this.selectedMonth = Number(value) + 1;
      /* Days in the selected month */
      this.daysInMonth = getDaysInMonth(this.selectedMonth, this.selectedYear);
      /* close year and month picker */
      this.showMonths = false;
      this.showYears = false;
      /* Open date picker */
      this.showDate = true;
      this.setDatePickerTitle(DATE_PICKER_TITLE.DATE);
    };
    /* Date change event */
    this.onDateChange = (event) => {
      const { value } = event.target;
      /* clear date picker title */
      this.setDatePickerTitle("");
      /* close date picker */
      this.showDate = false;
      const selectedDate = {
        year: this.selectedYear,
        month: this.selectedMonth < 10 ? `0${this.selectedMonth}` : this.selectedMonth,
        date: value < 10 ? `0${value}` : value,
      };
      this.dateCallback(selectedDate);
    };
    /* Year picker */
    this.getYearPicker = () => {
      return (h("ul", { class: "aegon-date-widget-yearslist" }, this.possibleYears.map((year, index) => (h("li", { key: index, class: "aegon-date-widget-yearitem" }, h("input", { type: "radio", id: `year-${index}`, value: year, name: "possibleYear", onChange: (e) => this.onYearChange(e) }), h("label", { htmlFor: `year-${index}` }, year))))));
    };
    /* Month picker */
    this.getMonthPicker = () => {
      return (h("ul", { class: "aegon-date-widget-monthslist" }, MONTHS.map((month, index) => (h("li", { key: index, class: {
          "aegon-date-widget-monthitem": true,
          disabled: this.isMonthDisabled(index + 1),
        } }, h("input", { type: "radio", id: `month-${index}`, value: index, name: "possibleYear", onChange: (e) => this.onMonthChange(e), disabled: this.isMonthDisabled(index + 1) }), h("label", { htmlFor: `month-${index}` }, month))))));
    };
    /* Date picker */
    this.getDatePicker = () => {
      return (h("ul", { class: "aegon-date-widget-dayslist" }, [...Array(this.daysInMonth)].map((e, day) => {
        day += 1;
        return (h("li", { key: day, class: {
            "aegon-date-widget-dayitem": true,
            disabled: this.isDateDisabled(day),
          } }, h("input", { type: "radio", id: `day-${day}`, value: day, name: "day", onChange: (e) => this.onDateChange(e), disabled: this.isDateDisabled(day) }), h("label", { htmlFor: `day-${day}` }, day < 10 ? `0${day}` : day)));
      })));
    };
    this.dateCallback = undefined;
    this.minDate = defaultMinDate();
    this.maxDate = defaultMaxDate();
    this.showYears = true;
    this.showMonths = false;
    this.showDate = false;
    this.selectedYear = undefined;
    this.selectedMonth = undefined;
    this.daysInMonth = undefined;
    this.title = "";
    this.minYear = undefined;
    this.maxYear = undefined;
    this.minSelectedDate = undefined;
    this.maxSelectedDate = undefined;
    this.minSelectedMonth = undefined;
    this.maxSelectedMonth = undefined;
  }
  componentWillLoad() {
    this.initiateDatePicker();
  }
  render() {
    return (h("div", { class: "aegon-date-widget", id: "aegon-date-widget" }, h("div", { class: "aegon-date-widget-picker" }, this.title && (h("div", { class: "aegon-date-widget-selectionlabel" }, h("span", null, this.title))), this.showYears && this.getYearPicker(), this.showMonths && this.getMonthPicker(), this.showDate && this.daysInMonth && this.getDatePicker())));
  }
};
AegonDateWidgetV1.style = aegonDateWidgetV1Css;

export { AegonDateWidgetV1 as aegon_date_widget_v1 };
