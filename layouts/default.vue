<template>
  <div>
    <the-header />
    <the-navbar />
    <chat-bar />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue';
import TheNavbar from '~/components/TheNavbar.vue';
import ChatBar from '~/components/ChatBar.vue';

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheNavbar,
    ChatBar,
  },
}
</script>
