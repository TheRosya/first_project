<template>
  <form @submit.prevent>
    <h4>Создать пост</h4>
    <my-input
      v-focus
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <my-button
      style="align-self: flex-end"
      @click="createPost"
    >Создать</my-button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { Post } from './../objects/Post'
import { postStorage } from '@/storage/PostStorage';
const storage = postStorage();

const id = ref<number>(0);
const title = ref<string>('');
const body = ref<string>('');

const post: Post = reactive({
  id,
  title,
  body,
});

function createPost() {
  post.id = Date.now();
  const newPost: Post = {
    id: post.id,
    title: post.title,
    body: post.title,
  }

  storage.createPost(newPost)
  post.id = 0;
  post.title = '';
  post.body = '';
  
}
</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}


</style>
