import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import {ReactComponent as CloseSvg } from '../Icons/Close.svg';
import './MainButtonGroup.css';
import FileOperationsButtons from '../FileOperationsButtons/FileOperationsButtons';
import SortingButtons from '../SortingButtons/SortingButtons';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function MainButtonGroup({closeModal}){

    return(
        <div class="main-button-group">
            <Checkbox {...label} />
            <FileOperationsButtons/> 
            <SortingButtons/>  
            <IconButton aria-label="close" onClick={closeModal}>
                <CloseSvg width={28} height={28}/>
            </IconButton>
        </div>  
    )
}

export default MainButtonGroup;   