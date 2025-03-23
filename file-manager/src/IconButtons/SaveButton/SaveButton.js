import IconButton from '@mui/material/IconButton';
import {ReactComponent as SaveSvg } from '../../Icons/Save.svg';

function SaveButton(){

    return(
        <div class="save-button">
           <IconButton aria-label="save">
              <SaveSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default SaveButton; 