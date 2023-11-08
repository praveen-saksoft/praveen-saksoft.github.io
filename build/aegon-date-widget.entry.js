import { r as registerInstance, h } from './index-8e01e03f.js';
import './mwc-textfield-4a56fccf.js';
import './tslib.es6-4451ae6b.js';

const aegonDateWidgetCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.aegon-date-widget{display:flex;flex-direction:column;position:relative;align-items:flex-start;font-size:16px}.aegon-date-widget-picker{position:absolute;background-color:#fff;color:#000;box-shadow:0px 3px 8px 0 rgba(0, 0, 0, 0.1);top:100%;padding:16px 8px;z-index:4;width:-webkit-fill-available;border:1px solid #e8e8e8}.aegon-date-widget-selectionlabel{margin:0 0 6px;text-align:left;padding-left:4px}.aegon-date-widget-yearslist,.aegon-date-widget-monthslist,.aegon-date-widget-dayslist{flex-wrap:wrap;padding:0;margin:0;list-style:none;-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.aegon-date-widget-yearitem,.aegon-date-widget-monthitem,.aegon-date-widget-dayitem{padding:4px;margin:0;color:#000;text-align:center}.aegon-date-widget-yearitem input,.aegon-date-widget-monthitem input,.aegon-date-widget-dayitem input{display:none}.aegon-date-widget-yearitem input:checked+label,.aegon-date-widget-monthitem input:checked+label,.aegon-date-widget-dayitem input:checked+label{background:#87CEFA;color:#fff}.aegon-date-widget-yearitem label,.aegon-date-widget-monthitem label,.aegon-date-widget-dayitem label{border-radius:16px;padding:0.5em;display:inline-block}.aegon-date-widget-yearitem label:hover,.aegon-date-widget-monthitem label:hover,.aegon-date-widget-dayitem label:hover{background:#87CEFA}.aegon-date-widget-yearitem.disabled,.aegon-date-widget-monthitem.disabled,.aegon-date-widget-dayitem.disabled{color:#bbb}.aegon-date-widget-yearitem.disabled label:hover,.aegon-date-widget-monthitem.disabled label:hover,.aegon-date-widget-dayitem.disabled label:hover{background:none}.aegon-date-widget-dayitem{margin:0;padding:0}.aegon-date-widget-monthitem{width:50px}mwc-textfield{--mdc-text-field-fill-color:#fff;--mdc-theme-background:#fff;--mdc-theme-primary:#908989}";

const AegonDateWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Possible years based on year range provided
     */
    this.possibleYears = [];
    /**
     * All months
     */
    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    /**
     * Select Year Radio button
     * @param e
     */
    this.selectYear = e => {
      this.selectedYear = e.target.value;
      this.showMonths = true;
      this.title = "Select Month";
    };
    /**
     * Select Month Radio button
     * @param e
     */
    this.selectMonth = e => {
      this.selectedMonth = parseInt(e.target.value, 10) + 1;
      // Prepend 0 if lesser than 10
      if (this.selectedMonth < 10) {
        this.selectedMonth = '0' + this.selectedMonth;
      }
      // Total days in the selected month, 29 for leap Feb
      this.daysInMonth = this.getDaysInMonth(this.selectedMonth, this.selectedYear);
      // Next step
      this.showMonths = false;
      this.showYears = false;
      this.showDate = true;
      this.title = "Select Date";
    };
    /**
     * Select Day Radio button
     * @param e
     */
    this.selectDay = e => {
      // Prepend 0 if less than 10
      let day = e.target.value < 10 ? '0' + e.target.value : e.target.value;
      // Next step
      this.title = '';
      this.showDate = false;
      // Call the callback with age and dob
      this.dateCallback({
        year: this.selectedYear,
        month: this.selectedMonth,
        date: day
      });
    };
    /**
     * Get the number of days in a month, based on the year
     * Required for leap year calculation
     * @param month
     * @param year
     */
    this.getDaysInMonth = function (month, year) {
      return new Date(year, month, 0).getDate();
    };
    /**
     * Whether or not to disable the month based on the direction and year
     * @param selected Current month
     */
    this.getDisabledMonth = function (selected) {
      let current = new Date().getMonth() + 1;
      if (this.minYear === this.maxYear) {
        return !(+selected >= this.minSelectedMonth && +selected <= current);
      }
      else if (this.minSelectedMonth && +this.selectedYear === this.minYear) {
        return !(+selected >= this.minSelectedMonth);
      }
      else {
        if (+this.selectedYear === this.minYear) {
          return selected < current;
        }
        else if (+this.selectedYear === this.maxYear) {
          return selected > current;
        }
        else {
          return false;
        }
      }
    };
    /**
     * Whether or not to disable the current date based on the direction and year
     * @param selected Current date
     */
    this.getDisabledDate = function (selected) {
      let currentDate = new Date().getDate();
      let currentMonth = new Date().getMonth() + 1;
      if (this.minYear === this.maxYear) {
        if (+this.selectedMonth === this.minSelectedMonth) {
          return selected < this.minSelectedDate;
        }
        else if (+this.selectedMonth === currentMonth) {
          return currentDate < selected;
        }
        else {
          return false;
        }
      }
      else if (this.minSelectedDate && +this.selectedYear !== +this.maxYear) {
        return (+this.selectedMonth <= this.minSelectedMonth && selected < this.minSelectedDate);
      }
      else {
        if (+this.selectedYear === this.minYear) {
          return (selected <= currentDate && this.selectedMonth <= currentMonth);
        }
        else if (+this.selectedYear === this.maxYear) {
          return (selected > currentDate && this.selectedMonth >= currentMonth);
        }
        else {
          return false;
        }
      }
    };
    this.setMinDateValues = function () {
      const minSelectedDateValue = new Date(this.minDate);
      this.minSelectedDate = minSelectedDateValue.getDate();
      this.minSelectedMonth = minSelectedDateValue.getMonth() + 1;
    };
    this.dateCallback = undefined;
    this.yearRange = 5;
    this.minDate = "";
    this.showYears = true;
    this.showMonths = false;
    this.showDate = false;
    this.selectedYear = undefined;
    this.selectedMonth = undefined;
    this.daysInMonth = undefined;
    this.title = '';
    this.minYear = undefined;
    this.maxYear = undefined;
    this.minSelectedDate = undefined;
    this.minSelectedMonth = undefined;
  }
  /**
   * Lifecycle
   * Calculate possible years based on year range prop
   */
  componentWillLoad() {
    const possibleAge = new Date().getFullYear() - this.yearRange;
    const _possibleYears = [];
    this.minYear = this.minDate ? possibleAge : possibleAge - 1;
    for (let i = this.minYear; i <= new Date().getFullYear(); i++) {
      _possibleYears.push(i);
    }
    this.possibleYears = _possibleYears;
    this.maxYear = new Date().getFullYear();
    this.title = "Select Year";
    this.minDate && this.setMinDateValues();
  }
  render() {
    return (h("div", { class: "aegon-date-widget", id: "aegon-date-widget" }, h("div", { class: "aegon-date-widget-picker" }, this.title &&
      h("div", { class: "aegon-date-widget-selectionlabel" }, h("span", null, this.title)), this.showYears &&
      h("ul", { class: "aegon-date-widget-yearslist" }, this.possibleYears.map((year, index) => h("li", { key: index, class: "aegon-date-widget-yearitem" }, h("input", { class: "aegon-date-widget-yearinput", type: "radio", id: `year-${index}`, value: year, name: "possibleYear", onChange: e => this.selectYear(e) }), h("label", { class: "aegon-date-widget-yearlabel", htmlFor: `year-${index}` }, year)))), this.showMonths &&
      h("ul", { class: "aegon-date-widget-monthslist" }, this.months.map((month, index) => h("li", { key: index, class: {
          "aegon-date-widget-monthitem": true,
          "disabled": this.getDisabledMonth(index + 1)
        } }, h("input", { class: "aegon-date-widget-monthinput", type: "radio", id: `month-${index}`, value: index, name: "possibleYear", onChange: e => this.selectMonth(e), disabled: this.getDisabledMonth(index + 1) }), h("label", { class: "aegon-date-widget-monthlabel", htmlFor: `month-${index}` }, month)))), this.showDate && this.daysInMonth &&
      h("ul", { class: "aegon-date-widget-dayslist" }, [...Array(this.daysInMonth)].map((e, day) => {
        day += 1;
        return h("li", { key: day, class: {
            "aegon-date-widget-dayitem": true,
            "disabled": this.getDisabledDate(day)
          } }, h("input", { class: "aegon-date-widget-dayinput", type: "radio", id: `day-${day}`, value: day, name: "day", onChange: e => this.selectDay(e), disabled: this.getDisabledDate(day) }), h("label", { class: "aegon-date-widget-daylabel", htmlFor: `day-${day}` }, day < 10 ? `0${day}` : day));
      })))));
  }
};
AegonDateWidget.style = aegonDateWidgetCss;

export { AegonDateWidget as aegon_date_widget };
