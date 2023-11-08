import { r as registerInstance, h, e as Host } from './index-b6b593ed.js';

const popCloseIcSvg = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7b3BhY2l0eTowO308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIvPjxwYXRoIGQ9Ik0yNC42NywyNGw3LjE5LTcuMmEuNDcuNDcsMCwxLDAtLjY2LS42NkwyNCwyMy4zM2wtNy4yLTcuMTlhLjQ3LjQ3LDAsMSwwLS42Ni42NkwyMy4zMywyNGwtNy4xOSw3LjJhLjQ1LjQ1LDAsMCwwLDAsLjY2LjQ2LjQ2LDAsMCwwLC42NiwwTDI0LDI0LjY3bDcuMiw3LjE5YS40Ni40NiwwLDAsMCwuNjYsMCwuNDUuNDUsMCwwLDAsMC0uNjZaIi8+PC9zdmc+';

const aegonBottomsheetCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.aegon-bottomsheet-overlay{width:100%;height:100%;position:fixed;z-index:6;left:0;top:0;background-color:rgba(0, 0, 0, 0.4);overflow-x:hidden;}.aegon-bottomsheet-content{background-color:#fff;overflow:hidden;z-index:7;display:flex;flex-direction:column}.aegon-bottomsheet-close{padding:0px;cursor:pointer;position:absolute;right:0;top:0;width:48px;height:48px}.aegon-bottomsheet-base-body-inner{height:300px;min-height:191px;max-height:80%;overflow:auto}.aegon-bottomsheet-base-body-inner::-webkit-scrollbar{-webkit-appearance:none;width:3px}.aegon-bottomsheet-base-body-inner::-webkit-scrollbar-thumb{border-radius:1px;background-color:rgba(0, 0, 0, 0.2);-webkit-box-shadow:0 0 1px rgba(255, 255, 255, 0.5);box-shadow:0 0 1px rgba(255, 255, 255, 0.5)}@keyframes riseUp{0%{max-height:0}100%{max-height:370px}}@media only screen and (min-width: 768px){.aegon-bottomsheet-content{position:absolute;padding:64px;left:50%;top:50%;width:fit-content;min-width:400px;max-width:80%;height:fit-content;min-height:191px;max-height:80%;border-radius:8px;transform:translate(-50%, -50%)}}@media only screen and (max-width: 767px){.aegon-bottomsheet-content{position:fixed;bottom:0;left:0;animation:riseUp 0.5s;width:100vw;max-height:fit-content;padding:32px 16px}.aegon-bottomsheet-content-topbar{display:none}}";

const AegonBottomSheet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.active = false;
    this.overlayclick = undefined;
  }
  /**
   * Close the sheet
   */
  closeBottomSheet() {
    if (!this.active) {
      this.open = false;
      this.overlayclick && this.overlayclick();
      this.removeBodyClass();
    }
  }
  /**
   * Close the overlay on Esc
   * @param ev Event
   */
  handleScroll(ev) {
    if (ev.which && ev.which === 27) {
      this.closeBottomSheet();
    }
  }
  /**
   * Removes the `noscroll` class from body tag.
   */
  removeBodyClass() {
    document.body.classList.remove("noscroll");
  }
  /**
   * Attach the `noscroll` class to body tag.
   */
  componentDidLoad() {
    if (this.open) {
      document.body.classList.add("noscroll");
    }
  }
  /**
   * Remvove the class attched to body when component unmounts.
   */
  disconnectedCallback() {
    this.removeBodyClass();
  }
  /**
   * Render
   */
  render() {
    return (h(Host, null, this.open && (h("div", { class: "aegon-bottomsheet" }, h("div", { class: "aegon-bottomsheet-overlay", onClick: () => this.closeBottomSheet() }), h("div", { class: "aegon-bottomsheet-content" }, h("div", { class: "aegon-bottomsheet-content-topbar" }, h("img", { src: popCloseIcSvg, class: "aegon-bottomsheet-close", onClick: () => this.closeBottomSheet(), alt: "Close" })), h("div", { class: "aegon-bottomsheet-base" }, h("div", { class: "aegon-bottomsheet-base-header" }, h("slot", { name: "header" })), h("div", { class: "aegon-bottomsheet-base-body" }, h("div", { class: "aegon-bottomsheet-base-body-inner" }, h("slot", { name: "body" }))), h("div", { class: "aegon-bottomsheet-base-footer" }, h("slot", { name: "footer" }))))))));
  }
  static get assetsDirs() { return ["assets"]; }
};
AegonBottomSheet.style = aegonBottomsheetCss;

export { AegonBottomSheet as aegon_bottomsheet };
