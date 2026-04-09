import { useState } from 'react';
import { 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    IconButton
} from '@mui/material';

import { Delete } from '@mui/icons-material';

function ModalDelete(props) {

    const [open, setOpen] = useState(false);

    const clickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        
        <IconButton variant='contained' color='error' onClick={clickOpen}>
            <Delete></Delete>
        </IconButton>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Deletar?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Deseja realmente deletar este usuário? Essa ação é permanente.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={handleClose}>Cancelar</Button>
                <Button variant='contained' color="error" onClick={() => props.handleDelete(props.userID)}>Deletar</Button>
            </DialogActions>

        </Dialog>
        
        </>
    )

}

export default ModalDelete;