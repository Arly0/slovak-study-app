class Logs {
  public static log (...args: any[]) {
    if (process.env.REACT_APP_DEBUG_MODE) {
      console.log(...args);
    }
  }

  public static error (...args: any[]) {
    if (process.env.REACT_APP_DEBUG_MODE) {
      console.error(...args);
    }
  }
}

export default Logs;