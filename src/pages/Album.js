import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import "./Album.css"
import OpenSea from '../images/opensea.png'
import {ClockCircleOutlined} from '@ant-design/icons'
import { useAlbum } from '../hooks/useAlbum';




const Album = ({setNftAlbum, nftAlbum}) => {

  

  const {state:album} = useLocation()
  const {albumDetails} = useAlbum(album.contract)
  
  
  return (
  <>


  
<div className='albumContent'>
    <div className='topBan'>
      <img
      src={album.image}
      className='albumCover'></img>

      <div className='albumDeets'>
        <div>ALBUM</div>
        <div className='title'>{album.title}</div>
        <div className='artist'>
          {albumDetails &&  JSON.parse(albumDetails[0].metadata).artist}
        </div>
        <div>
        {albumDetails &&  JSON.parse(albumDetails[0].metadata).year} * {" "}
        {albumDetails &&  albumDetails.length} songs
        </div>
      </div>
    </div>


    <div className='topBan'>
      <div className='playButton' onClick={() => {setNftAlbum(albumDetails)}}>
        Play
      </div>



      <div className='openButton'>
        OpenSea 
        <img className='openLogo' src={OpenSea}
        onClick={() => {window.open(`https://testnets.opensea.io/assets/mumbai/${album.contract}/1`)}}
        ></img>
      </div>

    
    </div>

        <div className='tableHeader'>

        <div className='numberHeader'>#</div>
        <div className='titleHeader'>TITLE</div>
        <div className='numberHeader'>
          <ClockCircleOutlined />

        </div>
        </div>

        {
          albumDetails && 
          albumDetails.map((nft,i) => {
            nft = JSON.parse(nft.metadata);
            
            return (

                <>
                <div className='tableContent'>
                <div className='numberHeader'>{i + 1}</div>
                <div className='titleHeader'>{nft.name}</div>
                <div className='numberHeader'>{nft.duration}</div>
                </div>
                </>
          )})
        }

        <Link to="/">
          <p style={{ color: "#1DB954"}}>Home</p>

        </Link>


</div>
  </>
)
}

export default Album;




// const albumDetails = [
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "4",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/3.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Head Shoulder\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/3\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.133Z"
//   },
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "6",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/5.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Pizza with a Coke\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/5\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.133Z"
//   },
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "5",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/4.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Old MC's Farm\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/4\",\"duration\":\"0:08\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.133Z"
//   },
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "3",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/2.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Unbreak My Heart\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/2\",\"duration\":\"0:12\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.133Z"
//   },
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "2",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/1.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Dogs Out\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/1\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.133Z"
//   },
//   {
//       "token_address": "0x8a68d4e28515815cd6026416f4b2a4b647796f3e",
//       "token_id": "1",
//       "amount": "1",
//       "contract_type": "ERC721",
//       "name": "Shadow",
//       "symbol": "shad",
//       "token_uri": "https://gateway.moralisipfs.com/ipfs/QmcfAiN4gVRFDB3uqQKAN1hgpFk3bDG3hVVV2bBnDZNYsD/metadata/0.json",
//       "metadata": "{\"image\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/6\",\"name\":\"Always Love You\",\"animation_url\":\"ipfs://QmX5NMV8hh1g5EcebX1e2Y55uQnVnKPk8YzW37wpnRWfXp/media/0\",\"duration\":\"0:09\",\"artist\":\"Snoop Jay\",\"year\":\"2022\"}",
//       "synced_at": "2022-03-04T09:06:55.134Z"
//   }
// ]