import FilesGallery from '../FilesGallery/FilesGallery';
import MainButtonGroup from '../MainButtonGroup/MainButtonGroup';
import './FileManager.css';

    function FileManager({closeModal}){

    return(
        <div class="backdrop is-hidden">
            <div class="file-manager-container">
                <MainButtonGroup closeModal={closeModal}/>
                <FilesGallery/>
            </div>  
        </div>  
    )
}

export default FileManager;   