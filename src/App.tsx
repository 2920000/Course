import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import Home from './components/pages/home/home'
import DialogProvider from './provider/dialogProvider'
declare module '@mui/material/styles' {
    interface Palette {
        customColor: {
            primary?: string
            secondary?: string
        }
    }
    interface PaletteOptions {
        customColor: {
            primary?: string
            secondary?: string
        }
    }
}

function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(90, 78, 140)',
            },
            secondary: {
                main: '#fff',
            },
            customColor: {
                primary: 'black',
            },
        },
    })
    return (
        <DialogProvider>
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </DialogProvider>
    )
}

export default App
