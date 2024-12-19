import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [userData, setUserData] = useState({})


const handleSubmit = (e) => {
  e.preventDefault()
  setUserData({
    fullname:{
      firstName:firstName,
      lastName:lastName
    },
    email:email,
    password:password
  })
  console.log(userData)
  setEmail('')
  setPassword('')
  setFirstName('')
  setLastName('')
}



  return (
    <div className='min-h-screen flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10'>
      {/* Top Section */}
      <div className='max-w-md mx-auto w-full'>
        {/* Logo */}
        <img
          className="w-12 sm:w-14 md:w-16 lg:w-20 mb-8 sm:mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="QuickRide Logo"
        />
        
        {/* Login Form */}
        <form className='space-y-6' onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <h3 className='text-lg sm:text-xl font-medium mb-2'>What's your name?</h3>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                required
                className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <input 
                required
                className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
                type="text" 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
            <h3 className='text-lg sm:text-xl font-medium mb-2'>What's your Email?</h3>
            <input 
              required
              className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <h3 className='text-lg sm:text-xl font-medium mb-2'>What's your Password?</h3>
            <input 
              required
              className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button 
            className='bg-black text-white font-semibold px-6 py-3 rounded w-full text-base sm:text-lg hover:bg-gray-800 transition-colors' 
            type="submit"
          >
            Sign Up
          </button>

          <p className='text-center text-base sm:text-lg'>
            Already have an account? {' '}
            <Link className='text-blue-600 hover:text-blue-700 font-medium' to="/user-login">
              Log in
            </Link>
          </p>
        </form>
      </div>

      {/* Bottom Section */}
      <div className='max-w-md mx-auto w-full mt-8 text-center space-y-4'>
      
      <p className='text-sm sm:text-base'>By Proceeding , You consent to get calls , whatsapp messages and emails from QuickRide and it affiliates to the mail provided </p>
      </div> 
    </div>
  )
}

export default UserSignUp