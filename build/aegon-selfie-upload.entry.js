import { r as registerInstance, e as createEvent, h } from './index-342d7c7e.js';
import { r as readyToTranslate } from './readyToTranslate-7d3b84bc.js';

const aegonSelfieUploadCss = "@media screen and (min-width: 480px){.avw-selfie-upload .avw-selfie-recording,.avw-selfie-upload .avw-selfie-submit{width:50%;margin:auto}.avw-selfie-upload .avw-selfie-recording__recorder{margin:auto}}.avw-selfie-upload .aegon-bottomsheet-content-topbar{display:none}.avw-selfie-upload .aegon-bottomsheet-base{display:flex;flex-direction:column;gap:1rem;align-items:center}.avw-selfie-upload .aegon-bottomsheet .agn-primary-button__action{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.2rem;margin-bottom:3rem}@media screen and (max-width: 768px){.avw-selfie-upload .aegon-bottomsheet .agn-primary-button__action{margin-bottom:2rem}}.avw-selfie-upload .aegon-bottomsheet .agn-primary-button__action--button{border:1px solid;width:208px;height:64px;font-size:22px;font-weight:800;padding:14px 40px;color:#fff;font-weight:bold;border-radius:8px;box-shadow:0 9px 17px 0 rgba(38, 133, 245, 0.28);background:#153050}.avw-selfie-upload .aegon-bottomsheet .agn-primary-button__action--button::after{background:#fff;content:\"\";height:120px;left:-75px;opacity:0.2;position:absolute;top:76px;transform:rotate(35deg);transition:all 550ms cubic-bezier(0.19, 1, 0.22, 1);width:50px;z-index:1}.avw-selfie-upload .aegon-bottomsheet .agn-primary-button__action--button:hover::after{left:120%;transition:all 550ms cubic-bezier(0.19, 1, 0.22, 1)}";

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
const AegonSelfieUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.successModalClose = createEvent(this, "success-modal-close", 7);
    this.skipSelfieUpload = createEvent(this, "skip-selfie-upload", 7);
    this.translations = {};
    this.onResumeRecording = () => {
      this.isVideoPaused = false;
      window.dispatchEvent(new CustomEvent("resume-recording"));
    };
    this.resumeRecordingModal = () => {
      return (this.isVideoPaused && (h("aegon-bottomsheet", { open: this.isVideoPaused, active: "true" }, h("div", { slot: "header" }, this.translations["faceUndetect"] ||
        "Unable to detect face, please face towards camera and resume recording."), h("button", { slot: "footer", type: "button", class: "agn-primary-button agn-primary-button__action--button", onClick: this.onResumeRecording }, h("span", null, this.translations["resumeRecording"] || "RESUME RECORDING")))));
    };
    this.onCloseUploadSuccessModal = () => {
      this.isUploadComplete = false;
      this.successModalClose.emit();
    };
    this.uploadSuccessModal = () => {
      return (this.isUploadComplete && (h("aegon-bottomsheet", { open: this.isUploadComplete, active: "true" }, h("div", { slot: "header" }, this.translations["videoSubmitted"] || "Your video has been successfully submitted."), h("button", { slot: "footer", type: "button", class: "agn-primary-button agn-primary-button__action--button", onClick: this.onCloseUploadSuccessModal }, h("span", null, " ", this.translations["close"] || "CLOSE", " ")))));
    };
    this.onClickRetry = () => {
      this.retryCount += 1;
      this.hasError = false;
      if (this.retryCount > this.maxRetries) {
        this.skipSelfieUpload.emit();
        return;
      }
      this.onShowIntroPage();
    };
    this.retryModal = () => {
      return (this.hasError && (h("aegon-bottomsheet", { "v-if": "hasError", open: this.hasError, active: "true" }, h("div", { slot: "header" }, this.translations["selfieError"] ||
        "We just wanted to double-check and make sure we got the video perfectly! Would you mind giving it another shot, just for good measure?"), h("button", { slot: "footer", type: "button", class: "agn-primary-button agn-primary-button__action--button", onClick: this.onClickRetry }, h("span", null, this.translations["tryAgain"] || "TRY AGAIN")))));
    };
    this.durationTime = undefined;
    this.imageCaptureTime = undefined;
    this.faceApiConfig = undefined;
    this.uploadApiConfig = undefined;
    this.maxRetries = 1;
    this.isIntroPage = true;
    this.isRecordingPage = false;
    this.isSubmitPage = false;
    this.imageFile = undefined;
    this.videoFile = undefined;
    this.isVideoPaused = false;
    this.isUploadComplete = false;
    this.hasError = false;
    this.retryCount = 0;
  }
  translate() { }
  toggleSelfieSteps(steps) {
    this.isIntroPage = !!steps.introPage;
    this.isRecordingPage = !!steps.recordingPage;
    this.isSubmitPage = !!steps.submitPage;
  }
  onRequestMediaAccess() {
    setTimeout(() => {
      this.toggleSelfieSteps({ recordingPage: true });
    }, 500);
  }
  onCompleteRecording({ detail }) {
    this.videoFile = detail || null;
  }
  onImageCaptured({ detail }) {
    this.imageFile = detail || null;
    if (detail) {
      setTimeout(() => {
        this.toggleSelfieSteps({ submitPage: true });
      }, 1000);
    }
  }
  onRetakeVideo() {
    setTimeout(() => {
      this.toggleSelfieSteps({ recordingPage: true });
    }, 500);
  }
  onShowIntroPage() {
    this.toggleSelfieSteps({ introPage: true });
  }
  /**
   * Modal for face detection error
   */
  onFaceNotDetected() {
    this.isVideoPaused = true;
  }
  /**
   * Modal for successful upload
   */
  onUploadSuccess() {
    this.isUploadComplete = true;
  }
  /**
   * Modal for error is selfie process
   */
  onSelfieError() {
    this.hasError = true;
  }
  render() {
    return (h("div", { class: "avw-selfie-upload" }, this.isIntroPage && h("aegon-video-selfie-intro", null), this.isRecordingPage && (h("aegon-video-selfie-recording", { durationTime: this.durationTime, imageCaptureTime: this.imageCaptureTime, faceApiConfig: this.faceApiConfig })), this.isSubmitPage && (h("aegon-video-selfie-submit", { imageFile: this.imageFile, videoFile: this.videoFile, apiConfig: this.uploadApiConfig, retryCount: this.retryCount, maxRetries: this.maxRetries })), this.resumeRecordingModal(), this.uploadSuccessModal(), this.retryModal()));
  }
};
__decorate([
  readyToTranslate("selfieUpload")
], AegonSelfieUpload.prototype, "translate", null);
AegonSelfieUpload.style = aegonSelfieUploadCss;

export { AegonSelfieUpload as aegon_selfie_upload };
