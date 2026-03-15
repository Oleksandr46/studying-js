const foo = async () => {
  console.log("Before await");
  const promiseValue = await new Promise(resolve => {
    setTimeout(() => resolve(5), 2000);
  });
  console.log("After await", promiseValue);
};
foo();

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

fetchUsers().then(users => console.log(users));
