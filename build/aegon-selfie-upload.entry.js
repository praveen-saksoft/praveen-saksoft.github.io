import { r as registerInstance, h } from './index-b6b593ed.js';

const aegonSelfieUploadCss = "";

const AegonSelfieUpload = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.durationTime = undefined;
    this.imageCaptureTime = undefined;
    this.faceApiConfig = undefined;
    this.uploadApiConfig = undefined;
    this.isIntroPage = true;
    this.isRecordingPage = false;
    this.isSubmitPage = false;
    this.imageFile = undefined;
    this.videoFile = undefined;
  }
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
  render() {
    return (h("div", { class: "avw-selfie-upload" }, this.isIntroPage && h("aegon-video-selfie-intro", null), this.isRecordingPage && (h("aegon-video-selfie-recording", { durationTime: this.durationTime, imageCaptureTime: this.imageCaptureTime, faceApiConfig: this.faceApiConfig })), this.isSubmitPage && (h("aegon-video-selfie-submit", { imageFile: this.imageFile, videoFile: this.videoFile, apiConfig: this.uploadApiConfig }))));
  }
};
AegonSelfieUpload.style = aegonSelfieUploadCss;

export { AegonSelfieUpload as aegon_selfie_upload };
