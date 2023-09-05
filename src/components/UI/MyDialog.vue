<template>
  <div class="dialog" v-if="props.show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'my-dialog',
  }
</script>

<script setup lang="ts">

interface Props {
  show?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  show: false
})

const emit = defineEmits<{
  (e: 'update:show', show: boolean): void
}>();

function hideDialog() {
  emit('update:show', false)
}

</script>

<style scoped>
.dialog {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 50px;
  padding: 20px;
}
</style>
