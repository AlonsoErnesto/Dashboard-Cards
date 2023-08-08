import Image from 'next/image';
import { Search } from '@styled-icons/bootstrap/Search';
import { User } from '@styled-icons/fa-solid/User';
import { ArrowIosDownward } from '@styled-icons/evaicons-solid/ArrowIosDownward'

import style from './style.module.css';

const ProfileTop = () => {
   return (
      <div className={style.content}>
         <div className={style.profile}>
            <Image className={style.perfil} src="/images/profile1.jpg" alt="Perfil" width={60} height={60} />
            <div className={style.infoProfile}>
               <h3 style={{fontWeight:'bold',fontSize:20}}>Usuario 12</h3>
               <p>Start you day with FB</p>
            </div>
         </div>
         <div className={style.search}>
            <span className={style.iconSearch}><Search size={30} color="#B4B1B1" /></span>
            <input className={style.inputSearch} type="text" name="search" placeholder="Buscar"/>
         </div>
         <div className={style.account}>
            <div className={style.options}>
               <User size={23} color='#ffffff'/>
               <span>My Account</span>
               <ArrowIosDownward size={20} color='#ffffff'/>
            </div>
         </div>
      </div>
   )
}

export default ProfileTop;