import IconButton from '@mui/material/IconButton';
import {ReactComponent as ShareSvg } from '../../Icons/Share.svg';

function ShareButton(){

    return(
        <div class="share-button">
           <IconButton aria-label="share">
              <ShareSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default ShareButton; 