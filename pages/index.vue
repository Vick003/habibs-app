<template>
  <div>
    <Navigation />
    <v-content>
      <Hero />
    </v-content>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Navigation from "~/components/Navigation.vue";
export default {
  components: {
    Hero,
    Navigation
  }
}
</script>

<style>
</style>
