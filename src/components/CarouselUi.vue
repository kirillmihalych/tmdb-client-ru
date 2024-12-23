<template>
  <div class="carousel-wrapper">
    <ul class="carousel">
      <li v-for="item in props.items" :key="item.id" class="carousel__item">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" generic="T">
interface ICarouselUi {
  items: T[];
}

const props = defineProps<ICarouselUi>();
const slots = defineSlots<{
  default(props: { item: T }): void;
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
