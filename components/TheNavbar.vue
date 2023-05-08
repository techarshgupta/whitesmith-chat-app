<template>
  <div class="wh-sidebar bg-light"></div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      sidebar: true,
    }
  },
}
</script>

<style scoped>
.wh-sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 56px;
  width: 320px;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  margin: 0;
  outline: 0;
  border-right: 1px solid #f0f0f0;
}
</style>
