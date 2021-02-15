export const state = () => {
  return {}
}

// export const getters = {}

export const mutations = {}

export const actions = {
  async fetchArticles({ commit }) {
    try {
      const response = await this.$axios.get(
        'http://localhost:4000/api/v1/articles'
      )
      console.log(response)
      const articles = response.data
      commit('setArticles', articles)
    } catch (err) {}
  },
}
