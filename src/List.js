import React from 'react';
import './Test.css';
import DeleteIcon from '@material-ui/icons/Delete';

const List=(props)=>{
    return(
        <>
            <React.Fragment>
                <li>mail <DeleteIcon fontSize="small" color="primary" onClick={()=>props.hitTarget(props.id)} /></li>
            </React.Fragment>
        </>
    )
}

export default List;