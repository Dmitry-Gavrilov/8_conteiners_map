import ErrorRepository from '../map_conteiner';

const errorRepository = new ErrorRepository();

errorRepository.errors.set('410', 'Выбранный персонаж уже добавлен');
errorRepository.errors.set('411', 'Длина имени должна быть от 2 до 10 символов');
errorRepository.errors.set('412', 'Неверный тип.');
errorRepository.errors.set('413', 'нельзя повысить левел умершего');

test('проверка кода 410', () => {
  expect(errorRepository.translate('410')).toBe('Выбранный персонаж уже добавлен');
});

test('проверка кода 411', () => {
  expect(errorRepository.translate('411')).toBe('Длина имени должна быть от 2 до 10 символов');
});

test('проверка кода 412', () => {
  expect(errorRepository.translate('412')).toBe('Неверный тип.');
});

test('проверка кода 413', () => {
  expect(errorRepository.translate('413')).toBe('нельзя повысить левел умершего');
});

test('проверка на несуществующий код', () => {
  expect(errorRepository.translate('500')).toBe('Unknown error');
});
