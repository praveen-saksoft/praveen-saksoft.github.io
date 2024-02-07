function readyToTranslate(page, property = 'translations') {
  return function (target, propertyKey, descriptor) {
    const { componentWillLoad, disconnectedCallback, render } = target;
    target.componentWillLoad = async function () {
      try {
        if (page) {
          const currentLocale = localStorage.getItem('language') || 'en';
          let labels = JSON.parse(localStorage.getItem('appLabels'));
          this[property] = labels ? labels[currentLocale][page] : {};
          return componentWillLoad && componentWillLoad.apply(this);
        }
      }
      catch (e) {
        console.log(e);
      }
    };
    target.disconnectedCallback = function () {
      this[property] = null;
      return disconnectedCallback && disconnectedCallback.apply(this);
    };
    target.render = function () {
      const renderResult = render.call(this);
      return renderResult;
    };
  };
}

function parseUA(e){var i={};return i.full=e,i.name=browserName(e),i.version=version(e,i.name),i.fullName=i.name+" "+i.version,i.os=os(e),i.device_type=getDeviceType(e),i}function version(e,i){if("safari"===i&&(i="version"),i)return new RegExp(i+"[\\/ ]([\\d\\w\\.-]+)","i").exec(e)&&RegExp.$1||"";var o=e.match(/version[\/ ]([\d\w\.]+)/i);return o&&o.length>1?o[1]:""}const operatingSystems={iPad:/ipad/i,iPhone:/iphone/i,Android:/android/i,"Windows 10":/windows nt 10\.0/i,"Windows 7 or 8":/windows nt 6\.\d+/i,"Windows Vista":/windows nt 6\.0/i,"Windows 2003":/windows nt 5\.2+/i,"Windows XP":/windows nt 5\.1+/i,"Windows 2000":/windows nt 5\.0+/i,"OS X $1.$2":/os x (\d+)[._](\d+)/i,Linux:/linux/i,Googlebot:/googlebot/i},osNames=Object.keys(operatingSystems);function os(e){for(var i,o=0,t=osNames.length;o<t;++o)if(i=operatingSystems[osNames[o]].exec(e))return ~osNames[o].indexOf("$1")?osNames[o].replace(/\$(\d+)/g,(function(e,o){return i[o]})):osNames[o];return ""}var names=["edge","opera","konqueror","firefox","chrome","epiphany","safari","msie","curl","maxthon"];function browserName(e){e=e.toLowerCase();for(var i=0,o=names.length;i<o;++i)if(-1!==e.indexOf(names[i]))return names[i];return ""}var defaultOptions={emptyUserAgentDeviceType:"desktop",unknownUserAgentDeviceType:"phone",botUserAgentDeviceType:"bot"},devices={tv:"tv",tablet:"tablet",phone:"phone",desktop:"desktop",bot:"bot"};function getDeviceType(e){return options=defaultOptions||{},e&&""!==e?e.match(/GoogleTV|SmartTV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)||e.match(/Xbox|PLAYSTATION 3|Wii/i)?devices.tv:e.match(/iP(a|ro)d/i)||e.match(/tablet/i)&&!e.match(/RX-34/i)||e.match(/FOLIO/i)||e.match(/Linux/i)&&e.match(/Android/i)&&!e.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)||e.match(/Kindle/i)||e.match(/Mac OS/i)&&e.match(/Silk/i)||e.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i)||e.match(/MB511/i)&&e.match(/RUTEM/i)?devices.tablet:e.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)||e.match(/Opera/i)&&e.match(/Windows NT 5/i)&&e.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)?devices.phone:e.match(/Windows (NT|XP|ME|9)/)&&!e.match(/Phone/i)&&!e.match(/Bot|Spider|ia_archiver|NewsGator/i)||e.match(/Win( ?9|NT)/i)||e.match(/Macintosh|PowerPC/i)&&!e.match(/Silk/i)||e.match(/Linux/i)&&e.match(/X11/i)&&!e.match(/Charlotte/i)||e.match(/CrOS/)||e.match(/Solaris|SunOS|BSD/i)?devices.desktop:e.match(/curl|Bot|B-O-T|Crawler|Spider|Spyder|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|Charlotte|NewsGator|TinEye|Cerberian|SearchSight|Zao|Scrubby|Qseero|PycURL|Pompos|oegp|SBIder|yoogliFetchAgent|yacy|webcollage|VYU2|voyager|updated|truwoGPS|StackRambler|Sqworm|silk|semanticdiscovery|ScoutJet|Nymesis|NetResearchServer|MVAClient|mogimogi|Mnogosearch|Arachmo|Accoona|holmes|htdig|ichiro|webis|LinkWalker|lwp-trivial/i)&&!e.match(/mobile|Playstation/i)?options.botUserAgentDeviceType||devices.bot:options.unknownUserAgentDeviceType||devices.phone:options.emptyUserAgentDeviceType||devices.desktop}

var EColors;
(function (EColors) {
  EColors["PRIMARY"] = "#006bd7";
  EColors["DANGER"] = "red";
  EColors["SUCCESS"] = "lime";
  EColors["GRAY_LIGHT"] = "#bababa";
  EColors["GRAY_LIGHTER"] = "#dbdbdb";
})(EColors || (EColors = {}));
var EMediaErrors;
(function (EMediaErrors) {
  EMediaErrors["DEFAULT_ERR"] = "MediaError";
  EMediaErrors["NOT_SUPPORTED_ERR"] = "NotSupportedError";
  EMediaErrors["ABORT_ERR"] = "AbortError";
  EMediaErrors["NOT_ALLOWED_ERR"] = "NotAllowedError";
  EMediaErrors["NOT_FOUND_ERR"] = "NotFoundError";
  EMediaErrors["NOT_READABLE_ERR"] = "NotReadableError";
})(EMediaErrors || (EMediaErrors = {}));
var EUploadErrors;
(function (EUploadErrors) {
  EUploadErrors["UPLOAD_ERR"] = "UploadError";
})(EUploadErrors || (EUploadErrors = {}));
var EFaceApiErrors;
(function (EFaceApiErrors) {
  EFaceApiErrors["MODEL_LOAD_ERR"] = "NotLoadedError";
})(EFaceApiErrors || (EFaceApiErrors = {}));

const DEFAULT_STREAM_DURATION = 10000; // in milliseconds
const DEFAULT_VIDEO_WIDTH = 320;
const DEFAULT_VIDEO_HEIGHT = 240;
const DEFAULT_FRAME_RATE = 30;
const CAMERA_FACING = Object.freeze({
  FRONT: "user",
  BACK: { exact: "environment" },
});
const DEFAULT_CAMERA_FACING = CAMERA_FACING.FRONT;
const VIDEO_MIME_TYPE = "video/mp4";
const MEDIA_MIME_TYPE = "video/webm";
const IMAGE_MIME_TYPE = "image/png";
const DEFAULT_FACE_API_INPUT_SIZE = 320;
const DEFAULT_FACE_API_SCORE = 0.5;
const FACE_API_MODELS_PATH = "/assets/face-api-models";
const DEFAULT_DOC_NAME = "LIVE_IMAGE";
const DEFAULT_IMAGE_CATEGORY = "IMAGE";
const DEFAULT_VIDEO_CATEGORY = "VIDEO";
const DEFAULT_IMAGE_DOC_TYPE = "SVPHT";
const DEFAULT_VIDEO_DOC_TYPE = "SVDVR";
/** GA event constants */
const GA_ERROR_EVENT = "techError";
const GA_ERROR_EVENT_LABEL = "selfie_page_error";

const DEFAULT_ERR = "Something went wrong, please try again later";
const NO_MEDIA_ACCESS = "Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.";
const MEDIA_ACCESS_REQUEST = "Please provide us access to your camera and microphone, which is required to complete your recording";
const MEDIA_RECORDER_ERR = "Cannot start the Recorder";
const RECORD_BUTTON_TIP = "Click here to record your video & Keep your face inside the circle";
const PLAY_BUTTON_TIP = "Click here to play";
const RETAKE_BUTTON_TIP = "Click here to retake";
/** GA messages */
const GA_DEFAULT_ERR = "Some error occurred";
const GA_MESSAGE = {
  error: {
    "SYST_DENIED_ERR": "system denied access to camera/mic",
    "USER_DENIED_ERR": "user denied access to camera/mic",
    "IN_USE_ERR": "another application using camera/mic",
    "NO_SUPPORT_ERR": "device not supported",
    "DEFAULT_MEDIA_ERR": "unable to detect camera/mic",
    "IMAGE_UPLOAD_ERR": "failed to upload image",
    "VIDEO_UPLOAD_ERR": "failed to upload video",
    "MODEL_NOT_LOADED_ERR": "failed to load face-api model",
    "DEFAULT_ERR": GA_DEFAULT_ERR,
  }
};

export { DEFAULT_IMAGE_DOC_TYPE as D, EColors as E, FACE_API_MODELS_PATH as F, GA_ERROR_EVENT as G, IMAGE_MIME_TYPE as I, MEDIA_MIME_TYPE as M, NO_MEDIA_ACCESS as N, PLAY_BUTTON_TIP as P, RECORD_BUTTON_TIP as R, VIDEO_MIME_TYPE as V, DEFAULT_VIDEO_DOC_TYPE as a, GA_ERROR_EVENT_LABEL as b, GA_DEFAULT_ERR as c, DEFAULT_VIDEO_WIDTH as d, DEFAULT_VIDEO_HEIGHT as e, DEFAULT_FRAME_RATE as f, DEFAULT_CAMERA_FACING as g, DEFAULT_FACE_API_INPUT_SIZE as h, DEFAULT_FACE_API_SCORE as i, DEFAULT_DOC_NAME as j, DEFAULT_IMAGE_CATEGORY as k, DEFAULT_VIDEO_CATEGORY as l, GA_MESSAGE as m, MEDIA_ACCESS_REQUEST as n, DEFAULT_ERR as o, parseUA as p, MEDIA_RECORDER_ERR as q, readyToTranslate as r, EUploadErrors as s, RETAKE_BUTTON_TIP as t };
