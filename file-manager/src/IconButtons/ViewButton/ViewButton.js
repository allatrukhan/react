import IconButton from '@mui/material/IconButton';
import {ReactComponent as ViewSvg } from '../../Icons/View.svg';

function ViewButton(){

    return(
        <div class="view-button">
           <IconButton aria-label="view">
              <ViewSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default ViewButton; 