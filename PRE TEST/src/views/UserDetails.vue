<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['userPick'])
    },
    methods: {
        ...mapActions(useCounterStore, ['deleteUser']),
        deleteHandler(id){
            this.deleteUser(id)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="details-content">
            <h1 style="margin-bottom: 0; padding-bottom: 0;"><b>{{ userPick.firstName }} {{ userPick.lastName }}</b></h1>
            <p style="margin-top: 0; padding-top: 0;">{{ userPick.company.title }}</p>
            <img :src="userPick.image" alt="user image" style="width: 200px; height: 200px;"><br>
            <h3><b style="text-decoration: underline;">Address</b></h3>
            <h5>{{ userPick.address.address }}, {{ userPick.address.city }}, {{ userPick.address.state }} {{ userPick.address.postalCode }}</h5>
            <p><b>Email: </b>{{ userPick.email }} | <b>Phone: </b>{{ userPick.phone }}</p>
            <p><b>Gender: </b> {{ userPick.gender }}</p>
            <p><b>Card Number: </b>{{ userPick.bank.cardNumber }} | <b>Card Expire: </b>{{ userPick.bank.cardExpire }} | <b>Card Type: </b>{{ userPick.bank.cardType }}</p>
            <div>
                <RouterLink :to="'/'" class="btn btn-warning" style="margin-right: 10px;">Back</RouterLink><RouterLink class="btn btn-info" :to="`/users/${userPick.id}/edit`">Update</RouterLink>
            </div>
            <div style="margin-top: 10px;">
                <button @click.prevent="deleteHandler(userPick.id)" class="btn btn-outline-danger">Delete This User</button>
            </div>
        </div>
    </div>
</template>