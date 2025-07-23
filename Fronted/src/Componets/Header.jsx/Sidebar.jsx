import { IoHomeSharp } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { v4 as uuidv4 } from 'uuid';

const SidebarItem =[
    {
        icon: <IoHomeSharp  size={"24px"}/> ,
        title:"Home"
    },
      {
          icon: <SiYoutubeshorts size={"24px"} />,
        title: "shorts"
    },
    {
        icon: <MdSubscriptions size={"24px"} />,
        title: "subsciptions"
    }
]

function Sidebar() {
  return (
      <section className="  w-[14%] ml-5">
       <div className="ml-4">
       {
        SidebarItem.map((item)=>{
       return(
           <div key={uuidv4()} className="flex  my-3 ">
              {item.icon}
               <span className="ml-5 font-semibold">{item.title}</span>
           </div>
       )
        })
       }
       </div>
    </section> 
  )
}

export default Sidebar
