import { r as registerInstance, h } from './index-b6b593ed.js';

const aegonButtonLoaderCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.loader{display:flex;justify-content:center;opacity:0.5;--background-color:#fff}.loader .dot{width:12px;height:12px;border-radius:100%;display:inline-block;animation:loader-delay 1.4s infinite ease-in-out both}.loader .dot1{animation-delay:-0.32s;opacity:0.3}.loader .dot2{animation-delay:-0.16s;opacity:0.7}@keyframes loader-delay{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}";

const AegonButtonLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "loader" }, h("div", { class: "dot dot1" }), h("div", { class: "dot dot2" }), h("div", { class: "dot dot3" })));
  }
};
AegonButtonLoader.style = aegonButtonLoaderCss;

export { AegonButtonLoader as aegon_button_loader };
