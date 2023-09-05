<template>
  <div class="post">
    <div>
      <div>{{ props.post.id }}</div>
      <div><strong>Название:</strong> {{ props.post.title }}</div>
      <div><strong>Описание:</strong> {{ props.post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button 
        @click="$router.push(`/posts/${props.post.id}`)" 
        style="margin-top: 0px"
        >Открыть
      </my-button>
      <my-button 
        @click="removePost(props.post)" 
        style="margin-top: 0px"
      >Удалить
      </my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from './../objects/Post' 
import { postStorage } from '@/storage/PostStorage';  

const storage = postStorage();

interface Props {
  post: Post,
}

const props = defineProps<Props>();

function removePost(post: Post) {
  storage.removePost(post);
}

</script>

<style scoped>

.post__buttons {
  display: flex;
  column-gap: 8px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
