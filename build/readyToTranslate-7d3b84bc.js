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

export { readyToTranslate as r };
