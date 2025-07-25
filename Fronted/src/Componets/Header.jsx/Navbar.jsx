
// import { FaPlus } from "react-icons/fa";
// import Avatar from "react-avatar";
// import { IoIosNotifications } from "react-icons/io";
// import { IoIosSearch } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { toggleSidebar } from "../../Utils/appSlice";


// function Navbar() {
//   const dispatch = useDispatch()
// // handle toggle button
// function toggleHandler(){
//  dispatch(toggleSidebar())
// }


//   return (
//     <nav className=" flex  fixed top-0  justify-center items-center w-[100%]   z-10 bg-white">
//       <div className=" flex justify-between items-center w-[96%]  py-1 ">
//       {/* hamburger icon +logo+logo image seaction */}
//         <section className="flex items-center cursor-pointer">
//           <GiHamburgerMenu onClick={toggleHandler} size="32px" className="cursor-pointers" />
//           <img
//             className=""
//             width={"115px"}
//             src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
//             alt=""
//           />
//         </section>
//      {/* input search +search icon button */}
//         <section className="flex w-[35%]  items-center ">
//           <div className="border w-[100%]  border-gray-400 py-1 px-4 rounded-l-full ">
//               <input
//               className="w-full outline-none "
//               placeholder="search  ..."
//                 type="text"
//               />
//               {/* <IoIosSearch size="24px" /> */}
//           </div>
//           <button className="py-1 px-3 border border-gray-400 rounded-r-full cursor-pointer" > <IoIosSearch size="24px" /></button>
//         </section>
//         {/* login + newchanle + notfication icon section */}
//         <section className="flex items-center ">
//           <div className="  rounded-full bg-gray-400 flex  cursor-pointer items-center px-3">
//             <FaPlus size={"25px"} />
//             <div className="px-1">CREATE</div>
//           </div>
//           <div className="px-2 cursor-pointer">
//             <IoIosNotifications size={"32px"} />
//           </div>
//           <div className="px-2">
//             <Avatar
//               src="https://i.pinimg.com/736x/d0/7b/b1/d07bb1d4e5fedae0246a3061a2a911b7.jpg"
//               size={32}
//               round={true}
//             />
//           </div>
//         </section>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
