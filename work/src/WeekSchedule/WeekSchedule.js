import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import './WeekSchedule.css';

    function WeekSchedule({closeModal}){

        const [checked, setChecked] = React.useState(true);

        const handleChange = (event) => {
            setChecked(event.target.checked);
        };

    return(
        <div>
        <div class="backdrop is-hidden">
        <div class="main-week-schedule"> 
         <Typography variant="h4" gutterBottom>WORK SCHEDULE</Typography>
        <div class="week-schedule">
            <div class="days-of-the-week">
                <Typography variant="h6" gutterBottom>Sunday</Typography>
                <Typography variant="h6" gutterBottom>Monday</Typography>
                <Typography variant="h6" gutterBottom>Tuesday</Typography>
                <Typography variant="h6" gutterBottom>Wednesday</Typography>
                <Typography variant="h6" gutterBottom>Thursday</Typography>
                <Typography variant="h6" gutterBottom>Friday</Typography>
                <Typography variant="h6" gutterBottom>Saturday</Typography>
            </div>
            <div class="swich">
                <FormControlLabel control={<Switch />} label="Non-workday"/><br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" /> <br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" /> <br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" /> <br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday"/> <br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" /> <br/>
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
            </div>
            </div>
                <Divider orientation="horizontal"/>
            <div class="settings-block">
            <Typography variant="h6" gutterBottom>Settings</Typography>
            <FormGroup>
                <FormControlLabel 
                    control={<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} size="medium" />} 
                    label="Hide non-working hours" />
                </FormGroup>
            </div>
            <div class="save"> 
                <Button variant="contained"  class="save-btn" onClick={closeModal}>SAVE</Button> 
                <br/>
                <Link href="#">Create a personal schedule for the current day</Link>
            </div>
            </div>  
            </div>  
        </div>  
    )
}

export default WeekSchedule;   