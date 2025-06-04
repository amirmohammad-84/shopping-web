import Image from "next/image";
import Link from "next/link";
import Header from "./components/layouts/header";
import Input from "./components/shared/form/input";
import Textarea from "./components/shared/form/textarea";
import ProductsGlobList from "./components/products/productsGlobList";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Footer from "./components/layouts/footer";
import MainPageProducts from "./components/shared/mainPageComponents/mainProduct/mainPageProduct";
import MainPageComments from "./components/shared/mainPageComponents/mainComment/mainPageComments";
import MainPagePerson from "./components/shared/mainPageComponents/mainPerson/mainPagePerson";
import MainPageAdvantage from "./components/shared/mainPageComponents/mainAdvantage/mainPageAdvantage";
import ContactUs from "./contact/layout";

import getProductsList from "./pagesAsync/getProductList";

interface Props {
  searchParams?: {
    page: string | undefined;
    per_page: string | undefined;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams?.page ?? "1";
  const per_page = searchParams?.per_page ?? "8";

  let productListData = await getProductsList({
    page,
    per_page,
  });

  return (
    <main className="flex min-h-screen bg-[#e0e5ec] text-gray-800">
      <div>
        <section className="hero-container p-20">
          <div className="hero-content flex items-center justify-center h-full text-center text-white py-32 px-6">
            <div className="container mx-auto">
              <div className="inline-block bg-[rgba(120,72,38,0.08)] backdrop-blur-lg rounded-xl px-20 py-12 shadow-md transition-all duration-300 ease-in-out">
                <h1 className="text-amber-800 font-cursive text-5xl md:text-7xl mb-4">
                  چای و قهوه
                </h1>
                <p className="text-amber-500 text-xl md:text-2xl mb-6">
                  لورم ایپسوم متن ساختگی با تولید
                </p>
                <Link
                  href="/products"
                  className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                >
                  مشاهده محصولات
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-16 bg-amber-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-4">
              منو
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              مجموعه ای از قهوه های دست ساز و چای ممتاز را از سرتاسر جهان که با
              دقت ساخته شده است، تست کنید.
            </p>

            <MainPageProducts productListData={productListData} />
          </div>
        </section>

        <section
          id="about"
          className="py-16 text-white"
          style={{
            backgroundColor: "#B45309",
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3e%3cg fill='none' stroke='%236F4E37' stroke-width='1.5' opacity='0.3'%3e%3cellipse cx='30' cy='40' rx='6' ry='10'/%3e%3cpath d='M25 30 C 30 45, 33 45, 35 50' /%3e%3cellipse cx='80' cy='120' rx='5' ry='9'/%3e%3cpath d='M76 111 C 80 125, 83 125, 85 130' /%3e%3cellipse cx='150' cy='60' rx='6' ry='10'/%3e%3cpath d='M146 50 C 150 65, 153 65, 155 70' /%3e%3cellipse cx='120' cy='170' rx='7' ry='11'/%3e%3cpath d='M115 160 C 120 175, 123 175, 125 180' /%3e%3cellipse cx='50' cy='150' rx='6' ry='9'/%3e%3cpath d='M46 140 C 50 155, 53 155, 55 160' /%3e%3c/g%3e%3c/svg%3e")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center text-center max-w-4xl mx-auto px-4">
              <div className="mb-10 lg:mb-0 lg:pr-12">
                <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
                <p className="mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p className="mb-4">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله...
                </p>
                <p className="mb-6">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="bg-amber-800 p-4 rounded-lg text-center flex-1">
                    <div className="text-3xl font-bold mb-1">5+</div>
                    <div className="text-sm">سابقه کاری</div>
                  </div>
                  <div className="bg-amber-800 p-4 rounded-lg text-center flex-1">
                    <div className="text-3xl font-bold mb-1">12</div>
                    <div className="text-sm">تامین کننده مستقیم</div>
                  </div>
                  <div className="bg-amber-800 p-4 rounded-lg text-center flex-1">
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-sm">فروشنده همکار</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                با تیم ما آشنا شوید
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <MainPagePerson />
                <MainPagePerson />
                <MainPagePerson />
              </div>
            </div>
          </div>
        </section>

        <ContactUs />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              برتری های ما
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <MainPageAdvantage />
              <MainPageAdvantage />
              <MainPageAdvantage />
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
              نظرات مشتریان
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MainPageComments />
              <MainPageComments />
              <MainPageComments />
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">همیشه به روز بمانید</h2>
            <p className="max-w-2xl mx-auto mb-8">
              برای اطلاع از آخرین محصولات و شعبه ها، ما را دنبال کنید
            </p>

            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="آدرس ایمیل خود را وارد کنید"
                className="w-full px-4 py-3 rounded-r-lg bg-[#e0e5ec] text-gray-700 placeholder-gray-500 shadow-[inset_4px_4px_8px_#c5c9cc,_inset_-4px_-4px_8px_#ffffff] focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-600 px-6 py-3 rounded-l-lg font-semibold"
              >
                ارسال
              </button>
            </form>

            <div className="mt-8 flex justify-center space-x-6">
              <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-white hover:text-amber-200 text-2xl">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
