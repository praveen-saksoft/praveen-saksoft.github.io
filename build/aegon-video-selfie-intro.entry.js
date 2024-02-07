import { e as Build, g as getAssetPath, r as registerInstance, f as createEvent, h } from './index-a5cee193.js';
import { E as EColors, I as IMAGE_MIME_TYPE, D as DEFAULT_IMAGE_DOC_TYPE, a as DEFAULT_VIDEO_DOC_TYPE, V as VIDEO_MIME_TYPE, G as GA_ERROR_EVENT, b as GA_ERROR_EVENT_LABEL, c as GA_DEFAULT_ERR, p as parseUA, r as readyToTranslate } from './index-a1654354.js';

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
  const ua = navigator.userAgent;
  const data = parseUA(ua);
  // const parser = new UAParser();
  // const data = parser.getResult();
  console.log({ data });
};

const aegonVideoSelfieIntroCss = ":root{--circle-size:clamp(1.5rem, 5vw, 50px);--spacing:clamp(0.25rem, 2vw, 0.5rem)}.avw-selfie-intro{margin-top:4rem;padding:2rem 1rem;display:flex}@media screen and (max-width: 768px){.avw-selfie-intro{flex-direction:column;margin-top:1rem}}.avw-selfie-intro .avw-selfie-intro-block-1{font-family:Arial, Helvetica, sans-serif;color:var(--avw-txt-color, #71717a);width:100%}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1{width:100%;margin-right:0px}}.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-intro-title{letter-spacing:0.75px;margin-bottom:16px;font-size:24px;font-weight:bold;line-height:1.5;text-align:center;color:#002b47}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-intro-title{font-size:20px}}.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-subtitle{margin-bottom:2rem;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:normal;text-align:center;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .avw-selfie-subtitle{font-size:14px;margin-bottom:24px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block{border-radius:8px;box-shadow:0 7px 94px 0 rgba(1, 109, 217, 0.2);border:solid 1.5px #ddf3ff}@media (max-width: 597px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block{padding:0 0px 24px 0}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instruction-heading{background-color:#ddf3ff;border-radius:8px 8px 0px 0px;font-size:18px;font-family:Manrope;font-weight:800;color:#002b47;padding:16px 0px;margin:0 auto;text-align:center}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instruction-heading{font-size:16px;padding:13px 0px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instructions-wrapper{padding:32px 150px 32px 40px}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-instructions-wrapper{padding:17px 12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content{display:flex;margin-bottom:10px;align-items:center}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .img-instruction{margin-right:16px}.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .instruction-sub-title{display:flex;text-align:left;font-weight:600;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .selfie-instruction-block .selfie-intruction-content .instruction-sub-title{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical{padding:0 28px}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item{position:relative;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0 0 21px 0}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:before{content:\"\";flex:0 0 32px;height:32px;width:32px;border-radius:50%;background-color:#006bd7;position:relative;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28)}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:not(:last-child):after{content:\"\";position:absolute;left:0;top:calc(14px + var(--spacing));bottom:-25px;transform:translateX(0.8823529412rem);width:3.5px;background-color:#006bd7}@media screen and (max-width: 420px){.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(2){min-height:3.5rem}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(2) .stepper__title{top:16px;z-index:2}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(3){min-height:4.5rem}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper_container .stepper__item:nth-child(3) .stepper__title{top:15px;z-index:2}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__title{font-family:Manrope-Bold;margin-bottom:clamp(0.85rem, 2vmax, 1rem);position:absolute;top:7px;left:13px;color:#fff;font-size:12px}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc{display:flex;text-align:left;font-weight:600;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc{font-size:12px}}.avw-selfie-intro .avw-selfie-intro-block-1 .stepper-vertical .stepper__desc--bold{background-color:#fbec96;border-radius:6px;margin-left:2px;padding:0px 4px}.avw-selfie-intro .avw-selfie-intro-block-1__actions{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.2rem;margin-bottom:3rem}@media screen and (max-width: 768px){.avw-selfie-intro .avw-selfie-intro-block-1__actions{margin-bottom:2rem}}.avw-selfie-intro .avw-selfie-intro-block-1__actions--button{border:1px solid;width:210px;height:60px;font-size:22px;font-weight:800;padding:17px 40px;color:white;font-weight:bold;border-radius:8px;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28);background-image:linear-gradient(75deg, #006bd7 5%, #0582ff 97%)}.avw-selfie-intro .avw-selfie-intro-block-1__actions--button:hover{background-image:linear-gradient(65deg, #024c7e -11%, #0568cb 97%)}";

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
    this.captureClickHandler = (e) => {
      e.preventDefault();
      this.requestMediaAccess.emit();
    };
  }
  translate() { }
  render() {
    getDeviceInfo();
    return (h("div", { class: "avw-selfie-intro" }, h("div", { class: "avw-selfie-intro-block-1" }, h("div", { class: "avw-selfie-intro-title" }, this.translations['takeVideoSelfie'] || 'Take a video selfie	'), h("div", { class: "avw-selfie-subtitle" }, this.translations['verifySelfieVideo'] || 'We will record a selfie video to verify your identification.'), h("div", { class: "avw-selfie-intro-block-1__actions" }, h("div", { class: "selfie-instruction-block" }, h("p", { class: "selfie-instruction-heading" }, this.translations['instruction'] || 'Instructions'), h("div", { class: "selfie-instructions-wrapper" }, h("div", { class: "stepper stepper-vertical" }, h("ol", { class: "stepper_container" }, h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "1"), h("div", { class: "stepper__desc" }, this.translations['removeSpectacles'] || 'Please remove spectacles.')), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "2"), h("div", { class: "stepper__desc" }, this.translations['faceLightSource'] || 'Choose a place with ample light and position yourself to face the light source.	')), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "3"), h("div", { class: "stepper__desc" }, this.translations['faceCircleTurnsGreen'] || 'Place your face in the middle of the circle and make sure the circle turns green.')), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "4"), h("div", { class: "stepper__desc" }, this.translations['stablePlatform'] || 'Place the device on a stable platform to avoid shaking.')), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "5"), h("div", { class: "stepper__desc" }, this.translations["faceOccupiesScreen"] || "Make sure your face occupies most of the camera screen and", "\u00A0", h("span", { class: "stepper__desc--bold" }, this.translations["withoutSpeaking"] || "stay still without speaking."))), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "6"), h("div", { class: "stepper__desc" }, this.translations['AllowCameraMic'] || 'Allow camera and mic access.')))))), h("button", { class: "avw-selfie-intro-block-1__actions--button", onClick: this.captureClickHandler }, this.translations['getStarted'] || 'Get Started')))));
  }
  static get assetsDirs() { return ["img"]; }
};
__decorate([
  readyToTranslate('selfieUpload')
], AegonVideoSelfieIntro.prototype, "translate", null);
AegonVideoSelfieIntro.style = aegonVideoSelfieIntroCss;

export { AegonVideoSelfieIntro as aegon_video_selfie_intro };
