import React from "react"
import "../App.css"
import crowd from "../assets/pics/Crowd.png"
import tag from "../assets/pics/Tag.png"
import disc from "../assets/pics/Krita.png"
import prod from "../assets/pics/Product.png"
import dep from "../assets/pics/Deployment.png"
import school from "../assets/pics/school.png"
import today from "../assets/pics/Today.png"
import blog from "../assets/pics/blog.png"
import hand from "../assets/pics/hand.png"
import dress from "../assets/pics/dress.png"
import manufac from "../assets/pics/Manufacturing.png"

import youT from "../assets/pics/2nd/Youtuber.png"
import desi from "../assets/pics/2nd/Designer.png"
import pose from "../assets/pics/2nd/Pose.png"
import cam from "../assets/pics/2nd/Camera.png"
import commu from "../assets/pics/2nd/Communication.png"
import media from "../assets/pics/2nd/Media.png"
import claw from "../assets/pics/2nd/Claw.png"
import artist from "../assets/pics/2nd/Artist.png"
import makeup from "../assets/pics/2nd/Makeup.png"
import writer from "../assets/pics/2nd/Writer.png"
import hair from "../assets/pics/2nd/Hairdresser.png"

const Box2 = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-6 px-4">
        <h1 className="text-3xl font-semibold py-16">
          Who are we building for?
        </h1>

        <div className="flex justify-between">
          {/*  */}
          <div className=" w-1/2 p-2">
            <h3 className="font-semibold tracking-wide pl-12 text-lg pb-3">
              Businesses
            </h3>
            <div>
              <div className="flex justify-center my-1">
                <div className="transform -skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-red-300">
                    <img src={tag} alt="" className="inline w-5 h-5 mx-1" />
                    Brand
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-400">
                    <img src={disc} alt="" className="inline w-5 h-5 mx-1" />
                    Multi Designer
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-200">
                    <img src={prod} alt="" className="inline w-5 h-5 mx-1" />
                    Production House
                  </p>
                </div>
                <div className="transform skew-y-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-gray-300">
                    <img src={dep} alt="" className="inline w-5 h-5 mx-1" />
                    Manufacturing & Export
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="transform skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-yellow-500">
                    <img src={school} alt="" className="inline w-5 h-5 mx-1" />
                    Institutes and Academies
                  </p>
                </div>
                <div className="transform -skew-y-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-green-400">
                    <img src={today} alt="" className="inline w-5 h-5 mx-1" />
                    Events
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="transform -skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-300">
                    <img src={blog} alt="" className="inline w-5 h-5 mx-1" />
                    Blogs and Publications
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-red-400">
                    <img src={hand} alt="" className="inline w-5 h-5 mx-1" />
                    Non Profit and Councils
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="transform skew-y-1 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-600">
                    <img src={dress} alt="" className="inline w-5 h-5 mx-1" />
                    Fashion and consultancy
                  </p>
                </div>
                <div className="transform -skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-yellow-200">
                    <img src={manufac} alt="" className="inline w-5 h-5 mx-1" />
                    Conglomorates
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <div className="transform -skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-300">
                    <img src={crowd} alt="" className="inline w-5 h-5 mx-1" />
                    Agencies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- */}
          <div className="w-1/2 p-2">
            <h3 className="font-semibold tracking-wide pl-12 text-lg pb-3">
              Individuals
            </h3>
            <div>
              <div className="flex justify-center my-1">
                <div className="transform skew-y-3 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={youT} alt="" className="inline w-5 h-5 mx-1" />
                    Blogger & Influencer
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={desi} alt="" className="inline w-5 h-5 mx-1" />
                    Desiger
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    <img src={pose} alt="" className="inline w-5 h-5 mx-1" />
                    Model
                  </p>
                </div>
                <div className="transform skew-y-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={cam} alt="" className="inline w-5 h-5 mx-1" />
                    Photography & Film Making
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={commu} alt="" className="inline w-5 h-5 mx-1" />
                    Communication Designer
                  </p>
                </div>
                <div className="transform">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    <img src={media} alt="" className="inline w-5 h-5 mx-1" />
                    Multimedia Designer
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={claw} alt="" className="inline w-5 h-5 mx-1" />
                    Merchandiser
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-2 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    <img src={artist} alt="" className="inline w-5 h-5 mx-1" />
                    Artists
                  </p>
                </div>
                <div className="transform -skew-y-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    <img src={makeup} alt="" className="inline w-5 h-5 mx-1" />
                    Makeup Artist & Hair Stylist
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    <img src={writer} alt="" className="inline w-5 h-5 mx-1" />
                    Writer and Journalists
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    <img src={hair} alt="" className="inline w-5 h-5 mx-1" />
                    Stylist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box2
