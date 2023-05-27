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

export type Post = {
  id: number;
  title: string;
  body: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await response.json();
  return data;
};
