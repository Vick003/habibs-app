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
  mounted() {
    /**
     * Querying an entire collection
     */
   this.$fireStore.collection("Customers")
   .get()
   .then(querySnapshot => {
      querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    }).catch(e => {
      console.error(e);
    });
  },
  components: {
    Hero,
    Navigation
  }
}
</script>

<style>
</style>
