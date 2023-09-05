import { defineStore } from "pinia";
import {ref, computed} from 'vue';
import axios from "axios";
import type { Post } from './../objects/Post';


export const postStorage = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  const searchQuery = ref('');
  const selectedSort = ref('');

  const sortedPosts = computed(() => {
    return [...posts.value].sort(
      (post1: Post, post2: Post) =>
        post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]),
    );
  });
  
  const searchedAndSortedPosts = computed(() => {
    return sortedPosts.value.filter(
      (post: Post) =>
        post?.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) || post?.body?.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
  });
  
  function createPost(newPost: Post) {
    posts.value.push(newPost);
  }
  
  function removePost(post: Post) {
    posts.value = posts.value.filter((p: Post) => p.id !== post.id);
  }

  async function loadFirstPosts(page: number, limit: number) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page,
            _limit: 100,
          },
        },
      );
      posts.value = [...response.data];
    } catch (error) {
      alert("ошибка");
    }
  }

  
  async function loadMorePosts(page: number, limit: number) {
    try {
      page += 1;
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        },
      );
      posts.value = [...posts.value, ...response.data];
    } catch (error) {
      alert("ошибка");
    }
  }

  return {
    posts,
    searchedAndSortedPosts,
    searchQuery,
    selectedSort,
    createPost,
    removePost,
    loadMorePosts,
    loadFirstPosts,
  }
})
