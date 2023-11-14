import './HeaderButtonsGroup.css';
import {ReactComponent as NotificationSvg } from '../Notification.svg';
import {ReactComponent as AdminSvg } from '../Admin.svg';
import {ReactComponent as LogoutSvg } from '../Logout.svg';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function HeaderButtonsGroup(){

    return(
        <div class="header-btns"> 
            <div class="new-notification-btn">
            <IconButton aria-label="new-notification">
                <NotificationSvg width={24} height={24}/>
            </IconButton>
                {/* <button type="button" class="new-notification"></button>    */}
                {/* <NotificationSvg width={24} height={24}/> */}
            </div>
            
            <div class="user-login">
            <Stack direction="row" spacing={1}>
            <IconButton aria-label="user-role">
                <AdminSvg width={129} height={26}/>
            </IconButton>
            <IconButton aria-label="logout">
                <LogoutSvg width={18} height={22}/>
            </IconButton>
            </Stack>
                {/* <div> */}
                    {/* <button type="button" class="user-role"></button>  */}
                    {/* <AdminSvg width={129} height={26}/>
                </div> */}
                {/* <div> */}
                    {/* <button type="button" class="logout"></button>  */}
                    {/* <LogoutSvg width={18} height={22}/>
                </div>
                 */}
            </div>
        </div>  
    )
}

export default HeaderButtonsGroup;   