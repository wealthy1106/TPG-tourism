<script setup>
import hea from '../src/components/header.vue'
import fot from '../src/components/footer.vue'
</script>

<template>
  <div id="app">
    <!-- <trangchu1 /> -->
    <hea />
    <div>
      <router-view />
    </div>

    <fot />
    <FacebookChatbox />
  </div>
</template>

<script>
import FacebookChatbox from './components/FacebookChatbox.vue';

export default {
  components: {
    FacebookChatbox
  }
}
</script>