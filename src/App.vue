<template>
  <v-app>
    <Navigation />
    <Header />
    <Sidepanel />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./views/Footer.vue";
import Header from "./views/Header.vue";
import Navigation from "./views/Navigation.vue";
import Sidepanel from "./views/Sidepanel.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Navigation,
    Sidepanel,
  },
};
</script>
