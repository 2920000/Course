import { Logout, SearchOutlined } from '@mui/icons-material'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import EmailIcon from '@mui/icons-material/Email'
import MenuIcon from '@mui/icons-material/Menu'
import SchoolIcon from '@mui/icons-material/School'
import SendIcon from '@mui/icons-material/Send'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    TextField,
    Toolbar,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { signUpAccount } from '../../../../service/auth'
import Auth from '../../../organisms/auth/auth'
import { SignUpForm } from '../../../organisms/auth/auth.model'
import { HEADER_NAV_LIST, USER_FUNCTION_LIST } from '../home.constant'
import { UserInfo } from '../home.model'

const iconUserList = [
    <ContactEmergencyIcon fontSize="small" />,
    <Logout fontSize="small" />,
]

const Header = () => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openMenuUser, setOpenMenuUser] = useState(false)
    const [openAuthModel, setOpenAuthModel] = useState<boolean>(false)
    const [anchor, setAnchor] = useState<Element | null>(null)

    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined)

    const handleSubmitSignUpForm = async (data: SignUpForm) => {
        const res = await signUpAccount(data)
        setUserInfo({ username: res.username })
        setOpenAuthModel(false)
    }

    console.log('render')

    const handleUserAction = () => {
        setOpenMenuUser(false)
        setUserInfo(undefined)
    }

    const renderUserArea = () => {
        if (userInfo) {
            return (
                <>
                    <Button
                        sx={{ textTransform: 'none' }}
                        onClick={(e) => {
                            setOpenMenuUser((prev) => !prev)
                            setAnchor(e.target as Element)
                        }}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={1}
                        >
                            <Avatar>{userInfo.username[0]}</Avatar>
                            <Typography color={'customColor.primary'}>
                                {userInfo.username}
                            </Typography>
                        </Stack>

                        {}
                    </Button>
                    <Menu
                        open={openMenuUser}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        onClose={() => setOpenMenuUser(false)}
                        anchorEl={anchor}
                    >
                        {USER_FUNCTION_LIST.map((item, index) => (
                            <MenuItem onClick={handleUserAction}>
                                <ListItemIcon>
                                    {iconUserList[index]}
                                </ListItemIcon>
                                {item.title}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            )
        }
        return (
            <Button
                id="login-button"
                variant="contained"
                color="secondary"
                onClick={() => setOpenAuthModel(true)}
            >
                Đăng nhập
            </Button>
        )
    }

    return (
        <AppBar position="fixed" color="secondary">
            <Toolbar>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Grid item>
                        <IconButton color="primary" sx={{ mr: '15px' }}>
                            <SchoolIcon />
                        </IconButton>
                        <TextField
                            size="small"
                            sx={{ color: 'white', width: '300px' }}
                            InputProps={{
                                sx: {
                                    borderRadius: '20px',
                                    background: 'white',
                                    cursor: 'pointer',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchOutlined />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Tìm kiếm khóa học.."
                        />
                    </Grid>
                    <Grid item>
                        <Stack
                            direction={'row'}
                            spacing={2}
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                color: 'white',
                            }}
                        >
                            {HEADER_NAV_LIST.map((item) => (
                                <>
                                    <Button
                                        sx={{
                                            color: 'customColor.primary',
                                            textTransform: 'none',
                                        }}
                                        onClick={(e) => {
                                            if (item?.courseList) {
                                                setOpenMenu((prev) => !prev)
                                                setAnchor(e.target as Element)
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                    {item?.courseList && (
                                        <Menu
                                            open={openMenu}
                                            aria-labelledby="login-button"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            onClose={() => setOpenMenu(false)}
                                            anchorEl={anchor}
                                        >
                                            {item?.courseList?.map((item) => (
                                                <MenuItem
                                                    onClick={() =>
                                                        setOpenMenu(false)
                                                    }
                                                >
                                                    {item.title}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    )}
                                </>
                            ))}
                            {renderUserArea()}
                        </Stack>
                        <IconButton
                            size="small"
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                            color="primary"
                            onClick={() => {
                                setOpenSideBar((prev) => !prev)
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={openSideBar}
                            onClose={() => setOpenSideBar(false)}
                        >
                            <Box width={'250px'}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <EmailIcon />
                                            </ListItemIcon>
                                            <ListItemText>Item1</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SendIcon />
                                            </ListItemIcon>
                                            <ListItemText>Item2</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DynamicFeedIcon />
                                            </ListItemIcon>
                                            <ListItemText>Item3</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Grid>
                </Grid>
            </Toolbar>
            <Auth
                open={openAuthModel}
                setOpen={setOpenAuthModel}
                onSignUpFormChange={handleSubmitSignUpForm}
            />
        </AppBar>
    )
}

export default Header
