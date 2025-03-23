import IconButton from '@mui/material/IconButton';
import {ReactComponent as DeleteSvg } from '../../Icons/Delete.svg';

function DeleteButton(){

    return(
        <div class="delete-button">
           <IconButton aria-label="delete">
              <DeleteSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default DeleteButton; 