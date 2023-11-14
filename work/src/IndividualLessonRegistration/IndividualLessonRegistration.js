import {ReactComponent as BackgroundImgSvg } from '../Frame 289882.svg';
import RegistrationCard from '../RegistrationCard/RegistrationCard';

import './IndividualLessonRegistration.css';

function IndividualLessonRegistration(){

    return(
        <div class="individual-lesson-registration"> 
            <div class="background-img" 
            // style={{ backgroundImage: `url(${BackgroundImgSvg})` }}
            >
                <BackgroundImgSvg/>
            </div>
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