import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Rating,
    Stack,
    Typography,
} from '@mui/material'
import { useEffect } from 'react'
import { getCourse } from '../../../../service/course'

const mockedItemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rate: 4,
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        rate: 4.5,

        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        rate: 4,

        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        rate: 5,

        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        rate: 5,
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        rate: 5,
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
]

const Courses = () => {
    useEffect(() => {
        getCourse()
    }, [])

    return (
        <Container maxWidth={'lg'}>
            <Box mt={5}>
                <Typography
                    mb={2}
                    variant="h4"
                    component="h1"
                    textAlign={'center'}
                >
                    Khoá học miễn phí
                </Typography>
                <Grid container spacing={2}>
                    {mockedItemData.map((mockedItem) => (
                        <Grid item md={4}>
                            <Card>
                                <CardMedia
                                    component={'img'}
                                    height={200}
                                    image={mockedItem.img}
                                />
                                <CardContent>
                                    <Typography variant="h5">Course</Typography>
                                    <Typography component="h4">
                                        {mockedItem.content}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Rating
                                        name="read-only"
                                        value={mockedItem.rate}
                                        size="small"
                                        readOnly
                                    />
                                    <Typography
                                        component="span"
                                        variant="subtitle2"
                                        color={'gray'}
                                        fontSize={'13px'}
                                    >
                                        {mockedItem.rate} (100 Review)
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                mt={10}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '40px',
                    backgroundColor: '#EFFDFF',
                }}
            >
                <Box
                    component={'img'}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    sx={{ width: '600px', height: '400px' }}
                ></Box>
                <Box>
                    <Stack
                        height={'100%'}
                        justifyContent={'space-between'}
                        gap={5}
                    >
                        <Typography variant="h4">
                            The world’s largest selection of online courses
                        </Typography>
                        <Typography component="p">
                            Millions of people have used Kingster to decide
                            which online course to take. We aggregate courses
                            from many universities to help you find the best
                            courses on almost any subject, wherever they exist.
                            Our goal is to make online education work for
                            everyone.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                width: '200px',
                                height: '60px',
                                fontSize: '13px',
                            }}
                        >
                            Browse cource
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}
export default Courses
