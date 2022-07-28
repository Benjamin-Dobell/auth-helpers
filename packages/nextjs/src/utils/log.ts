const logger = {
  log: (message?: any, ...optionalParams: any[]) => {
    console.log(message, ...optionalParams);
  },
  error: (message?: any, ...optionalParams: any[]) => {
    console.error(message, ...optionalParams);
  },
  info: (message?: any, ...optionalParams: any[]) => {
    logger.log(message, ...optionalParams);
  },
  debug: (message?: any, ...optionalParams: any[]) => {
    logger.log(message, ...optionalParams);
  },
  warn: (message?: any, ...optionalParams: any[]) => {
    logger.error(message, ...optionalParams);
  }
};

export default logger;
