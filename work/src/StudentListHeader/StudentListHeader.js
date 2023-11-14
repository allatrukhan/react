import moment from 'moment';
import { Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Divider from '@mui/material/Divider';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as PathLeft} from '../Path_left.svg';
import {ReactComponent as PathRight } from '../Path_right.svg';
import {ReactComponent as SearchSvg} from '../Search.svg';
import {ReactComponent as ClockSvg } from '../Clock.svg';
import {ReactComponent as AdditionalSvg } from '../Additional.svg';
// import {ReactComponent as Vector } from '../Vector.svg';
import WeekSchedule from '../WeekSchedule/WeekSchedule';
import SelectResources from '../SelectResources/SelectResources';
import './StudentListHeader.css';

function StudentListHeader(){

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal=()=>{
        setIsOpen(true);
    };
    
    const closeModal=()=>{
      setIsOpen(false);
    };

    return(
        <div class="student-list-header"> 
            {/* <div class="student-navigation-frame">
                <Link to="/#" className="">Dashboard</Link>  
                <Vector width={20} height={20}/>
                <Link to="/#" className="">Students List</Link>
            </div> */}
            <div class="schedule-frame">
                <div class="schedule-day">
                    <label>Schedule</label>
                    {/* <Divider orientation="horizontal"/> */}
                    <button type="button" class="day-btn">Today</button>
                    <div class="day-frame">
                        <div class="path">
                            <PathLeft width={11.02} height={20.48}/>
                        </div>
                        <div class="today-date">
                            <Typography variant="h7" gutterBottom>{moment().format('LL')}</Typography>
                        </div>
                        <div class="path">
                            <PathRight width={11.02} height={20.48}/>
                        </div>
                    </div>
                </div>
                <div class="empty-container"></div>
                <div class="schedule-btn-group">
                    <div class="search-schedule-btns">
                    <IconButton aria-label="search">
                        <SearchSvg width={24} height={24}/>
                    </IconButton>
                    <IconButton aria-label="clock" onClick={openModal}>
                        <ClockSvg width={24} height={24}/>
                    </IconButton>
                    {(isOpen)&&<WeekSchedule closeModal={closeModal}/>}
                    <IconButton aria-label="additional-info">
                        <AdditionalSvg width={24} height={24}/>
                    </IconButton>
                    <SelectResources/> 
                    </div>
                     {/* <div class="resources">
                        <SelectResources/>
                        <button type="button" class="select-resources">SELECT RESOURCES</button>
                        <button type="button" class="second-btn">^</button> 
                    </div> */}
                </div>
            </div>
        </div>  
    )
}

export default StudentListHeader;   