<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['newUser'])
    },
    methods: {
        ...mapActions(useCounterStore, ['addUser']),
        submitHandler() {
            const input = {
                firstName: this.newUser.firstName,
                lastName: this.newUser.lastName,
                address: {
                    address: this.newUser.address.address,
                    city: this.newUser.address.city,
                    state: this.newUser.address.state,
                    postalCode:this.newUser.address.postalCode
                },
                email: this.newUser.email,
                phone: this.newUser.phone,
                gender: this.newUser.gender,
                bank: {
                    cardNumber: this.newUser.bank.cardNumber,
                    cardExpire: this.newUser.bank.cardExpire,
                    cardType: this.newUser.bank.cardType
                }
            }
            this.addUser(input)
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="add-content">
            <h1 style="margin-bottom: 0; padding-bottom: 0;"><b>Add New User</b></h1>
            <form @submit.prevent="submitHandler(input)">
                <div>
                    <label for="firstName">First Name: </label>
                    <input type="text" class="form-control" id="firstName" placeholder="input first name" v-model="newUser.firstName">
                </div>
                <div>
                    <label for="lastName">Last Name: </label>
                    <input type="text" class="form-control" id="lastName" placeholder="input last name" v-model="newUser.lastName">
                </div>
                <div>
                    <label for="address">Address: </label>
                    <input type="text" class="form-control" id="address" placeholder="input address" v-model="newUser.address.address">
                </div>
                <div>
                    <label for="city">City: </label>
                    <input type="text" class="form-control" id="city" placeholder="input city" v-model="newUser.address.city">
                </div>
                <div>
                    <label for="state">State: </label>
                    <input type="text" class="form-control" id="state" placeholder="input state" v-model="newUser.address.state">
                </div>
                <div>
                    <label for="postalCode">Postal Code: </label>
                    <input type="number" class="form-control" id="postalCode" placeholder="input postal code" v-model="newUser.address.postalCode">
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="text" class="form-control" id="email" placeholder="input email" v-model="newUser.email">
                </div>
                <div>
                    <label for="phone">Phone: </label>
                    <input type="number" class="form-control" id="phone" placeholder="input phone number" v-model="newUser.phone">
                </div>
                <div>
                    <label for="gender">Gender: </label><br>
                    <select name="gender" id="gender" v-model="newUser.gender">
                        <option selected disabled>-- SELECT GENDER --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label for="cardNumber">Card Number: </label>
                    <input type="number" class="form-control" id="cardNumber" placeholder="input card number" v-model="newUser.bank.cardNumber">
                </div>
                <div>
                    <label for="cardExpire">Card Expire: </label>
                    <input type="text" class="form-control" id="cardExpire" placeholder="input card expire" v-model="newUser.bank.cardExpire">
                </div>
                <div>
                    <label for="cardType">Card Type: </label>
                    <input type="text" class="form-control" id="cardType" placeholder="input card type" v-model="newUser.bank.cardType">
                </div><br>
                <div>
                    <button 
                    v-bind:disabled="
                    !newUser.firstName || !newUser.lastName ||
                    !newUser.address.address || !newUser.address.city || !newUser.address.state || !newUser.address.postalCode ||
                    !newUser.email || !newUser.phone || !newUser.gender ||
                    !newUser.bank.cardNumber || !newUser.bank.cardExpire || !newUser.bank.cardType" 
                    type="submit" 
                    class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>