import React from 'react';
import { Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from 'antd';
import Elogo from './images/e.jpeg'
import {
 SearchOutlined, DownCircleOutlined
} from '@ant-design/icons';
import Audioplayer from './components/Audioplayer';



const { Header, Footer, Sider, Content } = Layout;


const App = () => {

  const [nftAlbum, setNftAlbum] = React.useState()
  return(

    <Layout>
   
    <Layout>
      <Sider className='sideBar' width={300}>


        <img className='mainLogo' style={{marginBottom:"40px"}} src={Elogo}/>

        <div className='searchBar'>

          <span style={{fontSize:"30px", color: 'whitesmoke'}}>Search</span>
          <SearchOutlined style={{fontSize:"30px", color: 'whitesmoke'}}/>


        </div>

        <Link to="/">
          <p style={{ color: "#1DB954"}}>Home</p>

        </Link>

        <Link to="/">
              <p>Your Music</p>

        </Link>

        <div className='recentPlayed'>
            <p className='recentTitle'>
              RECENTLY PLAYED
            </p>

            <div className='install'>
                <span>Install App</span>
                <DownCircleOutlined style={{fontSize:"30px"}} />

            </div>


        </div>

        
        
      </Sider>

      
      <Content className='contentWindow'>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album" element={<Album setNftAlbum={setNftAlbum}  />} />
    </Routes>
        


      </Content>
    </Layout>

    {
      <Footer className='footer'>
      {
        nftAlbum && <Audioplayer nftAlbum={nftAlbum} />
      }
      
      </Footer>
    }
    
  </Layout>

  
  )
};

export default App;
