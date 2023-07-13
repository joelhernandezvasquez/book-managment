import { menuItems } from "@/app/constants";
import style from "./navBar.module.css"

const NavBar = () => {
  return (
    <nav className={style.nav_bar}>
       <ul>
        {menuItems.map((item)=>{
          return (
            <li key={item.id} className={style.nav_bar_item}>
             <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
              <span>{item.item}</span>
            </li>
          )
        })}
       </ul>
    </nav>
  )
}

export default NavBar