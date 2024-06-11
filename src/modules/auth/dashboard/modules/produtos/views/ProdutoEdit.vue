<template>
  
  <v-card justify-center align-center>
    <div>
    <v-alert v-if="showMessage"
      variant="outlined"
      type="warning"
      close-label="Close Alert"
      closable
      prominent
      border="top"
    >
      {{ mensagem }}
    </v-alert>
  </div>
    <v-card-text>
      <v-form>
        <v-text-field prepend-icon="shopping_basket" name="nomeproduto" label="Nome produto" type="text"
          v-model.trim="item.descricao"></v-text-field>
        <v-text-field prepend-icon="cases" name="marca" label="Marca" type="text"
          v-model.trim="item.marca"></v-text-field>
        <CurrencyInput v-model="item.preco" v-bind:label="label5" v-bind:readonly="readonly5"
          v-bind:placeholder="placeholder" v-bind:disabled="false" v-bind:outlined="false" v-bind:clearable="clearable5"
          v-bind:options="options5" />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <div class="pa-4 ml-auto text-right">
      <v-btn class=" me-4" @click="salvar">
        salvar
      </v-btn>
      <v-btn @click="limpar">
        limpar
      </v-btn>
    </div>
  </v-card>
</template>

<script>


import axios from 'axios'
import CurrencyInput from '../../templates/CurrencyInput.vue'

export default {
  name: 'ProdutoEdit',
  components: { CurrencyInput },
  props: {
    id: {
      type: Number,
      required: false,
      label: String,
      placeholder: String,
    },
  },
  data() {
    return {
      mensagem: '',
      showMessage: false,
      item: {},
      value5: "1234567.89",
      label5: "Preço",
      placeholder: "Digite o valor",
      readonly5: false,
      disabled5: false,
      outlined5: true,
      clearable5: false,
      options5: {
        locale: "pt-BR",
        prefix: "R$",
        suffix: "",
        length: 9,
        precision: 2,
      }
    };
  },
  created() {
    this.carregarProduto();
  },
  methods: {
    carregarProduto() {
      const url = 'https://pucmg.vps.webdock.cloud:4000/api/v1/produtos'
      axios.get(`${url}/${this.$route.params.id}`).then(response => {
        console.log(response.data)
        this.item = response.data[0]
        // this.item.valor = new Number(this.item.preco.replace(/[^0-9]/g,''))
        console.log(this.item)
      }).catch(e => console.log(e))
    },
    limpar() {
      console.log("LIMPANDO...")
      this.item.descricao = "";
      this.item.marca = "";
      this.item.preco = 0;
    },
    salvar() {
      if(this.item.descricao === "" || this.item.marca === "" || this.item.preco === 0){
        this.mensagem = "Preencha todos os campos!";
        this.showMessage = true;
        return;
      }

      const url = 'https://pucmg.vps.webdock.cloud:4000/api/v1/produtos'
      axios.put(`${url}/${this.item.id}`, this.item, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Custom-Header': 'value'
        }
      }
      ).then(response => {
        console.log("Produto salvo com sucesso!")
        this.$router.go(-1);

      }).catch(e => console.log(e))
      console.log("Salvando...")
    }
  }
};
</script>






