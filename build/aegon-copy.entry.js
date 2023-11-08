import { r as registerInstance, h, g as getElement } from './index-8e01e03f.js';

const copyIconSvg = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiDQogICAgIHZpZXdCb3g9IjAgMCAyMTAuMTA3IDIxMC4xMDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIxMC4xMDcgMjEwLjEwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojM2I1MTVjOyIgZD0iTTE2OC41MDYsMEg4MC4yMzVDNjcuNDEzLDAsNTYuOTgxLDEwLjQzMiw1Ni45ODEsMjMuMjU0djIuODU0aC0xNS4zOA0KCQkJYy0xMi44MjIsMC0yMy4yNTQsMTAuNDMyLTIzLjI1NCwyMy4yNTR2MTM3LjQ5MmMwLDEyLjgyMiwxMC40MzIsMjMuMjU0LDIzLjI1NCwyMy4yNTRoODguMjcxDQoJCQljMTIuODIyLDAsMjMuMjUzLTEwLjQzMiwyMy4yNTMtMjMuMjU0VjE4NGgxNS4zOGMxMi44MjIsMCwyMy4yNTQtMTAuNDMyLDIzLjI1NC0yMy4yNTRWMjMuMjU0QzE5MS43NiwxMC40MzIsMTgxLjMyOCwwLDE2OC41MDYsMHoNCgkJCSBNMTM4LjEyNiwxODYuODU0YzAsNC41NTEtMy43MDMsOC4yNTQtOC4yNTMsOC4yNTRINDEuNjAxYy00LjU1MSwwLTguMjU0LTMuNzAzLTguMjU0LTguMjU0VjQ5LjM2MQ0KCQkJYzAtNC41NTEsMy43MDMtOC4yNTQsOC4yNTQtOC4yNTRoODguMjcxYzQuNTUxLDAsOC4yNTMsMy43MDMsOC4yNTMsOC4yNTRWMTg2Ljg1NHogTTE3Ni43NiwxNjAuNzQ2DQoJCQljMCw0LjU1MS0zLjcwMyw4LjI1NC04LjI1NCw4LjI1NGgtMTUuMzhWNDkuMzYxYzAtMTIuODIyLTEwLjQzMi0yMy4yNTQtMjMuMjUzLTIzLjI1NEg3MS45ODF2LTIuODU0DQoJCQljMC00LjU1MSwzLjcwMy04LjI1NCw4LjI1NC04LjI1NGg4OC4yNzFjNC41NTEsMCw4LjI1NCwzLjcwMyw4LjI1NCw4LjI1NFYxNjAuNzQ2eiIvPg0KCTwvZz4NCjwvc3ZnPg0K';

const aegonCopyCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.copy-widget{display:inline-flex;justify-content:center;align-items:center;min-height:19px}.copy-widget .icon-container{display:inline-block;margin-left:2px}.copy-widget .copy-icon{cursor:pointer;width:14px;height:14px}.copy-widget .copy-tooltip{display:inline-block;position:relative}.copy-widget .copy-tooltip-tip{position:absolute;border-radius:4px;left:50%;transform:translateX(-50%);padding:3px;color:#6892a1;background:#ffffff;font-size:12px;font-family:Lato, sans-serif;line-height:15px;letter-spacing:0.6px;z-index:100;box-shadow:0 0 5px 3px rgba(0, 0, 0, 0.2);box-sizing:border-box;width:auto;height:fit-content;top:150%;opacity:1}";

const AegonCopy = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /*
        Copy content from prop if present OR
        Inner text of the projected content
        with slot if content absent
     */
    this.copyContent = (e) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      let content;
      content = this.content ? this.content : this.host.innerText;
      navigator.clipboard.writeText(content.trim())
        .then(() => {
        this.showTooltip = true;
        // removes the icon after 1 second
        // for better UX on mobiles
        setTimeout(() => {
          this.showTooltip = false;
          this.showIcon = false;
        }, 1000);
      });
    };
    this.content = undefined;
    this.persist = false;
    this.tooltipContent = 'Copied';
    this.showIcon = false;
    this.showTooltip = false;
  }
  onHover() {
    if (this.persist)
      return;
    this.showIcon = true;
  }
  onLeaveHover() {
    if (this.persist)
      return;
    this.showIcon = false;
    this.showTooltip = false;
  }
  /*
      NOTE: Component will not work properly when content inside
      slot is block level element with nested elements in flex
      layout. Use this component to copy single words or lines
      with simple block or inline layouts without flex.
   */
  render() {
    return (h("span", { class: "copy-widget", onMouseEnter: () => this.onHover(), onMouseLeave: () => this.onLeaveHover() }, h("slot", null), h("span", { class: "icon-container" }, h("span", { class: "copy-tooltip" }, (this.persist || this.showIcon) &&
      h("img", { src: copyIconSvg, class: "copy-icon", onClick: e => this.copyContent(e), alt: "Copy" }), this.showTooltip &&
      h("span", { class: "copy-tooltip-tip" }, " ", this.tooltipContent, " ")))));
  }
  get host() { return getElement(this); }
};
AegonCopy.style = aegonCopyCss;

export { AegonCopy as aegon_copy };
