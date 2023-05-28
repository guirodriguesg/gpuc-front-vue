<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in links" :key="item.title" :to="item.url" >

          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title @click.stop="drawer = !drawer">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
          <div class="pa-2">
            <v-btn @click="logout" block>
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
    </v-app-bar>

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <v-main>
            <router-view></router-view>
          </v-main>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  props: {
    value: Boolean
  },

  data: () => ({
    drawer: false,
    group: null,
    links: [
      { title: 'Home', icon: 'dashboard', url: '/home' },
      { title: 'Produto', icon: 'shopping_cart', url: '/home/produto' },
      { title: 'Produto-List', icon: 'shopping_cart', url: '/home/produto-list' },
      { title: 'Usuario', icon: 'person', url: '/home/registra-usuario' }
    ],
    items: []
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    logout() {
      localStorage.setItem('token', '');
      this.$router.push('/login');
    }
  },
}
</script>
