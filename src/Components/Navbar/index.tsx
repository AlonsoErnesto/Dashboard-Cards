// icons 
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { Dashboard, Calendar } from '@styled-icons/boxicons-solid';
import { ContentView } from '@styled-icons/fluentui-system-filled/ContentView';
import { FileBarGraph } from '@styled-icons/bootstrap/FileBarGraph';
import { Message3 } from '@styled-icons/remix-line/Message3';
import { Notifications } from '@styled-icons/material-rounded/Notifications';
import { Settings } from '@styled-icons/evaicons-solid/Settings';
import { LogOut } from '@styled-icons/ionicons-outline/LogOut';


import style from './style.module.css';


const Navbar = () => {
   return (
      <div className={style.content_nav}>
         <FacebookCircle className={style.logo} size={219} color="#1E67C5"/>
         <div className={style.list_icons_nav}>
            <div className={style.list}>
               <div className={`${style.item} ${style.item_active}`}>
                  <Dashboard size={35} color="#ffffff"/>
               </div>
               <div className={style.item}>
                  <Calendar size={35} color="#746E6E"/>
               </div>
               <div className={style.item}>
                  <ContentView size={35} color="#746E6E"/>
               </div>
               <div className={style.item}>
                  <FileBarGraph size={35} color="#746E6E"/>
               </div>
               <div className={style.item}>
                  <span className={style.dotActive}></span>
                  <Message3 size={35} color="#746E6E"/>
               </div>
               <div className={style.item}>
                  <Notifications size={35} color="#746E6E"/>
               </div>
               <div className={style.item}>
                  <Settings size={35} color="#746E6E"/>
               </div>
            </div>
            <div className={style.logout}>
               <LogOut size={35} color="#ffffff"/>
            </div>    
         </div>
      </div>
   )
}

export default Navbar;