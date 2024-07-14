import {
    Box,
    Button,
    Link,
    Modal,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { FC, useState } from 'react'
import { SignUpForm } from './auth.model'

type AuthProps = {
    open: boolean
    setOpen: (open: boolean) => void
    onSignUpFormChange: (data: SignUpForm) => void
}

const Auth: FC<AuthProps> = ({ open, setOpen, onSignUpFormChange }) => {
    const [isSignUpForm, setIsSignUpForm] = useState<boolean>(true)
    const { handleChange, handleSubmit, errors } = useFormik<SignUpForm>({
        initialValues: {
            username: '',
            password: '',
        },

        validate: (data: SignUpForm) => {
            const username = !data.username ? 'Can not empty' : ''
            const password = !data.password ? 'Can not empty' : ''

            if (username || password) {
                return {
                    username,
                    password,
                }
            }
            return undefined
        },
        onSubmit: (data) => {
            console.log(data)
            onSignUpFormChange(data)
        },
    })

    return (
        <Modal
            open={open}
            onClose={() => {
                setOpen(false)
            }}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {isSignUpForm ? (
                <Box
                    sx={{
                        height: '300px',
                        width: '300px',
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        p: 5,
                    }}
                >
                    <Stack spacing={2} component="form">
                        <Typography variant="h6" textAlign={'center'}>
                            Đăng ký
                        </Typography>
                        <Typography variant="subtitle2" textAlign={'center'}>
                            Hãy bắt đầu để học miễn phí
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                label="Tên tài khoản"
                                size="small"
                                id="username"
                                onBlur={handleChange}
                                error={Boolean(errors.username)}
                                helperText={errors.username}
                            />
                            <TextField
                                label="Mật khẩu"
                                size="small"
                                id="password"
                                error={Boolean(errors.password)}
                                helperText={errors.password}
                                onBlur={handleChange}
                            />
                        </Stack>
                        <Button
                            variant="contained"
                            onClick={() => {
                                console.log('dang ky')
                                handleSubmit()
                            }}
                        >
                            Đăng ký
                        </Button>
                        <Typography textAlign={'center'}>
                            Đã có tài khoản?{' '}
                            <Link
                                underline="hover"
                                onClick={() => setIsSignUpForm(false)}
                            >
                                Đăng nhập
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            ) : (
                <Box
                    sx={{
                        height: '300px',
                        width: '300px',
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        p: 5,
                    }}
                >
                    <Stack spacing={2}>
                        <Typography variant="h6" textAlign={'center'}>
                            Đăng nhập
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                required
                                label="Tên tài khoản"
                                size="small"
                            />
                            <TextField required label="Mật khẩu" size="small" />
                        </Stack>
                        <Button variant="contained">Đăng nhập</Button>
                        <Typography textAlign={'center'}>
                            Chưa có tài khoản?{' '}
                            <Link
                                underline="hover"
                                onClick={() => setIsSignUpForm(true)}
                            >
                                Đăng ký
                            </Link>
                        </Typography>
                    </Stack>
                </Box>
            )}
        </Modal>
    )
}

export default Auth
