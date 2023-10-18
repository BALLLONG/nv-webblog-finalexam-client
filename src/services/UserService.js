import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('http://10.10.59.14:8081/cars')
    },
    show(carId) {
        return Api().get('http://10.10.59.14:8081/car/carId' + carId)
    },
    post(car) {
        return Api().post('http://10.10.59.14:8081/car', car)
    },
    put(car) {
        return Api().put('http://10.10.59.14:8081/car/carId' + car.id, car)
    },
    delete(car) {
        return Api().delete('http://10.10.59.14:8081/car/carId' + car.id, car)
    },
}