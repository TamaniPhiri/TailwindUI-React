import { Images } from "../Constants/Images";

const Cards = () => {
  return (
    <div className="flex w-full md:flex-row flex-col items-center justify-center gap-2">
      {/* Card 1-Left */}
      <div className="flex items-center bg-white shadow-2xl md:w-1/2 w-full flex-col border rounded-md p-3 gap-2">
        <div className="flex flex-row  py-4 justify-between w-full items-center">
          <div className="flex flex-col w-fit items-center">
            <div className="flex flex-row items-center w-full gap-2">
              <h1 className=" font-bold">Basic Plan</h1>
              <button className="border border-black rounded-2xl items-center justify-center flex flex-row">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className=" h-4 w-4"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <p className=" font-bold pr-2">Active</p>
              </button>
            </div>
            <p className=" text-sm text-gray-600">
              Our most popular plan for simple teams.
            </p>
          </div>
          <div className="flex flex-row w-fit items-center justify-end">
            <h1 className=" text-4xl">$20</h1>
            <p className=" text-sm text-gray-600">per month</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row overflow-hidden pb-3">
            {Images.map((img)=>(
                <img key={img.id} src={img.url} className=" h-10 w-10 object-cover rounded-full"/>
            ))}
            <button className=" h-10 w-10 border-dashed items-center flex rounded-full justify-center border-2">
                <span className=" text-lg text-gray-500">+</span>
            </button>
          </div>
          <div>
            <p className=" text-sm text-gray-600 font-bold">10 of 15 users</p>
          </div>
        </div>
        <a
          href="#"
          className="flex border-t-[1.5px] flex-row items-center py-3 justify-end w-full"
        >
          <div className="flex flex-row border-[1.5px] font-bold items-center text-sm px-2 py-1 rounded-md">
            <span>Upgrade plan</span>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Card 2-Left */}
      <div className="flex bg-white shadow-2xl flex-col items-center md:w-1/2 w-full border p-3 rounded-md">
        <div className="flex w-full flex-col py-4 justify-start">
          <h1 className=" font-bold">Payment method</h1>
          <p className=" text-sm text-gray-600">
            Change how you pay for your plan
          </p>
        </div>
        <div className="flex flex-row justify-between rounded-md w-full items-center border-[1.5px] mb-4 py-3 px-3">
          <div className="flex flex-row gap-3 text-sm">
            <div className="flex items-center h-fit bg-white border px-1 rounded-md">
              <svg
                viewBox="0 0 24 24"
                fill="#00008B"
                height="2.5em"
                width="2.5em"
              >
                <path d="M16.539 9.186a4.155 4.155 0 00-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 011.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275l.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 00-.149-.199 6.948 6.948 0 00-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606l.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" />
              </svg>
            </div>
            <div className="flex flex-col justify-between w-full items-center">
              <div className="flex gap-2 items-center">
                <span className=" text-gray-800 font-bold">Visa ending in 1234</span>
                <button className=" border border-black py-[1px] rounded-2xl font-bold px-2">Default</button>
              </div>
              <div className=" flex flex-col w-full">
                <p className=" text-gray-500">Expiry 06/2024</p>
                <div className="flex flex-row w-fit pt-3 gap-1 items-center">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1.3em"
                    width="1.3em"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                  </svg>
                  <a href="" className=" text-gray-500">
                    billing@unitedui.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className=" border bg-black text-white font-bold px-4 py-1 rounded-md">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
