// import IconButton from '@mui/material/IconButton';
import Filter from '../Filter/Filter';
import Sorter from '../Sorter/Sorter';
import './SortingButtons.css';

function SortingButtons(){

    return(
        <div class="sorting-btn-group">
           <Sorter/>
           <Filter/>
        </div>  
    )
}

export default SortingButtons; 