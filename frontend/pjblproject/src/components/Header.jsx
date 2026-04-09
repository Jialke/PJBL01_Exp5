import { 
    AppBar,
    Container,
    Typography
} from "@mui/material";

import {
    AccountCircle
} from '@mui/icons-material';

function Header() {

    return(
        <AppBar position="static" sx={{mb: 2}}>
            <Container sx={{padding: 2, display: 'flex'}}>
                <AccountCircle fontSize="large"/>
                <Typography variant="h6" sx={{paddingTop:0.3, paddingLeft:1}}>
                    Sistema de Gerenciamento de Usuários
                </Typography>
            </Container>
        </AppBar>
    )
}

export default Header;