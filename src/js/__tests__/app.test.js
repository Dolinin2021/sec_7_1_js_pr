import Validator from '../app';

test('correct input', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya-170_Dolinin');
  expect(result).toEqual(true);
});

test('russian words', () => {
  const check = new Validator();
  const result = check.validateUsername('Илья-170_Долинин');
  expect(result).toEqual(false);
});

test('numbers are at the beginning of the word', () => {
  const check = new Validator();
  const result = check.validateUsername('170-Ilya_Dolinin');
  expect(result).toEqual(false);
});

test('numbers are at the end of the word', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya_Dolinin-170');
  expect(result).toEqual(false);
});

test('underscores are at the beginning of a word', () => {
  const check = new Validator();
  const result = check.validateUsername('_Ilya_Dolinin');
  expect(result).toEqual(false);
});

test('underscores are at the end of a word', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya_Dolinin_');
  expect(result).toEqual(false);
});

test('more than four digits in a row', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya_2000_Dolinin');
  expect(result).toEqual(false);
});

test('dash is at the beginning of a word', () => {
  const check = new Validator();
  const result = check.validateUsername('-Ilya_Dolinin');
  expect(result).toEqual(false);
});

test('dash is at the end of a word', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya_Dolinin-');
  expect(result).toEqual(false);
});

test('extra characters', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya&Dolinin');
  expect(result).toEqual(false);
});
