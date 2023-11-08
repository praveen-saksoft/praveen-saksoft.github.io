import { r as registerInstance, h } from './index-8e01e03f.js';

const aegonDialogCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.ae-dialog-overlay{width:100%;height:100%;position:fixed;z-index:1;left:0;top:0;background-color:rgba(0, 0, 0, 0.4);overflow-x:hidden;}.ae-dialog-content{background-color:#fff;width:fit-content;position:absolute;top:50%;left:50%;padding:16px}";

const AegonDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.confirmAction = undefined;
    this.cancelAction = undefined;
    this.dialogTitle = "Are you sure?";
    this.resolveLabel = "Confirm";
    this.rejectLabel = "Cancel";
  }
  resolve() {
    this.confirmAction();
  }
  reject() {
    this.cancelAction();
  }
  render() {
    return (h("div", { class: "aegon-dialog" }, h("div", { class: "ae-dialog-overlay" }, h("div", { class: "ae-dialog-content" }, h("span", { class: "ae-dialog-title" }, this.dialogTitle), h("slot", null), h("div", { class: "aegon-dialog-actions" }, h("button", { type: "button", onClick: this.resolve }, this.resolveLabel), h("button", { type: "button", onClick: this.reject }, this.rejectLabel))))));
  }
};
AegonDialog.style = aegonDialogCss;

export { AegonDialog as aegon_dialog };
