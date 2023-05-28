<template>
  <div>
    <div>
        <v-alert v-if="showMessage" variant="outlined" type="warning">
          {{ mensagem }}
        </v-alert>
      </div>
    <template>
      <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items="desserts" item-value="id" 
        class="elevation-1">
        <template #item="{ item }">
          <tr>
            <td>{{ item.nome }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.login }}</td>
            <!-- <td>{{ `R$${item.preco}` }}</td> -->
          </tr>
        </template>
    
      </v-data-table>
   
    </template>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ProdutoList',
   created() {
    this.loadItems();
  },
  data () {
    return {
    itemsPerPage: 5,
    headers: [
      {
        text: 'Nome',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'E-mail', align: 'start', value: 'email', sortable: false },
      { text: 'Login', align: 'start', value: 'login', sortable: false },
    ],
    desserts: [],
    mensagem: '',
    showMessage: false,
  }},
  methods: {
    loadItems() {
      this.loading = true
      const url = 'https://pucmg.vps.webdock.cloud:4000/api/v1/seguranca'
      axios.get(`${url}`).then(response => {
          console.log(response.data)
          this.desserts = response.data
          console.log(this.desserts)
        }).catch(e => console.log(e))
    },
  },
}
</script>