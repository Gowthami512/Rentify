import React from 'react'
import logo from './images/login-design.png';

export const Login = ({setLogin}) => {
    const handleLogin=()=>{
        setLogin(true)
    };
  return (
    <div className='login-pg'>
        <img src={logo} alt='design' />
        <div className='lg-bx'>
            <div className='login-hd'>
                <h1>Rentify</h1>
                 <p>Create your account here  or <span><a href="/">Login</a></span></p>
            </div>
            <div className='user-details buyer' >
                <form>
                    <div id="fst-name"> 
                        <input type="text" placeholder='First Name' />
                    </div>
                    <div id="lst-name"> 
                        <input type="text" placeholder='Last Name' />
                    </div>
                    <div id="ph-num"> 
                        <input type="phone" placeholder='Phone Number' />
                    </div>
                    <div id="eml"> 
                        <input type="email" placeholder='Email' />
                    </div>
                    <div id="ps-wrd"> 
                        <input type="password" placeholder='Enter Passsword' />
                    </div>
                    <div id="qus-bx"> 
                        <p> Are you a Buyer or a Seller?</p>
                        <label> <input type="radio" name='options'/> Buyer</label>
                        <label><input type="radio"  name='options'/> Seller</label>
                    </div>
                    <div id="btn"> 
                       <button id="sgn-btn" onClick={handleLogin}>  Sign Up</button>
                    </div>   
                </form>       

            </div> 
        </div>    
    </div>
  )
}
