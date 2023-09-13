const Navbar = () => {
  return (
    <>
    <div className="flex row align-middle justify-between shadow-sm border-b-[1px] border-cyan-800 px-8 py-4">
      <div className="flex row gap-4 align-middle">
        <div className="w-16">
          <img src="/src/assets/logo.svg" alt="" className="object-contain" />
        </div>
        <span className="text-lg">Live</span>
        <span className="text-lg">Push</span>
        <span className="text-lg">Link</span>
        <span className="text-lg">Shop</span>
        <span className="text-lg">Pocks</span>
        <span className="text-lg">Apprentiship</span>
        <span className="text-lg">Help</span>
        <span className="text-lg text-orange-500">More +</span>
      </div>
      <div className="flex row gap-8">
        <span className="text-lg text-blue-700">Try Live for free</span>
        <span className="text-sm">Log in or Sign in</span>
      </div>
    </div>
    <div className="flex row gap-8 px-[2.5rem] py-4 bg-[rgba(255,255,255,0.9)] sticky z-[100] w-[100%] top-0">
        <span className="text-lg text-orange-500">About</span>
        <span className="text-lg">Jobs</span>
        <span className="text-lg">Apprentiship</span>
      </div>
    </>
  );
}
 
export default Navbar;