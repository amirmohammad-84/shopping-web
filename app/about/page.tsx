import Image from "next/image"
import Footer from "../components/layouts/footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Page",
  description: "Read about us",
};

const AboutPage = () => {


    return (
        <>
            <div className="w-full lg:min-h-screen h-full m-auto flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900 mt-12 overflow-hidden">
                <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
                    
                    <div className="lg:w-[90%] w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                        {/* تصویر سمت چپ */}
                        <div className="relative flex-shrink-0">
                            <Image width={400} height={400} className="rounded-full relative object-cover right-0 lg:w-[26rem] lg:h-[26rem] sm:w-[20rem] sm:h-[20rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-[#d2b48c] ring-4 ring-[#a97449] shadow-[0_0_60px_15px_rgba(167,116,73,0.4)]" src="/interior.jpg" alt="nothing"/>
                        </div>

                        {/* متن سمت راست */}
                        <div className="lg:w-[60%] w-full p-16 shadow-xl rounded-xl bg-white dark:bg-gray-800 text-center ring-4 ring-[#a97449] shadow-[0_0_40px_10px_rgba(167,116,73,0.3)]">
                            <h2 className="text-4xl text-[#a97449] dark:text-[#d2b48c] font-bold mb-4">درباره ما</h2>
                            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">ما چای و قهوه هستیم</p>
                            <p className="text-base sm:text-lg leading-8 text-gray-700 dark:text-gray-300 text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                                تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتاب‌های زیادی
                                در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها
                                شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                                ایجاد کرد. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                                سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                                اهل دنیای موجود طراحی اساساً مورد استفاده قرار گیرد.
                            </p>
                            {/* <button className="mt-6 px-6 py-3 bg-[#a97449] hover:bg-[#8b5e34] transition rounded-md text-white font-semibold text-lg">بیشتر بخوانید</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutPage;
