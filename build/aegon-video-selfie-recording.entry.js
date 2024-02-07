import { r as registerInstance, f as createEvent, h, F as Fragment } from './index-a5cee193.js';
import { r as requestUserMedia, g as getAudioMeter, d as drawDetection, a as getMediaRecorder, c as createVideoFile, b as createImageFile, e as animateCircleDraw, V as VIDEO_CAPTURE_SCORE_THRESHOLD, f as detectFace, I as IMAGE_CAPTURE_SCORE_THRESHOLD, h as getImagePath, l as loadFaceApiModels, i as releaseUserMedia } from './index-e48189fc.js';
import { E as EColors, R as RECORD_BUTTON_TIP, r as readyToTranslate } from './index-a1654354.js';

const micIconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIj4NCiAgPHBhdGggZD0iTTMuNSA2LjVBLjUuNSAwIDAgMSA0IDd2MWE0IDQgMCAwIDAgOCAwVjdhLjUuNSAwIDAgMSAxIDB2MWE1IDUgMCAwIDEtNC41IDQuOTc1VjE1aDNhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMSAwLTFoM3YtMi4wMjVBNSA1IDAgMCAxIDMgOFY3YS41LjUgMCAwIDEgLjUtLjV6TTEwIDhhMiAyIDAgMSAxLTQgMFYzYTIgMiAwIDEgMSA0IDB2NXpNOCAwYTMgMyAwIDAgMC0zIDN2NWEzIDMgMCAwIDAgNiAwVjNhMyAzIDAgMCAwLTMtM3oiLz4NCjwvc3ZnPg0K';

const recordIconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0wLjAzIC0wLjAzIDQ4LjAzIDQ4LjAzIj4NCiAgPGRlZnM+DQogICAgPGNsaXBQYXRoIGlkPSJBIj4NCiAgICAgIDxwYXRoIGQ9Ik0wIDBoNDh2NDhIMHoiIGZpbGw9Im5vbmUiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIDxnIGNsaXAtcGF0aD0idXJsKCNBKSI+DQogICAgPHBhdGggZD0iTTI0LDQ4QTI0LDI0LDAsMSwxLDQ4LDI0LDI0LjAyNywyNC4wMjcsMCwwLDEsMjQsNDhNMjQsMS40NTRBMjIuNTQ1LDIyLjU0NSwwLDEsMCw0Ni41NDUsMjQsMjIuNTcxLDIyLjU3MSwwLDAsMCwyNCwxLjQ1NCIgZmlsbD0iIzlkOWQ5ZCIvPg0KICAgIDxwYXRoIGQ9Ik0zMi43MjcsMjRBOC43MjgsOC43MjgsMCwxLDEsMjQsMTUuMjczLDguNzI3LDguNzI3LDAsMCwxLDMyLjcyNywyNCIvPg0KICA8L2c+DQo8L3N2Zz4NCg==';

const clockIconSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiPg0KICA8cGF0aCBkPSJNMzQwLjY3NyAyNzUuNjI5aC02NS4xMzF2LTY1LjEzMWMwLTEwLjc5NS04Ljc1Mi0xOS41NDctMTkuNTQ3LTE5LjU0N3MtMTkuNTQ3IDguNzUyLTE5LjU0NyAxOS41NDd2ODQuNjc5YzAgMTAuNzk1IDguNzUyIDE5LjU0NyAxOS41NDcgMTkuNTQ3aDg0LjY3OGMxMC43OTUgMCAxOS41NDctOC43NTIgMTkuNTQ3LTE5LjU0N3MtOC43NTItMTkuNTQ4LTE5LjU0Ny0xOS41NDh6bS02NS4xMzMtMTYxLjkyOFY3My41NTloMTkuNTQ3YzEwLjc5NSAwIDE5LjU0Ny04Ljc1MiAxOS41NDctMTkuNTQ3cy04Ljc1Mi0xOS41NDctMTkuNTQ3LTE5LjU0N2gtNzguMTg4Yy0xMC43OTUgMC0xOS41NDcgOC43NTItMTkuNTQ3IDE5LjU0N3M4Ljc1MiAxOS41NDcgMTkuNTQ3IDE5LjU0N2gxOS41NDZWMTEzLjdjLTkxLjQ0IDkuNzg1LTE2Mi44OTMgODcuMzk3LTE2Mi44OTMgMTgxLjM5MiAwIDEwMC41OTkgODEuODQzIDE4Mi40NDMgMTgyLjQ0MSAxODIuNDQzczE4Mi40NDEtODEuODQ0IDE4Mi40NDItMTgyLjQ0MWMtLjAwMi05My45OTYtNzEuNDU2LTE3MS42MDgtMTYyLjg5NS0xODEuMzkzek0yNTUuOTk3IDQzOC40NGMtNzkuMDQxIDAtMTQzLjM0Ni02NC4zMDYtMTQzLjM0Ni0xNDMuMzQ5czY0LjMwNS0xNDMuMzQ2IDE0My4zNDYtMTQzLjM0NiAxNDMuMzQ2IDY0LjMwNiAxNDMuMzQ3IDE0My4zNDktNjQuMzA1IDE0My4zNDUtMTQzLjM0NyAxNDMuMzQ2ek01MTEuNjIgMjQ0LjI0OGMtMTMuNTgxLTY4LjI4LTUyLjkzOC0xMjcuMTgzLTExMC44MjEtMTY1Ljg2MWExOS41NSAxOS41NSAwIDAgMC0yMS43MjEgMzIuNTA3YzQ5LjIwMiAzMi44NzYgODIuNjU1IDgyLjk0NCA5NC4xOTggMTQwLjk4MSAxLjg1MSA5LjMwMiAxMC4wMTYgMTUuNzM4IDE5LjE1MSAxNS43MzhhMTkuNzEgMTkuNzEgMCAwIDAgMy44MzMtLjM3OWMxMC41ODktMi4xMDcgMTcuNDY1LTEyLjM5OCAxNS4zNi0yMi45ODZ6TTEzOC4zMTMgODMuNzgxYy01Ljk5OC04Ljk3Ni0xOC4xMzktMTEuMzkxLTI3LjExMy01LjM5NEM1My4zMTcgMTE3LjA2NCAxMy45NTkgMTc1Ljk2OC4zNzkgMjQ0LjI0OGMtMi4xMDYgMTAuNTg4IDQuNzcxIDIwLjg3OSAxNS4zNTkgMjIuOTg1YTE5LjcyIDE5LjcyIDAgMCAwIDMuODM0LjM3OWM5LjEzNSAwIDE3LjMwMS02LjQzNiAxOS4xNTEtMTUuNzM4IDExLjU0Mi01OC4wMzcgNDQuOTk2LTEwOC4xMDUgOTQuMTk3LTE0MC45OCA4Ljk3Ni01Ljk5OCAxMS4zOTEtMTguMTM3IDUuMzkzLTI3LjExM3oiLz4NCjwvc3ZnPg0K';

const aegonVideoSelfieRecordingCss = ".avw-selfie-recording{display:flex;max-width:480px;padding:2rem 1.5rem;margin:0 auto;height:100%;flex-direction:column;justify-content:space-between;font-family:Arial, Helvetica, sans-serif;color:var(--avw-txt-color, #71717a)}.avw-selfie-recording__recorder{flex:1;position:relative;width:100%;align-self:center;margin-bottom:3px}.avw-selfie-recording__recorder--video{width:100%;height:100%;border-radius:10px;z-index:1;object-fit:cover}.avw-selfie-recording__recorder--canvas{position:absolute;left:50%;top:45%;transform:translate(-50%, -45%)}.avw-selfie-recording__recorder--fallback{min-height:360px;background:var(--avw-recorder-fallback-bg, #e8e8e8);position:relative;border-radius:10px}.avw-selfie-recording__recorder--fallback::after{content:attr(fallback-content);padding:2rem;display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;left:0;right:0}@media screen and (max-width: 480px){.avw-selfie-recording__recorder--fallback{min-height:550px}}.avw-selfie-recording__actions{height:55px;display:flex;align-items:center;justify-content:space-between;padding:0 1rem 0.5rem;border-top:1px solid;position:relative;background-color:white}@media screen and (max-width: 768px){.avw-selfie-recording__actions{position:sticky;bottom:0}}.avw-selfie-recording__actions--mic{display:flex}.avw-selfie-recording__actions--mic img{height:25px}.avw-selfie-recording__actions--mic img:first-child{margin-right:0.375rem}.avw-selfie-recording__actions--tooltip{position:absolute;left:50%;top:-50px}.avw-selfie-recording__actions--tooltip .aegon-tooltip-tip.top{font-family:inherit;width:220px;bottom:5px;font-size:12px;padding:10px}.avw-selfie-recording__actions--record-btn{outline:none;cursor:pointer;background:transparent;height:5rem;width:5rem;padding:0;border-radius:50%;border:none;z-index:1;position:absolute;left:50%;transform:translateX(-50%)}.avw-selfie-recording__actions--record-btn img{background:var(--avw-record-btn-bg, white);border-radius:50%;height:80px}.avw-selfie-recording__actions--record-btn:disabled img{background:var(--avw-record-btn-disabled-bg, lightgray);cursor:not-allowed}.avw-selfie-recording__actions--timer{display:flex;justify-content:center;align-items:flex-end}.avw-selfie-recording__actions--timer img{height:30px;margin-right:0.375rem}.avw-selfie-recording__actions--timer span{font-size:1.25rem;font-family:inherit}.avw-selfie-recording__actions--right{position:absolute;right:0}.avw-selfie-recording__info{text-align:center;margin-top:2rem}.avw-selfie-recording .btn-container{text-align:center;margin-bottom:32px}.avw-selfie-recording .btn-container .instruction-btn{cursor:pointer;font-family:Manrope;font-weight:800;font-size:22px;padding:13px 40px;border:2px #1272e2 solid !important;border:none;border-radius:8px;text-align:center;color:#1272e2 !important;background-color:#fff}@media screen and (max-width: 768px){.avw-selfie-recording .btn-container .instruction-btn{font-size:16px;padding:13px 24px}}.avw-selfie-recording .avw-selfie-intro-title{letter-spacing:0.75px;margin-bottom:0.75rem;font-size:24px;font-weight:bold;line-height:1.5;text-align:center;color:#002b47}@media screen and (max-width: 768px){.avw-selfie-recording .avw-selfie-intro-title{font-size:20px}}.avw-selfie-recording .avw-selfie-subtitle{margin-bottom:2rem;font-size:18px;font-weight:500;line-height:1.5;letter-spacing:normal;text-align:center;color:#094771}@media screen and (max-width: 768px){.avw-selfie-recording .avw-selfie-subtitle{font-size:14px;margin-bottom:24px}}.avw-selfie-recording .instruction-container{padding:24px;overflow:auto;font-family:Manrope}@media screen and (max-width: 768px){.avw-selfie-recording .instruction-container{padding:40px 32px}}.avw-selfie-recording .instruction-container .instruction-title{display:flex;flex-flow:row;align-items:center;color:#002b47;font-weight:bold;font-size:16px;align-items:center}.avw-selfie-recording .instruction-container .instruction-title>div{padding-left:24px}.avw-selfie-recording .instruction-container .section-divider{border-top:solid 2px #cddae2;margin:24px 0}.avw-selfie-recording .selfie-auth-note{height:70px;display:flex;justify-content:center;border:solid 1px #fff;border-radius:8px;padding:16px;box-shadow:0 8px 40px 0 rgba(112, 144, 176, 0.25);margin-top:26px}@media screen and (max-width: 768px){.avw-selfie-recording .selfie-auth-note{height:58px;padding:12px}}.avw-selfie-recording .selfie-auth-note .auth-note-wrapper{display:flex;justify-content:center;align-items:center}.avw-selfie-recording .selfie-auth-note .auth-note-wrapper img{margin-right:8px}@media screen and (max-width: 768px){.avw-selfie-recording .selfie-auth-note .auth-note-wrapper img{width:20px;height:20px;margin-right:12px}}.avw-selfie-recording .selfie-auth-note .auth-note-wrapper .auth-note-text{display:flex;align-items:flex-end;font-weight:300;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.avw-selfie-recording .selfie-auth-note .auth-note-wrapper .auth-note-text{font-size:12px}}.stepper-vertical{padding:0 28px}.stepper-vertical .stepper_container .stepper__item{position:relative;display:flex;flex-direction:row;align-items:center;gap:1rem;padding:0 0 21px 0}.stepper-vertical .stepper_container .stepper__item:before{content:\"\";flex:0 0 32px;height:32px;width:32px;border-radius:50%;background-color:#006bd7;position:relative;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28)}.stepper-vertical .stepper_container .stepper__item:not(:last-child):after{content:\"\";position:absolute;left:0;top:calc(14px + var(--spacing));bottom:-25px;transform:translateX(0.8823529412rem);width:3.5px;background-color:#006bd7}@media screen and (max-width: 420px){.stepper-vertical .stepper_container .stepper__item:nth-child(2){min-height:3.5rem}.stepper-vertical .stepper_container .stepper__item:nth-child(2) .stepper__title{top:16px;z-index:2}.stepper-vertical .stepper_container .stepper__item:nth-child(3){min-height:4.5rem}.stepper-vertical .stepper_container .stepper__item:nth-child(3) .stepper__title{top:15px;z-index:2}}.stepper-vertical .stepper__title{font-family:Manrope-Bold;margin-bottom:clamp(0.85rem, 2vmax, 1rem);position:absolute;top:7px;left:13px;color:#fff;font-size:12px}.stepper-vertical .stepper__desc{display:flex;text-align:left;font-weight:600;font-size:14px;letter-spacing:normal;color:#094771}@media screen and (max-width: 768px){.stepper-vertical .stepper__desc{font-size:12px}}.stepper-vertical .stepper__desc--bold{background-color:#fbec96;border-radius:6px;margin-left:2px;padding:0px 4px}";

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
const AegonVideoSelfieRecording = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mediaAccessDenied = createEvent(this, "media-access-denied", 7);
    this.mediaAccessError = createEvent(this, "media-access-error", 7);
    this.mediaRecorderError = createEvent(this, "media-recorder-error", 7);
    this.faceNotDetected = createEvent(this, "face-not-detected", 7);
    this.completeRecording = createEvent(this, "complete-recording", 7);
    this.imageCaptured = createEvent(this, "image-captured", 7);
    this.modalOpen = createEvent(this, "modalOpen", 7);
    this.modalClose = createEvent(this, "modalClose", 7);
    this.translations = {};
    this.startStream = async () => {
      const result = await requestUserMedia();
      if (result.data) {
        this.mediaStream = result.data;
        this.audioMeter = getAudioMeter(this.mediaStream);
        //
        if (this.videoEl && this.mediaStream) {
          this.videoEl.srcObject = this.mediaStream;
          this.videoEl.onloadeddata = () => {
            drawDetection(this.canvasEl, this.videoEl, { isDefault: true });
            this.runDeferredFaceApiModel(true);
          };
        }
      }
      if (result.warning) {
        this.videoFallback = result.warning;
        this.mediaAccessDenied.emit(result.warning);
      }
      if (result.errMessage) {
        this.videoFallback = result.errMessage;
        this.mediaAccessError.emit(result.errMessage);
      }
    };
    this.initRecorder = (stream) => {
      var _a;
      const result = getMediaRecorder(stream);
      if (result.data) {
        this.mediaRecorder = result.data;
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
      }
      if (result.errMessage) {
        (_a = this.mediaRecorderError) === null || _a === void 0 ? void 0 : _a.emit(result.errMessage);
      }
    };
    this.handleDataAvailable = (event) => {
      var _a, _b;
      if (((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.size) > 0 && ((_b = this.mediaRecorder) === null || _b === void 0 ? void 0 : _b.state) === "recording") {
        if (this.isCapturingImage) {
          this.imageChunks.push(event.data);
          if (this.imageChunks.length <= this.imageCaptureTime) {
            this.currentDuration -= 1;
          }
          if (this.currentDuration <= 0) {
            this.currentDuration = this.imageCaptureTime;
            this.imageChunks.splice(0, this.imageChunks.length);
          }
        }
        else {
          this.mediaChunks.push(event.data);
          console.log("current mediaChunks length", this.mediaChunks.length);
          if (this.mediaChunks.length <= this.durationTime) {
            this.currentDuration -= 1;
            console.log("currentDuration reduced:", this.currentDuration);
          }
          if (this.mediaChunks.length >= this.durationTime && this.currentDuration <= 0) {
            console.log("stop condition");
            this.stopRecording();
            const finalBlob = new Blob(this.mediaChunks);
            const videoFile = createVideoFile(finalBlob);
            this.completeRecording.emit(videoFile);
          }
        }
      }
    };
    this.captureImage = () => {
      const imageFile = createImageFile(this.imgCanvasEl, this.videoEl);
      animateCircleDraw(this.canvasEl, this.videoEl, this.imageCaptureTime * 1000, () => {
        var _a;
        this.isImageCaptured = !!imageFile;
        this.imageCaptured.emit(imageFile);
        //
        (_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.stop();
      });
    };
    this.startMicCheckCounter = () => {
      this.micCheckCounter = setInterval(() => {
        this.micVolume = this.audioMeter();
      }, 1000);
    };
    this.stopMicCheckCounter = () => {
      this.micVolume = 0;
      clearInterval(this.micCheckCounter);
    };
    this.startRecording = async () => {
      var _a, _b;
      this.initRecorder(this.mediaStream);
      if (((_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.state) === "inactive") {
        this.currentDuration = this.durationTime;
        this.startMicCheckCounter();
        /**
         * start media recorder with 1s time slice
         * to get series of blob events with each 1s long duration
         */
        (_b = this.mediaRecorder) === null || _b === void 0 ? void 0 : _b.start(1000);
        this.isRecording = true;
        this.runFaceApiModel(false);
      }
    };
    this.stopRecording = () => {
      var _a, _b;
      if (((_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.state) === "recording") {
        (_b = this.mediaRecorder) === null || _b === void 0 ? void 0 : _b.stop();
        this.isRecording = false;
        this.stopMicCheckCounter();
        setTimeout(this.startImageCapture, 1000);
      }
    };
    this.startImageCapture = () => {
      var _a;
      this.currentDuration = this.imageCaptureTime;
      this.isCapturingImage = true;
      (_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.start(1000);
      this.runFaceApiModelForImageCapture();
    };
    this.pauseRecording = () => {
      var _a, _b;
      if (((_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.state) === "recording") {
        (_b = this.mediaRecorder) === null || _b === void 0 ? void 0 : _b.pause();
        this.isRecording = false;
        this.stopMicCheckCounter();
      }
    };
    this.handleDetectionFail = () => {
      this.pauseRecording();
      this.faceNotDetected.emit();
    };
    this.runFaceApiModel = async (runOnce) => {
      const { videoCaptureThreshold = VIDEO_CAPTURE_SCORE_THRESHOLD } = this.faceApiConfig;
      if (this.isRecording || runOnce) {
        const { data: detection, errMessage } = await detectFace(this.videoEl, videoCaptureThreshold);
        if (errMessage) {
          return;
        }
        if (!runOnce) {
          if (detection) {
            drawDetection(this.canvasEl, this.videoEl, { isDetected: true });
            requestAnimationFrame(() => this.runDeferredFaceApiModel(false));
          }
          else {
            drawDetection(this.canvasEl, this.videoEl, { isDetected: false });
            this.handleDetectionFail();
          }
          //
        }
        else {
          this.isFaceApiLoaded = true;
        }
      }
    };
    this.runDeferredFaceApiModel = (isOnce, timer = 300) => {
      setTimeout(async () => {
        await this.runFaceApiModel(isOnce);
      }, timer);
    };
    this.runFaceApiModelForImageCapture = async () => {
      const { imageCaptureThreshold = IMAGE_CAPTURE_SCORE_THRESHOLD } = this.faceApiConfig;
      if (!this.isImageCaptured) {
        const { data: detection, errMessage } = await detectFace(this.videoEl, imageCaptureThreshold);
        if (errMessage) {
          return;
        }
        if (detection) {
          drawDetection(this.canvasEl, this.videoEl, { isDetected: true });
          if (detection.score && detection.score > imageCaptureThreshold) {
            this.canvasEl.width = 0;
            this.canvasEl.height = 0;
            this.captureImage();
            return;
          }
        }
        else {
          drawDetection(this.canvasEl, this.videoEl, { isDetected: false });
          this.runDeferredFaceApiModelForImageCapture();
        }
      }
    };
    this.runDeferredFaceApiModelForImageCapture = (timer = 300) => {
      setTimeout(async () => {
        await this.runFaceApiModelForImageCapture();
      }, timer);
    };
    this.getMicStatusColor = (volume = 0, min) => {
      return volume > min ? EColors.SUCCESS : EColors.GRAY_LIGHT;
    };
    this.getMicStatusIcon = (volume) => {
      return (h("svg", { x: "0px", y: "0px", height: "25", viewBox: "0 0 472.615 472.615" }, h("rect", { y: "308.559", width: "30", height: "154.565", fill: this.getMicStatusColor(volume, 0) }), h("rect", { x: "90.752", y: "248.793", width: "30", height: "214.39", fill: this.getMicStatusColor(volume, 15) }), h("rect", { x: "181.484", y: "188.928", width: "30", height: "274.215", fill: this.getMicStatusColor(volume, 30) }), h("rect", { x: "272.226", y: "129.063", width: "30", height: "334.05", fill: this.getMicStatusColor(volume, 60) }), h("rect", { x: "362.969", y: "69.297", width: "30", height: "393.846", fill: this.getMicStatusColor(volume, 80) })));
    };
    this.instructionButton = () => {
      return (h("div", { class: "btn-container" }, h("button", { class: "instruction-btn", onClick: () => this.modalOpen.emit("instruction") }, this.translations["instruction"] || "Instructions"), h("agn-modal", { modalId: "instruction" }, h("div", { class: "instruction-container agn-scroll" }, h("div", { class: "instruction-title" }, h("img", { src: getImagePath("img/modal-title.png"), alt: "instruction" }), h("div", null, this.translations["instruction"] || "Instructions", " ")), h("div", { class: "section-divider" }), h("div", { class: "selfie-instructions-wrapper" }, h("div", { class: "stepper stepper-vertical" }, h("ol", { class: "stepper_container" }, h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "1"), h("div", { class: "stepper__desc" }, this.translations["removeSpectacles"] || "Please remove spectacles.")), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "2"), h("div", { class: "stepper__desc" }, this.translations["faceLightSource"] ||
        "Choose a place with ample light and position yourself to face the light source.")), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "3"), h("div", { class: "stepper__desc" }, this.translations["faceCircleTurnsGreen"] ||
        "Place your face in the middle of the circle and make sure the circle turns green.")), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "4"), h("div", { class: "stepper__desc" }, this.translations["stablePlatform"] || "Place the device on a stable platform to avoid shaking.")), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "5"), h("div", { class: "stepper__desc" }, this.translations["faceOccupiesScreen"] || "Make sure your face occupies most of the camera screen and", "\u00A0", h("span", { class: "stepper__desc--bold" }, this.translations["withoutSpeaking"] || "stay still without speaking."))), h("li", { class: "stepper__item" }, h("div", { class: "stepper__title" }, "6"), h("div", { class: "stepper__desc" }, this.translations["AllowCameraMic"] || "Allow camera and mic access.")))))))));
    };
    this.durationTime = 10;
    this.imageCaptureTime = 3;
    this.faceApiConfig = {};
    this.currentDuration = this.durationTime;
    this.mediaRecorder = null;
    this.mediaStream = null;
    this.mediaChunks = [];
    this.imageChunks = [];
    this.videoFallback = null;
    this.micVolume = 0;
    this.micCheckCounter = null;
    this.isFaceApiLoaded = false;
    this.isRecording = false;
    this.isImageCaptured = false;
    this.isCapturingImage = false;
  }
  translate() { }
  onModalClose() {
    this.modalClose.emit();
  }
  async componentWillLoad() {
    await loadFaceApiModels(this.faceApiConfig.modelsPath);
  }
  async componentDidLoad() {
    this.isImageCaptured = false;
    this.isCapturingImage = false;
    this.isRecording = false;
    releaseUserMedia(this.mediaStream);
    await this.startStream();
  }
  disconnectedCallback() {
    releaseUserMedia(this.mediaStream);
  }
  async resumeRecording(event) {
    var _a, _b;
    if (event) {
      event.preventDefault();
    }
    if (((_a = this.mediaRecorder) === null || _a === void 0 ? void 0 : _a.state) === "paused") {
      (_b = this.mediaRecorder) === null || _b === void 0 ? void 0 : _b.resume();
      this.isRecording = true;
      this.startMicCheckCounter();
      await this.runFaceApiModel(false);
    }
  }
  render() {
    return (h("div", { class: "avw-selfie-recording" }, this.isCapturingImage ? (h(Fragment, null, h("div", { class: "avw-selfie-intro-title" }, this.translations["beAsStillYouAre"] || "Be as still as you can..."), h("div", { class: "avw-selfie-subtitle" }, this.translations["pleaseSitStill"] ||
      "To make sure we capture your picture correctly, we request you please sit still."))) : (h(Fragment, null, h("div", { class: "avw-selfie-intro-title" }, !this.isRecording
      ? this.translations["beforeYouStart"] || "Before you Start"
      : this.translations["beAsStillYouAre"] || "Be as still as you can..."), h("div", { class: "avw-selfie-subtitle" }, !this.isRecording
      ? this.translations["startRecording"] ||
        "Please place your face in the circle and when the circle turns green, press record to start recording."
      : this.translations["pleaseHoldStill"] ||
        "Please hold still and continue to position your face is in the middle of the circle."))), h("div", { class: "instruction-button" }, this.instructionButton()), h("div", { "fallback-content": this.videoFallback || "", class: {
        "avw-selfie-recording__recorder": true,
        "avw-selfie-recording__recorder--fallback": !(this.videoEl && this.videoEl.readyState === 4),
      } }, h("video", { class: "avw-selfie-recording__recorder--video", ref: video => (this.videoEl = video), playsinline: true, autoplay: true, muted: true }), h("canvas", { class: "avw-selfie-recording__recorder--canvas", ref: canvas => (this.canvasEl = canvas) }), h("canvas", { ref: canvas => (this.imgCanvasEl = canvas), width: "0", height: "0" })), h("div", { class: "avw-selfie-recording__actions" }, !this.isCapturingImage && (h(Fragment, null, h("div", { class: "avw-selfie-recording__actions--mic" }, h("img", { src: micIconSvg, alt: "Mic Icon" }), this.getMicStatusIcon(this.micVolume)), h("aegon-tooltip", { class: "avw-selfie-recording__actions--tooltip", direction: "top", content: this.translations["videoRecord"] || RECORD_BUTTON_TIP }, h("button", { class: "avw-selfie-recording__actions--record-btn", onClick: this.startRecording, disabled: !this.isFaceApiLoaded ||
        !(this.videoEl && this.videoEl.readyState === 4) ||
        this.isRecording ||
        this.currentDuration !== this.durationTime }, h("img", { src: recordIconSvg, alt: "Button Icon" }))))), h("div", { class: {
        "avw-selfie-recording__actions--timer": true,
        "avw-selfie-recording__actions--right": this.isCapturingImage,
      } }, h("img", { src: clockIconSvg, alt: "Clock Icon" }), h("span", null, this.currentDuration))), !this.isRecording && !this.isCapturingImage && (h("div", { class: "selfie-auth-note" }, h("div", { class: "auth-note-wrapper" }, h("img", { src: getImagePath("img/lock-icon.webp") }), h("div", { class: "auth-note-text" }, this.translations["videoVerificationTwo"] ||
      "This video will only be used for identity verification. It will not be visible to anyone else."))))));
  }
  static get assetsDirs() { return ["assets", "img"]; }
};
__decorate([
  readyToTranslate("selfieUpload")
], AegonVideoSelfieRecording.prototype, "translate", null);
AegonVideoSelfieRecording.style = aegonVideoSelfieRecordingCss;

export { AegonVideoSelfieRecording as aegon_video_selfie_recording };
