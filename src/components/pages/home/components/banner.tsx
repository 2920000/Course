import { Box, Button, Container, Stack, Typography } from '@mui/material'
import FeedImage from '../../../../assets/thought-catalog-o0Qqw21-0NI-unsplash.jpg'

const Banner = () => {
    return (
        <Container>
            <Stack direction={'row'} spacing={2}>
                <Stack
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Stack
                        spacing={3}
                        justifyContent={'center'}
                        alignItems={'center'}
                        height={'700px'}
                    >
                        <Typography variant="h4" textAlign={'center'}>
                            Học kỹ năng mới để tăng cơ hội nghề nghiệp
                        </Typography>
                        <Button variant="contained" sx={{ width: '200px' }}>
                            Bắt đầu tìm khóa học
                        </Button>
                    </Stack>
                </Stack>

                <Box
                    component={'img'}
                    src={FeedImage}
                    width={'50%'}
                    height={'700px'}
                />
            </Stack>
        </Container>
    )
}

export default Banner
