<template>
  <input 
    :value="props.modelValue" 
    @input="updateInput" 
    class="input" 
    type="text"
  >
</template>

<script lang="ts">
  export default {
    name: 'my-input',
  }
</script>

<script setup lang="ts">

const props = defineProps({
  modelValue: {type: String, required: true},
}); 

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

function updateInput(event: Event) {
  emit('update:modelValue', event?.target?.value) 
}

</script>

<style scoped>

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
