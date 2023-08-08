import style from './style.module.css';
import { ProfileTop } from '@/Layouts';
import { ContentInfo } from '@/Components';


const Content = () => {
   return (
      <div className={style.content}>
         <div className={style.wrapper}>
            <ProfileTop/>
            <ContentInfo/>
         </div>
      </div>
   )
}

export default Content;