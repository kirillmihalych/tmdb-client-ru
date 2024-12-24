<template>
  <div class="carousel-wrapper">
    <ul class="carousel">
      <li
        v-for="(item, index) in props.items"
        :key="index"
        class="carousel__item"
      >
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface ICarouselUi {
  items: unknown[];
}

const props = defineProps<ICarouselUi>();
defineSlots<{
  default(props: { item: unknown }): void;
}>();
</script>

<style scoped>
.carousel {
  display: flex;
  list-style: none;
  overflow: auto;
  gap: 2.5rem;
}

.carousel__item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 154px;
}
</style>
