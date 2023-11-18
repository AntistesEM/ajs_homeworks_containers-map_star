import Settings from '../settings';

test('Проверка создания MAP', () => {
  const newSettings = new Settings();

  expect(newSettings.default).toBeInstanceOf(Map);
  expect(newSettings.userSettings).toBeInstanceOf(Map);
});

test.each([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
])('Проверка настроек по умолчанию', (name, value) => {
  const newSettings = new Settings();

  expect(newSettings.default.get(name)).toBe(value);
});

test.each([
  ['theme', 'light'],
  ['music', 'rock'],
  ['difficulty', 'hard'],
])('Проверка добавления пользовательских настроек', (name, value) => {
  const newSettings = new Settings();

  newSettings.addUserSettings(name, value);

  expect(newSettings.userSettings.get(name)).toBe(value);
});

test.each([
  ['style', 'Такой настройки нет'],
])('Проверка на добавление несуществующей настройки', (name, value) => {
  const newSettings = new Settings();

  expect(newSettings.addUserSettings(name, value)).toBe(value);
});

test.each([
  ['theme', 'light'],
  ['music', 'rock'],
  ['difficulty', 'hard'],
])('Проверяем геттер', (name, value) => {
  const newSettings = new Settings();

  newSettings.addUserSettings(name, value);

  expect(newSettings.settings.get(name)).toBe(value);
});
