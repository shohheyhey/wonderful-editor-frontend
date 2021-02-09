export const state = () => {
  return {
    articles: [],
    tests: ['test1', 'test2'],
  }
}

// export const getters = {}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  async fetchArticles({ commit }) {
    try {
      const response = await this.$axios.get(
        'http://localhost:3000/api/v1/articles'
      )
      console.log(response)
      const articles = response.data
      commit('setArticles', articles)
    } catch (err) {}
  },
}
