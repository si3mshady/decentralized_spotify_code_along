import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import {Tabs} from "antd"


import {library} from '../helpers/albumList'
const {TabPane} = Tabs
const Home = () => {

return(
  <>
   <Tabs centered defaultActiveKey="1" >
    <TabPane tab="FEATURED" key="1">
      <h1 className='featuredTitle'>Put God First. I mean Jesus. </h1>
      <div className='albums'>
            {library.map((e) => (
                 <Link state={e} className='albumSelection' to="/album">
                    <img style={{width:"150px", marginBottom: "10px"}} src={e.image}/>
                    <p>{e.title}</p>

                    
                 </Link>
            ))}
      </div>
 
    </TabPane>
    <TabPane tab="GENRE AND MOOD" key="2">
    <h1 className='featuredTitle'>Workout</h1>
      <div className='albums'>
            {library.reverse().slice(7,13).map((e) => (
                 <Link state={e} className='albumSelection' to="/album">
                    <img style={{width:"150px", marginBottom: "10px"}} src={e.image}/>
                    <p>{e.title}</p>

                    
                 </Link>
            ))}
      </div>


      <h1 className='featuredTitle'>Study </h1>
      <div className='albums'>
            {library.slice(3,9).map((e) => (
                 <Link state={e} className='albumSelection' to="/album">
                    <img style={{width:"150px", marginBottom: "10px"}} src={e.image}/>
                    <p>{e.title}</p>

                    
                 </Link>
            ))}
      </div>
    </TabPane>
    <TabPane tab="NEW RELEASES" key="3">
    <h1 className='featuredTitle'>New Release </h1>
      <div className='albums'>
            {library.slice(3,17).map((e) => (
                 <Link state={e} className='albumSelection' to="/album">
                    <img style={{width:"150px", marginBottom: "10px"}} src={e.image}/>
                    <p>{e.title}</p>

                    
                 </Link>
            ))}
      </div>
    </TabPane>
  </Tabs>
  </>
)
}

export default Home;
