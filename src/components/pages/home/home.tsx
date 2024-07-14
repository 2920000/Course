import FileCopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import SaveIcon from '@mui/icons-material/Save'
import ShareIcon from '@mui/icons-material/Share'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import Banner from './components/banner'
import Courses from './components/courses'
import FeadBack from './components/feedback'
import Footer from './components/footer'
import Header from './components/header'
import OthersCourse from './components/others-courses'

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
]

const Home = () => {
    return (
        <Box>
            <Header />
            <Box mt={10}>
                <Banner />
                <Courses />
                <FeadBack />
                <OthersCourse />
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <Footer />
        </Box>
    )
}

export default Home
