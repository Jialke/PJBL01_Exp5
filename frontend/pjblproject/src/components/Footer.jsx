import { 
    Box,
    Container,
    Typography
} from "@mui/material";

function Footer() {

    return(
        <Box
        sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 2,
            mt: 'auto'
        }}>
            <Container>
                <Typography variant="body1">
                © 2026 Sistema de Gerenciamento de Usuários, por Lucas da Costa Paula
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer;