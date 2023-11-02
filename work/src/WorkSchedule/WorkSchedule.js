import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import WeekSchedule from '../WeekSchedule/WeekSchedule';

function WorkSchedule({closeModal}){

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return(

        <div class="work-schedule"> 
            <Typography variant="h4" gutterBottom>WORK SCHEDULE</Typography>
            <WeekSchedule/>
            <Divider orientation="horizontal"/>
            <div class="settings-box">
                <Typography variant="h6" gutterBottom>Settings</Typography>
                <FormControlLabel 
                    control={<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} size="medium" />} 
                    label="Hide non-working hours" />
            </div>
            <>
                <button type="button" class="save" onClick={closeModal}>Save</button>
                {/* <Link to="/..." className="">Create a personal schedule for the current day</Link> */}
            </>
            
        </div>
        )}

export default WorkSchedule;
