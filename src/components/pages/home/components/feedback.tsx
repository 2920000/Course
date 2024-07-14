import { Avatar, Box, Container, Stack, Typography } from '@mui/material'

const FeadBack = () => {
    return (
        <Box
            mt={10}
            sx={{
                backgroundColor: '#F3EAD8',
            }}
            p={5}
        >
            <Container maxWidth="sm">
                <Stack alignItems={'center'} gap={3}>
                    <Typography variant="h4">Student says about us</Typography>
                    <Typography
                        component={'p'}
                        variant="h5"
                        fontWeight={'400'}
                        textAlign={'center'}
                    >
                        Everybody is different, which is why we offer styles for
                        every body. Laborum fuga incidunt laboriosam voluptas
                        iure, delectus dignissimos facilis neque nulla earum.
                    </Typography>
                    <Avatar sx={{ width: '50px', height: '50px' }}></Avatar>
                </Stack>
            </Container>
        </Box>
    )
}

export default FeadBack
