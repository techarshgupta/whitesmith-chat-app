<template>
  <div class="body-wrap" :class="$store.state?.sidebar?.open ? 'expanded' : 'collapsed'">
    Switch locales
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>

    <div>
      <span class="translate">{{$t('welcome')}}</span> to Whitesmith
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>

.body-wrap {
  margin-left: 320px;
  padding: 12px;
  transition: margin .15s ease-out;
}
.collapsed {
  margin-right: 150px;
}
.expanded {
  margin-right: 300px;
}
.translate {
  font-size: $font-primary;
  color: $text-primary;
  font-weight: 600;
  text-decoration: underline;
}
</style>
