import "./RegisteredUser.css";

function RegisteredUser({user, onClick}) {

    function onClickLogOut(event){
        onClick(event.target.name);
      }

    return(
    <div class="user">
        <h1>Welcome, {user.name}! </h1>
        <button onClick={onClickLogOut} type="registration">Log out</button> 
    </div>
);

}
    
export default RegisteredUser;