import { User } from "../types/types";

export const users: User[] = [
  { id: 1, n: "migs", p: "wigs", count: 0 },
  { id: 2, n: "a", p: "a", count: 0 },
];

export const findUserName = (name: string) =>
  users.find((user) => user.n === name) || false;

export const findUserId = (id: number) =>
  users.find((user) => user.id === id) || false;

export const updateCount = (id: number, count: number) => {
  const user = findUserId(id);
  if (!user) return;
  return (user.count = count);
};
