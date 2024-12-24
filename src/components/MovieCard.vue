<template>
  <div>
    <div class="card">
      <!-- <h2>{{ props.title }}</h2> -->
      <img :src="posterPath" alt="" />
    </div>
    <p>{{ props.rating }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import getConfiguration from "@/services/api/getConfiguration";
import { computed } from "vue";

const { data: config } = useQuery({
  queryKey: ["image-configartion"],
  queryFn: getConfiguration,
});

export interface IMovieCard {
  poster: string;
  title: string;
  rating: number;
}

export interface IMovie {
  poster_path: string;
  title: string;
  vote_average: number;
}

const props = defineProps<IMovieCard>();
const posterPath = computed(() => {
  return (
    `${config.value?.images.secure_base_url}` +
    // значения от 0 до 6, от меньшего к большему
    `${config.value?.images.poster_sizes[2]}` +
    `${props.poster}`
  );
});
</script>

<style scoped>
.card {
  cursor: pointer;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
}

.card:hover {
  transform: scale(1.025);
}
</style>
