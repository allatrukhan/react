import { NavLink, Route, Routes } from "react-router-dom";
import './Menu.css';
import Home from "../../pages/Home";
import Contacts from "../../pages/Contacts";

function Menu(){

    return (
        <div class="main-menu">
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route  path="/"  element={<Home />}/> 
                <Route path="/contacts"  element={<Contacts />}/> 
            </Routes>            
        </div>
    );
};


export default Menu;
