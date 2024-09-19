import { generateDate } from '../utils';

export const addPost = async ({ imageUrl, title, content }) =>
  fetch(`http://localhost:3005/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      image_url: imageUrl,
      title,
      content,
      published_at: generateDate(),
    }),
  }).then((createdPost) => createdPost.json());
