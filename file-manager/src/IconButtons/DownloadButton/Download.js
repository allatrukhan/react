import IconButton from '@mui/material/IconButton';
import {ReactComponent as DownloadSvg } from '../../Icons/Download.svg';

function DownloadButton(){

    return(
        <div class="download-button">
           <IconButton aria-label="download">
              <DownloadSvg width={28} height={28}/>
            </IconButton> 
        </div>  
    )
}

export default DownloadButton; 