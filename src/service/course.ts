import axiosInstance from '.'
import { GET_COURSE } from './endpoint'

export const getCourse = () => {
    return axiosInstance.get(GET_COURSE).then((res) => {
        console.log('res', res)
        return res
    })
}
