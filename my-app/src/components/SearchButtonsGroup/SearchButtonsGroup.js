import Button from "../Button/Button";
import './SearchButtonsGroup.css';

function SearchButtonsGroup({onClick}) {
    function onClickButton(str){
      onClick(str);
    }

    return (
      <div class="search-btn-group"> 
        <Button nameButton="Beach" type="button" onClickButton={onClickButton}></Button>
        <Button nameButton="Mountain" type="button" onClickButton={onClickButton}></Button>
        <Button nameButton="Food" type="button" onClickButton={onClickButton}></Button>
        <Button nameButton="Birds" type="button" onClickButton={onClickButton}></Button> 
      </div>
    );
  }
  export default SearchButtonsGroup;


