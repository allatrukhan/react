import Divider from '@mui/material/Divider';
import {ReactComponent as LogoSvg } from '../MoveUp 2.svg';

import HeaderButtonsGroup from '../HeaderButtonsGroup/HeaderButtonsGroup';
import './Header.css';

function Header(){

    return(
        <div class="header"> 
            <LogoSvg width={73} height={48}/>
            <div class="empty"></div>
            <div class="btns-login">
                 <HeaderButtonsGroup/>
            </div>
           
            <Divider orientation="horizontal"/>
        </div>  
    )
}

export default Header;   