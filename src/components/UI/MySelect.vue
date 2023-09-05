<template>
  <select 
    v-bind="props.modelValue" 
    @change="changeOption"
  >
    <option disabled value="">Выберите из списка</option>
    <option 
      v-for="option in props.options" 
      :key="option.name" 
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  name: 'my-select',
}
</script>

<script setup lang="ts">
import type { OptionArray } from './../../objects/Option'

interface Props {
  modelValue: String,
  options?: OptionArray,
}

const props = withDefaults(defineProps<Props>(), {
  options: () => []
  } 
);

const emit = defineEmits<{
  (e: 'update:modelValue', newModelValue: string): void
}>();

function changeOption(event: Event) {
  emit('update:modelValue', event.target.value)
}

</script>

<style scoped>

</style>
