import { r as registerInstance, h } from './index-b6b593ed.js';

const aegonProgressCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.progress-text{font-family:var(--progress-bar-text-font-family, Helvetica, Arial, Verdana, sans-serif);font-size:var(--progress-bar-text-font-size, 2em);font-weight:var(--progress-bar-text-font-weight, lighter)}";

const AegonProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.progressAmount = '0';
    this.textSuffix = '%';
    this.huaAdj = 300;
    this.colored = false;
    this.borderWidth = '20%';
    this.height = '100%';
    this.width = '100%';
    this.isCircle = true;
    this.bgColor = '#2c94d5';
  }
  hsl2Rgb(h, s, l) {
    s = s / 100;
    l = l / 100;
    var c, x, m, rgb;
    c = (1 - Math.abs(2 * l - 1)) * s;
    x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    m = l - c / 2;
    if (h >= 0 && h < 60)
      rgb = [c, x, 0];
    if (h >= 60 && h < 120)
      rgb = [x, c, 0];
    if (h >= 120 && h < 180)
      rgb = [0, c, x];
    if (h >= 180 && h < 240)
      rgb = [0, x, c];
    if (h >= 240 && h < 300)
      rgb = [x, 0, c];
    if (h >= 300 && h <= 360)
      rgb = [c, 0, x];
    return rgb.map(function (v) {
      return 255 * (v + m) | 0;
    });
  }
  rgb2Hex(r, g, b) {
    var rgb = b | (g << 8) | (r << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }
  ratioForColor(r) {
    const mp = { '0': 60, '10': 55, '20': 50, '30': 46, '40': 42, '50': 38, '60': 36, '70': 32, '80': 30, '90': 25, '100': 20 };
    let dkey;
    for (const key in mp) {
      const k = parseInt(key);
      if (r < k)
        break;
      dkey = k;
    }
    return mp[dkey];
  }
  hsl2Hex(h, s, l) {
    var rgb = this.hsl2Rgb(h, s, l);
    return this.rgb2Hex(rgb[0], rgb[1], rgb[2]);
  }
  gradient(ratio) {
    const multiple = this.huaAdj + this.ratioForColor(ratio);
    const huaC = this.ratioForColor(ratio);
    var hue = ((ratio / 100) * multiple).toFixed(0);
    var hsl = "hsl(" + hue + ", 100%, " + huaC + "%)";
    // var hue = ((ratio/100)*250).toFixed(0)
    // var hsl = `hsl(${hue}, 100%, ${50}%)`
    return hsl;
  }
  componentWillRender() {
    if (this.colored)
      this.bgColor = this.gradient(this.progressAmount);
  }
  render() {
    return (h("div", null, !this.isCircle && h("div", { style: {
        height: this.height,
        width: this.width,
        backgroundColor: '#e0e0de',
        borderRadius: '50',
        margin: '50'
      } }, h("div", { style: {
        height: '100%',
        width: `${this.progressAmount}%`,
        backgroundColor: this.bgColor,
        borderRadius: 'inherit',
        textAlign: 'right'
      } }, h("span", { style: {
        padding: '5',
        color: 'white',
        fontWeight: 'bold'
      } }, `${this.progressAmount}${this.textSuffix}`))), this.isCircle && h("div", { style: {
        width: this.width,
        height: this.height
      } }, h("div", { style: {
        width: '100%',
        height: '100%',
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        background: `conic-gradient(${this.bgColor} ${this.progressAmount}%, 0, #ecf0f1 ${(100 - parseInt(this.progressAmount)).toString()}%)`,
        borderRadius: `50%`
      } }, h("div", { style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor: `#fff`,
        height: `calc(100% - ${this.borderWidth})`,
        width: `calc(100% - ${this.borderWidth})`,
        borderRadius: `50%`,
        boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`
      } }, h("span", { class: 'progress-text' }, this.progressAmount, this.textSuffix))))));
  }
};
AegonProgress.style = aegonProgressCss;

export { AegonProgress as aegon_progress };
