export const state = () => {
  return {
    user: [],
  }
}

// export const getters = {}

export const mutations = {
  setRegistration(state, user) {
    state.user = user
  },
}

export const actions = {
  async fetchRegistration({ commit }) {
    const params = {
      name: this.$sign_up.name,
      email: this.$sigin_up.email,
      password: this.$sign_up.password,
    }
    try {
      const response = await this.$axios.post(
        'http://localhost:4000/api/v1/auth/',
        params
      )
      debugger
      console.log(response)
    } catch (err) {
      console.log('エラーに入ったよ')
      // debugger
      console.log('エラーです')
    }
  },
}
