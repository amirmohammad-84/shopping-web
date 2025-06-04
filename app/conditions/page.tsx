import Footer from "../components/layouts/footer"

const Conditions = () => {
  return (
    <>
    <div className="bg-[#fdfaf6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-[0_0_12px_2px_rgba(139,69,19,0.3)] p-8">
          <h1 className="text-3xl font-bold text-[#4b2e15] mb-8 text-center">قوانین و شرایط استفاده</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۱. پذیرش شرایط</h2>
            <div className="prose text-[#5e4732]">
              <p>با ورود به این وب‌سایت و استفاده از خدمات ما، شما با شرایط و ضوابط درج‌شده در این صفحه موافقت می‌کنید.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۲. مجوز استفاده</h2>
            <div className="bg-[#f7f3ee] rounded-lg p-6">
              <ul className="space-y-4 text-[#5e4732]">
                <li className="flex gap-3">
                  <svg className="h-6 w-6 text-[#a86c3c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>مجوز مشاهده موقت یک نسخه از محتوای سایت برای استفاده شخصی و غیرتجاری صادر می‌شود.</span>
                </li>
                <li className="flex gap-3">
                  <svg className="h-6 w-6 text-[#a86c3c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>این مجوز صرفاً اجازه استفاده می‌دهد و به معنای انتقال مالکیت محتوا نیست.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۳. سلب مسئولیت</h2>
            <div className="bg-[#fff8e6] border-l-4 border-[#d8a146] p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-[#d8a146]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-[#876543]">
                    تمامی اطلاعات سایت «همان‌طور که هست» ارائه می‌شود و ما هیچ‌گونه تضمین یا مسئولیتی در خصوص دقت، کامل بودن یا مناسب بودن آن ارائه نمی‌دهیم.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۴. محدودیت‌ها</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f7f3ee] p-6 rounded-lg">
                <h3 className="font-medium text-[#4b2e15] mb-2">محدودیت زمانی</h3>
                <p className="text-[#5e4732]">در صورت بروز مشکل، شکایت باید حداکثر تا ۳۰ روز پس از رخداد ثبت شود.</p>
              </div>
              <div className="bg-[#f7f3ee] p-6 rounded-lg">
                <h3 className="font-medium text-[#4b2e15] mb-2">مسئولیت</h3>
                <p className="text-[#5e4732]">ما هیچ مسئولیتی در قبال خسارات احتمالی نمی‌پذیریم.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۵. تغییرات</h2>
            <div className="prose text-[#5e4732]">
              <p>شرایط استفاده ممکن است در هر زمان بدون اطلاع قبلی تغییر یابد. استفاده از سایت به معنای پذیرش آخرین نسخه این قوانین است.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5c3a1b] mb-4">۶. تماس با ما</h2>
            <div className="bg-[#f7f3ee] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
              <p className="text-[#5e4732] mb-3 md:mb-0">سوالی درباره شرایط استفاده دارید؟</p>
              <a href="mailto:randomEmail@gmail.com" className="inline-flex items-center text-[#8a4a23] hover:text-[#a86845]">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                تماس با ما
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Conditions
