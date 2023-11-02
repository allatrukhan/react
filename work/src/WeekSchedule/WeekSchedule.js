import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

function WeekSchedule(){

    return(
        <div class="main-week-schedule"> 
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
                <FormControlLabel control={<Switch />} label="Non-worked day" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
                <FormControlLabel control={<Switch defaultChecked />} label="Workday" />
            </div>
        </div>  
    )
}

export default WeekSchedule;   