import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Footer from "../components/layouts/footer";

const ContactUs = () => {
  return (
    <>
      <section id="contact" className="bg-amber-800 text-white">
        <div className="container mx-auto py-24 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            با ما در ارتباط باشید
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="contact-form space-y-6">
                <div>
                  <label
                    htmlFor="Name"
                    className="block text-md font-medium text-sky-500 mb-1"
                  >
                    نام شما
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    placeholder="نام خود را وارد کنید"
                    className="
                        w-full
                        px-4 py-3
                        rounded-full
                        bg-[#e0e5ec]
                        text-gray-700
                        placeholder-gray-500
                        shadow-[inset_4px_4px_8px_#c5c9cc,_inset_-4px_-4px_8px_#ffffff]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-300
                        transition duration-200 ease-in-out
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-md font-medium text-sky-500 mb-1"
                  >
                    آدرس ایمیل
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="آدرس ایمیل خود را وارد کنید"
                    className="
                        w-full
                        px-4 py-3
                        rounded-full
                        bg-[#e0e5ec]
                        text-gray-700
                        placeholder-gray-500
                        shadow-[inset_4px_4px_8px_#c5c9cc,_inset_-4px_-4px_8px_#ffffff]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-300
                        transition duration-200 ease-in-out
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="Number"
                    className="block text-md font-medium text-sky-500 mb-1"
                  >
                    شماره تلفن
                  </label>
                  <input
                    type="text"
                    id="Number"
                    name="Number"
                    placeholder="شماره تلفن خود را وارد کنید"
                    className="
                        w-full
                        px-4 py-3
                        rounded-full
                        bg-[#e0e5ec]
                        text-gray-700
                        placeholder-gray-500
                        shadow-[inset_4px_4px_8px_#c5c9cc,_inset_-4px_-4px_8px_#ffffff]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-300
                        transition duration-200 ease-in-out
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="mesage"
                    className="block text-md font-medium text-sky-500"
                  >
                    پیام شما
                  </label>
                  <textarea
                    id="mesage"
                    name="mesage"
                    placeholder="پیام خود را بنویسید"
                    className="
                        mt-1
                        appearance-none
                        block
                        w-full
                        px-3
                        py-2
                        border
                        border-gray-300
                        rounded-md
                        shadow-sm
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                    "
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-amber-900/50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6">راه های ارتباطی</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-amber-300 text-xl mt-1 mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">آدرس</h4>
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-amber-300 text-xl mt-1 mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">ایمیل مجموعه</h4>
                      <a
                        href="mailto:randomEmail@gmail.com"
                        className="hover:text-amber-200"
                      >
                        randomEmail@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-amber-300 text-xl mt-1 mr-4">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">شماره تلفن</h4>
                      <a href="tel:09912382497" className="hover:text-amber-200"> 09912382497 </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-amber-300 text-xl mt-1 mr-4">
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        ما را در شبکه های اجتماعی دنبال کنید
                      </h4>

                      <div className="flex space-x-4">
                        <Link
                          href="#"
                          className="text-amber-100 mx-5 hover:text-white transition"
                        >
                          <GlobeAltIcon className="w-6 h-6" />{" "}
                          {/* به‌جای فیس‌بوک */}
                        </Link>
                        <Link
                          href="#"
                          className="text-amber-100 mx-5 hover:text-white transition"
                        >
                          <EnvelopeIcon className="w-6 h-6" />{" "}
                          {/* به‌جای اینستاگرام */}
                        </Link>
                        <Link
                          href="#"
                          className="text-amber-100 mx-5 hover:text-white transition"
                        >
                          <ChatBubbleLeftRightIcon className="w-6 h-6" />{" "}
                          {/* به‌جای توییتر */}
                        </Link>
                        <Link
                          href="#"
                          className="text-amber-100 mx-5 hover:text-white transition"
                        >
                          <PhoneIcon className="w-6 h-6" />{" "}
                          {/* به‌جای واتساپ */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.142028786953!2d51.446489!3d35.740652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e035bc247dbd7%3A0xe4348781cc10ac37!2sKNTU!5e0!3m2!1sen!2s!4v1716884967000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

    </>
  );
};


export default ContactUs