<template>
  <form class="myForm" v-if="!loading">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="example@wp.pl"
             v-model="employee.email">

      <label for="phone">Phone</label>
      <input type="email" id="phone" placeholder="123123123"
           v-model="employee.phone">

      <label for="name">Name</label>
      <input id="name" type="text" placeholder="John Deer"
             v-model="employee.name">

      <label for="street">Street</label>
      <input id="street" type="text" placeholder="Street name"
             v-model="employee.address.street">

      <label for="suite">Suite</label>
      <input id="suite" type="text" placeholder="23"
             v-model="employee.address.suite">

      <label for="city">City</label>
      <input id="city" type="text" placeholder="City"
             v-model="employee.address.city">

    <button @click.prevent="updateEmployee()">{{buttonText}}</button>
  </form>
</template>

<script>
 import axios from 'axios'

 export default {
  name: "EmployeeForm",
  data() {
   return {
    loading: false,
    text: {
     submit: 'Submit employee',
     update: 'Updating'
    },
    buttonText: ''
   }
  },
  created() {
   this.buttonText = this.text.submit
   this.fetchEmployee()
  },
  methods: {
   updateEmployee() {
    this.buttonText = this.text.update
    axios.patch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`,{
     email: this.employee.email,
     name: this.employee.name,
     phone: this.employee.phone,
     address: {
      city: this.employee.address.city,
       street: this.employee.address.street,
       suite: this.employee.address.suite
      }
    })
    .then(({data}) => {
     this.buttonText = this.text.submit
     console.log(data)
    })
   },
   fetchEmployee() {
    this.loading = true;

    axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
    .then(({data}) => {
     this.employee = data;
    })
    .finally(() => {
     this.loading = false;
    })
   }
  }
 }
</script>

<style scoped lang="scss">
  form {
    display: grid;
    grid-template-columns: [labels] auto [controls] 1fr;
    grid-auto-flow: row;
    grid-gap: .8em;
    background: #eee;
    padding: 1.2em;
     input,
     textarea,
     button {
      grid-column: controls;
      grid-row: auto;
      border: none;
      padding: 1em;
    }
    label  {
      grid-column: labels;
      grid-row: auto;
      align-self: center;
    }
    button:hover {
      cursor: pointer;
    }
  }
</style>