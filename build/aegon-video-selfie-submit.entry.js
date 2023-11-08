import { r as registerInstance, f as createEvent, h } from './index-b6b593ed.js';
import { u as uploadFile, s as setApiConfig, j as getDataUrl, P as PLAY_BUTTON_TIP, k as RETAKE_BUTTON_TIP } from './index-9a32ddeb.js';
import { r as readyToTranslate } from './readyToTranslate-7d3b84bc.js';
import './tslib.es6-4451ae6b.js';

const playButtonIconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNy44MDQgMTcuODA0Ij4NCiAgPHBhdGggZD0iTTIuMDY3LjA0M2EuNC40IDAgMCAxIC40MjYuMDQybDEzLjMxMiA4LjUwM2EuNDEuNDEgMCAwIDEgLjE1NC4zMTNjMCAuMTItLjA2MS4yMzctLjE1NC4zMTRMMi40OTIgMTcuNzE3Yy0uMDcuMDU3LS4xNjIuMDg3LS4yNS4wODdsLS4xNzYtLjA0YS40LjQgMCAwIDEtLjIyMi0uMzYxVi40MDJjMC0uMTUyLjA4Ni0uMjk1LjIyMy0uMzU5eiIvPg0KPC9zdmc+DQo=';

const retakeIconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+DQogIDxwYXRoIGQ9Ik0yMi40IDExLjY1YTEuMDkgMS4wOSAwIDAgMCAxLjA5IDEuMDloMTAuOTRWMS44MWExLjA5IDEuMDkgMCAxIDAtMi4xOSAwdjcuMTRhMTYuNDEgMTYuNDEgMCAxIDAgMS40NyAxNS44NiAxLjEyIDEuMTIgMCAwIDAtMi4wNS0uOSAxNC4xOCAxNC4xOCAwIDEgMS0xLjA1LTEzLjM2SDIzLjVhMS4wOSAxLjA5IDAgMCAwLTEuMSAxLjF6Ii8+DQogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMCIgZD0iTTAgMGgzNnYzNkgweiIvPg0KPC9zdmc+DQo=';

const aegonVideoSelfieSubmitCss = ".avw-selfie-submit{font-family:Arial, Helvetica, sans-serif;color:var(--avw-txt-color, #71717a);padding:2rem 1.5rem;line-height:1.3;display:flex;flex-direction:column;align-items:center}.avw-selfie-submit__proceed-action{width:50%}.avw-selfie-submit__title{text-align:center}.avw-selfie-submit__title--primary{font-size:1.3rem;letter-spacing:0.75px;margin-bottom:0.75rem}.avw-selfie-submit__title--secondary{font-size:0.95rem}.avw-selfie-submit .avw-selfie-submit-title{letter-spacing:0.75px;margin-bottom:0.75rem;font-size:24px;font-weight:bold;line-height:1.5;text-align:center;color:#002b47}@media screen and (max-width: 768px){.avw-selfie-submit .avw-selfie-submit-title{font-size:20px}}.avw-selfie-submit .avw-selfie-submit-subtitle{font-size:18px;font-weight:500;line-height:1.5;letter-spacing:normal;text-align:center;color:#094771;margin-bottom:32px}@media screen and (max-width: 768px){.avw-selfie-submit .avw-selfie-submit-subtitle{font-size:14px;margin-bottom:24px}}.avw-selfie-submit .avw-selfie-submit-note{font-size:18px;font-weight:500;line-height:1.5;letter-spacing:normal;text-align:center;color:#094771;margin-top:32px}@media screen and (max-width: 768px){.avw-selfie-submit .avw-selfie-submit-note{font-size:14px;margin-top:24px}}.avw-selfie-submit__preview--content{width:100%;height:250px;border-radius:15px;text-align:center;background-color:var(--avw-video-preview-bg, lightgray)}.avw-selfie-submit__preview--content img,.avw-selfie-submit__preview--content video{width:100%;height:100%;object-fit:contain;border-radius:15px}.avw-selfie-submit__preview--actions{display:flex;gap:1rem;margin-top:1.5rem;margin-bottom:3rem;align-items:center;justify-content:center}.avw-selfie-submit__preview--actions-tooltip .aegon-tooltip-tip.top{font-family:inherit;width:max-content;font-size:13px;padding:10px;top:-100%}.avw-selfie-submit__preview--actions-tooltip:first-child button{padding-left:10px}.avw-selfie-submit__preview--actions button{width:2.75rem;height:2.75rem;padding:5px;background:var(--avw-video-preview-btn-bg, white);border-radius:50%;border:1px solid;outline:none;cursor:pointer}.avw-selfie-submit__preview--actions button img{height:20px;width:20px;margin:auto}.avw-selfie-submit__actions{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.2rem;margin-bottom:3rem}@media screen and (max-width: 768px){.avw-selfie-submit__actions{margin-bottom:2rem}}.avw-selfie-submit__actions--button{border:1px solid;width:202px;height:60px;font-size:22px;font-weight:800;padding:17px 40px;color:white;font-weight:bold;border-radius:8px;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28);background-image:linear-gradient(75deg, #006bd7 5%, #0582ff 97%)}.avw-selfie-submit__actions--button:hover{background-image:linear-gradient(65deg, #024c7e -11%, #0568cb 97%)}.avw-selfie-submit button::disabled{background:var(--avw-video-submit-btn-disabled-bg, lightgray);cursor:not-allowed}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AegonVideoSelfieSubmit = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.retakeVideo = createEvent(this, "retake-video", 7);
    this.uploading = createEvent(this, "uploading", 7);
    this.uploadSuccess = createEvent(this, "upload-success", 7);
    this.uploadError = createEvent(this, "upload-error", 7);
    this.translations = {};
    this.commonTranslations = {};
    this.playVideoHandler = (e) => {
      e.preventDefault();
      if (this.videoEl) {
        this.videoEl.controls = true;
        this.videoEl.play();
      }
    };
    this.retakeVideoHandler = (e) => {
      e.preventDefault();
      this.retakeVideo.emit();
    };
    this.submitVideoHandler = async (e) => {
      e.preventDefault();
      this.isUploading = true;
      this.uploading.emit(true);
      const { data: vData, errMessage: vErr } = await uploadFile(this.videoFile, () => { });
      const { data: iData, errMessage: iErr } = await uploadFile(this.imageFile, () => { });
      this.isUploading = false;
      this.uploading.emit(false);
      if (vData && iData) {
        this.uploadSuccess.emit({ videoRes: vData || null, imageRes: iData || null });
      }
      if (vErr || iErr) {
        this.uploadError.emit({ videoErr: vErr || null, imageErr: iErr || null });
      }
    };
    this.apiConfig = undefined;
    this.imageFile = undefined;
    this.videoFile = undefined;
    this.isUploading = false;
  }
  translate() { }
  componentDidLoad() {
    setApiConfig(this.apiConfig);
    this.setVideoFilePreview();
  }
  setVideoFilePreview() {
    if (this.videoEl && this.videoFile) {
      this.videoEl.src = getDataUrl(this.videoFile) || "";
    }
  }
  render() {
    return (h("div", { class: "avw-selfie-submit" }, h("div", { class: "avw-selfie-submit__title" }, h("div", { class: "avw-selfie-submit-title" }, this.translations['checkAndSubmit'] || 'Check & Submit'), h("div", { class: "avw-selfie-submit-subtitle" }, this.translations['successMsg'] || 'Your video has been recorded. Please verify, and click on proceed to submit.')), h("div", { class: "avw-selfie-submit__preview" }, h("div", { class: "avw-selfie-submit__preview--content" }, h("video", { ref: video => (this.videoEl = video), playsinline: true })), h("div", { class: "avw-selfie-submit-note" }, this.translations['checkRecording'] || 'Press Play to check the recording. You can retake if you wish.'), h("div", { class: "avw-selfie-submit__preview--actions" }, h("aegon-tooltip", { class: "avw-selfie-submit__preview--actions-tooltip", direction: "top", content: PLAY_BUTTON_TIP }, h("button", { onClick: this.playVideoHandler, disabled: this.isUploading }, h("img", { src: playButtonIconSvg, alt: "Play Button Icon" }))), h("aegon-tooltip", { class: "avw-selfie-submit__preview--actions-tooltip", direction: "top", content: this.translations['clickToPlay'] || RETAKE_BUTTON_TIP }, h("button", { onClick: this.retakeVideoHandler, disabled: this.isUploading }, h("img", { src: retakeIconSvg, alt: "Retake Button Icon" }))))), h("button", { class: "avw-selfie-submit__actions--button", onClick: this.submitVideoHandler, disabled: this.isUploading }, this.commonTranslations['submit'] || 'Submit')));
  }
  static get assetsDirs() { return ["assets"]; }
  static get watchers() { return {
    "videoFile": ["setVideoFilePreview"]
  }; }
};
__decorate([
  readyToTranslate('common', 'commonTranslations'),
  readyToTranslate('selfieUpload')
], AegonVideoSelfieSubmit.prototype, "translate", null);
AegonVideoSelfieSubmit.style = aegonVideoSelfieSubmitCss;

export { AegonVideoSelfieSubmit as aegon_video_selfie_submit };
