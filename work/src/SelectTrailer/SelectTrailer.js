import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './SelectTrailer.css';

function SelectTrailer(){

    const [trailer, setTrailer] = React.useState('');

    const handleChange = (event) => {
      setTrailer(event.target.value);
    };

    return(
        <div class="select-trailer-main">
        <div class="select-trailer-2"> 
                <label>Trailer:    </label>
                <Box  >
                    <FormControl fullWidth>
                        <InputLabel  sx={{ height:24 }} id="demo-simple-select-label">131</InputLabel>
                        <Select
                        sx={{ height:24 }}
                            // size='small'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={handleChange}
                        >
                        <MenuItem>Trailer 125</MenuItem>
                        <MenuItem>Trailer 456</MenuItem>
                        </Select>
                    </FormControl>
            </Box>
        </div> 
        <div class="total-seats">
            <label>Total Seats:</label>
            <label>4</label>
        </div>
        <div class="slots">
            <label>Slots:</label>
            <label>4</label>
        </div>
        <div class="instructors">
            <label>Instructors:</label>
            <label></label>
        </div>
        <button type="button" class="save-trailer-info">Save</button>
        </div> 
    )
}

export default SelectTrailer;  