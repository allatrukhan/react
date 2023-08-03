import { useState } from 'react';

import Menu from '../Menu/Menu';
import RegisteredUser from '../RegisteredUser/RegisteredUser';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import './Header.css';

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    
    // const [firstNameStr, setFirstNameStr]=useState('');
    // const [email, setEmail]=useState('');
    
    const [user, setUser]=useState({
                                    name: "",
                                    lastName:"",
                                    email: "",
                                    password: ""
    });
    // function inputChange (event) {
    //     console.log(event);
    //     // const { name, value } = event;
    //     // setUser(prevState => ({
    //     //     ...prevState,
    //     //     [name]: value
    //     // }));
    // };
    function loggedOut(){
        setUser({
            name: "",
            lastName:"",
            email: "",
            password: ""
        });
    }

    // function registeredUser(name, email){
    //     setFirstNameStr(name);
    //     setEmail(email);
    // }

    
    // function loggedOut(){
    //     setFirstNameStr('');
    // }

    const openModal=()=>{
        setIsOpen(true);
    };
    
    const closeModal=()=>{
      setIsOpen(false);
    };

    return(
        <div class="header"> 
        <Menu/>
            {/* {(!firstNameStr)&&(<button onClick={openModal} type="registration">Registration</button> )}
            {(isOpen)&&<RegistrationForm closeModal={closeModal} onClick={registeredUser}/>} 
            {(firstNameStr)&&(<RegisteredUser name={firstNameStr} email={email} onClick={loggedOut}/>)} */}

            {(!user.name)&&(<button onClick={openModal} type="registration">Registration</button> )}
            {(isOpen)&&<RegistrationForm closeModal={closeModal} setUser={setUser} user={user}/>} 
            {(user.name)&&(<RegisteredUser user={user} onClick={loggedOut}/>)}
        </div>  
    )
}

export default Header;   