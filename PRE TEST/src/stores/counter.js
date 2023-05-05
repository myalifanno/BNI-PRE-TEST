// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    url: 'https://dummyjson.com',
    users: '',
    userPick: '',
    newUser: {
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
    },
    editUser: {
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
  }),
  actions: {
    async fetchUsers(){
      try {
        const { data } = await axios({
          url: this.url + '/users',
          method: 'GET'
        })
        this.users = data.users
      } catch (error) {
        console.log(error)
      }
    },
    async addUser(input){
      console.log(input)
      try {
        const { data } = await axios({
          url: this.url + '/users/add',
          method: 'POST',
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            address: {
              address: input.address,
              city: input.city,
              state: input.state,
              postalCode:input.postalCode
            },
            email: input.email,
            phone: input.phone,
            gender: input.gender,
            bank: {
              cardNumber: input.cardNumber,
              cardExpire: input.cardExpiry,
              cardType: input.cardType
            }
          },
        })
        console.log(data, '<<<<DATA STATE')
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async findUser(id){
      try {
        const { data } = await axios({
          url: this.url + `/users/${id}`,
          method: 'GET'
        })
        this.userPick = data
        this.router.push(`/users/${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser(input, id){
      try {
        const { data } = await axios({
          url: this.url + `/users/${id}`,
          method: 'PATCH',
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            address: {
              address: input.address,
              city: input.city,
              state: input.state,
              postalCode:input.postalCode
            },
            email: input.email,
            phone: input.phone,
            gender: input.gender,
            bank: {
              cardNumber: input.cardNumber,
              cardExpire: input.cardExpiry,
              cardType: input.cardType
            }
          },
        })
        console.log(data, '<<<DATA PATCH STATE')
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser(id){
      try {
        const { data } = await axios({
          url: this.url + `/users/${id}`,
          method: 'DELETE'
        })
        console.log(data.firstName, data.lastName, data.isDeleted, data.deletedOn, '<<<DELETED')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
