'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { menuItems } from "@/app/constants";
import style from "./navBar.module.css"

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className={style.nav_bar}>
       <ul>
        {menuItems.map((item)=>{
           const isActive = pathname.startsWith(item.route!)
          
           return (
            <li key={item.id} className={`${style.nav_bar_item} ${isActive? style.active_link:''}`}>
             <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
             { item?.route ? <Link href={`${item.route}`}>{item.item}</Link> 
               :<span>{item.item}</span> 
             }
            </li>
          )
        })}
       </ul>
    </nav>
  )
}

export default NavBar