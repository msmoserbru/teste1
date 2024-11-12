// src/browser.ts
var LOG_METHODS = ["error", "warn", "info", "debug", "trace", "silent"];
function getLogger(component) {
  return LOG_METHODS.reduce((acc, cur) => {
    const prop = cur;
    if (console[prop]) {
      acc[prop] = console[prop].bind(console, "".concat(component, ":"));
    }
    return acc;
  }, {});
}
getLogger.setLevel = () => {
};
getLogger.setLogLevelsConfig = () => {
};
getLogger.waitForBuffer = () => {
};
getLogger.clearLogger = () => {
};
export {
  getLogger as default
};
