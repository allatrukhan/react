import './Button.css';

function Button({nameButton, onClickButton}) {
  
  function onClickButtonOne(event){
      onClickButton(event.target.name);
    }

    return (
      <div class="btn-search-group">
        <button name={nameButton} onClick={onClickButtonOne}>{nameButton}</button>
      </div>
    );
    }
  export default Button;