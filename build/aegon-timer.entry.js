import { r as registerInstance, f as createEvent, h, F as Fragment } from './index-b6b593ed.js';

const AegonTimer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timedOut = createEvent(this, "timedOut", 7);
    /**
     * Local: Interval variable
     */
    this.ticker = null;
    this.timeLimitInSeconds = 10;
    this.preText = "Time remaining ";
    this.typeMinuteAndSeconds = undefined;
    this.remainingTimeInSeconds = this.timeLimitInSeconds;
  }
  /*   Reset timer on request otp api timeout */
  onTimerChange(time) {
    this.remainingTimeInSeconds = time;
  }
  /**
   * Start timer on load
   */
  connectedCallback() {
    this.timer();
  }
  /**
   * Clear timer on unload, Stencil standard
   */
  disconnectedCallback() {
    this.clearTimer();
  }
  /**
   * Clear timer, set remaining time to 0
   */
  clearTimer() {
    this.remainingTimeInSeconds = 0;
    window.clearInterval(this.ticker);
  }
  /**
   * Emit timedOut event, so the parent can show the resend link
   */
  broadCastTimeOut() {
    this.timedOut.emit();
  }
  /**
   * Tick per second
   */
  timer() {
    this.ticker = setInterval(() => {
      if (this.remainingTimeInSeconds > 0) {
        this.remainingTimeInSeconds--;
      }
      else {
        this.clearTimer();
        this.broadCastTimeOut();
      }
    }, 1000);
  }
  /**
   * Workaround for 'computing' state (like Vue)
   */
  getFormattedTime() {
    if (this.typeMinuteAndSeconds) {
      const minutes = Math.floor(this.remainingTimeInSeconds / 60);
      const seconds = Math.ceil(this.remainingTimeInSeconds % 60);
      return (h(Fragment, null, h("span", { class: "time__text" }, this.preText), " ", h("span", { class: "time__value" }, minutes.toString().padStart(2, "0"), ":", seconds.toString().padStart(2, "0"))));
    }
    else {
      return (h(Fragment, null, h("span", { class: "time__text" }, this.preText), " ", h("span", { class: "time__value" }, this.remainingTimeInSeconds.toString().padStart(2, "0"), " "), h("span", null, "seconds")));
    }
  }
  /**
   * Render
   */
  render() {
    return h("span", { class: "timer" }, this.getFormattedTime());
  }
  static get watchers() { return {
    "timeLimitInSeconds": ["onTimerChange"]
  }; }
};

export { AegonTimer as aegon_timer };
