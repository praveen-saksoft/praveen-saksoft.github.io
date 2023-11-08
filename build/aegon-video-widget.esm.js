import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-b6b593ed.js';
export { s as setNonce } from './index-b6b593ed.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.22.2 | MIT Licensed | https://stenciljs.com
 */
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-c525f6e4.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            var _a;
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                // Apply CSP nonce to the script tag if it exists
                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                if (nonce != null) {
                    script.setAttribute('nonce', nonce);
                }
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["aegon-selfie-upload",[[0,"aegon-selfie-upload",{"durationTime":[2,"duration-time"],"imageCaptureTime":[2,"image-capture-time"],"faceApiConfig":[16],"uploadApiConfig":[16],"isIntroPage":[32],"isRecordingPage":[32],"isSubmitPage":[32],"imageFile":[32],"videoFile":[32]},[[0,"request-media-access","onRequestMediaAccess"],[0,"complete-recording","onCompleteRecording"],[0,"image-captured","onImageCaptured"],[8,"retake-video","onRetakeVideo"],[8,"show-intro-page","onShowIntroPage"]]]]],["aegon-otp-custom-widget",[[0,"aegon-otp-custom-widget",{"error":[1],"showLoader":[4,"show-loader"],"label":[1],"submitOtp":[8,"submit-otp"],"resendOtp":[8,"resend-otp"],"time":[8],"maskedMobileNo":[1,"masked-mobile-no"],"isDisabled":[4,"is-disabled"],"screenMode":[1,"screen-mode"],"otpWidgetTitle":[1,"otp-widget-title"],"OtpLength":[2,"otp-length"],"otpMessage":[1,"otp-message"],"otp":[32],"validationError":[32],"showResendOTP":[32],"userBlocked":[32]},[[0,"otpComplete","onOtpComplete"],[0,"timedOut","onTimerTimeout"]]]]],["aegon-otp-widget",[[0,"aegon-otp-widget",{"error":[1],"showLoader":[4,"show-loader"],"label":[1],"submitOtp":[8,"submit-otp"],"resendOtp":[8,"resend-otp"],"time":[8],"maskedMobileNo":[1,"masked-mobile-no"],"isDisabled":[4,"is-disabled"],"otpMessage":[1,"otp-message"],"otp":[32],"validationError":[32],"showResendOTP":[32],"userBlocked":[32]},[[0,"otpComplete","onOtpComplete"],[0,"timedOut","onTimerTimeout"]]]]],["aegon-comp",[[0,"aegon-comp",{"ageValue":[32]}]]],["aegon-track-my-policy",[[0,"aegon-track-my-policy",{"data":[8],"header":[8],"active":[4],"enableUpload":[4,"enable-upload"],"policyNotIssued":[4,"policy-not-issued"],"toggleFeature":[16],"tasks":[32],"currentTask":[32],"expand":[32]}]]],["aegon-age-widget2",[[0,"aegon-age-widget2",{"dateCallback":[520,"date-callback"],"minAge":[2,"min-age"],"maxAge":[2,"max-age"],"ageValue":[2,"age-value"],"showYears":[32],"showMonths":[32],"showDate":[32],"selectedYear":[32],"selectedMonth":[32],"daysInMonth":[32],"title":[32]}]]],["aegon-bottomsheet",[[4,"aegon-bottomsheet",{"open":[1028],"active":[4],"overlayclick":[8]},[[8,"keydown","handleScroll"]]]]],["aegon-button-loader",[[0,"aegon-button-loader"]]],["aegon-copy",[[4,"aegon-copy",{"content":[1],"persist":[4],"tooltipContent":[1,"tooltip-content"],"showIcon":[32],"showTooltip":[32]}]]],["aegon-date-picker",[[0,"aegon-date-picker",{"name":[1],"identifier":[1],"disabled":[516],"role":[1],"direction":[1],"required":[4],"dateLength":[2,"date-length"],"separator":[1],"value":[1537],"min":[1537],"max":[1537],"firstDayOfWeek":[2,"first-day-of-week"],"localization":[16],"placeHolder":[1,"place-holder"],"dateAdapter":[16],"isDateDisabled":[16],"activeFocus":[32],"focusedDay":[32],"open":[32],"setFocus":[64],"show":[64],"hide":[64]},[[6,"click","handleDocumentClick"]]]]],["aegon-date-widget",[[0,"aegon-date-widget",{"dateCallback":[520,"date-callback"],"yearRange":[2,"year-range"],"minDate":[1,"min-date"],"showYears":[32],"showMonths":[32],"showDate":[32],"selectedYear":[32],"selectedMonth":[32],"daysInMonth":[32],"title":[32],"minYear":[32],"maxYear":[32],"minSelectedDate":[32],"minSelectedMonth":[32]}]]],["aegon-date-widget-v1",[[0,"aegon-date-widget-v1",{"dateCallback":[520,"date-callback"],"minDate":[1,"min-date"],"maxDate":[1,"max-date"],"showYears":[32],"showMonths":[32],"showDate":[32],"selectedYear":[32],"selectedMonth":[32],"daysInMonth":[32],"title":[32],"minYear":[32],"maxYear":[32],"minSelectedDate":[32],"maxSelectedDate":[32],"minSelectedMonth":[32],"maxSelectedMonth":[32]}]]],["aegon-dialog",[[4,"aegon-dialog",{"confirmAction":[8,"confirm-action"],"cancelAction":[8,"cancel-action"],"dialogTitle":[1,"dialog-title"],"resolveLabel":[1,"resolve-label"],"rejectLabel":[1,"reject-label"]}]]],["aegon-document-upload",[[4,"aegon-document-upload",{"apiConfig":[16],"apiRequestMetaData":[16],"mergeRequestMetaData":[16],"multiple":[4],"mergeMultiple":[4,"merge-multiple"],"maxDocumentsToMerge":[2,"max-documents-to-merge"],"accept":[1],"uploadToggler":[4,"upload-toggler"],"uploadOnSelect":[4,"upload-on-select"],"hasDragDrop":[4,"has-drag-drop"],"disabled":[4],"selectedFiles":[1040],"uploadedFilesMap":[1040],"uploadedProgressMap":[1040],"uploadProgressCallback":[16],"cancelUploadCallback":[16],"maxFileSize":[2,"max-file-size"],"toCancelUpload":[4,"to-cancel-upload"],"uploadDelayTime":[2,"upload-delay-time"],"mergeDelayTime":[2,"merge-delay-time"],"apiRequest":[32],"dragDropFocus":[32],"mergeRequest":[32],"fileError":[32]}]]],["aegon-progress",[[0,"aegon-progress",{"progressAmount":[1,"progress-amount"],"textSuffix":[1,"text-suffix"],"huaAdj":[2,"hua-adj"],"colored":[4],"borderWidth":[1,"border-width"],"height":[1],"width":[1],"isCircle":[4,"is-circle"],"bgColor":[1537,"bg-color"]}]]],["aegon-rupee-textbox",[[0,"aegon-rupee-textbox",{"commaSeparatedValue":[1,"comma-separated-value"],"validationMessage":[1,"validation-message"],"labelText":[1,"label-text"],"indexTab":[2,"index-tab"],"required":[4],"isError":[32],"stateCommaSeparatedValue":[32]}]]],["aegon-typeahead-dropdown",[[0,"aegon-typeahead-dropdown",{"validationMessage":[1,"validation-message"],"outofRangeMessage":[1,"outof-range-message"],"dataSource":[8,"data-source"],"dataSourceId":[1,"data-source-id"],"name":[1],"placeHolder":[1,"place-holder"],"required":[4],"selectedOption":[1,"selected-option"],"isDisabled":[4,"is-disabled"],"indexTab":[1,"index-tab"],"optionKey":[1,"option-key"],"optionValue":[1,"option-value"],"helpText":[1,"help-text"],"showOptions":[32],"backupDataSource":[32],"isError":[32]}]]],["aegon-tooltip",[[4,"aegon-tooltip",{"content":[1],"direction":[1],"hideDelay":[2,"hide-delay"],"autoHide":[4,"auto-hide"],"active":[32]},[[4,"proceedAction","onProceed"]]]]],["aegon-video-selfie-recording",[[0,"aegon-video-selfie-recording",{"durationTime":[2,"duration-time"],"imageCaptureTime":[2,"image-capture-time"],"faceApiConfig":[16],"currentDuration":[32],"mediaRecorder":[32],"mediaStream":[32],"mediaChunks":[32],"imageChunks":[32],"videoFallback":[32],"micVolume":[32],"micCheckCounter":[32],"isFaceApiLoaded":[32],"isRecording":[32],"isImageCaptured":[32],"isCapturingImage":[32]},[[0,"modalClosed","onModalClose"],[8,"resume-recording","resumeRecording"]]]]],["aegon-video-selfie-submit",[[0,"aegon-video-selfie-submit",{"apiConfig":[16],"imageFile":[16],"videoFile":[16],"isUploading":[32]}]]],["aegon-age-widget",[[0,"aegon-age-widget",{"dateCallback":[520,"date-callback"],"minAge":[2,"min-age"],"maxAge":[2,"max-age"],"ageValue":[2,"age-value"],"showYears":[32],"showMonths":[32],"showDate":[32],"selectedYear":[32],"selectedMonth":[32],"daysInMonth":[32],"title":[32],"checkSelection":[32]}]]],["aegon-video-selfie-intro",[[0,"aegon-video-selfie-intro"]]],["aegon-otp-input",[[0,"aegon-otp-input",{"otpLength":[2,"otp-length"],"autoFocusFirst":[4,"auto-focus-first"],"clearInput":[4,"clear-input"],"otp":[32],"isEdited":[32],"activeFocusIndex":[32]},[[4,"clearOtp","clearInputHandler"]]]]],["aegon-timer",[[0,"aegon-timer",{"timeLimitInSeconds":[2,"time-limit-in-seconds"],"preText":[1,"pre-text"],"typeMinuteAndSeconds":[8,"type-minute-and-seconds"],"remainingTimeInSeconds":[32]}]]],["aegon-button",[[4,"aegon-button",{"submitHandler":[16],"type":[1],"isLoading":[4,"is-loading"],"label":[1],"size":[1],"disabled":[4],"fadeOut":[4,"fade-out"]}]]]], options);
});
