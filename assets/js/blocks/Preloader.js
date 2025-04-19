// Загрузка страницы

export default class Preloader {
  constructor() {
    this.preloader = document.querySelector('[data-js-preloader]');

    if (!this.preloader) return;

    this.isTimerComplete = false;
    this.isPageLoaded = false;

    this.init();
  }

  init() {
    document.documentElement.classList.add('is-lock');

    setTimeout(() => {
      this.isTimerComplete = true;
      this.checkAndHide();
    }, 2000);

    window.addEventListener('load', () => {
      this.isPageLoaded = true;
      this.checkAndHide();
    });
  }

  checkAndHide() {
    if (this.isTimerComplete && this.isPageLoaded) {
      this.hidePreloader();
    }
  }

  hidePreloader() {
    if (!this.preloader || this.preloader.classList.contains('is-hidden')) return;

    this.preloader.classList.add('is-hidden');
    document.documentElement.classList.remove('is-lock');

    setTimeout(() => {
      if (this.preloader && this.preloader.parentNode) {
        this.preloader.parentNode.removeChild(this.preloader);
      }

      // 🔔 Сообщаем всем: прелоадер завершён
      document.dispatchEvent(new CustomEvent('preloader:done'));

    }, 500);
  }
}
