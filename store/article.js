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
  // async fetchArticles({ commit }) {
  //   try {
  //     const response = await this.$axios.get(
  //       // 'api/v1/articles'
  //       'https://jsondata.okiba.me/v1/json/7lV2J201227155106'
  //     )
  //     console.log(response)
  //     const articles = response.data
  //     commit('setArticles', articles)
  //   } catch (err) {}
  // },
  fetchArticles({ commit }) {
    const testResponse = ['response1', 'response2']
    console.log(testResponse)
    console.log('テスト')
    commit('setArticles', testResponse)
  },
}
