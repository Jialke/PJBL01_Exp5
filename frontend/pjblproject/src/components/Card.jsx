import { Link } from "react-router-dom";
import ModalDelete from "./ModalDelete";

import { 
    TableCell,
    TableRow,
    Button,
    IconButton,
    ButtonGroup
} from '@mui/material';

import {
    Edit,
    Info
} from '@mui/icons-material';

function Card(props){
    
    return(
        <>

            <TableRow>
                <TableCell>{props.user.idusuario}</TableCell>
                <TableCell>{props.user.nome}</TableCell>
                <TableCell>{props.user.email}</TableCell>
                <TableCell>
                    <ButtonGroup>
                        <Link to={`/detalhes/${props.user.idusuario}`}>
                            <IconButton variant="contained">
                                <Info></Info>
                            </IconButton>
                        </Link>
                        <Link to={`/editar/${props.user.idusuario}`}>
                            <IconButton variant="contained">
                                <Edit></Edit>
                            </IconButton>
                        </Link>

                        <ModalDelete handleDelete={props.onClickButton} userID={props.user.idusuario}></ModalDelete>

                    </ButtonGroup>
                </TableCell>
            </TableRow>

        </>
    )
}

export default Card;