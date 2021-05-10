import Team from '../app';

test('Creating Team', () => {
  const myTeam = new Team();
  expect(myTeam).toEqual({
    members: new Set(),
  });
});

test('Add Hero in team', () => {
  const myTeam = new Team();
  const myHero = {
    attack: 25,
  };
  const setHero = new Set();
  setHero.add(myHero);
  myTeam.add(myHero);
  expect(myTeam).toEqual({
    members: setHero,
  });
});

test('Add Hero in team Error', () => {
  expect(() => {
    const myTeam = new Team();
    const myHero = {
      attack: 25,
    };
    myTeam.add(myHero);
    myTeam.add(myHero);
  }).toThrow('такой персонаж уже есть в команде');
});

test('Add Heroes in team', () => {
  const myTeam = new Team();
  const myHero = {
    attack: 25,
  };
  const notMyHero = {
    attack: 15,
  };
  const setHero = new Set();
  setHero.add(myHero);
  setHero.add(notMyHero);
  myTeam.addAll(myHero, notMyHero, myHero);
  expect(myTeam).toEqual({
    members: setHero,
  });
});

test('Set in Array', () => {
  const myTeam = new Team();
  const myHero = {
    attack: 25,
  };
  myTeam.add(myHero);
  const teamArray = myTeam.toArray();
  expect(teamArray).toEqual([myHero]);
});
