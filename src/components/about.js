import React from "react";
const about = () => {
    return (
        <>
        {/* navbar */}
      <div style={{  backgroundColor: '#D8BFD8' }}>
      <nav class="navbar navbar-light bg-transparent justify-content-between border-bottom" >
        <h1 className="h2 navbar-brand" style={{ color: 'purple' }}>CYCLOFIT</h1>
        <form class="form-inline">
          <a class=" nav-link" href="home" style={{ color: 'purple' }}>Home<span class="sr-only">(current)</span></a>
          <a class=" nav-link" href="about" style={{ color: 'purple' }}>About-Us <span class="sr-only">(current)</span></a>
          <a class=" nav-link" href="signup" style={{ color: 'purple' }}>Sign-up<span class="sr-only">(current)</span></a>
          <a class=" nav-link" href="login" style={{ color: 'purple' }}>Login-in <span class="sr-only">(current)</span></a>
        </form>
      </nav>
      </div>
      {/* navbar */}
            <section class="background-radial-gradient overflow-hidden mt-1">
                <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div class="row gx-lg-5 align-items-center mb-5">
                        <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                ABOUT<br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>us</span>
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
                                <div class="card-body md-2">
                                    <form>
                                        <p class="h1" style={{color:"purple"}}>Meet our team</p>
                                        <div class="card-deck">
                                            <div class="card">
                                                <img class="card-img-top" src="logo512.png" alt="Card image cap" style={{ height: "100px", width: "100px" }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Aditya</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <img class="card-img-top" src="logo512.png" alt="Card image cap" style={{ height: "100px", width: "100px" }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Pratyush Singh</h5>
                                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-deck mt-2">
                                            <div class="card">
                                                <img class="card-img-top" src="logo512.png" alt="Card image cap" style={{ height: "100px", width: "100px" }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Rahul Sharma</h5>
                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <img class="card-img-top" src="logo512.png" alt="Card image cap" style={{ height: "100px", width: "100px" }} />
                                                <div class="card-body">
                                                    <h5 class="card-title">Snigdha Thakur</h5>
                                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                                </div>
                                            </div>
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

export default about;