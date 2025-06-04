

import Image from "next/image";

export default function MainPageAdvantage() {
  return (
    
    
    <>
      <div className="feature-card bg-white rounded-xl overflow-hidden shadow-lg transition duration-300">
        <div className="h-48 overflow-hidden">
          <Image
            src="/slideTwo.jpg"
            width={400}
            height={400}
            alt="Cozy Atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="text-amber-600 text-3xl mb-4">
            <i className="fas fa-heart"></i>
          </div>
          <h3 className="text-xl font-semibold mb-3">محیطی صمیمانه</h3>
          <p className="text-gray-600">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
            با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
            و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>
    </>

    
  );
}
