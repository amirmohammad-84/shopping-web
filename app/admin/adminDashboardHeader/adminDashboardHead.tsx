


const AdminDashboardHeader = ( ) => {


    return (
        <>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                    <div className='mr-1'>
                        <p className="text-gray-500 text-sm font-medium">درآمد کلی</p>
                        <h3 className="text-2xl font-bold mt-1 text-gray-800">$24,780</h3>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    </div>
                    <div className="mt-4 flex items-center">
                    <span className="text-green-500 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +12.5%
                    </span>
                    <span className="text-gray-500 text-sm mr-2">مقایسه با ماه قبل</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                    <div className='mr-1'>
                        <p className="text-gray-500 text-sm font-medium">مشتریان فعال</p>
                        <h3 className="text-2xl font-bold mt-1 text-gray-800">1,429</h3>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    </div>
                    <div className="mt-4 flex items-center">
                    <span className="text-green-500 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +8.2%
                    </span>
                    <span className="text-gray-500 text-sm mr-2">مقایسه با ماه قبل</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                    <div className="flex justify-between items-start">
                    <div className='mr-1'>
                        <p className="text-gray-500 text-sm font-medium">درصد رضایت</p>
                        <h3 className="text-2xl font-bold mt-1 text-gray-800">3.42%</h3>
                    </div>
                    <div className="bg-purple-100 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    </div>
                    <div className="mt-4 flex items-center">
                    <span className="text-green-500 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +1.1%
                    </span>
                    <span className="text-gray-500 text-sm mr-2">مقایسه با ماه قبل</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 border-amber-500">
                    <div className="flex justify-between items-start">
                    <div className='mr-1'>
                        <p className="text-gray-500 text-sm font-medium">تعداد فروشندگان</p>
                        <h3 className="text-2xl font-bold mt-1 text-gray-800">153</h3>
                    </div>
                    <div className="bg-amber-100 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    </div>
                    <div className="mt-4 flex items-center">
                    <span className="text-green-500 text-sm font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        +2.4%
                    </span>
                    <span className="text-gray-500 text-sm mr-2">مقایسه با ماه قبل</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboardHeader