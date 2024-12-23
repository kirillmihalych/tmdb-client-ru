<template>
  <div>
    <div v-if="isPending">loading...</div>
    <div v-else-if="isError">error. {{ error?.message }}</div>
    <CarouselUi v-else-if="data" :items="data.results" v-slot="{ item: movie }">
      <MovieCard
        :poster="movie.poster_path"
        :title="movie.title"
        :rating="movie.vote_average"
      />
    </CarouselUi>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import MovieCard from "@/components/MovieCard.vue";
import getMovieList from "@/services/api/getMovieList";
import CarouselUi from "@/components/CarouselUi.vue";

const { isPending, isError, data, error } = useQuery({
  queryKey: ["movie-list"],
  queryFn: getMovieList,
});
</script>

<style scoped>
.list {
  display: flex;
  list-style: none;
  overflow: auto;
  gap: 2.5rem;
}

.list__item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 154px;
}

.visually-hidden {
  display: none;
}
</style>
