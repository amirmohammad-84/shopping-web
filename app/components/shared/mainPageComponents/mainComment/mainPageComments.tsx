

import Image from "next/image";

export default function MainPageComments() {
  return (
    
    
    <>
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="flex items-center mb-4">
          <div className="text-amber-500 text-2xl mr-2">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div className="flex items-center">
          <Image
            src="/slideThree.jpg"
            width={400}
            height={400}
            alt="Customer"
            className="w-12 h-12 rounded-full object-cover ml-4"
          />
          <div>
            <h4 className="font-semibold">امیرمحمد احمدی</h4>
            <p className="text-sm text-gray-500">طرفدار چای</p>
          </div>
        </div>
      </div>
    </>

    
  );
}
