import "./RegistrationForm.css";
import { useForm } from "react-hook-form";

function  RegistrationForm({closeModal, setUser, user}) {

    // function onClickSubmit(event){
    //     event.preventDefault();
    //     onClick(event.target.elements.name.value);
    //     onClick(event.target.elements.lastName.value);
    // }
    
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onClickSubmit = values => {
        console.log(values);
        setUser({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
        })
        closeModal();
    }
    

    return (
        <div>
            <div class="backdrop is-hidden">
                <div class="modal-registration">
                    <form onSubmit={handleSubmit(onClickSubmit)} class="form"> 
                        <label className="form-label">First Name </label>
                        <input className="form-input" type="text" name="name" placeholder="First Name" 
                                // values={user.name}         onChange={onClick}
                            {...register("name", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]/i,
                                    message: "Invalid name",             
                                }
                            })
                            }/>
                                {errors.name  && <p class="registr-err-mes">{errors.name.message}</p>}
                        <label className="form-label">Last Name </label>
                        <input  type="text" name="lastName"  className="form-input" placeholder="Last Name" 
                                        //  onChange={onClick}
                            {...register("lastName", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]/i,
                                    message: "Invalid last name",
                                }
                            })
                            }/>
                                {errors.LastName && <p class="registr-err-mes">{errors.LastName.message}</p>}
                        <label className="form-label">Email </label>
                        <input  type="text" name="email" className="form-input" placeholder="Email" 
                                            //  onChange={onClick}
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                }
                            })
                            }/>
                                {errors.email && <p class="registr-err-mes">{errors.email.message}</p>}
                        <label className="form-label">Password </label>
                        <input className="form-input" type="text"  name="password" placeholder="Password" 
                                        //  onChange={onClick}
                                {...register("password", {
                                    required: "Required",
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                                        message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
                                }
                            })
                            }/>
                                {errors.password && <p class="registr-err-mes">{errors.password.message}</p>}    
                        <div class="btn-sub-close">   
                            <input type="submit" value="Register"/> 
                            <button type="button" class="close" onClick={closeModal}>Close</button> 
                        </div> 
                    </form>  
                </div> 
            </div>
        </div>   
    );
  };

export default RegistrationForm;