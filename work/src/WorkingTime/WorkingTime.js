import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as StartSvg } from '../Start.svg';
import {ReactComponent as IconSvg } from '../Icon_.svg';
import {ReactComponent as FinishSvg } from '../Finish.svg';
import {ReactComponent as StartHourSvg } from '../10am.svg';
import {ReactComponent as FinishHourSvg } from '../6pm.svg';

import './WorkingTime.css';


function WorkingTime(){

    return(
        <div class="working-time-container"> 
            <div class="empty-row">
            </div>
            <div class="start-finish">
                    <IconButton aria-label="start">
                        < StartSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish">
                        < FinishSvg width={70} height={32}/>
                    </IconButton>
            </div>
            <div class="working-hours">
                    <IconButton aria-label="start-hour">
                        < StartHourSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish-hour">
                        < FinishHourSvg width={70} height={32}/>
                    </IconButton>
            </div>
            <div class="working-hours">
                    <IconButton aria-label="start-hour">
                        < StartHourSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish-hour">
                        < FinishHourSvg width={70} height={32}/>
                    </IconButton>
            </div>
            <div class="working-hours">
                    <IconButton aria-label="start-hour">
                        < StartHourSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish-hour">
                        < FinishHourSvg width={70} height={32}/>
                    </IconButton>
            </div>
            <div class="working-hours">
                    <IconButton aria-label="start-hour">
                        < StartHourSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish-hour">
                        < FinishHourSvg width={70} height={32}/>
                    </IconButton>
            </div>
            <div class="working-hours">
                    <IconButton aria-label="start-hour">
                        < StartHourSvg width={70} height={32}/>
                    </IconButton>
                    <IconButton aria-label="icon" >
                        <IconSvg width={20} height={28}/>
                    </IconButton>
                    <IconButton  aria-label="finish-hour">
                        < FinishHourSvg width={70} height={32}/>
                    </IconButton>
            </div>
        </div>  
    )
}

export default WorkingTime;   