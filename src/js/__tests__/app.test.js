import Validator from '../app';

test('correct data entry', () => {
  const check = new Validator();
  const result = check.validateUsername('Ilya-170_Dolinin');
  expect(result).toEqual(true);
});

test.each([{
  data: [
    'Илья-170_Долинин',
    '170-Ilya_Dolinin',
    'Ilya_Dolinin-170',
    '_Ilya_Dolinin',
    'Ilya_Dolinin_',
    'Ilya_2000_Dolinin',
    '-Ilya_Dolinin',
    'Ilya_Dolinin-',
    'Ilya&Dolinin',
  ],
}])('incorrect data entry', ({ data }) => {
  const check = new Validator();
  const result = check.validateUsername(data);
  expect(result).toEqual(false);
});
