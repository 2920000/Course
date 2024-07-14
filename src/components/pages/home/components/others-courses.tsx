import {
    Box,
    Button,
    Container,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material'
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
const OthersCourse = () => {
    return (
        <Box>
            <Container>
                <ImageList cols={4} gap={20}>
                    {mockedItemData.map((image) => (
                        <ImageListItem>
                            <img src={image.img} />
                            <ImageListItemBar
                                title="Title1"
                                subtitle="subTitle"
                                actionIcon={
                                    <IconButton>
                                        <Button
                                            color="success"
                                            variant="contained"
                                        >
                                            Veiw Course
                                        </Button>
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    )
}

export default OthersCourse
