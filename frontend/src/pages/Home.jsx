import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full">
      {/* Background image container */}
      <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1585393948915-011d724d4c2e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat flex flex-col justify-between">
        {/* Logo */}
        <img
          className="w-12 sm:w-14 md:w-16 lg:w-20 ml-4 sm:ml-6 md:ml-8 lg:ml-10 mt-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="QuickRide Logo"
        />

        {/* Bottom content container */}
        <div className="absolute bottom-0 left-0 w-full bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Get Started with QuickRide
          </h2>
          <Link
            to="/user-login"
            className="flex justify-center items-center w-full bg-black text-white py-3 sm:py-4 md:py-5 rounded-md mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-lg hover:bg-gray-800 transition-colors"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
