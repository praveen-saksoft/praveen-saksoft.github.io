import { f as Build, g as getAssetPath, r as registerInstance, e as createEvent, h, F as Fragment } from './index-342d7c7e.js';
import { r as readyToTranslate } from './readyToTranslate-7d3b84bc.js';
import { E as EColors, I as IMAGE_MIME_TYPE, D as DEFAULT_IMAGE_DOC_TYPE, a as DEFAULT_VIDEO_DOC_TYPE, V as VIDEO_MIME_TYPE, G as GA_ERROR_EVENT, b as GA_ERROR_EVENT_LABEL, c as GA_DEFAULT_ERR, U as UAParser, r as requestUserMedia, d as releaseUserMedia } from './docstore-api-7910b5cd.js';

const drawDetection = (canvasEl, videoEl, { isDefault = false, isDetected = false }) => {
  canvasEl.width = videoEl.offsetWidth;
  canvasEl.height = videoEl.offsetHeight;
  const x = ((canvasEl === null || canvasEl === void 0 ? void 0 : canvasEl.width) || 150) / 2;
  const y = ((canvasEl === null || canvasEl === void 0 ? void 0 : canvasEl.height) || 150) / 2;
  const d = (x > y) ? x : (y + 50);
  const r = (d / 2);
  canvasEl.style.top = `${videoEl.offsetTop + (x > y ? 130 : 165)}px`;
  const ctx = canvasEl.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = isDefault ? EColors.PRIMARY : (isDetected ? EColors.SUCCESS : EColors.DANGER);
  ctx.arc(x, y, r, 0, (2 * Math.PI));
  ctx.stroke();
  return ctx;
};
const clearDetection = (canvasEl) => {
  const ctx = canvasEl.getContext("2d");
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
};
const animateCircleDraw = (canvasEl, videoEl, duration = 3000, cb) => {
  canvasEl.width = videoEl.offsetWidth;
  canvasEl.height = videoEl.offsetHeight;
  const x = ((canvasEl === null || canvasEl === void 0 ? void 0 : canvasEl.width) || 150) / 2;
  const y = ((canvasEl === null || canvasEl === void 0 ? void 0 : canvasEl.height) || 150) / 2;
  const d = (x > y) ? x : (y + 50);
  const r = (d / 2);
  canvasEl.style.top = `${videoEl.offsetTop + (x > y ? 130 : 165)}px`;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "White";
  const delay = 10;
  const totalSteps = duration / delay;
  let curStep = 0;
  const int = setInterval(() => {
    ctx.strokeStyle = EColors.PRIMARY;
    ctx.lineWidth = 6;
    ctx.clearRect(x - r - ctx.lineWidth, y - r - ctx.lineWidth, r * 2 + (ctx.lineWidth * 2), r * 2 + (ctx.lineWidth * 2));
    ctx.beginPath();
    ctx.arc(x, y, r, -.5 * Math.PI, (-.5 * Math.PI + 2 * Math.PI * curStep / totalSteps));
    ctx.stroke();
    if (++curStep > totalSteps) {
      clearInterval(int);
      cb();
    }
  }, delay);
};
const createImageFile = (canvasEl, videoEl) => {
  if (canvasEl && videoEl) {
    canvasEl.width = videoEl.videoWidth;
    canvasEl.height = videoEl.videoHeight;
    canvasEl.style.display = "none";
    const ctx = canvasEl.getContext("2d");
    ctx.drawImage(videoEl, 0, 0, videoEl.videoWidth, videoEl.videoHeight);
    const imageDataUrl = canvasEl.toDataURL(IMAGE_MIME_TYPE);
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    return dataUrlToFile(imageDataUrl, `${DEFAULT_IMAGE_DOC_TYPE}.png`);
  }
  return null;
};
const createVideoFile = (blob) => {
  if (blob) {
    return new File([blob], `${DEFAULT_VIDEO_DOC_TYPE}.mp4`, { type: VIDEO_MIME_TYPE });
  }
  return null;
};
const dataUrlToFile = (base64Url, fileName) => {
  let arr = base64Url.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
};
const getDataUrl = (file) => {
  const URL = window.URL || window.webkitURL;
  if (URL) {
    return URL.createObjectURL(file);
  }
  return null;
};
const getImagePath = (assetPath) => {
  if (Build.isDev) {
    return getAssetPath(`./${assetPath}`);
  }
  else {
    return `${process.env.BASE_URL}${assetPath}`;
  }
};
const triggerGAEvent = (gaData = {}) => {
  const { eventName = GA_ERROR_EVENT, eventLabel = GA_ERROR_EVENT_LABEL, errorMessage = GA_DEFAULT_ERR } = gaData;
  const gaErrorEvent = new CustomEvent(eventName, {
    detail: {
      eventLabel,
      errorMessage,
    },
  });
  window.dispatchEvent(gaErrorEvent);
};
const getDeviceInfo = () => {
  var _a, _b, _c, _d, _e, _f, _g;
  let browser = null;
  let os = null;
  let device = null;
  let resolution = null;
  const parser = new UAParser();
  if (parser) {
    const data = parser.getResult();
    if (data === null || data === void 0 ? void 0 : data.browser) {
      browser = `${((_a = data === null || data === void 0 ? void 0 : data.browser) === null || _a === void 0 ? void 0 : _a.name) || ""} ${((_b = data === null || data === void 0 ? void 0 : data.browser) === null || _b === void 0 ? void 0 : _b.version) || ""}`.trim();
    }
    if (data === null || data === void 0 ? void 0 : data.os) {
      os = `${((_c = data === null || data === void 0 ? void 0 : data.os) === null || _c === void 0 ? void 0 : _c.name) || ""} ${((_d = data === null || data === void 0 ? void 0 : data.os) === null || _d === void 0 ? void 0 : _d.version) || ""}`.trim();
    }
    if (data === null || data === void 0 ? void 0 : data.device) {
      device = `${((_e = data === null || data === void 0 ? void 0 : data.device) === null || _e === void 0 ? void 0 : _e.vendor) || ""} ${((_f = data === null || data === void 0 ? void 0 : data.device) === null || _f === void 0 ? void 0 : _f.model) || ""} ${((_g = data === null || data === void 0 ? void 0 : data.device) === null || _g === void 0 ? void 0 : _g.type) || ""}`.trim();
    }
  }
  const curScreen = screen || window.screen;
  if ((curScreen === null || curScreen === void 0 ? void 0 : curScreen.width) && (curScreen === null || curScreen === void 0 ? void 0 : curScreen.height)) {
    resolution = `${curScreen === null || curScreen === void 0 ? void 0 : curScreen.width}x${curScreen === null || curScreen === void 0 ? void 0 : curScreen.height}`;
  }
  return { browser, os, device, resolution };
};
const getFileSize = (bytes = 0, decimals = 2) => {
  if (bytes === 0) {
    return "0 B";
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const aegonVideoSelfieIntroCss = ":root{--circle-size:clamp(1.5rem, 5vw, 50px);--spacing:clamp(0.25rem, 2vw, 0.5rem)}.avw-selfie-intro{margin-top:4rem;padding:2rem 1rem;display:flex}@media screen and (max-width: 768px){.avw-selfie-intro{flex-direction:column;margin-top:1rem}}.avw-selfie-intro .avw-selfie-intro-block-1{font-family:Arial, Helvetica, sans-serif;color:var(--avw-txt-color, #71717a);width:100%}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1{width:100%;margin-right:0px}}.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-intro-title{letter-spacing:0.75px;margin-bottom:16px;font-size:24px;font-weight:bold;line-height:1.5;text-align:center;color:#002b47}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-intro-title{font-size:20px}}.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-subtitle{margin-bottom:2rem;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:normal;text-align:center;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-subtitle{font-size:14px;margin-bottom:24px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block{border-radius:8px;box-shadow:0 7px 94px 0 rgba(1, 109, 217, 0.2);border:solid 1.5px #ddf3ff}@media (max-width: 597px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block{padding:0 0px 24px 0}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instruction-heading{background-color:#f4faff;border-radius:8px 8px 0px 0px;font-size:18px;font-family:Manrope;font-weight:800;color:#002b47;padding:16px 0px;margin:0 auto;text-align:center}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instruction-heading{font-size:16px;padding:13px 0px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instructions-wrapper{padding:32px 150px 32px 40px}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instructions-wrapper{padding:17px 12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content{display:flex;margin-bottom:10px;align-items:center}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .img-instruction{margin-right:16px}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .instruction-sub-title{display:flex;text-align:left;font-weight:600;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .instruction-sub-title{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical{padding:0 28px}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item{position:relative;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0 0 21px 0}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:before{content:attr(data-step);font-family:Manrope-Bold;font-size:12px;color:#fff;display:flex;align-items:center;justify-content:center;z-index:2;flex:0 0 32px;height:32px;width:32px;border-radius:50%;background-color:#153050;position:relative;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28)}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:not(:last-child):after{content:\"\";position:absolute;left:0;top:calc(14px + var(--spacing));bottom:-25px;transform:translateX(0.8823529412rem);width:3.5px;background-color:#153050}@media screen and (max-width: 420px){.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(2){min-height:3.5rem}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(2) .stepper__title{top:16px;z-index:2}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(3){min-height:4.5rem}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(3) .stepper__title{top:15px;z-index:2}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__title{font-family:Manrope-Bold;margin-bottom:clamp(0.85rem, 2vmax, 1rem);position:absolute;top:7px;left:13px;color:#fff;font-size:12px}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc{display:flex;text-align:left;font-weight:600;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc--bold{background-color:#e52d1226;border-radius:6px;margin-left:2px;padding:0px 4px}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action{min-height:50px;border:solid 1px #fff;border-radius:8px;padding:12px;box-shadow:0 8px 40px 0 rgba(112, 144, 176, 0.25);margin-right:-110px}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action{margin-right:0}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper{display:flex;justify-content:center;align-items:center}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper img{margin-top:12px;margin-right:8px;width:20px;height:20px}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper img{margin-right:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-text{display:flex;justify-content:center;align-items:center;font-weight:300;font-size:14px;letter-spacing:normal;color:#094771;margin-top:12px}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-text__success{color:#33e677}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-text__error{color:#cc0033}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-text{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-button{display:flex;justify-content:center;align-items:center;font-size:14px;font-weight:600;color:#4a88f5;cursor:pointer;border:1px solid;padding:8px 16px;border-radius:8px;background-color:#fff}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-allow-action .allow-action-wrapper .allow-action-button{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1__actions{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.2rem;margin-bottom:3rem}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1__actions{margin-bottom:2rem}}.avw-selfie-intro .avw-selfie-intro-block-1__actions--button{border:1px solid;width:208px;height:64px;font-size:22px;font-weight:800;padding:14px 40px;color:#fff;font-weight:bold;border-radius:8px;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28);background:#153050}.avw-selfie-intro .avw-selfie-intro-block-1__actions--button::after{background:#fff;content:\"\";height:120px;left:-75px;opacity:0.2;position:absolute;top:76px;transform:rotate(35deg);transition:all 550ms cubic-bezier(0.19, 1, 0.22, 1);width:50px;z-index:1}.avw-selfie-intro .avw-selfie-intro-block-1__actions--button:hover::after{left:120%;transition:all 550ms cubic-bezier(0.19, 1, 0.22, 1)}.avw-selfie-intro .avw-selfie-intro-block-1 button:disabled{opacity:0.5;pointer-events:none}";

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
const AegonVideoSelfieIntro = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.requestMediaAccess = createEvent(this, "request-media-access", 7);
    this.translations = {};
    this.allowCameraMicHandler = async (e) => {
      e.preventDefault();
      const result = await requestUserMedia();
      if (result.data) {
        this.hasError = false;
        this.mediaStream = result.data;
      }
      else {
        this.mediaStream = null;
        this.hasError = true;
      }
    };
    this.getStartedHandler = async (e) => {
      await this.allowCameraMicHandler(e);
      if (this.mediaStream) {
        this.requestMediaAccess.emit();
      }
    };
    this.mediaStream = null;
    this.hasError = false;
  }
  translate() { }
  disconnectedCallback() {
    releaseUserMedia(this.mediaStream);
  }
  render() {
    return (h("div", { class: "avw-selfie-intro" }, h("div", { class: "avw-selfie-intro-block-1" }, h("div", { class: "avw-selfie-intro-title" }, this.translations["takeVideoSelfie"] || "Take a video selfie	"), h("div", { class: "avw-selfie-subtitle" }, this.translations["verifySelfieVideo"] || "We will record a selfie video to verify your identification."), h("div", { class: "avw-selfie-intro-block-1__actions" }, h("div", { class: "selfie-instruction-block" }, h("p", { class: "selfie-instruction-heading" }, this.translations["instruction"] || "Instructions"), h("div", { class: "selfie-instructions-wrapper" }, h("div", { class: "stepper stepper-vertical" }, h("ol", { class: "stepper_container" }, h("li", { class: "stepper__item", "data-step": "1" }, h("div", { class: "stepper__desc" }, this.translations["removeSpectacles"] || "Please remove spectacles.")), h("li", { class: "stepper__item", "data-step": "2" }, h("div", { class: "stepper__desc" }, this.translations["faceLightSource"] ||
      "Choose a place with ample light and position yourself to face the light source.	")), h("li", { class: "stepper__item", "data-step": "3" }, h("div", { class: "stepper__desc" }, this.translations["faceCircleTurnsGreen"] ||
      "Place your face in the middle of the circle and make sure the circle turns green.")), h("li", { class: "stepper__item", "data-step": "4" }, h("div", { class: "stepper__desc" }, this.translations["stablePlatform"] ||
      "Place the device on a stable platform to avoid shaking.")), h("li", { class: "stepper__item", "data-step": "5" }, h("div", { class: "stepper__desc" }, this.translations["faceOccupiesScreen"] ||
      "Make sure your face occupies most of the camera screen and", "\u00A0", h("span", { class: "stepper__desc--bold" }, this.translations["withoutSpeaking"] || "stay still without speaking."))), h("li", { class: "stepper__item", "data-step": "6" }, h("div", { class: "stepper__desc" }, this.translations["AllowCameraMic"] || "Allow camera and mic access."))), h("div", { class: "selfie-allow-action" }, h("div", { class: "allow-action-wrapper" }, h("button", { class: "allow-action-button", onClick: this.allowCameraMicHandler, disabled: !!this.mediaStream }, "Allow Access")), h("div", { class: "allow-action-wrapper" }, this.hasError && (h("div", { class: "allow-action-text allow-action-text__error" }, this.translations["CameraMicError"] ||
      "Please open your browser settings and allow access to the camera and microphone.")), !!this.mediaStream && (h(Fragment, null, h("img", { src: getImagePath("img/selfie-allow-success.svg") }), h("div", { class: "allow-action-text allow-action-text__success" }, this.translations["CameraMicSuccess"] ||
      "Camera and Microphone Access Granted. Click the 'Get Started' button below to proceed.")))))))), h("button", { class: "avw-selfie-intro-block-1__actions--button", onClick: this.getStartedHandler, disabled: !this.mediaStream }, this.translations["getStarted"] || "Get Started")))));
  }
  static get assetsDirs() { return ["img"]; }
};
__decorate([
  readyToTranslate("selfieUpload")
], AegonVideoSelfieIntro.prototype, "translate", null);
AegonVideoSelfieIntro.style = aegonVideoSelfieIntroCss;

export { AegonVideoSelfieIntro as aegon_video_selfie_intro };
