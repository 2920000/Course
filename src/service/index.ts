import axios from 'axios'

const axiosInstance = axios.create({})

export default axiosInstance

axiosInstance.interceptors.response.use(
    (res) => {
        return res
    },
    (error) => {
        //Todo : Should call api again if token face error
        console.log(error)
    }
)
