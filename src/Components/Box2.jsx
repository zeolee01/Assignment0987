import React from "react"
import "../App.css"

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
                    Brand
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-400">
                    Multi Designer
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-200">
                    Production House
                  </p>
                </div>
                <div className="transform skew-y-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-gray-300">
                    Manufacturing & Export
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-yellow-500">
                    Institutes and Academies
                  </p>
                </div>
                <div className="transform -skew-y-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-green-400">
                    Events
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-300">
                    Blogs and Publications
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-red-400">
                    Non Profit and Councils
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-1 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-600">
                    Fashion and consultancy
                  </p>
                </div>
                <div className="transform -skew-y-3">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-yellow-200">
                    Conglomorates
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-3 px-2">
                  <p className=" border border-black rounded-lg p-0.5 text-sm shadow-right-bottom-logo bg-blue-300">
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
                    Blogger & Influencer
                  </p>
                </div>
                <div className="transform skew-y-3">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    Desiger
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    Model
                  </p>
                </div>
                <div className="transform skew-y-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    Photography & Film Making
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    Communication Designer
                  </p>
                </div>
                <div className="transform">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    Multimedia Designer
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    Merchandiser
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-2 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2">
                    Artists
                  </p>
                </div>
                <div className="transform -skew-y-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    Makeup Artist & Hair Stylist
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
                    Writer and Journalists
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <div className="transform -skew-y-1 px-2">
                  <p className=" border border-gray-200 rounded-lg p-0.5 text-sm shadow-right-bottom-logo2 ">
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
