import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import {ReactComponent as BtnSvg1 } from '../Icon_1.svg';
import {ReactComponent as BtnSvg2 } from '../Icon_2.svg';
import {ReactComponent as BtnSvg3 } from '../Icon_3.svg';
import {ReactComponent as BtnSvg4 } from '../Icon_4.svg';
import {ReactComponent as BtnSvg5 } from '../Icon_5.svg';

import './ButtonGroup.css';


function ButtonGroup(){

    return(
        <div class="button-group"> 
        
            <Stack direction="column" spacing={1}>
      <IconButton aria-label="delete">
        < BtnSvg1 width={24} height={24}/>
      </IconButton>
      <IconButton aria-label="delete" >
        <BtnSvg2 width={24} height={24}/>
      </IconButton>
      <IconButton  aria-label="add an alarm">
        < BtnSvg3 width={24} height={24}/>
      </IconButton>
      <IconButton  aria-label="add to shopping cart">
        < BtnSvg4 width={24} height={24}/>
      </IconButton>
      <IconButton  aria-label="add to shopping cart">
        < BtnSvg5 width={24} height={24}/>
      </IconButton>
    </Stack>
        </div>  
    )
}

export default ButtonGroup;   