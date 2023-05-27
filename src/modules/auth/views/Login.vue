<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex xs12 sm6 md4 lg3 xl3>
        <v-card class="elevation-15">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" name="login" label="Usuário" type="login" v-model.trim="user.login">
              </v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Senha" type="password" v-model.trim="user.senha">
              </v-text-field>
            </v-form>
          </v-card-text>
          <div>
            <v-alert v-if="showMessage" variant="outlined" type="warning">
              {{ mensagem }}
            </v-alert>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="loginValid()" color="primary" large @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

import { required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import axios from 'axios'

export default {
  name: 'Login',
  setup() { return { $v: useVuelidate() } },
  data: () => ({
    mensagem: '',
    showMessage: false,
    user: {
      login: '',
      senha: ''
    }
  }),
  validations: {
    user: {
      login: {
        required
      },
      senha: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    userErros() {
      const errors = []
      const usuario = this.$v.user.usuario
      return errors
    }
  },
  methods: {
    log() {
      console.log('vuelidate: ', this.$v)
    },
    loginValid() {
      console.log(this.user)
      return this.user.login == "" && this.senha == "";
    },

    login() {
      console.log('user: ', this.user)
      axios.post('http://localhost:3000/api/v1/seguranca/login', this.user)
        .then(response => {
          this.user = {};
          localStorage.setItem('token', response.data.token);
          this.$router.push(this.$route.query.redirect || '/home');
        }).catch(e => {
          console.log(e.response.data.message)
          this.user = {};
          this.mensagem = e.response.data.message;
          this.showMessage = true;
          setTimeout(() => { this.showMessage = false}, 4000);
        })
    }
  }
}

</script>
