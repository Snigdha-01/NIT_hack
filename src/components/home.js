import React from "react";
import './home_style.css'
import { FaHeart } from "react-icons/fa";
// import CloseButton from 'react-bootstrap/CloseButton';

const home = () => {
    return (<>
        <div class="container">
            <div class="row mt-3">

                <div class="col">
                    <div class="vertical-menu">
                        <a href="/" class="active">Home</a>
                        <a href="/">Blog post</a>
                        <a href="/">Message</a>
                        <a href="/">Statistics</a>
                        <a href="/">Settings</a>
                        <a href="/">Log out</a>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <div class="vertical-menu p-3" style={{ border: '2px solid purple', }}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque aspernatur nesciunt excepturi quae. Saepe et iusto ipsum voluptates nam molestiae culpa consequatur?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col ">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" placeholder="search" aria-label="Search" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col mt-2">
                                <button type="button" class="btn rounded-5 " style={{ backgroundColor: '#E5E4E2', color: 'black' }}>Top Fitness Tracker</button>
                            </div>
                            <div class="col mt-2">
                                <button type="button" class="btn rounded-5 " style={{ backgroundColor: '#E5E4E2', color: 'black' }}>Top Fitness Tracker</button>
                            </div>
                            <div class="col mt-2">
                                <button type="button" class="btn rounded-5 " style={{ backgroundColor: '#E5E4E2', color: 'black' }}>Top Fitness Tracker</button>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore recusandae fuga tempora! Ab iure quia assumenda at in facilis corrupti culpa a saepe eaque harum et natus, autem totam?</p>
                        </div>
                    </div>
                    {/* <div class="row" style={{ height: '100px', width: '40px' }}>
                        <div>
                            <img src="graph.png" alt="logo" />
                        </div>
                    </div> */}
                </div>

                <div class="col-2 mr-4">
                    <div class="vertical-menu">
                        <a href="/" class="active">Discussion</a>
                        <a href="/" style={{ textAlign: "justify" }}><FaHeart />Amily</a>
                        <a href="/" style={{ textAlign: "justify" }}><FaHeart />Cian</a>
                        <a href="/" style={{ textAlign: "justify" }}><FaHeart />Jacob</a>
                        <a href="/" style={{ textAlign: "justify" }}><FaHeart />Emily</a>
                        <a href="/" style={{ textAlign: "justify" }}><FaHeart />Prag</a>
                    </div>
                    <div class="row mt-3">
                        <div class="col-3" >
                            <img src="ubd.png" alt="logo" style={{ border: '2px solid purple', width: "200px", height: "250px" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>




    </>

    );
};

export default home;