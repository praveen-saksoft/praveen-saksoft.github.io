import { r as registerInstance, h } from './index-8e01e03f.js';

const AegonComp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.update = e => {
      this.ageValue = e.target.value;
    };
    this.ageValue = 30;
  }
  render() {
    return (h("div", null, h("input", { onInput: this.update }), h("aegon-age-widget", { ageValue: this.ageValue })));
  }
};

export { AegonComp as aegon_comp };
