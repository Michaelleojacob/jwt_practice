const users = [{ name: "migs", pw: "wigs", id: 1 }];

const findUserById = (id: number) =>
  users.find((user) => user.id === id) || false;
const findUserByName = (name: string) =>
  users.find((user) => user.name === name) || false;

console.log(findUserByName("jj"));
