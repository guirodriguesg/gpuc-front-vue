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
              <v-text-field prepend-icon="person" name="login" label="Usuário" type="login"
                v-model.trim="$v.user.usuario.$model">
              </v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Senha" type="password"
                v-model.trim="$v.user.password.$model">
              </v-text-field>
            </v-form>
            <v-btn block depressed color="secondary" @click="log">
              Criar Conta
            </v-btn>
          </v-card-text>
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
  setup () { return { $v: useVuelidate() } },
  data: () => ({
    user: {
      usuario: '',
      password: ''
    }
  }),
  validations: {
    user: {
      usuario: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    userErros () {
      const errors = []
      const usuario = this.$v.user.usuario
      return errors
    }
  },
  methods: {
    log() {
      console.log('vuelidate: ', this.$v)
    },
    loginValid () {
      return this.$v.invalid
    },
    criarUsuario () {
      axios.post('http://localhost:3000/api/v1/seguranca/register', {
        "login": "usuario3",
        "senha": "123456"
      })
        .then(response => {
          console.log(response.data.token);
          localStorage.setItem('token', response.data.token);
          window.location.href = "http://localhost:8081/produto"
        }).error(e => console.log(e))
      console.log('USUARIO CRIADO COM SUCESSO')
    },

    login() {
      console.log('user: ', this.user)
      axios.post('http://localhost:3000/api/v1/seguranca/login', {
        "login": "usuario3",
        "senha": "123456"
      })
        .then(response => {
          console.log(response.data.token);
          localStorage.setItem('token', response.data.token)
          this.$router.push(this.$route.query.redirect || '/home')
        }).error(e => console.log(e))
    }
  }
}

</script>
