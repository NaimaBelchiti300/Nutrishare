import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center w-full font-lora  pt-1">
        <div className="pr-20 ">
          <img src={logo} className="w-50 " />
        </div>
        <div className=" space-x-8 text-lg">
          <a>Home</a>
          <a>About Us </a>
          <a> How It Works</a>
          <a>Recipes</a>
          <a>Reviews </a>
          <button className="w-auto px-7 bg-gray rounded-sm text-white">
            <a>Sign In</a>
          </button>
          <button className="w-auto px-7 bg-gray rounded-sm text-white">
            <a>Sign Up</a>
          </button>{" "}
        </div>
      </div>

      <div className="w-full px-10 pt-1">
        <span className="bg-graylight block  h-0.5"></span>
      </div>
    </>
  );
}
