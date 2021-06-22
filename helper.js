const user = (data) => {
  return `${data} is logged in`;
};

let id = (id) => {
  return `${id}`;
};

let email = (email) => {
  return email;
}

module.exports = {
  user,
  id,
  email,
}