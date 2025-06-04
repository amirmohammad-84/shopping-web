import Footer from "../components/layouts/footer";

const faqItems = [
  {
    question: 'چطور می توانم سفارش ثبت کنم؟',
    answer:
      'شما می‌توانید به راحتی با مرور محصولات موجود در وب‌سایت، افزودن آن‌ها به سبد خرید و تکمیل اطلاعات پرداخت و آدرس، سفارش خود را ثبت کنید.',
  },
  {
    question: 'چه روش های پرداختی دارید؟',
    answer:
      'ما انواع روش‌های پرداخت از جمله کارت‌های اعتباری، کارت‌های بانکی، پرداخت اینترنتی و کیف پول دیجیتال را می‌پذیریم.',
  },
  {
    question: 'ارسال سفارش چقدر زمان می برد؟',
    answer:
      'مدت زمان ارسال بسته به موقعیت مکانی شما و روش ارسال متفاوت است. معمولاً سفارش‌ها طی ۱ تا ۲ روز کاری پردازش می‌شوند و بین ۳ تا ۷ روز کاری تحویل داده می‌شوند.',
  },
  {
    question: 'آیا می توانم محصول را مرجوع کنم؟',
    answer:
      'بله، ما سیاست بازگشت بدون دردسر داریم. در صورتی که از خرید خود رضایت ندارید، می‌توانید تا ۳۰ روز پس از دریافت، اقدام به بازگشت کالا نمایید. لطفاً با پشتیبانی ما در <a href="mailto:randomEmail@gmail.com" class="underline text-blue-700">randomEmail@gmail.com</a> تماس بگیرید.',
  },
  {
    question: 'آیا ارسال به سراسر ایران دارید؟',
    answer:
      'خیر متاسفانه در حال حاضر فقط امکان ارسال داخل تهران وجود دارد'
  },
  {
    question: 'چطور می توانم با پشتیبانی تماس بگیرم؟',
    answer:
      'در صورت داشتن هرگونه سوال یا نیاز به راهنمایی، می‌توانید با شماره 9911083755 در ساعات کاری (شنبه تا پنج‌شنبه از ساعت ۱۰ صبح تا ۶ عصر) تماس بگیرید یا به ایمیل <a href="mailto:randomEmail@gmail.com" class="underline text-blue-700">randomEmail@gmail.com</a> پیام دهید.',
  },
  {
    question: 'شرایط و قوانین شما چیست؟',
    answer:
      'برای مشاهده شرایط و قوانین کامل، لطفاً به صفحه <a href="#" class="underline text-blue-700">شرایط خدمات</a> ما مراجعه نمایید.',
  },
];

const FAQ = () => {
  return (
    <>
        <section className="bg-[#f5f2ed] text-gray-900 py-32 min-h-screen">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
                سوالات پرتکرار
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                {faqItems.map(({ question, answer }, index) => (
                    <details
                    key={index}
                    className="bg-white my-3 rounded-lg px-4 py-2 shadow-[0_0_10px_2px_rgba(160,90,50,0.4)]"
                    >
                    <summary className="py-2 cursor-pointer font-medium hover:underline">
                        {question}
                    </summary>
                    <div className="px-2 pb-4 pt-1 text-sm leading-relaxed">
                        <p dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>
                    </details>
                ))}
                </div>
            </div>
        </section>

        <Footer />
    </>


  );
};

export default FAQ;

