
import IndividualLessonRegistration from '../IndividualLessonRegistration/IndividualLessonRegistration';
import StudentListHeader from '../StudentListHeader/StudentListHeader';
import TruckBlock from '../TruckBlock/TruckBlock';
import './Main.css';


function Main(){

    return(
        <div class="main"> 
            <StudentListHeader/>
            <TruckBlock/>
            <IndividualLessonRegistration/>
        </div>  
    )
}

export default Main;   