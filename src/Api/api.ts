import axios, { AxiosResponse } from 'axios';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Create an Axios instance 
const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all posts
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response: AxiosResponse<Post[]> = await apiClient.get('/posts');
    return response.data;
  } catch (error: any) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Fetch a single post by ID
export const fetchPostById = async (postId: number): Promise<Post> => {
  try {
    const response: AxiosResponse<Post> = await apiClient.get(`/posts/${postId}`);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching post ${postId}:`, error);
    throw error;
  }
};

