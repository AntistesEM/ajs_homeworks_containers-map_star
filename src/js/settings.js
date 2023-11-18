export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  addUserSettings(name, value) {
    if (this.default.has(name)) {
      this.userSettings.set(name, value);
      return this.userSettings;
    }

    return 'Такой настройки нет';
  }

  get settings() {
    this.userSettings.forEach((value, key) => {
      this.default.set(key, value);
    });

    return this.default;
  }
}
