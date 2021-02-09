<template>
  <div></div>
</template>
<script>
export default {
  async created() {
    await this.$store.dispatch('article/fetchArticles')
  },
}
</script>
