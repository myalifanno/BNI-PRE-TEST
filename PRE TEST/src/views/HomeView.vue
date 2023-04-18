<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import UsersTable from '../components/UsersTable.vue'

export default {
  components: {
    UsersTable
  },
  computed: {
    ...mapWritableState(useCounterStore, ['users'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchUsers'])
  },
  created(){
    this.fetchUsers()
  }
}
</script>

<template>
  <main>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No.</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Card Number</th>
          <th>Card Type</th>
          <th>Card Expire</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <UsersTable v-for="(el, index) in users" :key="el.id" :el="el" :index="index" />
      </tbody>
    </table>
  </main>
</template>
