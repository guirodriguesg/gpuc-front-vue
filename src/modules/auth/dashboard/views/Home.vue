<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list :opened="open">
        <v-subheader>Home</v-subheader>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>inventory</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Produto </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group class="pl-10">
            <v-list-item v-for="item in linksProduto" :key="item.title" :to="item.url" sub-group>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title @click.stop="drawer = !drawer">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>

        <v-list-group :disabled="isAdmin">
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Usuário </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item-group class="pl-10">
            <v-list-item v-for="item in linksUsuario" :key="item.title" :to="item.url" sub-group>
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title  @click.stop="drawer = !drawer">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-group>
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
  afterMount(){

    const user =localStorage.getItem('user');
    this.isAdmin = user.roles.includes("ADMIN");
  },
  data: () => ({
    drawer: false,
    group: null,
    linksProduto: [
      { title: 'Listar produtos', icon: 'list', url: '/home/produto-list' },
      { title: 'Criar produto', icon: 'add', url: '/home/produto-create' },
    ],
    linksUsuario: [
      { title: 'Listar usuários', icon: 'list', url: '/home/usuario-list'  },
      { title: 'Cadastrar usuário', icon: 'add', url: '/home/registra-usuario'  }
    ],
    isAdmin: false,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    logout() {
      localStorage.setItem('token', '');
      localStorage.setItem('user', null);
      this.$router.push('/login');
    }
  },
}
</script>
