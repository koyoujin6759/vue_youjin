import { posts } from './index.js';

function fetchPosts() {    
    return posts.get('/');
}

export { fetchPosts };