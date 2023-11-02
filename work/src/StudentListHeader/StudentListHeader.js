import moment from 'moment';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import {useState} from 'react';
import {ReactComponent as PathLeft} from '../Path_left.svg';
import {ReactComponent as PathRight } from '../Path_right.svg';
import {ReactComponent as Vector } from '../Vector.svg';
import WorkSchedule from '../WorkSchedule/WorkSchedule';
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
                <Link to="/..." className="">Dashboard</Link>  
                <Vector width={20} height={20}/>
                <Link to="/..." className="">Students List</Link>
            </div> */}
            <div class="schedule-frame">
                <div class="schedule-day">
                    <label>Schedule</label>
                    <Divider orientation="horizontal"/>
                    <button type="button" class="day-btn">Today</button>
                    <div class="day-frame">
                        <PathLeft width={25.2} height={25.2}/>
                        <p className="day"><span>{moment().format('LL')}</span></p>
                        <PathRight width={25.2} height={25.2}/>
                    </div>
                </div>
                <div class="schedule-btn-group">
                    <div class="search-schedule-btns">
                        <button type="button" class="search-btn">1</button>
                        <button type="button" class="time-btn" onClick={openModal}>2</button>
                        {(isOpen)&&<WorkSchedule closeModal={closeModal()}/>}
                        <button type="button" class="additional-info-btn">3</button>
                    </div>
                    <div class="resources">
                        {/* <SelectResources/> */}
                        <button type="button" class="select-resources">SELECT RESOURCES</button>
                        <button type="button" class="second-btn">^</button> 
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default StudentListHeader;   