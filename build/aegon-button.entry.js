import { r as registerInstance, h } from './index-b6b593ed.js';

const aegonButtonCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.ag-button{--background-color:#0069b4;--color:#ffffff;--border-radius:24px;border:0;background-color:#ffeb3b;box-shadow:0 2px 10px 0 rgba(50, 100, 206, 0.4);color:#444;outline:0;font-family:\"Lato\", sans-serif;font-size:15px;font-weight:bold;line-height:19px;display:flex;justify-content:center;align-items:center;margin:0 auto;cursor:pointer}.ag-button--fade-out{opacity:0.5}.ag-button--disabled{pointer-events:none;opacity:0.5;cursor:not-allowed}.ag-button--large{height:48px;width:260px}.ag-button--auto{height:auto;width:auto;padding:5px 12px;display:inline-flex;box-shadow:0 2px 5px 0 rgba(50, 100, 206, 0.4)}.ag-button--medium{height:36px;width:180px}.ag-button--small{height:30px;width:60px;font-size:12px;line-height:15px}.ag-button__loader{display:flex;justify-content:center}.ag-button__loader__dot{width:12px;height:12px;background-color:#444;border-radius:100%;display:inline-block;animation:loader-delay 1.4s infinite ease-in-out both}.ag-button__loader .dot1{animation-delay:-0.32s;opacity:0.3}.ag-button__loader .dot2{animation-delay:-0.16s;opacity:0.7}@keyframes loader-delay{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}.ag-button-loader{opacity:0.5}";

const AegonButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.submitHandler = undefined;
    this.type = undefined;
    this.isLoading = false;
    this.label = "Submit";
    this.size = "large";
    this.disabled = false;
    this.fadeOut = false;
  }
  /**
   * Get the CSS classes for this button
   */
  getClasses() {
    return {
      "ag-button": true,
      [`ag-button--${this.size}`]: true,
      "ag-button-loader": this.isLoading,
      "ag-button--disabled": this.disabled,
      "ag-button--fade-out": this.fadeOut,
      [`ag-button--${this.type}`]: true,
    };
  }
  /**
   * TODO: Do we need this?
   */
  downloadQuickActionsLoaderToggleOn() {
    // return this.$nuxt.context.getFeatureToggle('DOWNLOAD_QUICK_ACTIONS_LOADER')
    return true;
  }
  /**
   * Render
   */
  render() {
    return (h("button", { disabled: this.disabled || this.isLoading, class: this.getClasses(),
      // TODO Prop handler: onClick={() => this.submitHandler()}
      type: this.type }, h("slot", null), this.isLoading ? (h("div", { class: "ag-button__loader" }, h("div", { class: "ag-button__loader__dot dot1" }), h("div", { class: "ag-button__loader__dot dot2" }), h("div", { class: "ag-button__loader__dot dot3" }))) : (h("span", { class: "ag-button__label" }, this.label))));
  }
};
AegonButton.style = aegonButtonCss;

export { AegonButton as aegon_button };
