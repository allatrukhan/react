import IconButton from '@mui/material/IconButton';
import {ReactComponent as EditSvg } from '../../Icons/Edit.svg';

function EditButton(){

    return(
        <div class="edit-button">
           <IconButton aria-label="edit">
              <EditSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default EditButton; 