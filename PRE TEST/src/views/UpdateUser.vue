<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    computed: {
        ...mapWritableState(useCounterStore, ['editUser', 'userPick'])
    },
    data(){
        return {
            firstName: '',
            lastName: '',
                address: {
                    address: '',
                    city: '',
                    state: '',
                    postalCode:''
                },
                email: '',
                phone: '',
                gender: '',
                bank: {
                    cardNumber: '',
                    cardExpire: '',
                    cardType: ''
                }
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['updateUser']),
        submitHandler() {
            const input = {
                firstName: this.firstName,
                lastName: this.lastName,
                address: {
                    address: this.address.address,
                    city: this.address.city,
                    state: this.address.state,
                    postalCode:this.address.postalCode
                },
                email: this.email,
                phone: this.phone,
                gender: this.gender,
                bank: {
                    cardNumber: this.bank.cardNumber,
                    cardExpire: this.bank.cardExpire,
                    cardType: this.bank.cardType
                }
            }
            this.updateUser(input, this.userPick.id)
        }
    },
    mounted(){
        this.firstName = this.userPick.firstName
        this.lastName = this.userPick.lastName
        this.address.address = this.userPick.address.address
        this.address.city = this.userPick.address.city
        this.address.state = this.userPick.address.state
        this.address.postalCode = this.userPick.address.postalCode
        this.email = this.userPick.email
        this.phone = this.userPick.phone
        this.gender = this.userPick.gender
        this.bank.cardNumber = this.userPick.bank.cardNumber
        this.bank.cardExpire = this.userPick.bank.cardExpire
        this.bank.cardType = this.userPick.bank.cardType
    }
}
</script>

<template>
    <div class="container">
        <div class="add-content">
            <h1 style="margin-bottom: 0; padding-bottom: 0;"><b>Update User Info</b></h1>
            <form @submit.prevent="submitHandler(input)">
                <div>
                    <label for="firstName">First Name: </label>
                    <input type="text" class="form-control" id="firstName" v-model="firstName">
                </div>
                <div>
                    <label for="lastName">Last Name: </label>
                    <input type="text" class="form-control" id="lastName" :placeholder="this.userPick ? this.userPick.lastName : ''" v-model="lastName">
                </div>
                <div>
                    <label for="address">Address: </label>
                    <input type="text" class="form-control" id="address" :placeholder="this.userPick ? this.userPick.address.address : ''" v-model="address.address">
                </div>
                <div>
                    <label for="city">City: </label>
                    <input type="text" class="form-control" id="city" :placeholder="this.userPick ? this.userPick.address.city : ''" v-model="address.city">
                </div>
                <div>
                    <label for="state">State: </label>
                    <input type="text" class="form-control" id="state" :placeholder="this.userPick ? this.userPick.address.state : ''" v-model="address.state">
                </div>
                <div>
                    <label for="postalCode">Postal Code: </label>
                    <input type="number" class="form-control" id="postalCode" :placeholder="this.userPick ? this.userPick.address.postalCode : ''" v-model="address.postalCode">
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type="text" class="form-control" id="email" :placeholder="this.userPick ? this.userPick.email : ''" v-model="email">
                </div>
                <div>
                    <label for="phone">Phone: </label>
                    <input type="text" class="form-control" id="phone" :placeholder="this.userPick ? this.userPick.phone : ''" v-model="phone">
                </div>
                <div>
                    <label for="gender">Gender: </label><br>
                    <select name="gender" id="gender" v-model="gender">
                        <option selected disabled>-- SELECT GENDER --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label for="cardNumber">Card Number: </label>
                    <input type="number" class="form-control" id="cardNumber" :placeholder="this.userPick ? this.userPick.bank.cardNumber : ''" v-model="bank.cardNumber">
                </div>
                <div>
                    <label for="cardExpire">Card Expire: </label>
                    <input type="text" class="form-control" id="cardExpire" :placeholder="this.userPick ? this.userPick.bank.cardExpire : ''" v-model="bank.cardExpire">
                </div>
                <div>
                    <label for="cardType">Card Type: </label>
                    <input type="text" class="form-control" id="cardType" :placeholder="this.userPick ? this.userPick.bank.cardType : ''" v-model="bank.cardType">
                </div><br>
                <div>
                    <RouterLink :to="`/users/${userPick.id}`" class="btn btn-warning" style="margin-right: 10px;">Cancel</RouterLink>
                    <button 
                    v-bind:disabled="
                    !firstName || !lastName ||
                    !address.address || !address.city || !address.state || !address.postalCode ||
                    !email || !phone || !gender ||
                    !bank.cardNumber || !bank.cardExpire || !bank.cardType" 
                    type="submit" 
                    class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>