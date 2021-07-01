import axios from 'axios'

const instance = axios.create({
    baseURL: "https://backend-tinder-nabendu.herokuapp.com"
})

export default instance