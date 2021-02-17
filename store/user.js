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

export const actions = {
  async fetchRegistration({ commit }, { params }) {
    try {
      const response = await this.$axios.post('/api/v1/auth/', params)
      const headers = response.headers
      debugger
      const loginInfoHeaders = {
        client: headers.client,
        'access-token': headers['access-token'],
        uid: headers.uid,
        'token-type': headers['token-type'],
      }
      console.log(loginInfoHeaders.token)
      commit('setRegistration', loginInfoHeaders)
    } catch (err) {
      console.log('エラーに入ったよ')
    }
  },
}
