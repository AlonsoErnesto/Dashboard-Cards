import { ThreeDotsVertical } from '@styled-icons/bootstrap/ThreeDotsVertical';
import { EyeClose } from '@styled-icons/remix-line/EyeClose';
import { Visa } from '@styled-icons/simple-icons/Visa';
import { CcMastercard } from '@styled-icons/fa-brands/CcMastercard';
import style from './style.module.css';


interface CardProp {
   children: string | JSX.Element | JSX.Element[] ;
}

const Cards:React.FC<CardProp> = ({children}) => {
   return (
      <div className={style.cards_sales}>
         <h2>Cards</h2>
         <div className={style.card_container}>
            <div className={style.card_one}>
               <div className={style.card_visa}>
                  <div className={style.dollar}>
                     <h3 style={{fontSize:40,fontWeight:300}}>$  15,789.0</h3>
                     <ThreeDotsVertical color='#ffffff' size={30}/>
                  </div>
                  <div className={style.dollar}>
                     <h3 style={{fontSize:25,fontWeight:300}}>
                        **** **** **** 1810
                        <EyeClose style={{marginLeft:10}} size={25} color="#ffffff"/>
                     </h3>
                  </div>
                  <div className={style.dollar}>
                     <h3 style={{fontSize:25,fontWeight:300}}>10/24</h3>
                     <Visa style={{marginLeft:10,zIndex:1}} size={60} color="#ffffff"/>
                  </div>
               </div>
            </div>
            <div className={style.card_two}>
               <div className={style.card_mastercard}>
                     <div className={style.dollar}>
                        <h3 style={{fontSize:40,fontWeight:300}}>¥  293,329.0</h3>
                        <ThreeDotsVertical color='#000000' size={30}/>
                     </div>
                     <div className={style.dollar}>
                        <h3 style={{fontSize:25,fontWeight:300}}>
                           **** **** **** 1241
                           <EyeClose style={{marginLeft:10}} size={25} color="#000000"/>
                        </h3>
                     </div>
                     <div className={style.dollar}>
                        <h3 style={{fontSize:25,fontWeight:300}}>10/24</h3>
                        <CcMastercard style={{marginLeft:10,zIndex:1}} size={60} color="#000000"/>
                     </div>
                  </div>
               </div>
         </div>
         {children}
      </div>
   )
}

export default Cards;