import Vue from 'vue'
import Router from 'vue-router'
import CarIndex from '@/components/Cars/Index'
import CarEdit from '@/components/Cars/EditUser'
import CarShow from '@/components/Cars/ShowUser'
import CarCreate from '@/components/Cars/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/car/create',
      name: 'car-create',
      component: CarCreate
    },
    {
      path: '/car/edit/:carId',
      name: 'car-edit',
      component: CarEdit
    },
    {
      path: '/car/:carId',
      name: 'car',
      component: CarShow
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarIndex
    },

    

  ]
})
