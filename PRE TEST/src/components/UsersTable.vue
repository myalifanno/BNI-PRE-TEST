<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter'

export default {
    props:['el', 'index'],
    methods: {
        ...mapActions(useCounterStore, ['findUser']),
        details(id){
            this.findUser(id)
        }
    }
}
</script>

<template>
    <tr>
        <td>{{ el.id }}</td>
        <td>
            <img :src="el.image" alt="User Image" style="width: 100px; height: 100px;"> 
        </td>
        <td>{{ el.firstName }}</td>
        <td>{{ el.lastName }}</td>
        <td>{{ el.bank.cardNumber }}</td>
        <td>{{ el.bank.cardType }}</td>
        <td>{{ el.bank.cardExpire }}</td>
        <td>
            <a href="#" class="btn btn-info" @click.prevent="details(el.id)">Details</a>
        </td>
    </tr>
</template>