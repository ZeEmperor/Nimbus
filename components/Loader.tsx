// import Image from 'next/image'
// import React from 'react'

// const Loader = () => {
//   return (
//     <div className='flex-center h-screen w-full'>
//         <Image
//         src='/icons/loading-circle.svg'
//         height={50}
//         width={50}
//         alt='Loading' />
//     </div>
//   )
// }

// export default Loader



import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the Lottie animation JSON dynamically
    fetch("https://lottie.host/f9c01cc3-ca6a-4ad1-82a2-4edb3109cff2/J3Cft5kIe1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading Lottie animation:", error));
  }, []);

  if (!animationData) {
    // Optionally render a fallback loader while the animation is loading
    return 
  }

  return (
    <div className="flex-center h-screen w-full">
      <Lottie
        animationData={animationData}
        style={{ width: 300, height: 300 }}
        loop
        autoplay
      />
    </div>
  );
};

export default Loader