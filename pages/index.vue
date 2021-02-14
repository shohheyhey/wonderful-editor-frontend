<template>
  <div>
    <div
      v-for="article in articles"
      :key="article.id"
      :class="$style.article_card"
    >
      <div :class="$style.icon_field">
        <font-awesome-icon :class="$style.icon" icon="user" />
      </div>
      <div :class="article_card_content">
        <div>{{ article.title }}</div>
        <div :class="$style.user_name">by {{ article.user.name }}</div>
        <vue-timeago
          :class="$style.time_ago"
          :datetime="article.updated_at"
          :auto-update="60"
        />
        <div :class="$style.border"></div>
      </div>
    </div>
  </div>
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
<style lang="scss" , module>
.icon_field {
  .icon {
    background: blue;
    width: 3rem;
    height: 3rem;
    float: left;
    color: white;
    border-radius: 50%;
    padding: 0.3rem;
  }
}
.article_card {
  margin: 0 auto;
  width: 50%;
  height: 7rem;
  background: #fff;
  padding: 1rem;
  .user_name {
    display: inline-block;
  }
  .time_ago {
    float: right;
    display: inline;
  }
  .border {
    margin-top: 0.5rem;
    border-bottom: solid 1px grey;
  }
}
</style>
