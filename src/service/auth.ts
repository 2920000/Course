import axiosInstance from '.'
import { SIGN_UP } from './endpoint'

export const signUpAccount = (data: any) => {
    return axiosInstance.post(SIGN_UP, data).then((res) => {
        return res.data
    })
}
