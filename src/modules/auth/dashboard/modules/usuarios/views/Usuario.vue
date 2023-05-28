<template>
  <div>
    <v-container class="bg-surface-variant mb-6">
      <div style="height: 150px;"></div>
      <v-sheet class="pa-12" color="grey-lighten-3">
        <div>
          <v-alert v-if="showMessage" variant="outlined" type="success">
            {{ mensagem }}
          </v-alert>
        </div>
        <v-form>
          <v-text-field v-model="user.nome" label="Nome" required @input="v$.nome.$touch"
            @blur="v$.nome.$touch"></v-text-field>
          <!-- <v-text-field v-model="user.login" :error-messages="v$.login.$errors.map(e => e.$message)" label="Login"
            required @input="v$.login.$touch" @blur="v$.login.$touch"></v-text-field> -->

          <v-text-field v-model="user.login" label="Login" required @input="v$.login.$touch"
            @blur="v$.login.$touch"></v-text-field>

          <v-text-field v-model="user.email" label="E-mail" type="email" required></v-text-field>

          <v-select v-model="selectedRoles" :items="user.roles" label="Permissões" multiple persistent-hint></v-select>

          <v-text-field v-model="user.senha" :error-messages="v$.senha.$errors.map(e => e.$message)" label="Senha"
            required @input="v$.senha.$touch" @blur="v$.senha.$touch" :counter="8" type="password"></v-text-field>

          <v-btn class="me-4" :disabled="v$.$invalid" @click="save()">
            SALVAR
          </v-btn>
          <v-btn @click="clear()">
            LIMPAR
          </v-btn>
        </v-form>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup() {
    const estadoInicialUser = {
      nome: '',
      login: '',
      email: '',
      roles: ["ADMIN", "USER"],
      senha: '',
    }

    const user = reactive({
      ...estadoInicialUser,
    })

    const rules = {
      nome: { required },
      login: { required },
      email: { required },
      roles: { required },
      senha: { required },
    }

    const v$ = useVuelidate(rules, user)

    function clear() {
      v$.value.$reset()

      for (const [key, value] of Object.entries(estadoInicialUser)) {
        user[key] = value
      }
    }

    function save() {
      // if(this.v$.$validate){
      //   return this.v$.$validate
      // }

      console.log(this.rules);
    }

    return { user, clear, v$ }
  },

  data: () => ({
    selectedRoles: [],
    mensagem: '',
    showMessage: false,
    isOk: false,
  }),

  methods: {
    save() {
      console.log(this.user);
      axios.post('http://localhost:3000/api/v1/seguranca/register', this.user)
        .then(response => {
          this.mensagem = 'Usuário cadastrado com sucesso';
          this.showMessage = true;
          this.isOk = true;
          setTimeout(() => { this.showMessage = false }, 4000);
        }).error(e => {
          this.mensagem = e.response.data.message;
          this.showMessage = true;
          setTimeout(() => { this.showMessage = false }, 4000);
        })
    }
  }

}
</script>