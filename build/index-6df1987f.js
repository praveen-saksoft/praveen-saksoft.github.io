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

var EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",USER_AGENT="user-agent",UA_MAX_LENGTH=500,BRANDS="brands",FORMFACTOR="formFactor",FULLVERLIST="fullVersionList",PLATFORM="platform",PLATFORMVER="platformVersion",BITNESS="bitness",CH_HEADER="sec-ch-ua",CH_HEADER_FULL_VER_LIST=CH_HEADER+"-full-version-list",CH_HEADER_ARCH=CH_HEADER+"-arch",CH_HEADER_BITNESS=CH_HEADER+"-"+BITNESS,CH_HEADER_FORM_FACTOR=CH_HEADER+"-form-factor",CH_HEADER_MOBILE=CH_HEADER+"-"+MOBILE,CH_HEADER_MODEL=CH_HEADER+"-"+MODEL,CH_HEADER_PLATFORM=CH_HEADER+"-"+PLATFORM,CH_HEADER_PLATFORM_VER=CH_HEADER_PLATFORM+"-version",CH_ALL_VALUES=[BRANDS,FULLVERLIST,MOBILE,MODEL,PLATFORM,PLATFORMVER,ARCHITECTURE,FORMFACTOR,BITNESS],UA_BROWSER="browser",UA_DEVICE="device",UA_OS="os",UA_RESULT="result",APPLE="Apple",BLACKBERRY="BlackBerry",MICROSOFT="Microsoft",PREFIX_MOBILE="Mobile ",SUFFIX_BROWSER=" Browser",CHROME="Chrome",FIREFOX="Firefox",OPERA="Opera",WINDOWS="Windows",isWindow=typeof window!==UNDEF_TYPE,NAVIGATOR=isWindow&&window.navigator?window.navigator:void 0,NAVIGATOR_UADATA=NAVIGATOR&&NAVIGATOR.userAgentData?NAVIGATOR.userAgentData:void 0,extend=function(e,t){var i={};for(var r in e)i[r]=t[r]&&t[r].length%2==0?t[r].concat(e[r]):e[r];return i},enumerize=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},has=function(e,t){if(typeof e===OBJ_TYPE&&e.length>0){for(var i in e)if(lowerize(e[i])==lowerize(t))return !0;return !1}return !!isString(e)&&-1!==lowerize(t).indexOf(lowerize(e))},isExtensions=function(e){for(var t in e)return /^(browser|cpu|device|engine|os)$/.test(t)},isString=function(e){return typeof e===STR_TYPE},itemListToArray=function(e){if(e){for(var t=[],i=strip(/\\?\"/g,e).split(","),r=0;r<i.length;r++)if(i[r].indexOf(";")>-1){var E=trim(i[r]).split(";v=");t[r]={brand:E[0],version:E[1]};}else t[r]=trim(i[r]);return t}},lowerize=function(e){return isString(e)?e.toLowerCase():e},majorize=function(e){return isString(e)?strip(/[^\d\.]/g,e).split(".")[0]:void 0},setProps=function(e){for(var t in e){var i=e[t];typeof i==OBJ_TYPE&&2==i.length?this[i[0]]=i[1]:this[i]=void 0;}return this},strip=function(e,t){return isString(t)?t.replace(e,EMPTY):t},stripQuotes=function(e){return strip(/\\?\"/g,e)},trim=function(e,t){if(isString(e))return e=strip(/^\s\s*/,e),typeof t===UNDEF_TYPE?e:e.substring(0,UA_MAX_LENGTH)},rgxMapper=function(e,t){if(e&&t)for(var i,r,E,s,o,n,A=0;A<t.length&&!o;){var a=t[A],R=t[A+1];for(i=r=0;i<a.length&&!o&&a[i];)if(o=a[i++].exec(e))for(E=0;E<R.length;E++)n=o[++r],typeof(s=R[E])===OBJ_TYPE&&s.length>0?2===s.length?typeof s[1]==FUNC_TYPE?this[s[0]]=s[1].call(this,n):this[s[0]]=s[1]:3===s.length?typeof s[1]!==FUNC_TYPE||s[1].exec&&s[1].test?this[s[0]]=n?n.replace(s[1],s[2]):void 0:this[s[0]]=n?s[1].call(this,n,s[2]):void 0:4===s.length&&(this[s[0]]=n?s[3].call(this,n.replace(s[1],s[2])):void 0):this[s]=n||void 0;A+=2;}},strMapper=function(e,t){for(var i in t)if(typeof t[i]===OBJ_TYPE&&t[i].length>0){for(var r=0;r<t[i].length;r++)if(has(t[i][r],e))return i===UNKNOWN?void 0:i}else if(has(t[i],e))return i===UNKNOWN?void 0:i;return t.hasOwnProperty("*")?t["*"]:e},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},formFactorMap={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:["VR","XR","Watch"],"?":["Desktop","Unknown"],"*":void 0},defaultRegexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,PREFIX_MOBILE+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" GX"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/(?:ms|\()(ie) ([\w\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UCBrowser"]],[/fxios\/([\w\.-]+)/i],[VERSION,[NAME,PREFIX_MOBILE+FIREFOX]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android"+SUFFIX_BROWSER]],[/chrome\/([\w\.]+) mobile/i],[VERSION,[NAME,PREFIX_MOBILE+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[VERSION,[NAME,PREFIX_MOBILE+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[NAME,PREFIX_MOBILE+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[NAME,PREFIX_MOBILE+FIREFOX],VERSION],[/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i],[NAME,VERSION]],device:[[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/(macintosh);/i],[MODEL,[VENDOR,APPLE]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[VERSION,strMapper,windowsVersionMap],[NAME,WINDOWS]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,"macOS"],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/(hurd|linux|unix) ?([\w\.]*)/i],[NAME,VERSION]]},defaultProps=function(){var e={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return setProps.call(e.init,[[UA_BROWSER,[NAME,VERSION,MAJOR]],[UA_DEVICE,[TYPE,MODEL,VENDOR]],[UA_OS,[NAME,VERSION]]]),setProps.call(e.isIgnore,[[UA_BROWSER,[VERSION,MAJOR]],[UA_OS,[VERSION]]]),setProps.call(e.isIgnoreRgx,[[UA_BROWSER,/ ?browser$/i],[UA_OS,/ ?os$/i]]),setProps.call(e.toString,[[UA_BROWSER,[NAME,VERSION]],[UA_DEVICE,[VENDOR,MODEL]],[UA_OS,[NAME,VERSION]]]),e}(),createIData=function(e,t){var i=defaultProps.init[t],r=defaultProps.isIgnore[t]||0,E=defaultProps.isIgnoreRgx[t]||0,s=defaultProps.toString[t]||0;function o(){setProps.call(this,i);}return o.prototype.getItem=function(){return e},o.prototype.withClientHints=function(){return NAVIGATOR_UADATA?NAVIGATOR_UADATA.getHighEntropyValues(CH_ALL_VALUES).then((function(t){return e.setCH(new UACHData(t,!1)).parseCH().get()})):e.parseCH().get()},o.prototype.withFeatureCheck=function(){return e.detectFeature().get()},t!=UA_RESULT&&(o.prototype.is=function(e){var t=!1;for(var i in this)if(this.hasOwnProperty(i)&&!has(r,i)&&lowerize(E?strip(E,this[i]):this[i])==lowerize(E?strip(E,e):e)){if(t=!0,e!=UNDEF_TYPE)break}else if(e==UNDEF_TYPE&&t){t=!t;break}return t},o.prototype.toString=function(){var e=EMPTY;for(var t in s)typeof this[s[t]]!==UNDEF_TYPE&&(e+=(e?" ":EMPTY)+this[s[t]]);return e||UNDEF_TYPE}),NAVIGATOR_UADATA||(o.prototype.then=function(e){var t=this,i=function(){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);};i.prototype={is:o.prototype.is,toString:o.prototype.toString};var r=new i;return e(r),r}),new o};function UACHData(e,t){if(e=e||{},setProps.call(this,CH_ALL_VALUES),t)setProps.call(this,[[BRANDS,itemListToArray(e[CH_HEADER])],[FULLVERLIST,itemListToArray(e[CH_HEADER_FULL_VER_LIST])],[MOBILE,/\?1/.test(e[CH_HEADER_MOBILE])],[MODEL,stripQuotes(e[CH_HEADER_MODEL])],[PLATFORM,stripQuotes(e[CH_HEADER_PLATFORM])],[PLATFORMVER,stripQuotes(e[CH_HEADER_PLATFORM_VER])],[ARCHITECTURE,stripQuotes(e[CH_HEADER_ARCH])],[FORMFACTOR,itemListToArray(e[CH_HEADER_FORM_FACTOR])],[BITNESS,stripQuotes(e[CH_HEADER_BITNESS])]]);else for(var i in e)this.hasOwnProperty(i)&&typeof e[i]!==UNDEF_TYPE&&(this[i]=e[i]);}function UAItem(e,t,i,r){return this.get=function(e){return e?this.data.hasOwnProperty(e)?this.data[e]:void 0:this.data},this.set=function(e,t){return this.data[e]=t,this},this.setCH=function(e){return this.uaCH=e,this},this.detectFeature=function(){if(NAVIGATOR&&NAVIGATOR.userAgent==this.ua)switch(this.itemType){case UA_BROWSER:NAVIGATOR.brave&&typeof NAVIGATOR.brave.isBrave==FUNC_TYPE&&this.set(NAME,"Brave");break;case UA_DEVICE:!this.get(TYPE)&&NAVIGATOR_UADATA&&NAVIGATOR_UADATA[MOBILE]&&this.set(TYPE,MOBILE),"Macintosh"==this.get(MODEL)&&NAVIGATOR&&typeof NAVIGATOR.standalone!==UNDEF_TYPE&&NAVIGATOR.maxTouchPoints&&NAVIGATOR.maxTouchPoints>2&&this.set(MODEL,"iPad").set(TYPE,TABLET);break;case UA_OS:!this.get(NAME)&&NAVIGATOR_UADATA&&NAVIGATOR_UADATA[PLATFORM]&&this.set(NAME,NAVIGATOR_UADATA[PLATFORM]);break;case UA_RESULT:var e=this.data,t=function(t){return e[t].getItem().detectFeature().get()};this.set(UA_BROWSER,t(UA_BROWSER)).set(UA_DEVICE,t(UA_DEVICE)).set(UA_OS,t(UA_OS));}return this},this.parseUA=function(){return this.itemType!=UA_RESULT&&rgxMapper.call(this.data,this.ua,this.rgxMap),this.itemType==UA_BROWSER&&this.set(MAJOR,majorize(this.get(VERSION))),this},this.parseCH=function(){var e=this.uaCH;this.rgxMap;switch(this.itemType){case UA_BROWSER:var t,i=e[FULLVERLIST]||e[BRANDS];if(i)for(var r in i){var E=strip(/(Google|Microsoft) /,i[r].brand||i[r]),s=i[r].version;/not.a.brand/i.test(E)||t&&(!/chrom/i.test(t)||/chromi/i.test(E))||(this.set(NAME,E).set(VERSION,s).set(MAJOR,majorize(s)),t=E);}break;case UA_DEVICE:if(e[MOBILE]&&this.set(TYPE,MOBILE),e[MODEL]&&this.set(MODEL,e[MODEL]),"Xbox"==e[MODEL]&&this.set(TYPE,CONSOLE).set(VENDOR,MICROSOFT),e[FORMFACTOR]){var o;if("string"!=typeof e[FORMFACTOR])for(var n=0;!o&&n<e[FORMFACTOR].length;)o=strMapper(e[FORMFACTOR][n++],formFactorMap);else o=strMapper(e[FORMFACTOR],formFactorMap);this.set(TYPE,o);}break;case UA_OS:var A=e[PLATFORM];if(A){var a=e[PLATFORMVER];A==WINDOWS&&(a=parseInt(majorize(a),10)>=13?"11":"10"),this.set(NAME,A).set(VERSION,a);}this.get(NAME)==WINDOWS&&"Xbox"==e[MODEL]&&this.set(NAME,"Xbox").set(VERSION,void 0);break;case UA_RESULT:var R=this.data,O=function(t){return R[t].getItem().setCH(e).parseCH().get()};this.set(UA_BROWSER,O(UA_BROWSER)).set(UA_DEVICE,O(UA_DEVICE)).set(UA_OS,O(UA_OS));}return this},setProps.call(this,[["itemType",e],["ua",t],["uaCH",r],["rgxMap",i],["data",createIData(this,e)]]),this}function UAParser(e,t,i){if(typeof e===OBJ_TYPE?(isExtensions(e)?(typeof t===OBJ_TYPE&&(i=t),t=e):(i=e,t=void 0),e=void 0):typeof e!==STR_TYPE||isExtensions(t)||(i=t,t=void 0),!(this instanceof UAParser))return new UAParser(e,t,i).getResult();var r=typeof e===STR_TYPE?e:NAVIGATOR&&NAVIGATOR.userAgent?NAVIGATOR.userAgent:i&&i[USER_AGENT]?i[USER_AGENT]:EMPTY,E=new UACHData(i,!0),s=t?extend(defaultRegexes,t):defaultRegexes,o=function(e){return e==UA_RESULT?function(){return new UAItem(e,r,s,E).set("ua",r).set(UA_BROWSER,this.getBrowser()).set(UA_DEVICE,this.getDevice()).set(UA_OS,this.getOS()).get()}:function(){return new UAItem(e,r,s[e],E).parseUA().get()}};return setProps.call(this,[["getBrowser",o(UA_BROWSER)],["getDevice",o(UA_DEVICE)],["getOS",o(UA_OS)],["getResult",o(UA_RESULT)],["getUA",function(){return r}],["setUA",function(e){return isString(e)&&(r=e.length>UA_MAX_LENGTH?trim(e,UA_MAX_LENGTH):e),this}]]).setUA(r),this}UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]),UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);

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

export { DEFAULT_IMAGE_DOC_TYPE as D, EColors as E, FACE_API_MODELS_PATH as F, GA_ERROR_EVENT as G, IMAGE_MIME_TYPE as I, MEDIA_MIME_TYPE as M, NO_MEDIA_ACCESS as N, PLAY_BUTTON_TIP as P, RECORD_BUTTON_TIP as R, UAParser as U, VIDEO_MIME_TYPE as V, DEFAULT_VIDEO_DOC_TYPE as a, GA_ERROR_EVENT_LABEL as b, GA_DEFAULT_ERR as c, DEFAULT_VIDEO_WIDTH as d, DEFAULT_VIDEO_HEIGHT as e, DEFAULT_FRAME_RATE as f, DEFAULT_CAMERA_FACING as g, DEFAULT_FACE_API_INPUT_SIZE as h, DEFAULT_FACE_API_SCORE as i, DEFAULT_DOC_NAME as j, DEFAULT_IMAGE_CATEGORY as k, DEFAULT_VIDEO_CATEGORY as l, GA_MESSAGE as m, MEDIA_ACCESS_REQUEST as n, DEFAULT_ERR as o, MEDIA_RECORDER_ERR as p, EUploadErrors as q, readyToTranslate as r, RETAKE_BUTTON_TIP as s };
