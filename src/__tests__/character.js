import Character from '../js/character';

test('проверка создания объекта', () => {
  const result = new Character('Nick', 'Bowman');
  const expected = {
    name: 'Nick',
    type: 'Bowman',
  };
  expect(result).toEqual(expected);
});
