// src/index.ts
import fs from "node:fs";
import util from "node:util";
import log from "loglevel";
import chalk from "chalk";
import prefix from "loglevel-plugin-prefix";
import ansiStrip from "strip-ansi";
prefix.reg(log);
var DEFAULT_LEVEL = process.env.WDIO_DEBUG ? "trace" : "info";
var COLORS = {
  error: "red",
  warn: "yellow",
  info: "cyanBright",
  debug: "green",
  trace: "cyan",
  progress: "magenta"
};
var matches = {
  COMMAND: "COMMAND",
  BIDICOMMAND: "BIDI COMMAND",
  DATA: "DATA",
  RESULT: "RESULT",
  BIDIRESULT: "BIDI RESULT"
};
var SERIALIZERS = [{
  /**
   * display error stack
   */
  matches: (err) => err instanceof Error,
  serialize: (err) => err.stack
}, {
  /**
   * color commands blue
   */
  matches: (log2) => log2 === matches.COMMAND || log2 === matches.BIDICOMMAND,
  serialize: (log2) => chalk.magenta(log2)
}, {
  /**
   * color data yellow
   */
  matches: (log2) => log2 === matches.DATA,
  serialize: (log2) => chalk.yellow(log2)
}, {
  /**
   * color result cyan
   */
  matches: (log2) => log2 === matches.RESULT || log2 === matches.BIDIRESULT,
  serialize: (log2) => chalk.cyan(log2)
}];
var loggers = log.getLoggers();
var logLevelsConfig = {};
var logCache = /* @__PURE__ */ new Set();
var logFile;
var originalFactory = log.methodFactory;
var wdioLoggerMethodFactory = function(methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);
  return (...args) => {
    if (!logFile && process.env.WDIO_LOG_PATH) {
      logFile = fs.createWriteStream(process.env.WDIO_LOG_PATH);
    }
    const match = Object.values(matches).filter((x) => args[0].endsWith(`: ${x}`))[0];
    if (match) {
      const prefixStr = args.shift().slice(0, -match.length - 1);
      args.unshift(prefixStr, match);
    }
    args = args.map((arg) => {
      for (const s of SERIALIZERS) {
        if (s.matches(arg)) {
          return s.serialize(arg);
        }
      }
      return arg;
    });
    const logText = ansiStrip(`${util.format.apply(this, args)}
`);
    if (logFile && logFile.writable) {
      if (logCache.size) {
        logCache.forEach((log2) => {
          if (logFile) {
            logFile.write(log2);
          }
        });
        logCache.clear();
      }
      if (!logsContainInitPackageError(logText)) {
        return logFile.write(logText);
      }
      logFile.write(logText);
    }
    logCache.add(logText);
    rawMethod(...args);
  };
};
var progress = function(data) {
  if (process.stdout.isTTY && this.getLevel() <= log.levels.INFO) {
    const level = "progress";
    const timestampFormatter = chalk.gray((/* @__PURE__ */ new Date()).toISOString());
    const levelFormatter = chalk[COLORS[level]](level.toUpperCase());
    const nameFormatter = chalk.whiteBright(this.name);
    const _data = data.length > 0 ? `${timestampFormatter} ${levelFormatter} ${nameFormatter}: ${data}` : "\r\x1B[K\x1B[?25h";
    process.stdout.write("\x1B[?25l");
    process.stdout.write(`${_data}\r`);
  }
};
function getLogger(name) {
  if (loggers[name]) {
    return loggers[name];
  }
  let logLevel = process.env.WDIO_LOG_LEVEL || DEFAULT_LEVEL;
  const logLevelName = getLogLevelName(name);
  if (logLevelsConfig[logLevelName]) {
    logLevel = logLevelsConfig[logLevelName];
  }
  loggers[name] = log.getLogger(name);
  loggers[name].setLevel(logLevel);
  loggers[name].methodFactory = wdioLoggerMethodFactory;
  loggers[name].progress = progress;
  prefix.apply(loggers[name], {
    template: "%t %l %n:",
    timestampFormatter: (date) => chalk.gray(date.toISOString()),
    levelFormatter: (level) => chalk[COLORS[level]](level.toUpperCase()),
    nameFormatter: (name2) => chalk.whiteBright(name2)
  });
  return loggers[name];
}
getLogger.waitForBuffer = async () => new Promise((resolve) => {
  if (logFile && Array.isArray(logFile.writableBuffer) && logFile.writableBuffer.length !== 0) {
    return setTimeout(async () => {
      await getLogger.waitForBuffer();
      resolve();
    }, 20);
  }
  resolve();
});
getLogger.setLevel = (name, level) => loggers[name].setLevel(level);
getLogger.clearLogger = () => {
  if (logFile) {
    logFile.end();
  }
  logFile = null;
};
getLogger.setLogLevelsConfig = (logLevels = {}, wdioLogLevel = DEFAULT_LEVEL) => {
  if (process.env.WDIO_LOG_LEVEL === void 0) {
    process.env.WDIO_LOG_LEVEL = wdioLogLevel;
  }
  logLevelsConfig = {};
  Object.entries(logLevels).forEach(([logName, logLevel]) => {
    const logLevelName = getLogLevelName(logName);
    logLevelsConfig[logLevelName] = logLevel;
  });
  Object.keys(loggers).forEach((logName) => {
    const logLevelName = getLogLevelName(logName);
    const logLevel = typeof logLevelsConfig[logLevelName] !== "undefined" ? logLevelsConfig[logLevelName] : process.env.WDIO_LOG_LEVEL;
    loggers[logName].setLevel(logLevel);
  });
};
var getLogLevelName = (logName) => logName.split(":").shift();
function logsContainInitPackageError(logText) {
  return ERROR_LOG_VALIDATOR.every((pattern) => logText.includes(pattern));
}
var ERROR_LOG_VALIDATOR = [
  "Couldn't find plugin",
  "neither as wdio scoped package",
  "nor as community package",
  "Please make sure you have it installed"
];
export {
  getLogger as default
};
