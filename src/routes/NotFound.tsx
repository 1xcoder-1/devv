import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-[#ECE7E1] p-4"
    >
      <div className="text-center">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-[#0a192f] text-9xl font-bold mb-4"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#0a192f] text-2xl mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#4a5568] mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link 
            to="/" 
            className="inline-block px-6 py-3 border-2 border-[#0a192f] text-[#0a192f] 
                     rounded hover:bg-[#0a192f] hover:text-[#ECE7E1] transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default NotFound;