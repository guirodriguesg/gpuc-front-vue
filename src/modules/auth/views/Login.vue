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
                        <!-- <v-btn :disabled="$v.$invalid" color="primary" large @click="submit">Login</v-btn> -->
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

import { required, user, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

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
        required,
        user
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    log () {
      // console.log('vuelidate: ', this.$v)
    },
    submit () {
      // console.log('user: ', this.user)
    }
  }
}

</script>
