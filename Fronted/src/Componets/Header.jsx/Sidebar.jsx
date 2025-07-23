import { IoHomeSharp } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";

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
    },
    {
        icon: <IoHomeSharp size={"24px"} />,
        title: "Home"
    },
    {
        icon: <SiYoutubeshorts size={"24px"} />,
        title: "shorts"
    },
    {
        icon: <MdSubscriptions size={"24px"} />,
        title: "subsciptions"
    },
    {
        icon: <IoHomeSharp size={"24px"} />,
        title: "Home"
    },
    {
        icon: <SiYoutubeshorts size={"24px"} />,
        title: "shorts"
    },
    {
        icon: <MdSubscriptions size={"24px"} />,
        title: "subsciptions"
    },
    {
        icon: <IoHomeSharp size={"24px"} />,
        title: "Home"
    },
    {
        icon: <SiYoutubeshorts size={"24px"} />,
        title: "shorts"
    },
    {
        icon: <MdSubscriptions size={"24px"} />,
        title: "subsciptions"
    },
    {
        icon: <IoHomeSharp size={"24px"} />,
        title: "Home"
    },
    {
        icon: <SiYoutubeshorts size={"24px"} />,
        title: "shorts"
    }]

function Sidebar() {
    const open=useSelector((store)=>store.app.open);
    console.log(open)
  return (
    //   <section className="absolute left-0 w-auto h-[calc(100vh-4.625rem)] ml-8 overflow-y-scroll overflow-x-hidden">
      <section className={`${open ? '' : 'hidden'} relative w-[200px] ml-10 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden`}>
       {
        SidebarItem.map((item)=>{
       return(
           <div key={uuidv4()} className="flex  my-3 py-3 ">
              {item.icon}
               <span className="ml-5 font-semibold">{item.title}</span>
           </div>
       )
        })
       }
    </section> 
  )
}

export default Sidebar
