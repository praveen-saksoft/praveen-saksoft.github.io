import { r as registerInstance, h } from './index-b6b593ed.js';
import './mwc-textfield-4a56fccf.js';
import './tslib.es6-4451ae6b.js';

const aegonAgeWidgetCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.aegon-age-widget{display:flex;flex-direction:column;position:relative;align-items:flex-start;font-size:16px}.aegon-age-widget-picker{position:absolute;background-color:#fff;color:#000;box-shadow:0px 3px 8px 0 rgba(0, 0, 0, 0.1);top:100%;padding:16px 8px;z-index:4;width:-webkit-fill-available;border:1px solid #e8e8e8}.aegon-age-widget-selectionlabel{margin:0 0 6px;text-align:left;padding-left:4px}.aegon-age-widget-yearslist,.aegon-age-widget-monthslist,.aegon-age-widget-dayslist{flex-wrap:wrap;padding:0;margin:0;list-style:none;-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.aegon-age-widget-yearitem,.aegon-age-widget-monthitem,.aegon-age-widget-dayitem{padding:4px;margin:0;color:#000;text-align:center}.aegon-age-widget-yearitem input,.aegon-age-widget-monthitem input,.aegon-age-widget-dayitem input{display:none}.aegon-age-widget-yearitem input:checked+label,.aegon-age-widget-monthitem input:checked+label,.aegon-age-widget-dayitem input:checked+label{background:#87CEFA;color:#fff}.aegon-age-widget-yearitem label,.aegon-age-widget-monthitem label,.aegon-age-widget-dayitem label{border-radius:16px;padding:0.5em;display:inline-block}.aegon-age-widget-yearitem label:hover,.aegon-age-widget-monthitem label:hover,.aegon-age-widget-dayitem label:hover{background:#87CEFA}.aegon-age-widget-yearitem.disabled,.aegon-age-widget-monthitem.disabled,.aegon-age-widget-dayitem.disabled{color:#bbb}.aegon-age-widget-yearitem.disabled label:hover,.aegon-age-widget-monthitem.disabled label:hover,.aegon-age-widget-dayitem.disabled label:hover{background:none}.aegon-age-widget-dayitem{margin:0;padding:0}.aegon-age-widget-monthitem{width:50px}mwc-textfield{--mdc-text-field-fill-color:#fff;--mdc-theme-background:#fff;--mdc-theme-primary:#908989}";

const AegonAgeWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Possible years based on age
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
      e.preventDefault();
      this.selectedYear = e.target.value;
      let currentYear = new Date().getFullYear();
      let difference = currentYear - this.selectedYear;
      // Based on the age and selected year, disable calendar for past or next months and days
      if (difference > this.ageValue) {
        this.disableDirection = "past";
      }
      else {
        this.disableDirection = "future";
      }
      // Next step
      this.checkSelection = null;
      this.showYears = false;
      this.showMonths = true;
      this.title = "Select Birth Month";
    };
    /**
     * Select Month Radio button
     * @param e
     */
    this.selectMonth = e => {
      e.preventDefault();
      this.selectedMonth = parseInt(e.target.value, 10) + 1;
      // Prepend 0 if lesser than 10
      if (this.selectedMonth < 10) {
        this.selectedMonth = '0' + this.selectedMonth;
      }
      // Total days in the selected month, 29 for leap Feb
      this.daysInMonth = this.getDaysInMonth(this.selectedMonth, this.selectedYear);
      // Next step
      this.showMonths = false;
      this.showDate = true;
      this.title = "Select Birth Date";
    };
    /**
     * Select Day Radio button
     * @param e
     */
    this.selectDay = e => {
      e.preventDefault();
      // Prepend 0 if less than 10
      let day = e.target.value < 10 ? '0' + e.target.value : e.target.value;
      // Next step
      this.title = "";
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
     * @param {number} referenceMonth Current month
     */
    this.getDisabledMonth = function (referenceMonth) {
      let date = new Date();
      let currentMonth = date.getMonth() + 1;
      let todaysDate = date.getDate();
      let daysInMonth = this.getDaysInMonth(currentMonth, Number(this.selectedYear));
      if (this.disableDirection === "past") {
        // if ref month is less than current month
        // if ref month is equal to current && date is equal to number of days (last date of the)
        if ((referenceMonth < currentMonth) || (referenceMonth === currentMonth && todaysDate === daysInMonth)) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        if (referenceMonth > currentMonth) {
          return true;
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
      if (this.disableDirection === "past") {
        if (selected <= currentDate && this.selectedMonth <= currentMonth) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        if (selected > currentDate && this.selectedMonth >= currentMonth) {
          return true;
        }
        else {
          return false;
        }
      }
    };
    this.dateCallback = undefined;
    this.minAge = 18;
    this.maxAge = 50;
    this.ageValue = 20;
    this.showYears = true;
    this.showMonths = false;
    this.showDate = false;
    this.selectedYear = undefined;
    this.selectedMonth = undefined;
    this.daysInMonth = undefined;
    this.title = "";
    this.checkSelection = undefined;
  }
  /**
   * Lifecycle
   * Calculate possible years based on age prop
   */
  componentWillLoad() {
    let possibleAge = new Date().getFullYear() - this.ageValue;
    this.possibleYears = [possibleAge - 1, possibleAge];
    // Toggle next step
    this.title = "Select Birth Year";
  }
  /**
   * Watch the age value to react on change
   * @param newAge New age value incoming
   */
  handleWatch(newAge) {
    if (!newAge || isNaN(newAge))
      return;
    let possibleAge = new Date().getFullYear() - newAge;
    this.possibleYears = [possibleAge - 1, possibleAge];
  }
  render() {
    return (h("div", { class: "aegon-age-widget", id: "aegon-age-widget" }, h("div", { class: "aegon-age-widget-picker" }, this.title &&
      h("div", { class: "aegon-age-widget-selectionlabel" }, h("span", null, this.title)), this.showYears &&
      h("ul", { class: "aegon-age-widget-yearslist" }, this.possibleYears.map((year, index) => h("li", { key: index, class: "aegon-age-widget-yearitem" }, h("input", { class: "aegon-age-widget-yearinput", type: "radio", id: `year-${index}`, value: year, name: "possibleYear", onChange: e => this.selectYear(e) }), h("label", { class: "aegon-age-widget-yearlabel", htmlFor: `year-${index}` }, year)))), this.showMonths &&
      h("ul", { class: "aegon-age-widget-monthslist" }, this.months.map((month, index) => h("li", { key: index, class: {
          "aegon-age-widget-monthitem": true,
          "disabled": this.getDisabledMonth(index + 1)
        } }, h("input", { class: "aegon-age-widget-monthinput", type: "radio", checked: this.checkSelection, id: `month-${index}`, value: index, name: "possibleYear", onChange: e => this.selectMonth(e), disabled: this.getDisabledMonth(index + 1) }), h("label", { class: "aegon-age-widget-monthlabel", htmlFor: `month-${index}` }, month)))), this.showDate && this.daysInMonth &&
      h("ul", { class: "aegon-age-widget-dayslist" }, [...Array(this.daysInMonth)].map((e, day) => {
        day += 1;
        return h("li", { key: day, class: {
            "aegon-age-widget-dayitem": true,
            "disabled": this.getDisabledDate(day)
          } }, h("input", { class: "aegon-age-widget-dayinput", type: "radio", id: `day-${day}`, value: day, name: "day", onChange: e => this.selectDay(e), disabled: this.getDisabledDate(day) }), h("label", { class: "aegon-age-widget-daylabel", htmlFor: `day-${day}` }, day < 10 ? `0${day}` : day));
      })))));
  }
  static get watchers() { return {
    "ageValue": ["handleWatch"]
  }; }
};
AegonAgeWidget.style = aegonAgeWidgetCss;

export { AegonAgeWidget as aegon_age_widget };
