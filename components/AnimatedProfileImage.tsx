import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedProfileImage = () => {
  return (
    <div className="relative w-[310px] h-[310px]">
      {/* Rotating border effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Image container */}
      <div className="absolute inset-[6px] rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
        <Image 
          src="/me.webp"
          alt="shohag miah"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AnimatedProfileImage;