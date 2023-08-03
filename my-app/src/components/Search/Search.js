import './Search.css';
import { FaSearchDollar } from 'react-icons/fa';

function Search({onClick}) {

    function onSubmit(event){
      event.preventDefault();
      onClick(event.target.elements.name.value);
    }

    return (
      <div >
        <form onSubmit={onSubmit} class="search-container">
          <input type="text" name="name" /> 
          <div class="search-submit-btn">
            <input type="submit" value="" />
            <FaSearchDollar/>
          </div>
          
        </form>
      </div>
    );
  }

  export default Search;