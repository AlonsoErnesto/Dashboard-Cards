import { Statics, Cards, ListButtons } from '@/Layouts'
import style from './style.module.css';


const ContentInfo = () => {
   return (
      <div className={style.wrapper}>
         <Cards>
            <ListButtons/>
         </Cards>
         <Statics/>
      </div>
   )
}

export default ContentInfo;