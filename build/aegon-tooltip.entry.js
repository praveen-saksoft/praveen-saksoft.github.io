import { r as registerInstance, h } from './index-8e01e03f.js';

const aegonTooltipCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}:root{--tooltip-text-color:#002b47;--tooltip-background-color:#ebedef;--tooltip-margin-sides:12px;--tooltip-margin-top:32px;--tooltip-bottom-margin:32px;--tooltip-arrow-size:6px}.aegon-tooltip{display:inline-block;position:relative}.aegon-tooltip-tip{position:absolute;border-radius:4px;left:50%;transform:translateX(-50%);padding:16px;color:var(--tooltip-text-color);background:var(--tooltip-background-color);font-size:14px;font-weight:500;font-family:Manrope;line-height:15px;letter-spacing:0;z-index:100;box-shadow:none;box-sizing:border-box;width:270px;max-width:300px;height:fit-content}.aegon-tooltip-tip::before{content:\" \";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;border-width:var(--tooltip-arrow-size);margin-left:calc(var(--tooltip-arrow-size) * -1)}.aegon-tooltip-tip.top{bottom:150%;max-width:300px;width:270px}.aegon-tooltip-tip.top::before{top:100%;border-top-color:var(--tooltip-background-color)}.aegon-tooltip-tip.right{left:calc(100% + var(--tooltip-margin-sides));top:50%;transform:translateX(0) translateY(-50%);width:270px;max-height:fit-content;max-width:300px}.aegon-tooltip-tip.right::before{left:calc(var(--tooltip-arrow-size) * -1);top:50%;transform:translateX(0) translateY(-50%);border-right-color:var(--tooltip-background-color)}.aegon-tooltip-tip.bottom{width:270px;max-width:300px;top:150%}.aegon-tooltip-tip.bottom::before{bottom:100%;border-bottom-color:var(--tooltip-background-color)}.aegon-tooltip-tip.left{left:auto;right:calc(100% + var(--tooltip-margin-sides));top:50%;transform:translateX(0) translateY(-50%);width:270px;max-width:300px}.aegon-tooltip-tip.left::before{left:auto;right:calc(var(--tooltip-arrow-size) * -2);top:50%;transform:translateX(0) translateY(-50%);border-left-color:var(--tooltip-background-color)}";

const AegonToolTip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timeout = null;
    this.className = 'aegon-tooltip';
    this.onDocumentClick = (event) => {
      var _a, _b, _c;
      const isAgeonTooltip = ((_c = (_b = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.closest(`.${this.className}`)) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.value) === this.className || null;
      if (isAgeonTooltip == null) { // clicks anywhere, outside of the tooltip.
        this.hideTip();
      }
    };
    this.showTip = () => {
      this.active = !this.active;
      if (this.autoHide) {
        this.timeout = setTimeout(() => {
          this.active = false;
        }, this.hideDelay);
      }
    };
    this.hideTip = () => {
      if (this.timeout) {
        clearInterval(this.timeout);
      }
      this.active = false;
    };
    this.getClasses = () => {
      return {
        "aegon-tooltip-tip": true,
        [this.direction]: true
      };
    };
    this.content = "Tooltip text";
    this.direction = "bottom";
    this.hideDelay = 3000;
    this.autoHide = false;
    this.active = false;
  }
  onProceed() {
    document.removeEventListener('click', this.onDocumentClick);
  }
  componentDidRender() {
    document.addEventListener('click', this.onDocumentClick);
  }
  render() {
    return (h("div", { class: this.className, onTouchStart: this.showTip, onTouchEnd: this.hideTip, onMouseOver: this.showTip, onMouseLeave: this.hideTip }, h("slot", null), this.active && (h("div", { class: this.getClasses(), innerHTML: this.content }))));
  }
};
AegonToolTip.style = aegonTooltipCss;

export { AegonToolTip as aegon_tooltip };
