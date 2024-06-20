import React from "react"
import logo from "../assets/pics/logo.png"
import { IoMenu } from "react-icons/io5"
import "../App.css"

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center p-4 px-8">
        <img src={logo} alt="Logo" className="h-14 w-14" />
        <IoMenu className="text-3xl cursor-pointer " />
      </div>
      <div className="flex justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-semibold	">The Devil Works</h1>

          <h2 className="font-semibold pt-8 pb-4 italic">Hey Fashion Fam,</h2>
          <p className="font-semibold">Is old always gold? </p>
          <p className="font-semibold">Not when it comes to technology </p>
          <p className="font-semibold">
            New is - better, faster & more efficient
          </p>

          {/* email part */}
          <div className=" pt-6 pb-4 px-8">
            <div className="flex justify-between items-center border-2 rounded-lg border-black shadow-right-bottom">
              <input
                type="email"
                placeholder="Email address"
                className="w-3/5 p-2 text-left rounded-lg text-black"
              />
              <h3
                className="bg-red-200 w-2/5 p-2 text-center text-white font-semibold border-l-2 border-black"
                style={{ backgroundColor: "#F54E44" }}
              >
                Get early access
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
