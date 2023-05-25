<!-- <template>
  <div>
    <h1>Detalhes do Item</h1>
    <p>ID: {{ item.id }}</p>
    <p>Nome: {{ item.descricao }}</p>
  </div>
</template> -->
<template>
  <form>
    <!-- <v-text-field v-model="item.id" :error-messages="v$.item.id.$errors.map(e => e.$message)" :counter="10" label="Name"
      required @input="v$.item.id.$touch" @blur="v$.item.id.$touch"></v-text-field> -->

    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="shopping_basket" name="Nome produto" label="Usuário" type="login"
            v-model.trim="item.id"></v-text-field>
          <v-text-field prepend-icon="cases" name="login" label="Marca" type="login"
            v-model.trim="item.id"></v-text-field>
          <v-text-field prepend-icon="attach_money" name="login" label="Valor" type=""
            v-model.trim="item.id"></v-text-field>
          <v-btn class="me-4" @click="salvar" >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      label="E-mail"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-select
      v-model="state.select"
      :items="items"
      :error-messages="v$.select.$errors.map(e => e.$message)"
      label="Item"
      required
      @change="v$.select.$touch"
      @blur="v$.select.$touch"
    ></v-select>

    <v-checkbox
      v-model="state.checkbox"
      :error-messages="v$.checkbox.$errors.map(e => e.$message)"
      label="Do you agree?"
      required
      @change="v$.checkbox.$touch"
      @blur="v$.checkbox.$touch"
    ></v-checkbox> -->

    <!-- <v-btn class="me-4" @click="v$.$validate">
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn> -->
  </form>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      item: {},
    };
  },
  created() {
    this.carregarProduto();
  },
  methods: {
    carregarProduto() {
      axios.get(`http://localhost:3000/api/v1/produtos/${this.$route.params.id}`).then(response => {
        console.log(response.data)
        this.item = response.data[0]
        console.log(this.item)
      }).catch(e => console.log(e))
    }
  }
};
</script>






