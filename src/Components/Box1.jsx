import React from "react"
import "../App.css"

const Box1 = () => {
  return (
    <div>
      <div className="border-2 max-w-3xl mx-auto mt-16 border-black rounded-lg shadow-right-bottom">
        <div className="flex p-2">
          <div className=" w-4 h-4 bg-red-600 rounded-lg ml-2"></div>
          <div className=" w-4 h-4 bg-yellow-500 rounded-lg ml-2"></div>
          <div className=" w-4 h-4 bg-green-500 rounded-lg ml-2"></div>
        </div>
        <div>
          <hr className="border-black " />
        </div>
        <div>
          <div className="px-10 pt-10">
            <p>
              Our fashion universe is still playing catch-up with old-school
              networking while others are using tech to connect & find gigs
              worldwide & automate tasks.
            </p>
          </div>
          <div className="px-10 pt-6 pb-12">
            <p>
              <span className="bg-yellow-200">
                Let's unite to switch gears and bring a technology revolution in
                fashion
              </span>{" "}
              so you can level up that career | business you are
            </p>
          </div>
        </div>
      </div>

      <div class="w-full pt-2 pb-2 bg-black transform -skew-y-2 mt-10">
        <div class="flex justify-evenly">
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
          <p className="inline px-2 text-white">JOIN THE PARTY</p>
          <p className="inline px-2">🤩</p>
        </div>
      </div>
    </div>
  )
}

export default Box1
