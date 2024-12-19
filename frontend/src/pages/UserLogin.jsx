import { useState } from 'react';
import { Link } from 'react-router-dom'
const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const handleSubmit=(e)=>{
    e.preventDefault()
      setUserData({
      email:email,
      password:password
    })
    console.log(userData)
    setEmail('')
    setPassword('')

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
            <h3 className='text-lg sm:text-xl font-medium mb-2'>What's your Email?</h3>
            <input 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
              type="email" 
              placeholder="Enter your email" 
            />
          </div>

          <div>
            <h3 className='text-lg sm:text-xl font-medium mb-2'>What's your Password?</h3>
            <input 
              required 
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}} 
              className='bg-[#eeeeee] rounded px-4 py-3 border w-full text-base sm:text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all' 
              type="password" 
              placeholder="Enter your password" 
            />
          </div>

          <button 
            className='bg-black text-white font-semibold px-6 py-3 rounded w-full text-base sm:text-lg hover:bg-gray-800 transition-colors' 
            type="submit"
          >
            Login
          </button>

          <p className='text-center text-base sm:text-lg'>
            New here? {' '}
            <Link className='text-blue-600 hover:text-blue-700 font-medium' to="/user-signup">
              Create a new account
            </Link>
          </p>
        </form>
      </div>

      {/* Bottom Section */}
      <div className='max-w-md mx-auto w-full mt-8 text-center space-y-4'>
        <h3 className='text-lg sm:text-xl font-medium'>Log In as a captain</h3>
        <Link 
          className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded w-full text-base sm:text-lg hover:bg-gray-800 transition-colors" 
          to="/captain-login"
        >
          Login
        </Link>
      </div> 
    </div>
  )
}

export default UserLogin;