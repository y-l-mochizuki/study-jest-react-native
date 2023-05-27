export type User = {
  name: string;
};

export const fetchUser = (): Promise<User> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({name: 'John Doe'});
    }, 2000);
  });
};
