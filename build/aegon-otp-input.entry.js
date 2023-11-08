import { r as registerInstance, f as createEvent, h } from './index-8e01e03f.js';
import { i as isInvalidOTPInput, a as isDeleteContentKey } from './utils-fe9e10d1.js';

const aegonOtpInputCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.otp-container{min-height:40px;box-sizing:border-box}.otp__input{height:40px;width:34px;border-radius:3px;border:solid 1px #cbcbcb;line-height:24px;margin:0 6px;font-size:19px;outline:0;color:transparent;text-shadow:0 0 0 #2c3c62;text-align:center;box-sizing:content-box;caret-color:#404040}.otp__input::placeholder,.otp__input::-webkit-input-placeholder{color:#1a1a1a;font-size:30px}.otp__input::-moz-placeholder{color:#1a1a1a;font-size:20px}.otp__input:disabled{background:none;color:#1a1a1a;-webkit-text-fill-color:#1a1a1a;opacity:1}.otp__input:placeholder-shown{margin-bottom:0}.otp__input.focused::placeholder,.otp__input:focus{border:solid 1px #0069b4;border-radius:4px}.otp__input::selection{background:none}";

const AegonOtpInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.otpComplete = createEvent(this, "otpComplete", 7);
    this.textInputs = [];
    /**
     * Focus on first input box
     */
    this.focusOnFirstInput = () => {
      if (this.autoFocusFirst) {
        setTimeout(() => {
          this.textInputs[0].focus();
          this.textInputs[0].select();
        });
      }
    };
    this.otp = [];
    this.isEdited = [];
    this.activeFocusIndex = undefined;
    this.otpLength = 6;
    this.autoFocusFirst = true;
    this.clearInput = false;
  }
  /**
   * On Component Load
   */
  componentDidLoad() {
    this.focusOnFirstInput();
  }
  /**
   * Handle Copy Paste of a value - TODO
   * @param e
   */
  handleCopyPaste(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  /**
   * Autofill digits if user pastes OTP
   * @param e
   */
  autoFillOtpDigits(e) {
    const inputValue = e.target.value;
    for (let i = 1; i <= this.otpLength; i++) {
      this.textInputs[i].focus();
      this.textInputs[i].select();
      this.textInputs[i].value = inputValue[i - 1];
      this.otp[i - 1] = inputValue[i - 1];
    }
  }
  /**
   * Onkeydown inside the input field
   * @param event
   * @param refIndex
   */
  onKeyDown(event, refIndex) {
    if (isInvalidOTPInput(event.key)) {
      event.preventDefault();
      return false;
    }
    else if (event.target.value.length === 1 && !isDeleteContentKey(event.key)) {
      if (!isNaN(event.key) && this.isEdited[refIndex]) {
        let otpCopy = this.otp.slice();
        otpCopy[refIndex] = event.key;
        this.otp = otpCopy;
      }
    }
  }
  /**
   * Onkeyup inside the input field
   * @param event
   * @param refIndex
   */
  onKeyUp(event, refIndex) {
    const inputOtp = this.otp.join('');
    if (event.key === 'Backspace') {
      this.focusInputByIndex(refIndex - 1);
      this.otpComplete.emit(inputOtp);
    }
    else if (event.key === 'ArrowRight' && refIndex <= this.otpLength) {
      const indx = refIndex === this.otpLength ? 0 : 1;
      this.focusInputByIndex(refIndex + indx);
    }
    else if (event.key === 'ArrowLeft' && (refIndex <= this.otpLength && refIndex >= 1)) {
      this.focusInputByIndex(refIndex - 1);
    }
    else {
      if (inputOtp.length === this.otpLength) {
        this.otpComplete.emit(inputOtp);
      }
      if (!isInvalidOTPInput(event.key)) {
        this.focusInputByIndex(refIndex + 1);
      }
      this.isEdited[refIndex] = true;
    }
  }
  /**
   * Oninput inside the input field
   * @param e
   * @param refIndex
   */
  onInput(e, refIndex) {
    if (e.target.value.length === this.otpLength) {
      this.autoFillOtpDigits(e);
    }
    // Longcut needed for assuring correct state update
    let otpCopy = this.otp.slice(); //creates the clone of the state
    otpCopy[refIndex] = e.target.value.trim();
    this.otp = otpCopy;
  }
  /**
   * Listener: On clear input, wipes the state and inputs
   * Trigger: Resend link click from the parent component
   * @param e
   */
  clearInputHandler(e) {
    if (!e.detail.clear) {
      return;
    }
    this.focusOnFirstInput();
    this.otp = [];
  }
  /**
   * Focus the input by index
   * @param refIndex
   */
  focusInputByIndex(refIndex) {
    if (!this.textInputs[refIndex]) {
      return;
    }
    this.textInputs[refIndex].disabled = false;
    this.textInputs[refIndex].focus();
    this.textInputs[refIndex].select();
  }
  /**
   * Render
   */
  render() {
    // @ts-ignore
    return (h("div", { class: "otp-container" }, [...Array(this.otpLength)].map((e, i) => {
      return (h("span", { key: i, class: "otp__input-box" }, h("input", { ref: (el) => this.textInputs[i] = el, disabled: i !== 0 && !this.isEdited[i - 1], class: {
          "otp__input": true,
          focused: this.activeFocusIndex === i
        }, type: "tel", maxlength: "1", onKeyDown: ev => this.onKeyDown(ev, i), onKeyUp: ev => this.onKeyUp(ev, i), onInput: ev => this.onInput(ev, i), onFocus: () => this.activeFocusIndex = i, onBlur: () => this.activeFocusIndex = null, onPaste: this.handleCopyPaste, value: this.otp[i] })));
    })));
  }
};
AegonOtpInput.style = aegonOtpInputCss;

export { AegonOtpInput as aegon_otp_input };
