<template>
  <div class="page employees-list">
    <h1 class="employees-list__header">Employees</h1>
    <div v-if="loading" class="employees-list__loading">Loading...</div>
    <table v-else class="employees-list__list">
      <thead>
      <tr class="employees-list__list-header">
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tr v-for="employee in employees" class="employees-list__list-row">
        <td data-label="Id">{{employee.id}}</td>
        <td data-label="Name">{{employee.name}}</td>
        <td data-label="Address">{{employee.address.street}}
          {{employee.address.suite}} {{employee.address.city}}
        </td>
        <td data-label="Phone">{{employee.phone}}</td>
        <td data-label="Email"><a :href="`mailto:${ employee.email }`">{{employee.email}}</a>
        </td>
        <td>
          <router-link :to="{name: 'EmployeeForm', params: {id: employee.id}}">
            <edit-button></edit-button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
 import axios from 'axios';
 import EditButton from '../components/EditButton'

 export default {
  data() {
   return {
    loading: false,
    employees: [],
   }
  },
  components: {
   EditButton
  },
  created() {
   this.fetchData()
  },
  watch: {
   '$route': 'fetchData'
  },
  methods: {
   fetchData() {
    this.loading = true;

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(({data}) => {
     this.employees = data;
    })
    .finally(() => {
     this.loading = false;
    })
   }
  }
 };

</script>
<style lang="scss" scoped>
  .employees-list {
    &__header {
      font-size: 20px;
      padding: 0 0 10px;
    }

    &__loading {
      color: #999d9d;
      text-align: center;
    }

    &__list {
      font-size: 14px;
      width: 100%;
      border-collapse: collapse;
      tr:last-child {
        margin: 0 0 5rem 0;
      }
      @media screen and (max-width: 1023px) {
        thead {
          display: none;
        }
        tr {
          border-bottom: 3px solid #ddd;
          display: block;
          margin-bottom: .625em;
        }
        tr:last-child {
          margin: 0 0 5rem 0;
        }
        td {
          border-bottom: 1px solid #ddd;
          display: block;
          font-size: .8em;
          text-align: right;
        }
        td::before {
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
        td:last-child {
          border-bottom: 0;
        }
      }
    }

    &__list-header {
      background: #f7f8f9;
      border-bottom: 1px solid #999d9d;

      th {
        padding: 8px;
      }
    }

    &__list-row {
      background: #fff;

      td {
        padding: 8px;
      }
    }
  }
</style>