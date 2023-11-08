import { r as registerInstance, f as createEvent, h } from './index-b6b593ed.js';
import { e as errorMessages, L as LOGIN_ERROR_CODES } from './errorMessages-fcc90630.js';

const aegonOtpWidgetCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.otp__title{text-align:center;font-size:1.3636363636rem;line-height:23px;padding:0 40px}.otp__input-container{min-height:90px;display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:24px;font-family:sans-serif}.otp__input-intent{padding:0 40px;margin-bottom:20px;display:flex;flex-direction:column;text-align:center}.otp__input-intent-title{margin:0 0 12px}.otp__input-intent-subtitle{font-size:0.7272727273rem;text-align:center}.otp__input__error-message{text-align:center;margin-top:8px;color:#ff5252;font-size:0.7272727273rem}.otp__timer{text-align:center;margin:16px 0;font-family:sans-serif;font-size:0.7272727273rem}.otp__resend a{text-decoration:none}";

const AegonOtpWidget = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clearOtp = createEvent(this, "clearOtp", 7);
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
    if (this.otp.length === 6) {
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
  /**
   * Submit OTP method - Called on button click, calls the callback internally
   */
  submitOtpHandler() {
    if (this.otp && this.otp.length === 6) {
      if (!this.showLoader) {
        this.submitOtp(this.otp);
      }
    }
    else {
      this.validationError = errorMessages[LOGIN_ERROR_CODES.OTP_ERROR_INVALID_OTP];
      return;
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
    return (h("div", { class: "otp-form-wrapper" }, h("form", { onSubmit: (e) => { e.preventDefault(), this.submitOtpHandler(); } }, h("div", { class: "otp__input-container" }, h("div", { class: "otp__input-intent" }, h("h4", { class: "otp__input-intent-title" }, "Let's verify your phone number"), h("span", { class: "otp__input-intent-subtitle" }, this.otpMessage || `Please enter the verification code we sent you on ${this.maskedMobileNo}`)), h("aegon-otp-input", { "otp-length": "6", "auto-focus-first": "true" }), this.errorMessage &&
      h("p", { class: "otp__input__error-message" }, this.errorMessage()), h("aegon-button", { type: "submit", class: "otp__button", "is-loading": this.showLoader, disabled: this.isDisabled, label: this.label }), !this.userBlocked &&
      h("div", { class: "otp__timer" }, this.showResendOTP
        ? h("span", { class: "otp__resend" }, "Didn't get the code yet? ", h("a", { href: "#", onClick: (e) => this.handleResendOtp(e) }, "Resend"))
        : h("aegon-timer", { "time-limit-in-seconds": this.time, "pre-text": "Resend code in " }))))));
  }
};
AegonOtpWidget.style = aegonOtpWidgetCss;

export { AegonOtpWidget as aegon_otp_widget };
