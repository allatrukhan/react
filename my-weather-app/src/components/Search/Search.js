import './Search.css';

function Search({onClick}) {

    function onSubmit(event){
      event.preventDefault();
      onClick(event.target.name.value);
      event.target.reset();
    }

    return (
      <div class="search">
        <form onSubmit={onSubmit} class="search-container">
            <input type="text" name="name"/> 
            <input type="submit" value="Search" />  
        </form>
      </div>
    );
  }

  export default Search;