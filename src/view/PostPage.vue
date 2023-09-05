<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input 
      v-model="storage.searchQuery" 
      placeholder="Поиск..." 
      v-focus
    />
    <div class="app__buttons">
      <my-button @click="showDialog">Создать пост </my-button>
      <my-select v-model="storage.selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm />
    </my-dialog>
    <PostList
      :posts="storage.searchedAndSortedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <!-- <div v-intersection="loadMorePosts" ref="observerRef" class="observer"></div> -->
  </div>
</template>

<script setup lang="ts">
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import { ref, onMounted } from "vue";
import type { OptionArray } from "@/objects/Option";
import { postStorage } from '@/storage/PostStorage';

const storage = postStorage();

const dialogVisible = ref(false);
const isPostsLoading = ref(false);
const page = ref(1);
const limit = ref(10);

const sortOptions = ref<OptionArray>([
  { value: "title", name: "По названию" },
  { value: "body", name: "По содержимому" },
]);

onMounted(() => {
  storage.loadFirstPosts(page.value, limit.value);
  console.log('sorted', storage.searchedAndSortedPosts);
});

function showDialog() {
  dialogVisible.value = true;
}

function loadMorePosts() {
  storage.loadMorePosts(page.value, limit.value)
  page.value += 1;  
}

</script>

<style>

.app__buttons {
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  column-gap: 4px;
  justify-content: center;
  margin-top: 15px;
}

.page {
  border: 1px solid teal;
  padding: 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
  cursor: default;
}

.observer {
  height: 30px;
  background: green;
}
</style>
