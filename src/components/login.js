import React from "react";
import './login_style.css'
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const login = () => {
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
                                                    <input type="text" id="form3Example1" class="form-control" placeholder="First name" />

                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <input type="text" id="form3Example2" class="form-control" placeholder="Last name" />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="email" id="form3Example3" class="form-control" placeholder="E-mail" />
                                        </div>


                                        <div class="form-outline mb-4">
                                            <input type="password" id="form3Example4" class="form-control" placeholder="Password" />
                                        </div>

                                        <button type="submit" class="btn btn-primary btn-block mb-4 mt-2">
                                            Login 
                                        </button>


                                        <div class="text-center">
                                            <p>or login with:</p>
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

export default login;