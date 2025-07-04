import axios from 'axios';
import type { Post } from '../models/post.model';

const apiUrl = 'http://localhost:8080/api/posts';

export const createPost = async (post: FormData): Promise<Post> => {
  try {
    const response = await axios.post<Post>(apiUrl, post, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création du post');
  }
};

export const updatePost = async (post: FormData, id: number): Promise<Post> => {
  try {
    const response = await axios.put<Post>(`${apiUrl}/${id}`, post, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour du post');
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors du chargement des posts');
  }
};

export const deletePost = async (postId: number): Promise<void> => {
  try {
    await axios.delete<void>(`${apiUrl}/${postId}`);
  } catch (error) {
    throw new Error('Erreur lors de la suppression du post');
  }
};

export const likePost = async (postId: number): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/${postId}/like`, {});
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors du like du post');
  }
};

export const addComment = async (postId: number, user: string, text: string): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/${postId}/comments`, { user, text }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de l\'ajout du commentaire');
  }
};