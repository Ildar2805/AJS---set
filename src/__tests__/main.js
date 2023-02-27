import Team from '../js/main';
import Character from '../js/character';

test('проверка успешного добавления персонажа методом add', () => {
  const team = new Team();
  const bowman = new Character('Nick', 'Bowman');
  team.add(bowman);
  const result = team.members;
  const expected = new Set(
    [
      {
        name: 'Nick',
        type: 'Bowman',
      },
    ],
  );
  expect(result).toEqual(expected);
});

test('проверка генерации ошибки при дублировании', () => {
  const team = new Team();
  const bowman = new Character('Nick', 'Bowman');
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow();
});

test('проверка успешного добавления персонажей методом addAll', () => {
  const team = new Team();
  const bowman = new Character('Nick', 'Bowman');
  const swordsman = new Character('Clod', 'Swordsman');
  const magician = new Character('Patrick', 'Magician');
  team.addAll(bowman, swordsman, magician);
  const result = team.members;
  const expected = new Set(
    [
      {
        name: 'Nick',
        type: 'Bowman',
      },
      {
        name: 'Clod',
        type: 'Swordsman',
      },
      {
        name: 'Patrick',
        type: 'Magician',
      },
    ],
  );
  expect(result).toEqual(expected);
});

test('проверка конвертации в массив', () => {
  const team = new Team();
  const bowman = new Character('Nick', 'Bowman');
  team.add(bowman);
  const result = team.toArray();
  const expected = [
    {
      name: 'Nick',
      type: 'Bowman',
    },
  ];
  expect(result).toEqual(expected);
});
