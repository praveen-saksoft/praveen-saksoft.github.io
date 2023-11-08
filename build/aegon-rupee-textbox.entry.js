import { r as registerInstance, f as createEvent, h, g as getElement } from './index-8e01e03f.js';
import './mwc-textfield-4a56fccf.js';
import { b as builtInINRCurrencyFormat, r as restrictToNumberType, c as currencyINRPattern } from './utils-fe9e10d1.js';
import './tslib.es6-4451ae6b.js';

const aegonRupeeTextboxCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.rupee-textbox-wrapper{position:relative}.rupee-textbox-wrapper input[type=text]{position:relative;border:none;background-image:none;background-color:transparent;box-shadow:none;outline:none;background:#fff;border:none;border-bottom:1px solid #1f3b6a;color:#333;height:56px;width:100%;padding-left:26px;padding-top:16px;font-size:16px;display:block;-webkit-box-shadow:none;-moz-box-shadow:none}.rupee-textbox-wrapper input[type=text].error{border-bottom:1px solid #b00020 !important}.rupee-textbox-wrapper input[type=text]:hover,.rupee-textbox-wrapper input[type=text]:focus{background-color:#f5f5f5}.rupee-textbox-wrapper label{position:absolute;top:25px;bottom:0;font-size:16px;left:26px;color:rgba(0, 0, 0, 0.6);will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s}.rupee-textbox-wrapper label.error{color:#b00020}.rupee-textbox-wrapper input[type=text]:focus+label,.rupee-textbox-wrapper input[type=text]:valid+label,.rupee-textbox-wrapper input:not(:placeholder-shown)+label{color:rgba(0, 0, 0, 0.6);font-size:0.8em;width:auto;margin:0px;outline:0;transition:0.2s ease-in-out;top:5px;left:17px;height:20px}.rupee-textbox-wrapper input[type=text]+label.error{color:#b00020}.rupee-textbox-wrapper .rupee-symbol{position:absolute;left:16px;top:25px;z-index:1;display:none}.rupee-textbox-wrapper input[type=text]:focus+label+span.rupee-symbol,.rupee-textbox-wrapper input[type=text]:valid+label+span.rupee-symbol,.rupee-textbox-wrapper input[type=text]:not(:placeholder-shown)+label+span.rupee-symbol{display:block !important}.rupee-textbox-wrapper .rupee-text-field-helper-line{margin-top:5px;min-height:20px}.rupee-textbox-wrapper .rupee-text-field-helper-line p:before{content:\"\"}.rupee-textbox-wrapper .rupee-text-field-helper-line p.error{color:#b00020;opacity:1;margin:0;display:flex;align-items:flex-end;padding:0 15px;font-size:0.75rem;font-weight:400;letter-spacing:0.0333333em;text-decoration:inherit;text-transform:inherit}";

const HIDDEN_FIELD_ID = "valueWithoutComma";
const RUPEE_FIELD_CLASS = "rupee-textbox";
const RUPEE_FIELD_ERROR_ID = "rupee-field-error";
const AegonRupeeTextbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.proceedAction = createEvent(this, "proceedAction", 7);
    this.onRupeeTextboxValueChange = createEvent(this, "onRupeeTextboxValueChange", 7);
    this.setRupeeTextboxValue = (value) => {
      if (value && !!Number.isInteger(value)) {
        this.stateCommaSeparatedValue = builtInINRCurrencyFormat(value).replace(/\s+/g, '');
      }
    };
    this.setRupeeFieldWithComma = (event) => {
      let { value } = event.target;
      this.refHidden.value = value.replace(/₹|,/g, "").trim();
      this.stateCommaSeparatedValue = !!this.refHidden.value && builtInINRCurrencyFormat(this.refHidden.value).replace(/\s+/g, '') || "";
      this.validateInput();
    };
    this.commaSeparatedValue = undefined;
    this.validationMessage = undefined;
    this.labelText = undefined;
    this.indexTab = undefined;
    this.required = false;
    this.isError = false;
    this.stateCommaSeparatedValue = undefined;
  }
  componentDidLoad() {
    this.init();
    this.stateCommaSeparatedValue = this.commaSeparatedValue;
    this.setRupeeTextboxValue(Number(this.stateCommaSeparatedValue));
  }
  init() {
    this.refInput = this.element.querySelector(`.${RUPEE_FIELD_CLASS}`);
    this.refHidden = this.element.querySelector(`#${HIDDEN_FIELD_ID}`);
  }
  validateInput() {
    const valueWithoutComma = Number(this.refHidden.value);
    if (!this.refInput.checkValidity()) {
      this.isError = true;
      this.onRupeeTextboxValueChange.emit({ isError: this.isError });
      this.refHidden.value = "";
      return;
    }
    this.isError = false;
    this.onRupeeTextboxValueChange.emit({ isError: this.isError, value: valueWithoutComma });
  }
  render() {
    return (h("div", { class: "rupee-textbox-wrapper" }, h("input", { type: "text", inputmode: "numeric", required: this.required, tabIndex: this.indexTab, value: this.stateCommaSeparatedValue || '', onKeyPress: restrictToNumberType, onKeyUp: this.setRupeeFieldWithComma, minLength: 6, maxLength: 25, pattern: currencyINRPattern, autoComplete: "false", class: RUPEE_FIELD_CLASS, placeholder: " " }), h("label", { class: { error: this.isError }, htmlFor: this.labelText }, this.labelText), h("span", { class: "rupee-symbol" }, "\u20B9"), h("div", { class: "rupee-text-field-helper-line" }, this.isError &&
      h("p", { class: "error", id: RUPEE_FIELD_ERROR_ID }, this.validationMessage)), h("input", { type: "hidden", id: HIDDEN_FIELD_ID, value: "" })));
  }
  get element() { return getElement(this); }
};
AegonRupeeTextbox.style = aegonRupeeTextboxCss;

export { AegonRupeeTextbox as aegon_rupee_textbox };
