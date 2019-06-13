export default class MediaQueryList {
  constructor(targetWindow, mediaQuery, listener) {
    this.nativeMediaQueryList = targetWindow.matchMedia(mediaQuery);

    this.active = true;

    this.listener = (...args) => {
      this.matches = this.nativeMediaQueryList.matches;
      if(this.active) {
        listener(...args);
      }
    }

    this.nativeMediaQueryList.addListener(this.listener);
    this.matches = this.nativeMediaQueryList.matches;
  }

  cancel() {
    this.active = false;
    this.nativeMediaQueryList.removeListener(this.listener);
  }
}
