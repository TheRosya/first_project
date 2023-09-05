<template>
  <div v-if="props.posts.length > 0">
    <h3>Список постов</h3>
    <!-- <transition-group name="post-list"> -->
    <!-- <pre> -->
      <!-- {{virtualEntries}} -->
    <!-- </pre> -->
    
    <VirtualScroller
      layout-type="list"
      :scroller-id="1"
      :virtual-entries="virtualEntries"
      :min-column-width="200"
    >
      <template #viewport="{ renderedItems, maxColumns }">
        <VirtualScrollerRow
          layout-type="list"
          v-for="virtualEntry in (renderedItems as VirtualEntry[])"
          :key="virtualEntry.id"
          :virtual-entry="virtualEntry"
          :max-columns="maxColumns"
        >
          <PostItem
            v-for="post in virtualEntry.items" 
            :post="post" 
            :key="post.id"
            :style="`height: ${virtualEntry.height}px`"
          />
        </VirtualScrollerRow>
      </template>
    </VirtualScroller>
    <!-- </transition-group> -->
  </div>
  <h2
    v-else
    style='color: red'
  >
    Список постов пуст
  </h2>
      
</template>

<script setup lang="ts">
import PostItem from './PostItem.vue';
import {VirtualScroller, VirtaulScrollerRow} from 'sigma-scrollkit';
import { postStorage } from '@/storage/PostStorage';
import type { Post } from '@/types/Post';
import { computed } from 'vue';

const storage = postStorage();

interface Props {
  posts: Array<Post>
}

const props = defineProps<Props>();

const virtualEntries = computed(() => (
  [{
    height: 150,
    rowGap: 0,
    columnGap: 16,
    items: props.posts
  }]
))

function removePost(post: Post) {
  storage.removePost(post)
}

</script>

<style scoped>

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.8s ease;
}

</style>
