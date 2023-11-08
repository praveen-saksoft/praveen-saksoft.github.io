import { r as registerInstance, f as createEvent, h, g as getElement } from './index-b6b593ed.js';

const aegonTypeaheadDropdownCss = ":root{--main-border-color:#0069b4;--notissue-border-color:#e85a55;--primary-border-color:#6191a7;--secondary-border-color:#d7eeff;--white-back-color:#fff;--main-back-color:#3395d3;--stopper-height:4px;--stopper-width:4px}.typeahead-search .form-group{position:relative;max-width:100%}.typeahead-search .form-group>label{position:absolute;top:-10px;bottom:0;font-size:16px;left:20px;color:rgba(0, 0, 0, 0.6);will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s}.typeahead-search .form-group>label.error{color:#b00020}.typeahead-search input[type=search]{border:none;background-image:none;background-color:transparent;box-shadow:none;outline:none;background:#f5f5f5;border:none;border-bottom:1px solid #1f3b6a;color:#333;height:56px;width:100%;padding-left:16px;padding-top:16px;font-size:16px;display:block;-webkit-box-shadow:none;-moz-box-shadow:none}.typeahead-search input[type=search].error{border-bottom:1px solid #b00020 !important}.typeahead-search input[type=search]::-webkit-search-cancel-button{position:relative;right:10px;top:5px;height:20px;width:20px;border-radius:10px;cursor:pointer;-webkit-appearance:none;background-repeat:no-repeat;background-size:contain;position:absolute;cursor:pointer;padding-left:5px;width:50px;height:50px;color:#000;background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='53.7' height='53.7' viewBox='0 0 53.7 53.7'><path opacity='.6' fill='%23666E6E' d='M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z'/></svg>\")}.typeahead-search input[type=search]:disabled{opacity:0.6;border-bottom:1px solid #f5f5f5}.typeahead-search input[type=search]:disabled+label{top:-22px;font-size:12px;left:16px}.typeahead-search input:focus+label,.typeahead-search input:valid+label{color:rgba(0, 0, 0, 0.6);font-size:0.8em;width:auto;margin:0px;outline:0;transition:0.2s ease-in-out;top:-20px;left:17px;font-family:16px;height:20px}.typeahead-search section.datalist{border:1px solid rgba(0, 0, 0, 0.15);border-radius:0.25rem;padding-left:0;margin:0;max-height:200px;position:absolute;z-index:1;width:100%;background:#fff;border-radius:3px;-webkit-box-shadow:0 8px 6px -6px #f5f5f5;-moz-box-shadow:0 8px 6px -6px #f5f5f5;box-shadow:0 8px 6px -6px #f5f5f5;scroll-behavior:smooth;overflow-y:scroll;}.typeahead-search section.datalist::-webkit-scrollbar{-webkit-appearance:none;width:3px}.typeahead-search section.datalist::-webkit-scrollbar-thumb{border-radius:1px;background-color:rgba(0, 0, 0, 0.2);-webkit-box-shadow:0 0 1px rgba(255, 255, 255, 0.5)}.typeahead-search section.datalist button{transition:all 0.2s ease-in-out;list-style:none;padding:15px 10px;display:block;width:100%;outline:none;border:none;background:white;text-align:left;font-size:16px;color:rgba(0, 0, 0, 0.87)}.typeahead-search section.datalist button.selected{background-color:#f5f5f5}.typeahead-search section.datalist button:focus-within{background-color:#f5f5f5}.typeahead-search section.datalist button:hover{background-color:#f5f5f5;cursor:pointer}.typeahead-search section.datalist button:focus{background-color:#f5f5f5}.typeahead-search section.datalist button a{text-decoration:none;color:#000}.typeahead-search section.datalist.open{display:block}.typeahead-search section.datalist.close{display:none}.typeahead-search label{font-size:16px;position:absolute;top:0;left:0;pointer-events:none;transform:translateY(30px);transition:all 0.2s ease-in-out}.typeahead-search label.required:after{content:\"*\";margin-left:1px;margin-right:0px}.typeahead-search p:before{content:\"\"}.typeahead-search p#typeahead-help{min-height:20px;opacity:1;margin:0;display:flex;align-items:flex-end;padding:0 15px;font-size:0.75rem;font-weight:400;letter-spacing:0.0333333em;text-decoration:inherit;text-transform:inherit}.typeahead-search p.error{color:#b00020}";

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_BACK = 8;
const KEY_ENTER = 13;
const NOT_FOUND = -1;
const FIRST_OPTION = ".btn-1";
const VALIDATION_ERR = "Please select value from dropdown";
const OUT_OF_RANGE_ERR = "Please select data within the provided range";
const HIDDEN_FIELD_CLASS = "typeahead-hidden";
const TYPEAHED_INPUT_CLASS = "typeahead-search";
const AegonTypeaheadDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onTypeaheadError = createEvent(this, "onTypeaheadError", 7);
    /**
     * Hides the options upon click on document outside of textbox.
     * @param event
     */
    this.onDocumentClick = (event) => {
      const { id } = event.target;
      if (id !== this.name) {
        this.displayOtionsList(false);
      }
      else {
        this.validateInput();
      }
    };
    /**
     *
     * @param event onKeyUP
     * Interacts with UP/DOWN arrow and select appropriate option.
     */
    this.onKeyUp = (event) => {
      let searchTerm = event.target.value.trim();
      const keyCode = event.which;
      if (this.backupDataSource) {
        if (keyCode === KEY_DOWN) {
          //@ts-ignore
          this.element.querySelector(FIRST_OPTION).focus();
          this.displayOtionsList(true);
        }
        if (keyCode === KEY_BACK) {
          this.displayOtionsList(true);
        }
        if (keyCode === KEY_ENTER) {
          this.displayOtionsList(false);
          const selectedOption = this.findOptionByValue(searchTerm)[0];
          if (selectedOption) {
            this.updateInputValue(selectedOption);
            this.filterOptions(searchTerm);
            this.validateInput();
          }
          return;
        }
        this.displayOtionsList(true);
        this.filterOptions(searchTerm);
        this.validateInput();
      }
      else {
        this.backupDataSource = this.dataSource;
      }
    };
    /**
     *
     * @param searchTerm
     * @returns filtered options based on search term provided.
     */
    this.filterOptions = (searchTerm) => {
      return (this.backupDataSource = [
        ...new Set([
          ...this.dataSource.filter((option) => {
            const ro = option[this.optionValue].toLowerCase();
            return ro.startsWith(searchTerm.toLowerCase());
          }),
          ...this.dataSource.filter((option) => {
            const ro = option[this.optionValue].toLowerCase();
            return ro.indexOf(searchTerm.toLowerCase()) !== NOT_FOUND;
          }),
        ]),
      ]);
    };
    /**
     *
     * @param flag
     * Controls display options on the basis of flag.
     */
    this.displayOtionsList = (flag) => {
      this.showOptions = flag;
    };
    /**
     *
     * @returns backupDataSource
     * Shows all options available for filter.
     */
    this.showAllOptions = () => {
      return (this.backupDataSource = [...this.dataSource]);
    };
    /**
     *
     * @param event
     * Clears the input when cross is pressed.
     */
    this.onClearSearch = (event) => {
      this.showAllOptions();
      this.validateInput();
    };
    /**
     * Triggers onFocus event
     */
    this.onFocus = () => {
      this.refError.innerHTML = "";
      this.displayOtionsList(true);
    };
    /**
     *
     * @param event
     * Validate on change of search term.
     */
    this.onChange = (event) => {
      let term = event.target.value.trim();
      if (term.length === 0) {
        this.displayOtionsList(true);
      }
      this.validateInput();
    };
    /**
     *
     * @param event
     * @param selectedValue
     * Triggered when option is selected.
     */
    this.onOptionSelect = (event, selectedOption) => {
      event.preventDefault();
      this.displayOtionsList(false);
      this.updateInputValue(selectedOption);
      this.validateInput();
    };
    /**
     *
     * @param event
     * Interacts with UP/DOWN arrow and select appropriate option.
     */
    this.onBtnKeyDown = (event) => {
      const keyCode = event.keyCode || event.which;
      const classList = event.srcElement.classList;
      const maxIndex = this.element.querySelectorAll(".button").length;
      let index = parseInt(event.target.getAttribute("data-index"));
      /**
       * Base on the keyboard UP DOWN keys
       * move the option accordingly.
       * prevent back scroll.
       */
      if (classList.contains("button")) {
        if (keyCode === KEY_DOWN) {
          event.preventDefault();
          if (index >= 1 && index < maxIndex) {
            ++index;
            //@ts-ignore
            this.element.querySelector(".btn-" + index).focus();
          }
        }
        else if (keyCode === KEY_UP) {
          event.preventDefault();
          if (index > 1 && index <= maxIndex) {
            --index;
            //@ts-ignore
            this.element.querySelector(".btn-" + index).focus();
          }
        }
      }
    };
    this.validationMessage = undefined;
    this.outofRangeMessage = undefined;
    this.dataSource = undefined;
    this.dataSourceId = undefined;
    this.name = undefined;
    this.placeHolder = undefined;
    this.required = false;
    this.selectedOption = undefined;
    this.isDisabled = false;
    this.indexTab = undefined;
    this.optionKey = undefined;
    this.optionValue = undefined;
    this.helpText = '';
    this.showOptions = false;
    this.backupDataSource = undefined;
    this.isError = false;
  }
  /**
   * Bind events, emit a event on load to communicate validity of this field.
   */
  componentDidLoad() {
    this.init();
  }
  init() {
    const INPUT_ID = "#" + this.name;
    this.refInput = this.element.querySelector(INPUT_ID);
    this.refHidden = this.element.querySelector(`.${HIDDEN_FIELD_CLASS}`);
    this.refError = this.element.querySelector("#typeahead-help");
    this.backupDataSource = this.dataSource;
    this.options = this.dataSource.map((o) => o[this.optionValue]);
    this.element
      .querySelector("input")
      .addEventListener("search", this.onClearSearch);
    this.loadSelectedOption(this.selectedOption);
    document.addEventListener("click", this.onDocumentClick);
    this.refError.innerHTML = this.helpText || "";
  }
  loadSelectedOption(option) {
    if (option) {
      const filteredOption = this.findOptionByKey(option)[0];
      if (filteredOption) {
        this.updateInputValue(filteredOption);
        this.filterOptions(option);
        this.validateInput();
      }
    }
  }
  /**
   *
   * Finds a option by a provided key
   * @param searchTerm
   * @returns object containing key/value pair
   */
  findOptionByKey(searchTerm) {
    return this.dataSource.filter((option) => {
      return option[this.optionKey].toLowerCase() === searchTerm.toLowerCase();
    });
  }
  /**
   *
   * Finds a option by a provided value
   * @param searchTerm
   * @returns object containing key/value pair
   */
  findOptionByValue(searchTerm) {
    return [
      ...new Set([
        ...this.dataSource.filter((option) => {
          return option[this.optionValue]
            .toLowerCase()
            .startsWith(searchTerm.toLowerCase());
        }),
        ...this.dataSource.filter((option) => {
          return (option[this.optionValue]
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) !== NOT_FOUND);
        }),
      ]),
    ];
  }
  /**
   *
   * @param option
   * Updates the input value and required key in hidden field.
   */
  updateInputValue(option) {
    this.refInput.value = option[this.optionValue];
    this.refHidden.value = option[this.optionKey];
  }
  /**
   * Remove the active listerners.
   */
  disconnectedCallback() {
    this.element
      .querySelector("input")
      .removeEventListener("search", this.onClearSearch);
    document.removeEventListener("click", this.onDocumentClick);
  }
  /**
   *
   * @returns void
   * Validates the input field against the defined criteria's (Required or In-range)
   * Emits an event to the parent component with 'validity' data.
   */
  validateInput() {
    const term = this.refInput.value;
    if (!this.refInput.checkValidity()) {
      this.reportError(true, this.validationMessage || VALIDATION_ERR);
      this.refHidden.value = "";
      return;
    }
    //@ts-ignore
    if (term && this.options.indexOf(term) === NOT_FOUND) {
      this.reportError(true, this.outofRangeMessage || OUT_OF_RANGE_ERR);
      this.refHidden.value = "";
      return;
    }
    this.reportError(false, null);
  }
  /**
   *
   * @param isError
   * @param errorMessage
   * Reports an error to  parent component
   */
  reportError(isError, errorMessage) {
    var _a;
    if (!((_a = this.refHidden) === null || _a === void 0 ? void 0 : _a.value)) {
      isError = true;
      this.refError.innerHTML = errorMessage;
      this.refError.className = "error";
    }
    else {
      // Set the helptext and remove error class in case of no error
      // If no helptext, the error message is null from validateInput
      this.refError.innerHTML = this.helpText || errorMessage;
      this.refError.className = "";
    }
    this.isError = isError;
    this.onTypeaheadError.emit({
      id: this.name,
      isError,
      value: this.refInput.value,
      key: this.refHidden.value,
    });
  }
  render() {
    return (h("section", { class: "form-group" }, h("input", { id: this.name,
      // placeholder={this.placeHolder}
      name: this.name, type: "search", onFocus: this.onFocus, onKeyUp: this.onKeyUp, onInput: this.onChange, autocomplete: "off", required: this.required, value: "", tabindex: this.indexTab, disabled: this.isDisabled, class: { [TYPEAHED_INPUT_CLASS]: true, error: this.isError } }), h("label", { class: { error: this.isError, required: this.required }, htmlFor: this.placeHolder }, this.placeHolder), h("input", { type: "hidden", class: HIDDEN_FIELD_CLASS, value: "" }), h("section", { class: {
        datalist: true,
        open: !!this.showOptions,
        close: !this.showOptions,
      } }, this.backupDataSource &&
      this.backupDataSource.map((option, index) => {
        const idx = index + 1;
        const btnClass = "button btn-" + idx;
        return (h("button", { tabindex: idx, autoFocus: idx === 1, class: {
            selected: idx === 1,
            button: true,
            [btnClass]: true,
          }, role: "option", onKeyDown: this.onBtnKeyDown, onClick: (event) => this.onOptionSelect(event, option), "data-value": option[this.optionKey], "data-index": idx }, option[this.optionValue]));
      })), h("p", { id: "typeahead-help" })));
  }
  get element() { return getElement(this); }
};
AegonTypeaheadDropdown.style = aegonTypeaheadDropdownCss;

export { AegonTypeaheadDropdown as aegon_typeahead_dropdown };
