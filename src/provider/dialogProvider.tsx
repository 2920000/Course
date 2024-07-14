import { FC, createContext, useState } from 'react'

type DialogValue = {
    open: boolean
    setOpen?: (value: boolean) => void
}
export const DialogContext = createContext<DialogValue>({
    open: false,
})

type DialogProviderProps = {
    children: React.ReactNode
}

const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
    const openDialog = (value: boolean) => {
        setDialogValue({ open: value })
    }

    const [dialogValue, setDialogValue] = useState<DialogValue>({
        open: false,
        setOpen: openDialog,
    })
    return (
        <DialogContext.Provider value={dialogValue}>
            {children}
        </DialogContext.Provider>
    )
}

export default DialogProvider
