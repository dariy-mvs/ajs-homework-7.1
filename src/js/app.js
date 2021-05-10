// TODO: write your code here

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(Character) {
    if (this.members.has(Character)) {
      throw Error('такой персонаж уже есть в команде');
    } else {
      this.members.add(Character);
      // Я, видимо, не совсем понимаю задание...
      // Зачем делать проверку, если метод add и так ничего не дублирует?
    }
  }

  addAll(...args) {
    args.forEach((el) => {
      this.members.add(el);
    });
  }

  toArray() {
    return [...this.members];
  }
}
