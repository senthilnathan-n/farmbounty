import React from 'react'
import Nav from './Nav'
import '../Components/Home.css'
import im1 from '../Images/img1.jpeg'
import Swiper from './Swiper'
import Today from './Today'
import Best from './Best'
import ban from '../Images/banner1.jpeg'

import Footer from './Footer'
import Help from './Help'
import Abt from './Abt'
export const Home = () => {
  return (
      <div className='hme'>
      <Nav/>
      
      <Swiper/>
      <Today/>
      
      <div className="ner">
             <button className="on">GARDENING<b>
              </b></button>
             <button className="on">ANIMAL HUSBANDRY<b>
              </b></button>
             <button className="on">EQUIPMENTS<b>
              </b></button>
             <button className="on">ORGANIC<b>
              </b></button>
              
            
           </div>

          <div className='ban'>
            <img src={ban} className='banimg'></img>
          </div>
           <Best/>
            {/* <h2  className='abt'>Need Help</h2>
      <hr />  */}
      <br/>
      <br/>
      <br/>


<Help/>
<br/>
<hr/>

<Abt/>
      <Footer/>
      
         
    

    </div>
  )
}
