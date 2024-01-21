import React from 'react'
import Image from 'next/image'
import mantech from "../../public/sajid.jpg"
const page = () => {
  return (
    <div>
      <Image
      src={mantech}
      width={200}
      height={200}
      alt=''
      ></Image>
      <div className="flex  bg-green-600 text-white "> <nav className=" self-center w-full max-w-7xl "> <div className="flex md:flex-row flex-col justify-between items-center md:items-start"> <h1 className=" py-4 text-2xl font-sans font-bold px-10">Mantech</h1> 
 <ul className="flex justify-center my-4 items-center text-sm md:text-[18px] font-bold md:px-10"> <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5"> <a href="#">Home</a> </li> <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5"> <a href="#">Contact</a> </li> <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5"> <a href="#">Services</a> </li> <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5"> <a href="#">About</a> </li> </ul><button></button> </div> </nav> </div> <div className="flex justify-center bg-green-400 p-5 md:p-16 lg:p-28"> <div className="flex flex-col justify-center max-w-7xl text-white"> <h1 className="text-base font-medium tracking-wider ">Welcome to my Client Template</h1> <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span> <div className="flex flex-col text-white mt-5"> <h1 className="text-4xl md:text-[50px] font-semibold">Hello I'm Muhammad Sajid</h1> 
 <Image className=' flex  rounded-3xl'
      src={mantech}
      width={100}
      height={100}
      alt=''
      ></Image>
 <p className="text-xl mt-2 md:mt-4 tracking-wide">Designer-Blockchain Developer - Freelancer</p> </div> <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Tailblocks provides best Tailwind CSS components. Visit our website and feel free to give feedback. With the help of Tailblocks, a user can build a website in a much lesser time.</p> <div className="space-x-3 mt-6 md:mt-4"> <a href="#"> <i className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i> </a> <a href="#"> <i className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i> </a> <a href="#"> <i className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i> </a> <a href="#"> <i className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i> </a> </div> <div className="flex mt-10 space-x-5"> <button className="bg-white text-blue-600 border-blue-700 px-6 py-2 hover:brightness-105 font-semibold">Read More</button> <button className="bg-blue-900 text-white border-2 border-white-2 px-6 py-2 hover:brightness-105 font-semibold">Contact Me</button> </div></div> </div>

    </div>
  )
}

export default page