
import RegistrationCard from '../RegistrationCard/RegistrationCard';

import './IndividualLessonRegistration.css';

function IndividualLessonRegistration(){

    return(
        <div class="individual-lesson-registration"> 
            <div class="reg-cards-block">
                <RegistrationCard/>
                <RegistrationCard/>
                <RegistrationCard/>
                <RegistrationCard/>
            </div>
        </div>  
    )
}
export default IndividualLessonRegistration;