import React, {useState} from 'react'
import './Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'

// Import the media
import video from '../../media/video.mp4'
import logo from '../../media/logo.png'

// Import icons
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Login = () => {
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginUser = (e)=>{
        e.preventDefault();

        Axios.post('http://localhost:3002/login', {
            LoginUsername: loginUsername,
            LoginPassword: loginPassword
        }).then ((response)=>{
            console.log(response)
        })
    }

  return (
    <div className='loginPage flex'>
        <div className='container flex'>

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className='title'>Create and Advise Financial Matters</h2>
                    <p>Adopt being financially responsible and mature</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to={'/register'}>
                        <button className='btn'>Sign Up</button>
                    </Link>
                </div>                
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image"/>
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='form grid'>
                {/*<span className='showMessage'>Login Status will go here</span>*/}

                <div className="inputDiv">
                    <label htmlFor="username">Username</label>
                    <div className="input flex">
                        <FaUserShield className='icon'/>
                        <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                                setLoginUsername(event.target.value)
                        }}/>
                    </div>
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <div className="input flex">
                        <BsFillShieldLockFill className='icon'/>
                        <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                                setLoginPassword(event.target.value)
                        }}/>
                    </div>
                </div>

                <button type='submit' className='btn flex' onClick={loginUser}>
                    <span>Login</span>
                    <AiOutlineSwapRight className='icon'/>
                </button>

                <a href="/Dashboard">Dashboard</a>

                <span className='forgotPassword'>
                    Forgot your password? <a href="">Click Here</a>
                </span>
                
            </form>
            </div>

            
        </div>
    </div>
  )
}

export default Login