import Divider from '@mui/material/Divider';
import './Header.css';


import {ReactComponent as LogoSvg } from '../MoveUp 2.svg';

function Header(){

    return(
        <div class="header"> 
        <LogoSvg width={73} height={48}/>
        <Divider orientation="horizontal"/>
        </div>  
    )
}

export default Header;   