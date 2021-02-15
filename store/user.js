import Vue from 'pages/sign_up.vue'
export const state = () => {
  return {}
}

// export const getters = {}

export const mutations = {}

export const actions = {
  async fetchRegistration({ commit }) {
    const params = {
      name: this.name,
      email: this.email,
      password: this.password,
    }
    try {
      const response = await this.$axios.post(
        'http://localhost:4000/api/v1/auth/',
        params
      )
      console.log(response) // ここでレスポンスが返ってきてるか確認したい
    } catch (err) {
      console.log('エラーに入ったよ')
      // debugger
      console.log('エラーです')
    }
  },
}
