import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';

import './Test.css';


const Test = () => {

    let [number, setNumber] = useState(1);
    let [newNumber, newSetNumber] = useState([number]);


    const increment=()=>{
        setNumber(number+1);
        newSetNumber((oldvalue)=>{
            return [...oldvalue,number+1]
        })
    }

    const decrement=(e)=>{
        setNumber(number-1);
        newSetNumber((oldvalue)=>{
            return oldvalue.filter((value,index)=>{
                return e!==index;
            })
        })
    }



    return (

        <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={5}
        style={{ width: '200px',margin:'100px auto'}}>
           <div className="container">
            <Badge badgeContent={number} color="primary">
                <MailIcon />
            </Badge>

            <div className="btn-section">
                <AddCircleIcon fontSize="small"  color="primary" onClick={increment} />
            </div>
            <ol>
            {newNumber.map((value,index)=>{
                return(
                    <>
                        <li key={index}>mail <DeleteIcon fontSize="small"  color="primary" onClick={()=>decrement(index)} /></li>
                    </>
                )
            })}
            </ol>
        </div>
      </Box>


    
    )
}

export default Test;