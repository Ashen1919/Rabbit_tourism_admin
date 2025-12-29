export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* login card */}
      <div className="w-1/3 h-auto flex flex-col p-5 border-2 space-y-3 rounded-[10px] bg-gray-800/40 border-white/10">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <h1 className="text-center text-gray-400">Login to Admin account</h1>

        {/* email input */}
        <div className="w-full flex flex-col space-y-1">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="new-email"
            className="p-1.5 border-2 border-white/10 rounded-[10px] "
            placeholder="x@example.com"
          />
        </div>

        {/* password input */}
        <div className="w-full flex flex-col space-y-1">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="new-password"
            className="p-1.5 border-2 border-white/10 rounded-[10px] "
            placeholder="Enter your password"
          />
        </div>

        {/* login button */}
        <button className="w-full p-2 cursor-pointer text-lg font-semibold rounded-[10px] border-2 border-white/10 bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Login</button>
      </div>
    </div>
  );
}
