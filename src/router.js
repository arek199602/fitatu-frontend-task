import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '@pages/EmployeesList';
import EmployeeForm from '@pages/EmployeeForm'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: 'list',
        },
        {
            path: '/list',
            name: 'employeesList',
            component: EmployeesList,
        },
        {
            path: '/employee/:id',
            name: 'EmployeeForm',
            component: EmployeeForm
        }
    ],
});

export default router;