

import Image from "next/image";

export default function MainPagePerson() {
  return (
    
    
    <>
        <div className="bg-amber-800 rounded-lg overflow-hidden shadow-lg">
            <Image
            src="/slideOne.jpg"
            width={400}
            height={400}
            alt="Anne Dukundimana"
            className="w-full h-64 object-cover"
            />
            <div className="p-6">
            <h3 className="text-xl font-semibold mb-1">لورم ایپسوم</h3>
            <p className="text-amber-200 mb-3">موسس و گرداننده</p>
            <p className="text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            </div>
        </div>
    </>

    
  );
}
