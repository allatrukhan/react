import { useState } from 'react';
import LogoImage from '../components/LogoImage/LogoImage';
import Search from '../components/Search/Search';
import SearchButtonsGroup from '../components/SearchButtonsGroup/SearchButtonsGroup';
import Gallery from '../components/Gallery/Gallery';

function Home(){
    
    const [searchStr, setSearchStr]=useState('');
    const [pressedButton, setPressedButton]=useState('');

    function onSearchClick(str){
        setSearchStr(str);
        setPressedButton('');
      }
     
      function onPressedButton(str){
        setPressedButton(str);
        setSearchStr('');
      }
    
    return (
        <div class="home-page">
            <LogoImage/>
            <Search onClick={onSearchClick}/>
            <SearchButtonsGroup onClick={onPressedButton}/>
            {(pressedButton)?<Gallery str={pressedButton}/>:<Gallery str={searchStr}/>}
        </div>
    );         
}
export default Home;
