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
            <td>{{ item.id }}</td>
            <td>{{ item.descricao }}</td>
            <td>{{ item.marca }}</td>
            <td>{{ `R$${item.preco}` }}</td>
            <td style="text-align: center;">
              <v-btn small class="mr-2" @click="editItem(item)">Editar</v-btn>
              <v-btn small @click="deleteItem(item)">Excluir</v-btn>
            </td>
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
        text: 'Código',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'Descricao', align: 'start', value: 'descricao', sortable: false },
      { text: 'Marca', align: 'start', value: 'marca', sortable: false },
      { text: 'Preço', align: 'start', value: 'preco', sortable: false },
      { text: 'Ações', align: 'center', sortable: false },
    ],
    desserts: [],
    mensagem: '',
    showMessage: false,
  }},
  methods: {
    loadItems() {
      this.loading = true
      axios.get('http://localhost:3000/api/v1/produtos').then(response => {
          console.log(response.data)
          this.desserts = response.data
          console.log(this.desserts)
        }).catch(e => console.log(e))
    },
    editItem(item) {
      this.$router.push({ name: 'item-detalhes', params: { id: item.id } });
      console.log('Editar item:', item);
    },
    deleteItem(item) {
      axios.delete(`http://localhost:3000/api/v1/produtos/${item.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      }).then(response => {
        this.desserts = response.data
        console.log(this.desserts)
      }).catch(e => {
        console.log(e)
        this.mensagem = e.response.data.message;
        this.showMessage = true;
        console.log(e.response.data.message)
          setTimeout(() => { this.showMessage = false}, 4000);
        })
    },
  },
}
</script>
<!-- export default {
 name: 'ProdutoList'
,
  }

</script> -->