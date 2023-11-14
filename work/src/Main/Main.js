
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import IndividualLessonRegistration from '../IndividualLessonRegistration/IndividualLessonRegistration';
import StudentListHeader from '../StudentListHeader/StudentListHeader';
import './Main.css';


function Main(){

    return(
        <div class="main"> 
            <StudentListHeader/>
            <ButtonGroup/> 

            <IndividualLessonRegistration/>
        </div>  
    )
}

export default Main;   