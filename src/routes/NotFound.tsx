import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundAnimation: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {/* First animation layer */}
      <motion.div
        initial={{ transform: "translateY(0%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: "easeIn",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      />

      {/* Second animation layer */}
      <motion.div
        initial={{ transform: "translateY(30%)" }}
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "ease",
        }}
        className="absolute top-0 left-0 w-full h-full bg-[#1a1818] z-50"
      />
    </div>
  );
};

const NotFoundPage: React.FC = () => {
  // Inject custom CSS styles for animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      
      @keyframes detective-move {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(5px) rotate(2deg); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-twinkle {
        animation: twinkle 2s ease-in-out infinite;
      }
      
      .animate-detective {
        animation: detective-move 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      className="w-full h-screen flex items-center justify-center p-4 overflow-hidden relative"
      style={{ backgroundColor: '#ECE7E1' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* Detective Illustration */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-96 relative">
            {/* Background oval with night scene */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-500 to-slate-700 rounded-full overflow-hidden border-4 border-slate-800">
              {/* Night sky background */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-500 to-slate-700">
                {/* Moon */}
                <div className="absolute top-8 right-12 w-12 h-12 bg-yellow-100 rounded-full opacity-90">
                  {/* Moon crater details */}
                  <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-200 rounded-full opacity-60" />
                  <div className="absolute top-4 right-2 w-1 h-1 bg-yellow-200 rounded-full opacity-50" />
                </div>
                
                {/* Stars */}
                <div className="absolute top-6 left-8 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" />
                <div className="absolute top-12 left-16 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                <div className="absolute top-16 right-20 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-20 left-12 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-24 right-16 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
                <div className="absolute top-28 left-20 w-1 h-1 bg-yellow-200 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
                
                {/* Plus-shaped stars */}
                <div className="absolute top-10 left-20 text-yellow-200 text-xs animate-twinkle" style={{ animationDelay: '0.3s' }}>+</div>
                <div className="absolute top-18 right-24 text-yellow-200 text-xs animate-twinkle" style={{ animationDelay: '1.2s' }}>+</div>
                <div className="absolute top-22 left-14 text-yellow-200 text-xs animate-twinkle" style={{ animationDelay: '1.8s' }}>+</div>
              </div>
              
              {/* Detective character */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-detective">
                {/* Detective body */}
                <div className="relative">
                  {/* Head with better proportions */}
                  <div className="w-18 h-18 bg-orange-200 rounded-full relative mx-auto mb-1">
                    {/* Hat - detective style */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-22 h-10 bg-gray-800 rounded-t-full" />
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-26 h-4 bg-gray-800 rounded-full" />
                    
                    {/* Face features */}
                    <div className="absolute top-5 left-4 w-2 h-2 bg-gray-800 rounded-full" /> {/* Left eye */}
                    <div className="absolute top-5 right-4 w-2 h-2 bg-gray-800 rounded-full" /> {/* Right eye */}
                    <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-orange-300 rounded-full" /> {/* Nose */}
                    
                    {/* Mustache - more detailed */}
                    <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-7 h-2 bg-gray-700 rounded-full" />
                    
                    {/* Mouth line */}
                    <div className="absolute top-13 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-600" />
                  </div>
                  
                  {/* Body - brown coat with better styling */}
                  <div className="w-24 h-32 bg-red-800 mx-auto relative rounded-t-3xl">
                    {/* Coat lapels */}
                    <div className="absolute top-2 left-2 w-6 h-12 bg-red-900 transform rotate-12 rounded-tl-2xl" />
                    <div className="absolute top-2 right-2 w-6 h-12 bg-red-900 transform -rotate-12 rounded-tr-2xl" />
                    
                    {/* Coat buttons - vertical line */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full" />
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full" />
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full" />
                    <div className="absolute top-18 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full" />
                    
                    {/* Left arm with magnifying glass - better positioning */}
                    <div className="absolute top-8 -left-6 w-4 h-16 bg-red-800 rounded-full transform rotate-15" />
                    {/* Hand holding magnifying glass */}
                    <div className="absolute top-4 -left-10 w-3 h-3 bg-orange-200 rounded-full" />
                    {/* Magnifying glass */}
                    <div className="absolute top-2 -left-12 w-8 h-8 border-3 border-yellow-600 rounded-full bg-blue-100 opacity-80" />
                    <div className="absolute top-0 -left-10 w-2 h-10 bg-yellow-700 rounded-full transform rotate-45" />
                    
                    {/* Right arm with briefcase */}
                    <div className="absolute top-10 -right-6 w-4 h-14 bg-red-800 rounded-full transform -rotate-15" />
                    {/* Hand */}
                    <div className="absolute top-22 -right-8 w-3 h-3 bg-orange-200 rounded-full" />
                    {/* Briefcase - more detailed */}
                    <div className="absolute top-20 -right-2 w-8 h-6 bg-yellow-700 rounded-sm border-2 border-yellow-800" />
                    <div className="absolute top-21 right-1 w-1 h-1 bg-yellow-900 rounded-full" />
                    {/* Briefcase handle */}
                    <div className="absolute top-19 right-0 w-2 h-2 border-t-2 border-yellow-800 rounded-t-full" />
                    
                    {/* Coat details - pockets */}
                    <div className="absolute top-16 left-4 w-4 h-3 bg-red-900 rounded border border-red-700" />
                    <div className="absolute top-16 right-4 w-4 h-3 bg-red-900 rounded border border-red-700" />
                    
                    {/* Belt */}
                    <div className="absolute bottom-4 left-0 right-0 h-2 bg-gray-800" />
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-yellow-600 rounded" />
                  </div>
                  
                  {/* Legs - better proportioned */}
                  <div className="flex justify-center gap-3 mt-1">
                    <div className="w-4 h-12 bg-gray-800 rounded-full" />
                    <div className="w-4 h-12 bg-gray-800 rounded-full" />
                  </div>
                  
                  {/* Feet - dress shoes */}
                  <div className="flex justify-center gap-3 mt-1">
                    <div className="w-6 h-3 bg-gray-900 rounded-full" />
                    <div className="w-6 h-3 bg-gray-900 rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Ground area with more detail */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-yellow-600 to-yellow-500" />
              {/* Ground texture dots */}
              <div className="absolute bottom-2 left-8 w-1 h-1 bg-yellow-400 rounded-full" />
              <div className="absolute bottom-4 right-12 w-1 h-1 bg-yellow-400 rounded-full" />
              <div className="absolute bottom-3 left-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>
        </motion.div>
        
        {/* Content */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center lg:text-left max-w-md"
        >
          {/* 404 Title */}
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-8xl lg:text-9xl font-bold text-gray-800 mb-6 animate-float"
          >
            404
          </motion.h1>
          
          {/* Main message */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl lg:text-2xl text-gray-700 font-medium mb-2">
              Looks like this page is missing.
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Don't worry though, our best
            </p>
            <p className="text-lg lg:text-xl text-gray-600">
              man is on the case.
            </p>
          </motion.div>
          
          {/* Secondary message */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-gray-500 mb-8 text-sm lg:text-base"
          >
            Meanwhile, why don't try again by going
          </motion.p>
          
          {/* Back Home Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-block px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              BACK HOME
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const NotFound: React.FC = () => {
  return (
    <div className="z-30 relative">
      <NotFoundAnimation />
      <NotFoundPage />
    </div>
  );
};

export default NotFound;