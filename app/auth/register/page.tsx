'use client';

import RegisterForm from '../../forms/auth/registerForm';

const Register = () => {
  return (
    <div className="relative min-h-screen bg-[#e0e5ec] flex justify-center px-4 overflow-hidden mt-[18px] sm:pt-[80px] sm:pb-5 md:pt-[72px]">
      {/* SVG background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="fixed -top-32 -left-32 opacity-20"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="#cbd5e1" />
        </svg>

        <svg
          className="fixed -bottom-32 -right-32 opacity-10"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="400" rx="100" fill="#a3b1c6" />
        </svg>
      </div>

      {/* فرم */}
      <div className="w-full max-w-md rounded-3xl shadow-[8px_8px_16px_#c5c9cc,_-8px_-8px_16px_#ffffff] bg-[#e0e5ec] p-10 space-y-6 z-10">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-800">
          Register on Shopy
        </h2>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
