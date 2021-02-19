export const state = () => {
  return {
    headers: {},
  }
}

// export const getters = {}

export const mutations = {
  setRegistration(state, headers) {
    state.headers = headers
  },
}

// ユーザー登録機能
export const actions = {
  async fetchRegistration({ commit }, { params }) {
    try {
      const response = await this.$axios.post('/api/v1/auth/', params)
      const headers = response.headers
      console.log(headers)
      const loginInfoHeaders = {
        client: headers.client,
        'access-token': headers['access-token'],
        uid: headers.uid,
        'token-type': headers['token-type'],
      }
      commit('setRegistration', loginInfoHeaders)
    } catch (err) {
      console.log('エラーに入ったよ')
    }
  },

  // ログイン機能
  async fetchSignIn({ commit }, { params }) {
    try {
      const response = await this.$axios.post('/api/v1/auth/sign_in', params)
      const headers = response.headers
      console.log(headers)
      debugger
      const loginInfoHeaders = {
        client: headers.client,
        'access-token': headers['access-token'],
        uid: headers.uid,
        'token-type': headers['token-type'],
      }
      commit('setRegistration', loginInfoHeaders)
    } catch (err) {
      console.log('エラーに入ったよ')
    }
  },
}
