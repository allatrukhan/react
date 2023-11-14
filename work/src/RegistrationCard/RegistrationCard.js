import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import {ReactComponent as AddIcon} from '../AddIcon.svg';
import SelectTime from '../SelectTime/SelectTime';
import './RegistrationCard.css';

function RegistrationCard(){


    const [lesson, setLesson] = React.useState('');

    const handleChange = (event) => {
      setLesson(event.target.value);
    };

    
    return(
        <div class="reg-card"> 
            <SelectTime/>
            <div class="lesson-frame">
                <Typography variant="h7" gutterBottom>INDUVIDUAL</Typography>
                <Box sx={{ minWidth: 210 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Lesson</InputLabel>
                            <Select
                                size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                            >
                                <MenuItem>1</MenuItem>
                                <MenuItem>2</MenuItem>
                            </Select>
                    </FormControl>
                </Box>
                <Button variant="contained"  class="add-btn" startIcon={<AddIcon />}> Add student</Button>
            </div>
        </div>  
    )
}

export default RegistrationCard;   