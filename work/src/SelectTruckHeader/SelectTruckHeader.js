import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as AdditionalSvg } from '../Additional.svg';

import './SelectTruckHeader.css';

function SelectTruckHeader(){

    
    const [truck, setTruck] = React.useState('');

    const handleChange = (event) => {
      setTruck(event.target.value);
    };

    return(
        <div class="select-track-header">
        <div class="select-truck"> 
                <IconButton aria-label="additional-info">
                    <AdditionalSvg width={24} height={24}/>
                </IconButton>
                <Box sx={{ width:'220px' , height:'40px' }} >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">UD TRUCKS</InputLabel>
                        <Select
                            size='small'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleChange}
                        >
                        <MenuItem>Truck 2</MenuItem>
                        <MenuItem>Truck 15</MenuItem>
                        </Select>
                    </FormControl>
            </Box>
        </div> 
        </div> 
    )
}

export default SelectTruckHeader;   

