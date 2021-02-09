<template>
  <div>テスト</div>
</template>
<script>
export default {
  computed: {
    articles() {
      return this.$store.state.article.articles
    },
  },
  async created() {
    try {
      await this.$store.dispatch('article/fetchArticles')
    } catch (err) {}
  },
}
</script>
