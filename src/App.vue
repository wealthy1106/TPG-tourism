<script setup>
import hea from '../src/components/header.vue'
import fot from '../src/components/footer.vue'
// import MessengerChat from './components/MessengerChat.vue';
</script>

<template>
  <div id="app">
    <!-- <trangchu1 /> -->
    <hea />
    <div>
      <router-view />
    </div>
    <!-- <messenger-chat></messenger-chat> -->
    <fot />
  </div>
</template>
<!-- <script>
export default {
  components: {
    MessengerChat
  },
  // Other Vue.js options go here
}
</script> -->