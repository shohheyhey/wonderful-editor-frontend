<template>
  <v-app dark>
    <v-app-bar
      :class="$style.header"
      :clipped-left="clipped"
      fixed
      app
      color="#3185DF"
    >
      <v-toolbar-title :class="$style.title" v-text="title" />
      <v-spacer />
      <v-btn elevation="2" outlined plain raised :class="$style.button">
        ユーザー登録
      </v-btn>
      <v-btn elevation="2" outlined plain raised :class="$style.button">
        ログイン
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'WonderfulEditor',
    }
  },
}
</script>
<style lang="scss" module>
.header {
  .title {
    font-weight: bold;
    color: #fff;
  }
  .button {
    margin: 0.5rem;
    color: #fff;
    font-weight: bold;
  }
}
</style>
