const users = [{ n: "migs", p: "wigs", id: 1 }];
const body = { n: "migs", p: "wigs" };

// if (user["b"]) {
//   console.log("hi");
// } else {
//   console.log("bye");
// }

const findUser = () => {
  const user = users.find((person) => person.n === body.n) || false;
  if (!user) return;
  if (user.n === body.n && user.p === body.p) {
    console.log("logged in");
  } else {
    console.log("error");
  }
};
findUser();
