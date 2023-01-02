// import React from "react";
// const signup=()=>{
//     return (
//         <>
//         <div>
//             <h1>singin page</h1>
//         </div>
//         </>
        
//     );
// };

// export default signup;


// import React, {useState,setState} from 'react';
// import './signup_style.css'
// function RegistrationForm() {
    
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setLastName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const [confirmPassword,setConfirmPassword] = useState(null);

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit  = () => {
//         console.log(firstName,lastName,email,password,confirmPassword);
//     }

//     return(
//         <div className="form" style={{border:'2px solid purple',}}>
//             <nav class="navbar" style={{backgroundColor:'purple'}}>
//             <div className="row col-12 d-flex justify-content-center text-white">
//                 <h3>Sign-Up</h3>
//             </div>
//         </nav>
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <button onClick={()=>handleSubmit()} type="submit" class="btn btn-lg"  style={{ backgroundColor: 'purple', color: 'white' }}>Register</button>
//             </div>
//         </div>
       
//     )       
// }

// export default RegistrationForm


import React from "react";
import './signup_style.css'
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";


const signup = () => {
    return (
        <>
      <section class="background-radial-gradient overflow-hidden mt-1">
                <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div class="row gx-lg-5 align-items-center mb-5">
                        <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                The best offer <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span>
                            </h1>
                            <p class="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 95%)" }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                                ab ipsum nisi dolorem modi. Quos?
                            </p>
                        </div>

                        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

                            <div class="card bg-glass">
                                <div class="card-body px-4 py-5 px-md-5">
                                    <form>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example1" class="form-control" placeholder="First name" required/>

                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example2" class="form-control" placeholder="Last name" required />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control" placeholder="E-mail" required/>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control" placeholder="Password" required/>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example5" class="form-control" placeholder="Confirm Password" required/>
                                        </div> 

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked />
                                            <label class="form-check-label">  Subscribe to our newsletter</label>
                                        </div>


                                        <button type="submit" class="btn btn-primary btn-block mb-4 mt-2">
                                            Sign up
                                        </button>


                                        <div class="text-center">
                                            <p>or sign up with:</p>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <FaFacebook />
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <FaGoogle />
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <FaTwitter />
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <FaGithub />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default signup;