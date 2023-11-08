import { r as registerInstance, f as createEvent, h } from './index-b6b593ed.js';
import { S as SVG_ICONS, O as OTP_WIDGET_TITLE } from './constants-7a5fe47d.js';
import { e as errorMessages, L as LOGIN_ERROR_CODES } from './errorMessages-fcc90630.js';

function readyToTranslate(page, property = 'translations') {
  return function (target, propertyKey, descriptor) {
    const { componentWillLoad, disconnectedCallback, render } = target;
    target.componentWillLoad = async function () {
      try {
        if (page) {
          const currentLocale = localStorage.getItem('language') || 'en';
          let labels = JSON.parse(localStorage.getItem('appLabels'));
          this[property] = labels[currentLocale][page];
          return componentWillLoad && componentWillLoad.apply(this);
        }
      }
      catch (e) {
        console.log(e);
      }
    };
    target.disconnectedCallback = function () {
      this[property] = null;
      return disconnectedCallback && disconnectedCallback.apply(this);
    };
    target.render = function () {
      const renderResult = render.call(this);
      return renderResult;
    };
  };
}

const aegonOtpCustomWidgetCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.otp__title{text-align:center;font-size:1.3636363636rem;line-height:23px;padding:0 40px}.otp__input-container{min-height:90px;display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:24px;font-family:sans-serif}.otp__input-intent{padding:0 40px;display:flex;flex-direction:column;text-align:center}.otp__input-intent-title{margin:0 0 12px}.otp__input-intent-subtitle{font-size:0.7272727273rem;text-align:center}.otp__input__error-message{text-align:center;margin-top:8px;color:#ff5252;font-size:0.7272727273rem}.otp__timer{text-align:center;margin:16px 0;font-family:sans-serif;font-size:0.7272727273rem}.otp__resend a{text-decoration:none}aegon-otp-input{padding:20px 0;text-align:center;display:grid}";

/**
 * Component: AegonOtpCustomWidget
 * Uses - testing
 * Author - Aegon Life
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AegonOtpCustomWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clearOtp = createEvent(this, "clearOtp", 7);
    this.otpIcon = SVG_ICONS.OTP_ICON;
    this.otp = '';
    this.validationError = '';
    this.showResendOTP = false;
    this.userBlocked = false;
    this.error = undefined;
    this.showLoader = false;
    this.label = '';
    this.submitOtp = undefined;
    this.resendOtp = undefined;
    this.time = undefined;
    this.maskedMobileNo = 'XXXXXX9999';
    this.isDisabled = false;
    this.screenMode = undefined;
    this.otpWidgetTitle = OTP_WIDGET_TITLE;
    this.OtpLength = 6;
    this.otpMessage = '';
  }
  /**
   * OTP complete listener
   * Trigger:  From the input fields component
   * When all digits are entered
   * @param e
   */
  onOtpComplete(e) {
    this.otp = e.detail;
    if (this.otp.length === this.OtpLength) {
      this.validationError = '';
    }
  }
  /**
   * Timeout listener, triggered when
   * Trigger: Countdown reached for OTP expiry
   */
  onTimerTimeout() {
    this.showResendOTP = true;
  }
  translate() { }
  /**
   * Submit OTP method - Called on button click, calls the callback internally
   */
  submitOtpHandler() {
    if (this.otp && this.otp.length === this.OtpLength) {
      if (!this.showLoader) {
        this.submitOtp(this.otp);
      }
    }
    else {
      this.validationError = errorMessages[LOGIN_ERROR_CODES.OTP_ERROR_INVALID_OTP];
      return;
    }
  }
  //  For UI visible type
  async componentDidLoad() {
    if (this.screenMode) {
      let domElement = document.querySelector('.aegon-bottomsheet-content');
      domElement.classList.contains('fullscreenMode') ? domElement.classList.remove('fullscreenMode') : domElement.classList.add('fullscreenMode');
    }
  }
  /**
   * Clear the current OTP before resending
   */
  clearOtpInput() {
    this.otp = '';
    this.clearOtp.emit({ clear: true });
  }
  /**
   * Handles resend OTP on link click, clears state and calls the callback for resend
   * @param e
   */
  handleResendOtp(e) {
    e.preventDefault();
    this.clearOtpInput();
    this.validationError = '';
    this.showResendOTP = false;
    this.resendOtp();
  }
  /**
   * Computed error message, similar to Vue's computed
   */
  errorMessage() {
    let errorCode = this.validationError || this.error || '';
    if (errorCode === LOGIN_ERROR_CODES.OTP_ERROR_INVALID_OTP)
      this.clearOtpInput();
    return errorCode;
  }
  /**
   * Render
   */
  render() {
    return (h("div", { class: "otp-form-wrapper" }, h("form", { onSubmit: (e) => { e.preventDefault(), this.submitOtpHandler(); } }, h("div", { class: "otp__input-container" }, h("div", { class: "otp__input-intent" }, h("h4", { class: "otp__input-intent-title" }, h("img", { alt: "", src: this.otpIcon }), this.translations['verifyPhoneNumber'] || this.otpWidgetTitle)), h("div", { class: "otp__input-content" }, h("span", { class: "otp__input-intent-subtitle" }, this.otpMessage || `${this.translations['otpVerification']} ${this.maskedMobileNo}` || `Please enter the verification code we sent you on ${this.maskedMobileNo}`), h("aegon-otp-input", { "otp-length": this.OtpLength, "auto-focus-first": "true" }), this.errorMessage &&
      h("p", { class: "otp__input__error-message" }, this.errorMessage()), h("aegon-button", { type: "submit", class: "otp__button", "is-loading": this.showLoader, disabled: this.isDisabled, label: this.translations['otpVerify'] || this.label }), !this.userBlocked &&
      h("div", { class: "otp__timer" }, this.showResendOTP
        ? h("span", { class: "otp__resend" }, this.translations['otpNotRecived'] || "Didn't get the code yet? ", " ", h("a", { href: "#", onClick: (e) => this.handleResendOtp(e) }, this.translations['resend'] || 'Resend'))
        : h("aegon-timer", { "time-limit-in-seconds": this.time, "pre-text": this.translations['codeExpireIn'] || "Code expires in " })))))));
  }
};
__decorate([
  readyToTranslate('otpVerification')
], AegonOtpCustomWidget.prototype, "translate", null);
AegonOtpCustomWidget.style = aegonOtpCustomWidgetCss;

export { AegonOtpCustomWidget as aegon_otp_custom_widget };
