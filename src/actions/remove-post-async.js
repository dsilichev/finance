import { request } from '../utils';

export const removePostAsync = (id) => (dispatch) =>
  request(`/api/posts/${id}`, 'DELETE');
