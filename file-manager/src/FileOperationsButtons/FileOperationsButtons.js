import Stack from '@mui/material/Stack';

import './FileOperationsButtons.css';
import DeleteButton from '../IconButtons/DeleteButton/DeleteButton';
import DownloadButton from '../IconButtons/DownloadButton/Download';
import EditButton from '../IconButtons/EditButton/EditButton';
import SaveButton from '../IconButtons/SaveButton/SaveButton';
import ShareButton from '../IconButtons/ShareButton/ShareButton';
import ViewButton from '../IconButtons/ViewButton/ViewButton';

    function FileOperationsButtons(){

    return(
        <div class="operations-btn-group">
            <Stack direction="row" spacing={1}>
                <DownloadButton/>
                <DeleteButton/>
                <EditButton/>
                <SaveButton/>
                <ShareButton/>
                <ViewButton/>
          </Stack>
        </div>  
    )
}

export default FileOperationsButtons; 